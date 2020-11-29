const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    message: "What is your project title?",
    name: "title",
  },
  {
    message: "Provide a description of your project.",
    name: "description",
  },
  {
    message: "what is required to install your project?",
    name: "installation",
  },
  {
    message: "Enter the GitHub contributors usernames if any.",
    name: "contributors",
  },
  {
    message: "Provide examples on how to test your projct.",
    name: "test",
  },
  {
    message: "What license are you using?",
    name: "license",
  },
  {
    message: "What is the license URL?",
    name: "licenseUrl",
  },
  {
    message: "What is your GitHub username?",
    name: "githubUsername",
  },
  {
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {
    console.log("written to file");
  });
}

// function to initialize program
function init(questions) {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const readMe = generateMarkdown(answers);
    console.log(readMe);
    writeToFile("README.md", readMe);
  });
}

// function call to initialize program
init(questions);
