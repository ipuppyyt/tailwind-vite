import fs from 'fs';
import ora from 'ora';
import { join } from 'path';

const src = join(process.cwd(), 'src', 'templates');
const dest = join(process.cwd(), 'dist', 'templates');

const spinner = ora('Copying templates...').start();
fs.cpSync(src, dest, { recursive: true });
spinner.succeed('Templates copied successfully!');