// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  #This was a work done by ${data.username}

  #The project consists on the following: ${data.description}

  #The license used for the project is: ${data.license} 

  #In order to install the dependencies the user should run the following: ${data.depend}

  #If the user want to run tests it shoul run the following: ${data.test}

  #The user should know the following about the repo: ${data.repo}

  #For any questions please contact the following email: ${data.email} or visit the following GitHub page: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
