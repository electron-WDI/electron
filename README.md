# Electron
![electron](https://electron.atom.io/images/opengraph.png)

Electron is an open-sourced framework for creating native applications with popular web technologies like HTML, CSS, and Javascript.  This platform aids web developers and designers to quickly transition into the desktop environment, avoiding all the complications faced in creating a web application.

Building cross-platform desktop applications comes with a unique set of challenges that can stand in your way when you are trying to transform your ideas into software. Web apps avoid some of these hurdles, but they have limitations that make them impractical for building native desktop applications. Electron lets you harness the best parts of these technologies to build beautiful, cross-platform desktop applications using the most common technologies. 

Furthermore, Electron also known as "Atom Shell" offers cross-platform functionality by providing rich Javascript APIs that handle the particulars of talking to different operating systems, it also uses webpages for creating user interfaces. Moreover, with the use of Chromimum Browser and Node.js it makes it convenient for developers to run their apps natively on Javascript, HTML and CSS on all kinds of platforms. 

## How it Works

Electron takes a *main* file defined in your *package.json* file and executes it. This main file (usually named *main.js*) then creates application windows which contain rendered web pages with the added power of interacting with the native GUI of your operating system. In detail, once you start up an application using Electron, a *main process* is created. This *main process* is responsible for interacting with the native GUI of your operating system and creates the GUI of your application. 

In short, Electron states:

A basic Electron application needs just these files:

	- `package.json` - Points to the app's main file and lists its details and dependencies.
	- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
	- `index.html` - A web page to render. This is the app's **renderer process**.

	You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## Instructions

-Open your termainl and clone the repository:

	* git clone https://github.com/bojzi/sound-machine-electron-guide.git

-Direct yourself into the repository

	* cd electron-quick-start

-Install all the required packages

	* npm install

-Lastly run the application

	* npm start

Electron makes it simple and convenient for anyone to use. 

## Applications Built on Electron 
![apps built on electron](http://www.clariontech.com/sites/default/files/inline-images/Electron%20blog%20inner%20image_0.png)
With Electron's powerful runtime, it has since been used to create numerous applications by companies like Microsoft, Facebook, Stack and Docker. Partake in this growing community and let your app shine!
