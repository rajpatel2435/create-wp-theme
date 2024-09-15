# clone-wp-theme

[![npm](https://img.shields.io/npm/dt/clone-wp-theme)](https://www.npmjs.com/package/clone-wp-theme)  
[![npm version](https://img.shields.io/npm/v/clone-wp-theme)](https://www.npmjs.com/package/clone-wp-theme)

`clone-wp-theme` is a powerful and flexible command-line tool designed for WordPress developers. With this package, you can easily create a new WordPress theme by selecting from different predefined theme templates, such as Flynt or a Vite-based Sage theme. The package will automatically clone the chosen repository, helping you get started quickly with the setup.

## Features

- **Interactive theme selection**: Choose between different theme templates during setup.
- **Automated repository cloning**: Based on your selection, the appropriate repository is cloned to your local environment.
- **Developer-friendly**: Ideal for WordPress developers looking for a fast way to start working with customized or pre-built themes.

## Installation

To install the package globally, run:

```bash
npm install -g create-wp-theme
```

Alternatively, you can use npx to run the package without installing it globally:

```bash
npx clone-wp-theme
```

Once installed, simply run:

```bash
clone-wp-theme
```


Follow the prompts to choose your desired theme:

Select which theme you want to start working with (e.g., Flynt or Vite-based Sage).
The tool will automatically clone the selected repository and set it up for you.
```bash
cd your-theme-name
```

Flynt Theme:

# wp-content/themes/flynt

```bash
composer install
npm install
npm run build
```

To start developing run the following command:


```bash
npm start
```

## Sage-Vite Theme

Make sure you have all the requirements, then clone the repository and inside of the folder run the follows commands.


First run:


```bash
  yarn

```

Then:
```bash
  composer install
  ```

Once you have all the dependencies you have to build the assets:
```bash
  yarn build
  ```

And Finally just run:
```bash
  yarn dev
```

## Available Themes
- Flynt: A modern component-based WordPress theme.
- Vite-Sage: A fast, Vite-powered version of the popular Sage theme.

## Author

Raj Patel <rajpatel2435@gmail.com>