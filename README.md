# Electron
![electron](https://electron.atom.io/images/opengraph.png)

Electron is an open-sourced framework for creating native applications with popular web technologies like HTML, CSS, and Javascript.  This platform aids web developers and designers to quickly transition into the desktop environment, avoiding all the complications faced in creating a web application.

Building cross-platform desktop applications comes with a unique set of challenges that can stand in your way when you are trying to transform your ideas into software. Web apps avoid some of these hurdles, but they have limitations that make them impractical for building native desktop applications. Electron lets you harness the best parts of these technologies to build beautiful, cross-platform desktop applications using the most common technologies. 

Furthermore, Electron also known as "Atom Shell" offers cross-platform functionality by providing rich Javascript APIs that handle the particulars of talking to different operating systems, it also uses webpages for creating user interfaces. With the use of Chromimum Browser and Node.js, it makes it convenient for developers to run their apps natively on Javascript, HTML and CSS on all kinds of platforms. 

## How it Works

Electron takes a *main* file defined in your *package.json* file and executes it. This main file (usually named *main.js*) then creates application windows which contain rendered web pages with the added power of interacting with the native GUI of your operating system. In detail, once you start up an application using Electron, a *main process* is created. This *main process* is responsible for interacting with the native GUI of your operating system and creates the GUI of your application. 

In short, Electron states:

A basic Electron application needs just these files:

	- `package.json` - Points to the app's main file and lists its details and dependencies.
	- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
	- `index.html` - A web page to render. This is the app's **renderer process**.

	You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## Instructions

-Open your terminal and clone the repository:

	* git clone https://github.com/bojzi/sound-machine-electron-guide.git

-Direct yourself into the appropriate repository

	* cd electron-quick-start

-Install all the required packages

	* npm install

-Lastly run the application

	* npm start

Electron makes it simple and convenient for anyone to use. 

## Applications Built on Electron 
![apps built on electron](http://www.clariontech.com/sites/default/files/inline-images/Electron%20blog%20inner%20image_0.png)
With Electron's powerful runtime, it has since been used to create numerous applications by companies like Microsoft, Facebook, Stack and Docker. Partake in this growing community and let your app shine!

# Noted.
Your life is busy and your head can feel jumbled with so many things to do. Well now, we've got you covered! Don't miss a step with Noted. A quick and easy to use note taking application. Compatible for mobile and web on all browsers, this convenient app allows you to take notes with the tip of your fingertips. Always be ahead of the game; note it, save it and delete it. 

## Technologies Used
The technologies used for this application include:

Frontend- React & CSS

Backend- Node.js, Express

Packages- Electron, body-parser, cors and pg-promise

The backend holds all the data needed to save, delete and create new notes. React allowed for a more tuned front-end user experience, while css aided in all of the styling. 

## App Deployment
```
{
  "name"    : "react-app-electron",
  "version" : "0.1.0",
  "main"    : "main.js"
}
```
-- an example of the *package.json* file.
We made sure that the main field directed to the appropriate directory, if not, Electron would have attempted to load an index.js file.


The *main.js* should create windows and handle system events, a typical example would look something like this:
```javascript
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
```
--Within this file we altered only a small snippet of the code, the createWindow function to work with our react app.


```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```
--Finally an example of an *index.html* directory of the web page that will be shown.


## Dependencies
[electron gif](http://img55.laughinggif.com/pic/HTTP2Jlc3RhbmltYXRpb25zLmNvbS9TY2llbmNlL0NoZW1pc3RyeS9hdG9tLWVsZWN0cm9uLXByb3Rvbi1vcmJpdC1zdHJ1Y3R1cmUtYW5pbWF0ZWQtZ2lmLTMuZ2lm.gif)
Electron is a unique platform that many developers should take advantage of. This framework is unique in itself by allowing developers to use familiarized languages to solely focus and create their web applications. Although Electron is unique in itself it does run on Javascript, HTML & CSS and is similarly activated like React. 