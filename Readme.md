# _City location and weather App_

#### _Practice utilizing API's_

### By _**Matt Knutson*_

## Description

_This app was designed to let folks look at both a cities location on the map as well as get current weather conditions._

_The goal of this project is to show competency with node.js, gulp and dependency management and well as practice using API's_

#### System Requirements

1. [Node.js](https://nodejs.org/en/) w/ [npm](https://www.npmjs.com/)
2. [Bower](http://bower.io/)

#### Installation

* If you already have an OpenWeatherMap API and a Google Maps API, creat a .env file in the top level of the project directory.  Then copy and paste the following into the file.  Fill the appropraiate API key between the quotation marks and save.

    * //OpenWeatherMap Key
    * exports.apiKey = " Key here ";

    * //Google Maps API key
    * exports.mapApiKey = " Key here ";

* If you do not have the appropraiate keys you can get each of them at the following links:

    1. [OpenWeatherMap](http://openweathermap.org/appid)
    2. [Google Maps](https://developers.google.com/maps/documentation/javascript/)

* You will need to install dependencies using npm and bower. From the root directory...

    npm install
    bower install

* Gulp is used to handle both building the site and launching a server to host the site. From the root directory...

    gulp build
    gulp serve

## Known Bugs

_No known bugs at this time._

## Support and contact details

_If you have any questions, concerns, or feedback, please contact the authors through_ [gitHub](https://github.com/mknutgit/).

## Technologies Used

* _This project was built on [Node.js](https://nodejs.org/en/)._
* _Dependencies were handled with [npm](https://www.npmjs.com/) and [Bower](http://bower.io/)._
* _[Gulp](http://gulpjs.com/) is an awesome asset pipeline used in this project._

### License

MIT License.

Copyright (c) 2016 **_Matt Knutson_**
