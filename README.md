# create-wp-theme

[![npm](https://img.shields.io/npm/dt/create-wp-theme)](https://www.npmjs.com/package/create-wp-theme)  
[![npm version](https://img.shields.io/npm/v/create-wp-theme)](https://www.npmjs.com/package/create-wp-theme)

`create-wp-theme` is a powerful and flexible command-line tool designed for WordPress developers. With this package, you can easily create a new WordPress theme by selecting from different predefined theme templates, such as Flynt or a Vite-based Sage theme. The package will automatically clone the chosen repository, helping you get started quickly with the setup.

## Features

- **Interactive theme selection**: Choose between different theme templates during setup.
- **Automated repository cloning**: Based on your selection, the appropriate repository is cloned to your local environment.
- **Developer-friendly**: Ideal for WordPress developers looking for a fast way to start working with customized or pre-built themes.

## Installation

To install the package globally, run:

```bash
npm install -g create-wp-theme


Alternatively, you can use npx to run the package without installing it globally:

```bash
npx create-wp-theme

Once installed, simply run:

```bash
create-wp-theme


Follow the prompts to choose your desired theme:

Select which theme you want to start working with (e.g., Flynt or Vite-based Sage).
The tool will automatically clone the selected repository and set it up for you.

cd your-theme-name

Flynt Theme:

# wp-content/themes/flynt
composer install
npm install
npm run build

To start developing run the following command:

# wp-content/themes/flynt
npm start

Sage-Vite Theme

Make sure you have all the requirements, then clone the repository and inside of the folder run the follows commands.

First run:

  yarn
  
Then:

  composer install
Once you have all the dependencies you have to build the assets:

  yarn build
And Finally just run:

  yarn dev

Available Themes
Flynt: A modern component-based WordPress theme.
Vite-Sage: A fast, Vite-powered version of the popular Sage theme.