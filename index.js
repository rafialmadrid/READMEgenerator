const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {

    inquirer 
  .prompt([
    
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your projects name?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'Please add a short description',
      name: 'description',
    },
    {
      type: 'list',
      message: 'Choose the license for your project: ',
      name: 'license',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'depend',
      default: 'npm i'
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'test',
      default: 'npm test'
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repo',
    },  
])
  .then((response) => {

    fs.writeFile(`README.md`, generateMarkdown(response), (err) => err ? console.log(err) : console.log("File saved succesfully") );

});


}

init();
