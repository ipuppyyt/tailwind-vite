# Tailwind Vite

![JavaScript](https://img.shields.io/badge/JavaScript-007ACC?style=flat&logo=javascript&logoColor=white&color=yellow)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white&color=blue)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=React&logoColor=%2361DAFB)
![Remix](https://img.shields.io/badge/Remix-%23000.svg?style=flat&logo=remix&logoColor=white)
![Vue.js](https://img.shields.io/badge/VueJS-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D)
![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=flat&logo=nuxtdotjs&logoColor=#00DC82)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&&logo=tailwind-css&logoColor=white)
![Node.js Version](https://img.shields.io/badge/Node.js-v18.0.0-339933?style=flat&logo=node.js&logoColor=white&color=blue)
![NPM Version](https://img.shields.io/npm/v/create-tailwind-vite?style=flat&logo=npm&logoColor=white&color=blue)
![License](https://img.shields.io/npm/l/create-tailwind-vite?color=blue)
![NPM Downloads](https://img.shields.io/npm/dm/create-tailwind-vite.svg?style=flat&color=blue)

An enhanced Vite CLI for quickly setting up frontend projects with popular frameworks like React, Vue, and Svelte. This tool lets you configure JavaScript or TypeScript, CSS, SCSS, and Tailwind options, with everything preconfigured for immediate use. Seamlessly integrate with Git by initializing a repository and connecting to GitHub directly during setup. Ideal for developers seeking a fast, interactive way to scaffold fully optimized projects with Vite’s powerful build system.

## Features

- Quick and easy setup for Vite and Tailwind CSS projects.
- Supports multiple libraries as in Vite
- Choose between JavaScript, TypeScript, and SWC variants for optimized builds.
- Flexible stylesheet options: CSS or SCSS.
- Prompts for user-friendly interaction during project setup.

## Recipe

```arduino
TAILWIND-VITE/
├── VANILLA
│   ├── JS
│   └── TS
├── VUE
│   ├── JS
│   ├── TS
│   └── NUXT
├── REACT/
│   ├── JS
│   ├── JS + SWC
│   ├── TS
│   ├── TS + SWC
│   └── Remix
└── ... (coming soon)
```

As of now only React and Vanilla are supported and more recipes will appear overtime.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine (version 18 or higher).

### Usage

You can use it directly with `npx`:

```bash
npx tailwind-vite
```

or

```bash
npm create tailwind-vite
```

You'll be prompted to enter details such as:

- **Project name**: Your desired project name.
- **Library**: Choose from React, Vue, Svelte, etc..
- **Variant**: Depending on the library chosen, select your preferred one.
- **Stylesheet format**: Choose between CSS or SCSS.

### Example Workflow

- Run the command to create your project:
  ```bash
  npx tailwind-vite
  ```
  or
  ```bash
  npm create tailwind-vite
  ```
- Follow the prompts to set up your project.

- Navigate into your project directory:
    ```bash
    cd your-project-name
    ```

- Install dependencies:
    ```bash
    npm install
    ```

- Start your development server:
    ```bash
    npm run dev
    ```

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! If you have suggestions for improvements or feature requests, feel free to open an issue or submit a pull request.

## Acknowledgements
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)