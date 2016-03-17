var apiKey = require('./../.env').apiKey;
var map = require('./../js/map.js');
var responses = [];
var infowindows = [];
var markers = [];


$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', map.initMap);

  $('#weatherLocation').click(function(event) {
    event.preventDefault();
    // this is the city search entered
    var city = $('#location').val();
    //clear the textbox
    $('#location').val('');
    //get weather object from API
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(newResponse) {
      console.log(newResponse);
      //push to responses
      responses.push(newResponse);
      // responses.forEach(function(response) {
      map.setMarker(newResponse);
      // });
      console.log("all the responses", responses);

      //show weather info
      $('.showWeather').append('<li class="city-name"><h4>' + newResponse.name + '</h4></li>');
      $('.showWeather').append("<li>The humidity in " + newResponse.name + " is " + newResponse.main.humidity + "%</li>");
      $('.showWeather').append("<li>and the pressure is: " + newResponse.main.pressure + '</li>');
      $('.showWeather').append('<li>The temperature is: ' + newResponse.main.temp + 'degrees Farenheit');
      $('.showWeather').append('<li>This is the weather description: ' + newResponse.weather[0].description + '</li>');
      console.log(responses);
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });

  $('ul').on('click', '.city-name', function(event) {
    console.log(event);
    responses.forEach(function(response) {
      if (event.currentTarget.textContent === response.name) {
        var myLatLng = {};
        console.log(response);
        //double check to make sure this is how you work with an empty object
        myLatLng.lat = response.coord.lat;
        myLatLng.lng = response.coord.lon;
        map.setFocus(myLatLng);
      }
    });
    alert(event.currentTarget.textContent);
    console.log('Hello!');
  });
});
