#!/usr/bin/env node

import prompts from 'prompts';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import ora from 'ora';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handleExit = (error) => {
    error && console.error(`\n\x1b[31m❌ ${error.message}\x1b[0m`);
    console.log(`\n\x1b[33m🚪 Exiting. Goodbye! ✌️\x1b[0m`);
    process.exit(0);
};

async function main() {
    try {
        const response = await prompts([
            {
                type: 'text',
                name: 'projectName',
                message: '📝 Project name:',
                initial: 'vite-tailwind-app',
                validate: (value) => value.trim() === "" ? 'Project name is required.' : true,
                format: (value) => value.trim(),
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            },
            {
                type: 'select',
                name: 'library',
                message: '📚 Select a library or framework:',
                choices: [
                    { title: '\x1b[33mVanilla\x1b[0m 🍦', value: 'vanilla' },
                    // { title: '\x1b[36mVue\x1b[0m 🍃', value: 'vue' },
                    { title: '\x1b[34mReact\x1b[0m 💙', value: 'react' },
                    // { title: '\x1b[32mPreact\x1b[0m 🌳', value: 'preact' },
                    // { title: '\x1b[35mLit\x1b[0m 🕯️', value: 'lit' },
                    // { title: '\x1b[33mSvelte\x1b[0m 🛍️', value: 'svelte' },
                    // { title: '\x1b[32mSolid\x1b[0m 🪶', value: 'solid' },
                    // { title: '\x1b[33mQwik\x1b[0m 🚀', value: 'qwik' },
                    // { title: '\x1b[31mAngular\x1b[0m 🅰️', value: 'angular' },
                    // { title: '\x1b[33mOthers\x1b[0m 🎨', value: 'others' }
                ],
                initial: 0,
                validate: (value) => value.trim() === "" ? 'Library is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            }
        ]);

        const { projectName, library } = response;

        let variantResponse;
        if (library === 'vanilla') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'vue') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                    { title: '\x1b[33mCustomise with create-vue\x1b[0m 🎨', value: 'create-vue' },
                    { title: '\x1b[33mNuxt.js\x1b[0m 📦', value: 'nuxt' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'react') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                    { title: '\x1b[33mJavaScript + SWC\x1b[0m ⚡', value: 'js_swc' },
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[35mTypeScript + SWC\x1b[0m 🔥', value: 'ts_swc' },
                    { title: '\x1b[34mRemix\x1b[0m 🚄', value: 'remix' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'preact') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                    { title: '\x1b[33mCustomise with create-preact\x1b[0m 🎨', value: 'create-preact' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'lit') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'svelte') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                    { title: '\x1b[33mSvelteKit\x1b[0m 🚀', value: 'sveltekit' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'solid') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'qwik') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                    { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                    { title: '\x1b[33mQwikCity\x1b[0m 🏙️', value: 'qwikcity' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'angular') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[31mAngular\x1b[0m 🅰️', value: 'angular' },
                    { title: '\x1b[36mAnalog\x1b[0m 📟', value: 'analog' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else if (library === 'others') {
            variantResponse = await prompts({
                type: 'select',
                name: 'variant',
                message: '📂 Select a framework and variant:',
                choices: [
                    { title: '\x1b[33mcreate-vite-extra\x1b[0m 🎨', value: 'create-vite-extra' },
                    { title: '\x1b[34mcreate-electron-vite\x1b[0m 🎨', value: 'create-electron-vite' }
                ],
                initial: 0,
                validate: (value) => value.trim() === '' ? 'Variant is required.' : true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });
        } else {
            console.error(`\x1b[31m❌ Invalid library.\x1b[0m`);
            console.log(`\x1b[33m🚪 Exiting. Goodbye! ✌️\x1b[0m`)
            process.exit(0);
        }

        const { variant } = variantResponse;

        const styleResponse = await prompts({
            type: 'select',
            name: 'style',
            message: '🎨 Choose a stylesheet format:',
            choices: [
                { title: '\x1b[32mCSS\x1b[0m 🖌️', value: 'css' },
                { title: '\x1b[35mSCSS\x1b[0m 🎨', value: 'scss' }
            ],
            initial: 0,
            validate: (value) => value.trim() === '' ? 'Stylesheet format is required.' : true,
            onState: (state) => {
                state.aborted && handleExit(null);
            },
        });

        const { style } = styleResponse;

        const templatePath = join(__dirname, '../templates', library, variant, style);
        const projectPath = projectName === "." ? process.cwd() : resolve(process.cwd(), projectName);

        if (!fs.existsSync(projectPath)) {
            fs.mkdirSync(projectPath, { recursive: true });
        } else {
            const files = fs.readdirSync(projectPath);
            if (files.length > 0) {
                const dirprompt = await prompts({
                    type: 'select',
                    name: 'value',
                    message: `⚠️ Directory is not empty. Choose an option:`,
                    choices: [
                        { title: '\x1b[31m🗑️ Clear directory\x1b[0m', value: 'clear' },
                        { title: '\x1b[33m🚧 Ignore and continue\x1b[0m', value: 'ignore' },
                        { title: '\x1b[31m🚪 Exit\x1b[0m', value: 'exit' }
                    ],
                    initial: 0,
                    validate: (value) => value.trim() === '' ? 'Please select an option' : true,
                    onState: (state) => {
                        state.aborted && handleExit(null);
                    },
                });

                if (dirprompt.value === 'exit') {
                    return handleExit(null);
                } else if (dirprompt.value === 'clear') {
                    files.forEach((file) => {
                        fs.rmSync(join(projectPath, file), { recursive: true });
                    });
                    console.log(`\x1b[33m🗑️ Directory cleared.\x1b[0m`);
                } else if (dirprompt.value === 'ignore') {
                    console.log('\x1b[33m🚧 Ignoring existing files and continuing...\x1b[0m');
                } else {
                    console.error(`\x1b[31m❌ Invalid option.\x1b[0m`);
                    return handleExit(null);
                }
            }
        }

        if (!fs.existsSync(templatePath)) {
            console.error(`\x1b[31m❌ Template does not exist.\x1b[0m`);
            handleExit(null);
            process.exit(0);
        }

        const spinner1 = ora('Setting up your project...').start();
        fs.cpSync(templatePath, projectPath, { recursive: true });
        spinner1.succeed('Project setup complete!');

        let gitInstalled = false;
        try {
            execSync('git --version', { stdio: 'ignore' });
            gitInstalled = true;
        } catch {
            console.log('\x1b[33m⚠️ Git is not installed. Skipping Git initialization.\x1b[0m');
        }

        if (gitInstalled) {
            const gitResponse = await prompts({
                type: 'confirm',
                name: 'initializeGit',
                message: 'Would you like to initialize a Git repository?',
                initial: true,
                onState: (state) => {
                    state.aborted && handleExit(null);
                },
            });

            if (gitResponse.initializeGit) {
                let githubUsername;

                try {
                    githubUsername = execSync('git config --get user.name', { encoding: 'utf-8' }).trim();
                    if (!githubUsername) throw new Error('Username not set in Git config');
                } catch {
                    const githubUsernameResponse = await prompts({
                        type: 'text',
                        name: 'username',
                        message: 'Enter your GitHub username:',
                        validate: (value) => value.trim() === "" ? 'GitHub username is required.' : true,
                        onState: (state) => {
                            state.aborted && handleExit(null);
                        },
                    });
                    githubUsername = githubUsernameResponse.username;
                }

                const gitRepoNameResponse = await prompts({
                    type: 'text',
                    name: 'repoName',
                    message: 'Enter a name for the Git repository:',
                    initial: projectName,
                    validate: (value) => value.trim() === "" ? 'Repository name is required.' : true,
                    onState: (state) => {
                        state.aborted && handleExit(null);
                    },
                });

                const spinner2 = ora('Setting up Git repository...').start();
                try {
                    execSync('git init', { cwd: projectPath, stdio: 'ignore' });
                    execSync(`git remote add origin https://github.com/${githubUsername.toLowerCase()}/${gitRepoNameResponse.repoName}.git`, { cwd: projectPath });
                    spinner2.succeed('Git repository initialized.');
                    console.log(`\x1b[32mOrigin: https://github.com/${githubUsername}/${gitRepoNameResponse.repoName}.git\x1b[0m`);
                } catch (error) {
                    spinner2.fail(`Failed to initialize Git repository: ${error.message}`);
                }
            }
        }

        const spinner3 = ora('').start();
        spinner3.succeed('All done! To get started:');
        (projectName !== ".") && console.log(`\n  cd ${projectName}`);
        console.log(`  npm install`);
        console.log(`  npm run dev`);
    } catch (error) {
        handleExit(error);
    }
}

main();