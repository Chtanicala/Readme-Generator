let inquirer = require('inquirer');
let fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "User Name",
    },
  ])
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });