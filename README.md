Install Node.js from below URL.
https://nodejs.org/en/download/

Open the commnad prompt in root directory.

Run the "npm install" command to install the dependencies.

In cypress.env.json file located in the root directory of the project specify application email and password

Run the "npm run cypress:run:headed" command to run the tests.

Once execution is completed then run the "npm run cypress:report" command to generate the reports.

Once execution is completed then in the "cypress/reports" directory index.html report file will be generated. To view it open it in any browser.

