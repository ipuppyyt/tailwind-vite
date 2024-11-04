import './style.scss';
import typescriptLogo from '/typescript.svg';
import sassLogo from '/sass.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans">
    <div class="max-w-5xl mx-auto p-4 text-center">
      <div class="flex items-center justify-center gap-x-10">
        <a href="https://vite.dev" target="_blank" class="hover:filter hover:drop-shadow-lg transition-all duration-300">
          <img src="${viteLogo}" class="h-24 mx-auto" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" class="hover:filter hover:drop-shadow-lg transition-all duration-300">
          <img src="${typescriptLogo}" class="h-24 mx-auto" alt="TypeScript logo" />
        </a>
        <a href="https://sass-lang.com/" target="_blank" class="hover:filter hover:drop-shadow-lg transition-all duration-300">
          <img src="${sassLogo}" class="h-24 mx-auto" alt="Sass logo" />
        </a>
      </div>
      <h1 class="text-5xl font-bold mt-8">Vite + TypeScript + SASS + Tailwind CSS</h1>
      <div class="card p-8 rounded-lg shadow-lg mt-6 flex flex-col items-center justify-center">
        <button id="counter" type="button" class="bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-transparent focus:border-indigo-500">
          Increment Counter
        </button>
        <p className="mt-4 text-gray-400">
            Edit
            <code className="bg-gray-800 px-1 py-0.5 rounded">src/main.ts</code>
            and save to test HMR
          </p>
      </div>
      <p class="text-gray-400 mt-4">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
