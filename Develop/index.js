// import inquirer, fs modules and generateMarkdown.js 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// function that prompts the user for input and returns the answers object
function readMePrompts() {
    return inquirer.prompt([
        {
            name: 'title',
            message: 'What is your projects name?',
            type: 'input'
        },
        {   name: 'license',
            message: 'What type of license does this project use?',
            type: 'list',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },
        {
            name: 'description',
            message: 'What is your project about?',
            type: 'input'
        },
        {
            name: 'installation',
            message: 'How do you install your project?',
            type: 'input'
        },
        {
            name: 'usage',
            message: 'How do you use your project?',
            type: 'input'
        },
        {
            name: 'contributers',
            message: 'Who contributed to this project?',
            type: 'input'
        },
        {
            name: 'tests',
            message: 'How do you test your project?',
            type: 'input'
        },
        {
            name: 'github',
            message: 'What is your github username?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'What is your email address?',
            type: 'input'
        },
        {
            name: 'fileName',
            message: 'What do you wish to name your readme?',
            type: 'input'
        },
])};
// function that takes the user's input and writes the readme file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.error(err) : console.log(`${fileName}.md created!`));
}

// function that initializes the program
async function init() {
    let answers = await readMePrompts();
    writeToFile(answers.fileName, generateMarkdown(answers));
}

// function call to initialize program
init();