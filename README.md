# README
# Website-Portal-for-phd-admission

## Features 
* Login/Signup for both admins and applicants.
* It offers an applicant to register into the portal, update his profile and apply into different offerings at IIT Ropar and provide a very smooth and user friendly experience in the application procedure.
* It offers an admin can be the academic section, any faculty or any staff member to add admins, create an admission cycle, view and analysis of different applications in an offering and send mails to applicants about their selection status.

## User guide 

### How to use WebApp 
* Please find the link of hosted website [phd-admission-portal](http://172.30.8.215:88/) .
* By default the user will see a homepage where there options to signin or signup.
* To login into the admin side use the email - `phdadmin@iitrpr.ac.in` and password - `root`.
* To login into the student side,first register yourself into the portal and verify the OTP and set your password.

### How to build locally

#### Before building the project locally make sure of these software requirements : 
* The system should have the latest version of node and npm in it preferable the stable ones version which currently is `18.16.0` for node and npm `9.66`, if not latest make sure to have node version above v14.x
* Apart from node the system should have postgres `v15.0` or above installed in it.
 
#### Guide to update the node version in linux :
* First check the current verison by `node -v`
* Then install n package in the terminal by `sudo npm install -g n`
* The run `n 18.16.0` in the terminal
* Again check the version of node and check if it is upgraded or not

#### Guide to update the node version in Windows :
* For windows use can directly uninstall your current old version of node and use [NODE.JS](https://nodejs.org/en) link to download latest LTS version. 


#### 1. Extract Zip folder
* First step is to extract the zip folder which contains two separate folders one for client and one for server. 

#### 2. Open project in some editor like vsCode for better visualisation
* Now open up the extracted folder in some IDE like vsCode.
* We need to run each of them in separate terminals.

#### 3. Creating a postgres database locally
* Make sure you have the required version of postgres install.
* Open the shell of your postgres in terminal
* Create a new database named `phd`
* Then connect to phd database and copy paste the script present in the `database.sql` file into the phd psql shell.
* Once the database is created successfully, now we need to update the .env file in the server file/
* Steps are :
* 1. `CREATE DATABASE phd;`
* 2. `\c phd;`
* 3. Run all the commands in the database.sql(in server directory) file in psql.

#### 4. Updating .env file in server directory
* `PG_USER` = `postgres`         ////  here we need to write the user of our postgres by default it is postgres
* `PG_PASSWORD` = `1212`         ////  here update the password of your postgres password `This is important to change`.
* `PG_HOST` = `localhost`        ////  Keep it same as we are running locally   
* `PG_PORT` = `5432`             ////  Keep it same 
* `PG_DATABASE` = `phd`          ////  Keep it phd itself as we have created a separate database now.

#### 5. Now we will setup and run server side 
* Open a new terminal and go into server directory.
* `cd server`
* Install all dependancies 
* `npm install`
* Run the server in development mode
* `npm run dev`
* If we get a console message 'Server is live and listening on port 8080 then our server side is live'
* We can verify the same by going into browser and running `http://localhost:8080`, we should receive a 'Hello World'

#### 5. Setting up client side
* Open a new terminal and go into the client directory
* `cd client`
* Install all dependancies 
* `npm install`
* Running the frontend
* `npm start `
* The above steps will take sometime to execute, maybe few minutes incase of poor internet connectivity.
* Ignore all the warnings and if some errors are encountered those maybe mostly because of incompatible node version.
* You can try `npm install --legacy-peer-deps`.
* Now our website is live on `http://localhost:3000/`


