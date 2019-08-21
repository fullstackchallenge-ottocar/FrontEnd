# Otto Car Full Stack Challenge - Frontend

This is a simple automotive based app. It contains three views.
* simple Login/Register/Logout -> Completed
* /home route that dislays 'home', 'statistics', 'add car' and 'logout' navbars -> Completed 
    * home route will also display information we store about each car and ability to edit car information -> In progress
* /stats route that displays - Total number of cars added, Total number of active cars and inactive cars,
Active number of HTTP requests sent to the server, classified by HTTP method (eg: 3 GET requests, 4 POST requests, 5 PUT requests - In progress
* /add-car route allows user to add a new car - In progress

## Technologies
* axios
* react
* react-dom
* react-redux
* react-router-dom
* react-scripts
* redux
* redux-logger
* redux-thunk
* styled-components


### Version
1.0.0


### Local Installation
* To locally run this web application, you need a good pacakager manager either npm or yarn. 
When you install Node.js, npm will install automaically. Here's a great source on how to install node and npm: [http://codecademy.com/articles/react-setup-i]

* Once you've succesfully installed node and npm, enter this command it will install all the dependencies required
by the project at once:

```sh
$ npm install
```
* Run app

```sh
$ npm start
```
* You will see the below message in termal if everything was successfully installed:
You can now view my-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.5:3000/

* Enter Ctrl + C to quit the app from running so that you can switch to the branch I'm working on(this is still wip so hasn't been merged with the master branch yet). Enter below command in your terminal to switch to main-page branch
```sh
$ git checkout main-page
```
Start the server again. 
* Please note that if you navigate to http://localhost:3000/, it will be blank as this route hasn't been configured.
  
I'd advise to navigate as below:
http://localhost:3000/sign-up - register with a username, email and password. All three fields are required otherwise the axios POST request call to backend api will log this error: {message: "Please provide username, password and email to register."} in the chrome console(dev tool).
http://localhost:3000/login - you can login with just username and password and once you have succesfully logged in you will be redirected to /home route. You can navigate through different routes using the navbar. However, as mentioned in the beginning the car form and stats are work in progress. Car form is almost completed - need to wire up the code logic with its nav bar.

