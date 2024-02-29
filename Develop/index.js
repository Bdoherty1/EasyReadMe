// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information:',
    name: 'usage',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter test instructions:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
    
            writeToFile('README.md', markdownContent);
            console.log('README.md created successfully!');
        })
        .catch((error) => console.error(error));
    }

init();