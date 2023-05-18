// created an array that holds the possible licenses for the user to choose from
const licenses = ["MIT", "Apache", "GPL", "BSD", "None"];
// switch statement that takes the user's license choice and returns the appropriate badge
function renderLicenseBadge(license) {
  switch (license){
    case licenses[0]:
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    case licenses[1]:
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    case licenses[2]:
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    case licenses[3]:
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
    case licenses[4]:
      return ``
  }
}
// switch statement that takes the user's license choice and returns the appropriate link
function renderLicenseLink(license) {
  switch (license){
    case licenses[0]:
      return `https://opensource.org/licenses/MIT`
    case licenses[1]:
      return `https://opensource.org/licenses/Apache-2.0`
    case licenses[2]:
      return `https://www.gnu.org/licenses/gpl-3.0` 
    case licenses[3]:
      return `https://opensource.org/licenses/BSD-3-Clause`
    case licenses[4]:
      return ``
  }
}
// switch statement that takes the user's license choice and returns the appropriate section
function renderLicenseSection(license) {
  switch (license){
    case licenses[0]:
      return `MIT License`
    case licenses[1]:
      return `Apache License 2.0`
    case licenses[2]:
      return `GPL v3`
    case licenses[3]:
      return `BSD 3-Clause`
    case licenses[4]:
      return ``
  }
}
// function that takes the user's input and returns the readme file
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contributers}

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please contact me at ${data.email} or visit my GitHub page at https://github.com/${data.github}`;
}

module.exports = generateMarkdown;