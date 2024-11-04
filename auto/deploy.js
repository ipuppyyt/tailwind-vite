const { exec } = require('child_process');
const prompts = require('prompts');
const semver = require('semver');
const axios = require('axios');
const fs = require('fs');

function getPackageName() {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return packageJson.name;
}

async function getNpmVersion(packageName) {
    try {
        const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
        return response.data['dist-tags'].latest;
    } catch (error) {
        console.error(`Error fetching version from npm: ${error.message}`);
        process.exit(1);
    }
}

function getLocalVersion() {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return packageJson.version;
}

async function bumpVersion(currentVersion) {
    const response = await prompts({
        type: 'select',
        name: 'bump',
        message: 'Select the version bump type:',
        choices: [
            { title: 'Patch (x.y.z => x.y.Z+1)', value: 'patch' },
            { title: 'Minor (x.y.z => x.Y+1.0)', value: 'minor' },
            { title: 'Major (x.y.z => X+1.0.0)', value: 'major' }
        ]
    });

    const newVersion = semver[response.bump](currentVersion);
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    packageJson.version = newVersion;

    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
    console.log(`Version bumped to ${newVersion}`);
    return newVersion;
}

function deployToGitHub() {
    exec('git add .', (error) => {
        if (error) {
            console.error(`Error adding files to git: ${error.message}`);
            return;
        }

        const response = prompts({
            type: 'text',
            name: 'commit',
            message: 'Enter the commit message:'
        });

        exec(`git commit -m "${response.commit}"`, (error) => {
            if (error) {
                console.error(`Error committing files: ${error.message}`);
                return;
            }

            exec('git push origin main', (error) => {
                if (error) {
                    console.error(`Error pushing to GitHub: ${error.message}`);
                    return;
                }

                console.log('Successfully deployed to GitHub!');
            });
        });
    });
}

async function main() {
    const packageName = getPackageName();
    const localVersion = getLocalVersion();
    const npmVersion = await getNpmVersion(packageName);

    console.log(`Local version: ${localVersion}`);
    console.log(`NPM version: ${npmVersion}`);

    if (semver.gt(localVersion, npmVersion)) {
        console.log('Passes. Pushing to GitHub...');
        deployToGitHub();
    } else {
        console.error(`Error: Local version (${localVersion}) is older than (${npmVersion}).`);
        const newVersion = await bumpVersion(localVersion);
        console.log(`Updated local version to ${newVersion}`);
        deployToGitHub();
    }
}

main();
