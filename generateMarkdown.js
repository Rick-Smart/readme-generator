// function to generate markdown for README
function generateMarkdown(answers) {
  const {
    title,
    description,
    installation,
    contributors,
    test,
    license,
    licenseUrl,
    githubUsername,
    email,
  } = answers;

  return `#title: ${title},
  Description: ${description},
  Installation: ${installation},
  Contributors: ${contributors},
  Test: ${test},
  License: ${license},
  License URL: ${licenseUrl},
  GitHub UserName: ${githubUsername},
  Email: ${email}

`;
}

module.exports = generateMarkdown;
