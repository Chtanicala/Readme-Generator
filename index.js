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
    let output = 
    `# ${answers["Project Title"]}

    ## Table of Contents
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [License](#License)
    - [Questions](#Questions)
    
    ## Description
    - ${answers["Project Description"]}
    
    ## Installation
    - ${answers["Project Input"]}
    ## Usage
    - ${answers["Project Usage"]}
    ## Contributing
    - ${answers["Project Contributor(s)"]}
    ## Tests
    - ${answers["Project Test(s)"]}
    
    ## License
    - LICENSEINPUT
    
    ## Questions
    - ${answers["GitHub Username"]}
    - ${answers["Contact Email"]}`
    fs.writeFile("./SampleREADME.md", output, ()=>{});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });