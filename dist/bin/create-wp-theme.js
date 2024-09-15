#!/usr/bin/env node

const inquirer = require('inquirer');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Add a simple log to check if the script runs
console.log('Running the create-wp-theme script...');

const questions = [
  {
    type: 'list',
    name: 'theme',
    message: 'Which WordPress theme do you want to install?',
    choices: ['Flynt', 'Vite-Sage']
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter the name of your project:',
    default: 'my-wp-theme'
  }
];

// Theme repository URLs
const repos = {
  Flynt: 'https://github.com/flyntwp/flynt',
  'Vite-Sage': 'https://github.com/rajpatel2435/sage-vite'
};

function createWpTheme() {
  inquirer.prompt(questions).then(answers => {
    const { theme, projectName } = answers;
    const repoUrl = repos[theme];

    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.log(`Error: Directory ${projectName} already exists!`);
      process.exit(1);
    }

    console.log(`\nCreating project in ${projectPath}`);
    fs.mkdirSync(projectPath);

    // Clone the selected repository
    console.log(`\nCloning the ${theme} theme from ${repoUrl}...`);
    execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });

    console.log(`\n${theme} theme installed successfully!`);

    console.log(`\n cd -> ${projectName}`);
    
  });
}

// Execute the function
createWpTheme();
