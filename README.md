# blank-check

## Purpose

Track withdrawals and deposits with or without a data/internet connection, and keep your accounts in check when travelling.

## Table of Contents

- [Preview](#Preview)
- [Installation](#Installation)
  - [Local](#Local)
  - [Chrome](#Chrome)
  - [Safari](#Safari)
- [Documentation](#Documentation)
- [Feedback](#Feedback)

---

## Preview

Here is how the application appears and functions.

<img src='images\app-preview.png' />

This application is also deployed on Heroku!

<a href='https://warm-gorge-99830.herokuapp.com/'>
<img src='https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white' />
</a>

## Installation

### Local

If you wish to install this project to your local machine, follow these steps.

_This project requires Node.js and other dependencies_

Navigate to the directory you would like to use using the CLI and then clone this repository:

```bash
git clone git@github.com:wolfskillobyte/blank-check.git
```

Find the `package.json` file and make sure you have installed the necessary packages.

```json
  "dependencies": {
    "compression": "^1.7.4",
    "express": "^4.17.2",
    "lite-server": "^2.6.1",
    "logger": "0.0.1",
    "mongoose": "^5.13.14",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "webpack-pwa-manifest": "^4.3.0"
  }
```

Start the server from the command line:

```bash
npm start
```

Use your browser to visit `localhost:3001` when the server is successfully online!

---

### Chrome

_Desktop V 97.0_

To download via Google Chrome, find the download icon located to the right side of the address bar in your browser.

<img src='images\install-app.png' />

### Safari

_iOS V 15.1_

If you have the most recent version of Safari, the address bar is now located at the bottom of the screen. First, hit the 'share' icon:

<img src='images\mobile1.jpg' />

Then find the option to 'download to home screen':

<img src='images\mobile2.jpg' />

Adding Budget Tracker to your homescreen will appear as an app icon, allowing for quick and convenient access.

## Documentation

- [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MongoDB](https://docs.mongodb.com/manual/reference/mongo-shell/)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/en/4x/api.html)

## Feedback

Have something you'd like to add?<br>
Feel free to contact me via email!<br>

<a href="mailto:sraewolfskill@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
 </a>
