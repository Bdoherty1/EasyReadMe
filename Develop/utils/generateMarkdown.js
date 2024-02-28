// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](LICENSE)`;
    }
    return '';
  }
  
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license) {
      return `[License](#license)`;
    }
    return '';
  }
  
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `## License
  
  This application is covered under the ${license} license.
  
  For more details, please see [LICENSE](LICENSE).`;
    }
    return '`# ${data.title}';
  }
  
  // generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    ${renderLicenseLink(data.license)}
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ${renderLicenseSection(data.license)}
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    - GitHub: [${data.username}](https://github.com/${data.username})
    - Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;