var apiKey = require('./../.env').apiKey;
var map = require('./../js/map.js');
var mapCount = 0;
var responses = [];

$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', map.initMap);

  $('#weatherLocation').click(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val('');

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response) {
      console.log(response);
      responses.push(response);

      map.setMarker(response.coord);

      $('.showWeather').append('<li><a class="city-name">' + response.name + '</a></li>');
      $('.showWeather').append("<li>The humidity in " + response.name + " is " + response.main.humidity + "%</li>");
      $('.showWeather').append("<li>and the pressure is: " + response.main.pressure + '</li>');
      $('.showWeather').append('<li>The temperature is: ' + response.main.temp + 'degrees Farenheit');
      $('.showWeather').append('<li>This is the weather description: ' + response.weather[0].description + '</li>');
      console.log(responses);
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });

  });

  $('ul').on('click', 'a.city-name', function() {
    alert("hello");
    console.log(this.value);
    console.log('Hello!');
  });
});
