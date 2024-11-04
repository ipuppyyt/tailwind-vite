# Create Vite Tailwind CSS

![Create Vite Tailwind CSS](https://img.shields.io/npm/v/vite-tailwindcss?color=green&label=version)
![npm](https://img.shields.io/npm/l/vite-tailwindcss)

Create Vite Tailwind CSS is a command-line interface (CLI) tool that simplifies the process of bootstrapping a new project using [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/). This tool supports JavaScript, TypeScript, and various stylesheets (CSS and SCSS) for modern web development.

## Features

- Quick and easy setup for Vite and Tailwind CSS projects.
- Supports multiple libraries as in Vite
- Choose between JavaScript, TypeScript, and SWC variants for optimized builds.
- Flexible stylesheet options: CSS or SCSS.
- Prompts for user-friendly interaction during project setup.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine (version 14 or higher).

### Usage

You can use it directly with `npx`:

```bash
npx vite-tailwindcss
```

You'll be prompted to enter details such as:

- **Project name**: Your desired project name.
- **Library**: Choose from React, Vue, Svelte, etc..
- **Variant**: Depending on the library chosen, select your preferred one.
- **Stylesheet format**: Choose between CSS or SCSS.

### Example Workflow

- Run the command to create your project:
    ```bash
    npx vite-tailwindcss
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

## Project Structure
Your new project will be structured as follows:

```arduino
your-project-name/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── ... (other files)
```

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! If you have suggestions for improvements or feature requests, feel free to open an issue or submit a pull request.

## Acknowledgements
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)