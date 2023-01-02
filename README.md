# API Testing

Centralized repository for API automated testing

Technology stack: Jest, Axios, Faker, AJV validator, Temp Email API

Template with examples taken from pet store API `https://petstore.swagger.io/`

# Gettin started

These instructions will get you a copy of the project up and running on your local machine for development of each test cases and testing purposes.

## Prerequisites

1. Install Homebrew: `https://brew.sh/`
2. NVM Website `https://github.com/nvm-sh/nvm`
3. Run the following commands: `nvm install` and `nvm use`

## Setting up

1. Install Node Packages: `npm i` or `yarn`
2. Add to the root of the project a file named .env and define the following in it

```
BASE_URL='The base URL of the API to test'
DB_HOST='The host of the QA DB'
DB_USER='The user enabled for the QA DB'
DB_PASSWORD='The password of the QA BD user'
DB_DATABASE_NAME='Name of the data base to access'
```

# Folder Structure

- `/src/constants`: Include all the relative paths to the Endpoints to be tested, also if there are any data that relates to states it should be managed as enums.

- `/src/database`: All the connection to database, queries and transactions functions.

  - The index file contains the general transaction function which created the connection to the DB and executes any query to return the result rows

- `/src/mocks`: Includes the setting of the data to send to the endpoints if they need a body. One file per body.

- `/src/schemas`: Includes the JSON schemas to test the matching to the expected response on each End Point. One file per schema.

- `/src/services`: Manages the requests to the endpoints using axios and the tester provided data

- `/src/tests`: Includes the tests of all the scenarios for all features using jest. They are organized in separated files according to the feature to test.

- `/src/types`: Includes all interfaces needed for the mocks, temp email and any other needed interface or type

- `/src/utils`: Includes any function that may aid the testing, such as, axios calls, data generators, the schema validator functions, and temp email calls.

# Nice to have

- Install the prettier VS Code extension
- Install the es lint VS Code extension

# To run the example within this repository

1. Add the following to the `.env` file
   | Environment variable | Description |
   | -------------------- | ----------------------------------------------------------- |
   | BASE_URL | 'https://petstore.swagger.io/v2'|

# To run the tests

To run all the tests

```
npm test
```

To run an specific test file

```
npm test [test file name]
```
