let inquirer = require('inquirer');
let fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        message: "Enter a title for this project.",
        name: "Project Title",
    },

    {
        type: "input",
        message: "Enter a brief description for this project.",
        name: "Project Description",
    },

    {
        type: "input",
        message: "Enter a installation instructions for this project.",
        name: "Project Installation",
    },

    {
        type: "input",
        message: "Enter a usage information for this project.",
        name: "Project Usage",
    },

    {
        type: "input",
        message: "Enter contributor(s) for this project.",
        name: "Project Contributor(s)",
    },

    {
        type: "input",
        message: "Enter test(s) for this project.",
        name: "Project Test(s)",
    },

    {
        type: "checkbox",
        message: "Select license(s) for this project.",
        name: "Project License(s)",
        choices: ["MIT", "Harvard"]
    },

    {
        type: "input",
        message: "Enter contact email for this project.",
        name: "Contact Email",
    },

    {
        type: "input",
        message: "Enter GitHub username for this project.",
        name: "GitHub Username",
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