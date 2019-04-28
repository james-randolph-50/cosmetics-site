# ELC Coding Test

The ELC Coding Test is a way for you to showcase your own approach to coding. It allows you to create something with your own style and preferences. You can change the code to match your own preferences however you like. PLEASE READ ALL INSTRUCTIONS BELOW BEFORE STARTING.

### The Task

This source code already implements a simple auto-search feature, similar to [this one](https://www.maccosmetics.com/) where-by, as you type, the data is checked against a Node server and the response is then loaded in with React.  Your task is to STYLE the search results. Some general tips on starting:

* The SCSS files, which contain the SASS styling, can be found in the 'app/sass' folder
* In the 'screenshots' folder are examples of what your submission should be styled to look like
* Please make sure your submission is responsive/mobile friendly
* In order to receive search results, a search must contain hair product related keywords such as "hair", "conditioner", "shampoo", "oil", etc.

In addition, as an FYI:

* The point of entry for the app can be found in the 'app/scripts/main.js' file 
* The server with the response can be found in the 'server/app.js' file 
* The data can be found in the 'server/data.js' file, which is then loaded into the Node 'server/app.js' file 
* You can alter the setup of the runtime by editing the 'gulpfile.js' file


## Getting Started

### Prerequisites

* NodeJS (v10.15.3)
* NPM (v6.9.0)

### Step 1 - Node Modules

The first thing you need to do to get this app working is to install the Node modules with the following command:

    npm install

### Step 2 - Running the App

After installing the Node modules, you must start two locally hosted servers. The first server is the Node back end server, which runs the NodeJS files found in the './server' folder, and the second is the front end server, which runs the ReactJS app files found in the './app' folder. Both servers can be started by running the following command (make sure you’re using the correct versions of Node and NPM per the prerequisites above):

    npm run servers

This command will create a front end server at http://localhost:3030 (which should automatically open in your browser), and it will start the Node back end server at http://localhost:3035, with Nodemon, so that updates happen automatically on save. 

*Special Note for Windows Users*

On Windows systems, you may get an error like the following:

  'NODE_ENV' is not recognized as an internal or external command, operable program or batch file.
  
If so, you will need to replace any occurrences of NODE_ENV with 'SET NODE_ENV' in the package.json, and separate this command from the one that follows it with a '&', like this:
  "node-server": "SET NODE_ENV=development & nodemon server/app.js"
  
## Front End App Folder

All of the front end source code can be found in the './app' folder. A description of each subfolder is as follows:

### images

Here you can (optionally)  place images that can be processed with the npm command:

    npm run image-min

This will minify the images and put them into the '.local_server/img/' folder.

### sass

Here you will find the SCSS files, we use Sass on the project to compile down to CSS. These files will be automatically compiled upon save when you are running the standard 'npm run dev-server' command. However you can compile this yourself by running this command:

    npm run sass

### third_party

Third party can be used to contain any third party libraries that you may want to use with your app. You can call a command to move all the third party items with:

    npm run third-party

### views

The views folder contains the HTML templates folder. The templates are created with the [Mustache](https://mustache.github.io/) templating language.


## Node Back End Server Folder

### app.js

The source code for the back end server can be found in the './server' folder, specifically in the app.js file. 

To start the server on its own you can run this command:

    npm run node-server

### data.js

The data in the data.js file uses the following JSON Schema:

    {
        "_id": "001", // A Number for the product
        "isActive": "false", // Is the product actively in stock
        "price": "23.00", // The price of the product in the set currency
        "picture": "/img/products/N16501_430.png", // The location of the image for the product
        "name": "Damage Reverse Thickening Conditioner", // The products name
        "about": "Description for the product...", // Description of the product
        "tags": [ "ojon", "conditioner" ] // The tags for the product
    }

## Additional Submission Guidelines

* Please DELETE the node_modules folder prior to sending your code for review
* If any additional commands are necessary to run your code, please make sure this is documented