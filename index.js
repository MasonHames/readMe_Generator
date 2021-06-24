// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `Enter the title of your project.`,
       
    },
    {
        type: `input`,
        name: `description`,
        message: `Provide a description for the project:`,
        
    },
    {
        type: `input`,
        name: `license`,
        message: `If applicable, choose a license from the following numbered list:
        \n (1) Apache-2.0 \n (2) BSD-3-Clause \n (3) BSD-2-Clause \n (4) GNU-GPL-v3 \n (5) GNU-LGPL-v3 \n (6) MIT \n (7) MPL-2.0 \n (8) EPL-1.0 \n`,
       
    },
    {
        type: `input`,
        name: `install`,
        message: `Explain how user would install (if necessary) for Installation Section.`,
        
    },
    {
        type: `input`,
        name: `usage`,
        message: `Enter your project instructions and examples of it in use for Usage Section.`,
        
    },
    {
        type: `input`,
        name: `contribute`,
        message: `Explain how users can contribute to your project (if necessary).`,
        
    },
    
    {
        type: `input`,
        name: `test`,
        message: `Provide tests for project, and explain how to test (if necessary).`,
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
        .then((response) => {
            let markdown = generateMarkdown(response);
            //console.log(markdown);
            writeToFile(`./README.md`, markdown);
        });
}

// Function call to initialize app
init();