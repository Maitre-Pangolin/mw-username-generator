# Username Generator

[![NPM](https://nodei.co/npm/mw-username-generator.png)](https://nodei.co/npm/mw-username-generator/)

## Introduction

A project to learn how to publish a package on npm. Should be accessible on CLI, Node and on client-size via npm installation or CDN.

Username are created from a random adjective and noun 
### Output examples
>DoubtfulPomegranate <br>
>ConcernedKiosk <br>
>SuccessfulShout <br>
>TastyWit


## Installation

    npm install mw-username-generator

## Usage - Node  

```javascript
const userNameGenerator = require('mw-username-generator');
console.log(userNameGenerator()); //Display a random username
```

## Usage - Browser

You can install and use directly from your working directory or through the following CDN :

### [UNPKG](https://unpkg.com/)

```html
<script src='https://unpkg.com/mw-username-generator'></script>
```

### [![JSDelivr](https://cdn.jsdelivr.net/www.jsdelivr.com/7751e783cdf3e90e1b95afb4e4cb52848d87d240/img/logo-horizontal.svg)](https://www.jsdelivr.com/package/npm/mw-username-generator)

```html
<script src='https://cdn.jsdelivr.net/npm/mw-username-generator/dist/namegenerator.bundle.min.js'></script>
```

Access through CDN or local link will create a  `usernameGenerator` function accesible in your script.

## Build

To have a working solution on Node and in browser I've used webpack to transpile and bundle my JS files and convert my CJS module to UMD, the following webpack config was used :

```javascript
const path = require("path");

module.exports = {
  entry: "./namegenerator.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "namegenerator.bundle.js",
    library: {
      type: "umd", 
      name: "usernameGenerator", //  export name after bundling
    },
    globalObject: "this",
  },
};
```