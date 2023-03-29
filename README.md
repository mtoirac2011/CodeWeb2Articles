![Article-Banner](/assets/articles-main.png "Article Welcome")
## JavaScript Module 
###### Version 1.0

This is a ***NodeJS - MongoDB - JavaScript (React)*** project. With this application we try to handle the creation, update, and manage articles. Articles will be created, updated, and erased in an esay way.

#### Features used in the project:
* Analyze data that is stored in arrays, objects, sets or maps and display    information about it in your app.
* Visualize data in a user friendly way (e.g. graph, chart, etc).
* Convert user input between two formats and display the result. (e.g. Fahrenheit to
Celcius, kilograms to pounds, etc).
* Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event).
* Create a form and store the submitted values using an external API (e.g. a contact
form, survey, etc).
* Create a node.js web server using a modern framework such as Express.js or Fastify.
Serve at least one route that your app uses (must serve more than just the index.html
file).
* Interact with a database to store and retrieve information (e.g. MySQL, MongoDB,  etc).
* Develop your project using a common JavaScript framework such as React, Angular, or Vue.

### Technologies used
| Tecnology  | Description |
| ---------- | ----------- |
| NodeJS     | for building the backend |
| Mongo DB   | to store articles in a database |
| React      | to build the frontend |


![RM-Banner](/assets/nodejs.png "NodeJs")
#### NodeJS  
* The ** API ** was made using [NodeJS](https://nodejs.org/en/).
* I used NodeJS to build our API backend, and I included these dependencies:
    * Initialize the NodeJS project             
        * npm init -y	
    * Express (works with HTTP request)             
        * npm install express --save
    * BODY-PARSER (convert request to JSON) 
        * npm install body-parser --save
    * Multer (upload files)     
        * npm install multer --save
    * MONGOOSE (connect to MongoDB)         
        * npm install mongoose --save
    * NODEMON (live Server)         
        * npm install nodemon --save-dev

* It also contains the model **Article**


![RM-Banner](/assets/mongo.png "MongoDB")
#### MongoDB 
I used MongoDB as a `No relational database model` to store data
* This is how the***articles*** Mongo database looks like:
![RM-Banner](/assets/mongodb.png "articles Mongo diagram")

#### React ![RM-Banner](/assets/react.png "React")
I installed or updated *nodejs* to create our React module for our Front:
```sh
npm install npm -g 
cd main directory
npx create-react-app rm-frontend
```
I worked with `axios` for doing http requests:
```sh
npm install --save axios
```
We install bootstrap to use con styles:
```sh
npm install bootstrap
```
I also installed `react-router-dom` for manage routes and more:
```sh
npm install --save react-router-dom
```
I installed `react-hook-form` for manage and validate forms:
```sh
npm install react-hook-form
```
I used SweetAlert2 for alerts:
```sh
npm install --save sweetalert2
```
I installed moment to format Dates:
```sh
npm install moment --save
```
I installed react-dropdown to use it in forms:
```sh
npm install react-donut-chart --save
```
I installed react-icons to use icons:
```sh
npm install react-icons --save
```
Finally, I installed react-donut-chart to add Charts:
```sh
npm install react-donut-chart --save
```
![Article-Banner](/assets/articles-main.png "Article Welcome")