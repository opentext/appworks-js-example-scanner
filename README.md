# AppWorks Example - Auth

## Contents
1. [About appworks.js](#about-appworksjs)
2. [About this example app](#about-this-example)
3. [Usage](#usage)
4. [Installation](#installation)

## About appworks.js

appworks.js is a javascript (TypeScript) library for building feature rich, hybrid enterprise apps. The OpenText AppWorks platform provides mobile and desktop clients that support apps that utilize appworks.js.

In a mobile environment the library provides access to on-device technology, and in the desktop environment some features of the underlying host OS (operating system) are exposed.

For more information, see the appworks.js repository: https://github.com/opentext/appworks-js

## About this example

The purpose of the AWScanner plugin is to capture documents via the mobile device camera. This can be as a single page or multi page PDF document.

## Usage

#### scanDocument

```javascript
scanDocument(returnType: Number, successHandler: Function, errorHandler: Function)
```

This will open the document project and the camera for the initial document capture. Once a document is captured, it will automatically crop, transform and greyscaled. You may then rotate the image and set to A4 or A5 page size.

Subsequent documents can be captured.

Examples
```javascript

var action = 2;

// Create an instance of the Appworks.AWScanner class
var scanner = new Appworks.AWScanner();

// Invoke the scanDocument method to start scanning
scanner.scanDocument(
  action, // Set the return type: 0 = filepath, 1 = base64, 2 = doc provider (will return a filepath as well)
  function(successMessage) {
    // Called when the scan completes and returns successfully
    // Success message will be a string
    console.log(successMessage);
  }, function(errorMessage) {
    // Called when the scan fails or a cancelled
    // error message will be string
    console.log(errorMessage);
  }
);
```

## Installation

This example app contains 3 import objects:
1. app.properties
2. icon.png
3. mobile.zip

#### app.properties
This files defines the app, with the following properties:
+ __displayName__: The display name of the app
+ __description__: A description of the app
+ __version__: The version of the app, e.g. 0.0.1 or 3.4.5 etc
+ __type__: This can be either app or desktop, or both (app,desktop)
+ __awgPlatformVersion__: The target appworks platform, this should be 16
+ __isAvailableOffline__: Allow this app to be used offline, can be true or false

#### icon.png
An icon that represents the app. This will appear in the gateway and on the device. 48x48px is ideal.

#### mobile.zip

This is your web content, such as html, js, css, images and any other assets.
The only essential file in your mobile.zip is index.html, which will be loaded by the appworks webview. Any other files or structure is up to the developer.

##### index.html

When your app is downloaded and installed in an appworks client, the client will place appworks.js, cordova.js and the cordova plugins in the root of your app.

In your html file, please include the following tags before any other javascript tags:

```html
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="appworks.js"></script>
```

#### Zipping and Deploying
1. Zip up the web content into a file named mobile.zip
2. Zip up the following files:
  + app.properties
  + icon.png
  + mobile.zip
3. Name this file in the format:
  + AppName_Version.zip
  + e.g. MyGreatApp_0.0.1.zip
  + __The version number in the filename must match the version number in app.properties__
4. Install the app on the gateway
  + Go to your gateway in a browser
  + sign in
  + go to app installation tab
  + drag and drop MyGreatApp_0.0.1.zip into the box.
  + Once fully deployed, enable the app.
