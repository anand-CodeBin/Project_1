# Installing Dependencies

### 1.Node
**[Download latest version of Node from here.](https://nodejs.org/en/)** You can skip this step if you akready have Node installed.

### 2.Installing required modules.
Run the following command in the terminal. <br>
`npm install` or `yarn add`


### 3.Installing Json Server

Install the module 'json-server' globally in your node modules.
`npm install json-server -g`

# Starting the App
### 1. Starting the json-server

change your working directory to jsonServer
`cd jsonServer/`

and run the following command 
`json-server --watch db.json -p 5000`
This will start the json server on port 5000 with the file db.json as database.

### 2. Starting the App.
open a new terminal and run
`npm run start` or `yarn start`

Now open your browser and go to `http://loclhost:3000`

### That's it!
