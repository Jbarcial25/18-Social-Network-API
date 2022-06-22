# Homework 18: Social Network API: Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Rook-Social-API is a simple social network API that utilizes multiple technologies that modern full-stack applications use today. Routing for our server is handled by `Express.js`, while the `Mongoose` ODM library models our `MongoDB` data. With this social network API, we add/edit/delete Users on our network, interact with other user thoughts with reactions, or even add and delete friends from our friend list.

## Installation

In order to install this application:

First, open this application along with your terminal and run `npm init` to initialize a new npm package

Proceed with `npm i` to install our dependencies. <br>
More specifically:

    npm i express mongoose nodemon dotenv

## Usage

![Social-Network-API](https://github.com/Jbarcial25/18-Social-Network-API/blob/main/demo/Screen%20Shot%202022-06-22%20at%201.40.51%20AM.png?raw=true)

[View the Demo Video Here!](https://www.youtube.com/watch?v=MBgnVU3GMKw)

Once we have our dependencies successfully installed, we can now start the server.

Running any of the following commands will have our server listening to port:

    npm start / npx nodemon / node server.js

### Contributions

If you would like to make a contribution, you may follow my Rook-Social-API repository at:

:file_folder:: [/Social-Network-API](https://github.com/Jbarcial25/18-Social-Network-API)

### Tests

Tests will be provided at a later date

### Questions

If you have any questions feel free to contact me at:

If you have any questions, please feel free to contact me at:

[github.com/jbarcial25](https://github.com/Jbarcial25)

[jbarcial25@gmail.com](mailto:jbarcial25@gmail.com)

### User Story

    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## License

MIT License

Copyright (c) 2022 Jasper Barcial

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.