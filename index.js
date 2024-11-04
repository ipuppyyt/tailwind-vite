#!/usr/bin/env node

const prompts = require('prompts');
const fs = require('fs');
const path = require('path');

async function main() {
    const response = await prompts([
        {
            type: 'text',
            name: 'projectName',
            message: '📝 Project name:',
            initial: 'my-vite-tailwind-app'
        },
        {
            type: 'select',
            name: 'library',
            message: '📚 Select a library or framework:',
            choices: [
                { title: '\x1b[34mReact\x1b[0m 💙', value: 'react' },
                // { title: '\x1b[31mVue\x1b[0m 💚', value: 'vue' }
                // Add more libraries if needed
            ]
        }
    ]);

    const { projectName, library } = response;

    let variantResponse;
    if (library === 'react') {
        variantResponse = await prompts({
            type: 'select',
            name: 'variant',
            message: '📂 Select a framework and variant:',
            choices: [
                { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                // { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                // { title: '\x1b[33mJavaScript + SWC\x1b[0m ⚡', value: 'js_swc' },
                // { title: '\x1b[35mTypeScript + SWC\x1b[0m 🔥', value: 'ts_swc' }
            ]
        });
    } else if (library === 'vue') {
        variantResponse = await prompts({
            type: 'select',
            name: 'variant',
            message: '📂 Select a framework and variant for Vue:',
            choices: [
                { title: '\x1b[32mJavaScript\x1b[0m ✨', value: 'js' },
                { title: '\x1b[36mTypeScript\x1b[0m 📘', value: 'ts' },
                // Add any other Vue specific variants here
            ]
        });
    }

    const { variant } = variantResponse;

    const styleResponse = await prompts({
        type: 'select',
        name: 'style',
        message: '🎨 Choose a stylesheet format:',
        choices: [
            { title: '\x1b[32mCSS\x1b[0m 🖌️', value: 'css' },
            { title: '\x1b[35mSCSS\x1b[0m 🎨', value: 'scss' }
        ]
    });

    const { style } = styleResponse;

    const templatePath = path.join(__dirname, 'templates', library, variant, style);
    const projectPath = projectName === "." ? process.cwd() : path.resolve(process.cwd(), projectName);

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
                initial: 0
            });

            if (dirprompt.value === 'exit') {
                process.exit(0);
            } else if (dirprompt.value === 'clear') {
                files.forEach((file) => {
                    fs.rmSync(path.join(projectPath, file), { recursive: true });
                });
                console.log(`\x1b[33m🗑️ Directory cleared.\x1b[0m`);
            } else {
                console.log('\x1b[33m🚧 Ignoring existing files and continuing...\x1b[0m');
            }
        }
    }

    if (!fs.existsSync(templatePath)) {
        console.error(`\x1b[31m❌ Template does not exist.\x1b[0m`);
        process.exit(1);
    }

    fs.cpSync(templatePath, projectPath, { recursive: true });

    console.log(`\n\x1b[32m🚀 Setting up your project...\x1b[0m`);
    console.log(`\n\x1b[32m✔️ ${projectName} is ready! To get started:\x1b[0m`);
    if (projectName !== ".") {
        console.log(`\n  cd ${projectName}`);
    }
    console.log(`  npm install`);
    console.log(`  npm run dev`);
}

main().catch((e) => {
    console.error(`\x1b[31m❌ ${e}\x1b[0m`);
    process.exit(1);
});
