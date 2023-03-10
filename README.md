![Article-Banner](/assets/articles-main.png "Article Welcome")
## JavaScript Module 
###### Version 1.0

This is a ***NodeJS - MongoDB - JavaScript (React)*** project. With this application we try to handle the creation, update, and manage articles. Articles will be created, updated, and erased in an esay way.

### Technologies used
| Tecnology  | Description |
| ---------- | ----------- |
| NodeJS     | for building our backend |
| Mongo DB   | to store our articles in a database |
| React      | to build our frontend |


![RM-Banner](/assets/nodejs.png "NodeJs")
#### NodeJS  
* The ** API ** was made using [NodeJS](https://nodejs.org/en/).
* We use NodeJS to build our API backend, and I included these dependencies:
    * Initialize the NodeJS project             
        * npm init -y	
    * Express (works with HTTP request)             
        * npm install express --save
    * BODY-PARSER (convert request to JSON) 
        * npm install body-parser --save
    * Connect-Multiparty (upload files)     
        * npm install connect-multiparty --save
    * MONGOOSE (connect to MongoDB)         
        * npm install mongoose --save
    * NODEMON (live Server)         
        * npm install nodemon --save-dev

* It also contains the model **Article**


![RM-Banner](/assets/mongo.png "MongoDB")
#### MongoDB 
We use MongoDB as a `No relational database model` to store data
* This is how our ***art_mongodb*** Mongo database looks like:
![RM-Banner](/assets/mongodb.png "articles Mongo diagram")


#### React
We installed or updated *nodejs* to create our React module for our Front:
```sh
npm install npm -g 
cd main directory
npx create-react-app rm-frontend
```
We worked with `axios` for doing http requests:
```sh
npm install --save axios
```
We install bootstrap to use con styles:
```sh
npm install bootstrap
```
We also installed `react-router-dom` for manage routes and more:
```sh
npm install --save react-router-dom
```
We also used `react-hook-form` for manage and validate forms:
```sh
npm install react-hook-form
```
We used SweetAlert2 for alerts:
```sh
npm install --save sweetalert2
```
![Article-Banner](/assets/articles-main.png "Article Welcome")