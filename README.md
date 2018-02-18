# ttttest

This project reads text from test.txt file and provide frequency of top most words occured

#### Components of app:

* The frontend of app is build on handlebar templating engine
* The backend is built on top of Nodejs
* It reads the text from file using fs node module and then divide the text into array
* The array is then converted to object by the help of function stored in createWordMap.js file and frequency is stored as     property in object
* The the object is sorted according to highest frequency with help of function stored in sortByCount.js file
* It is hosted on Heroku


## How to Run: 

1. [Hosted on Heroku](https://dashboard.heroku.com/apps/stormy-reaches-19619)
2. or simply download project from here and run npm install then node app.js
