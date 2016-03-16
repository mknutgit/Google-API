var map;
var marker;
var myLatLng = {lat: 45.397, lng: -122.60};
var markers = [];
var infowindow;


exports.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10
  });
};

exports.setMarker = function(coordinates) {
  myLatLng.lat = coordinates.lat;
  myLatLng.lng = coordinates.lon;
  console.log(myLatLng);

  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: myLatLng,
  //   zoom: 10
  // });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Marker BOUNCE</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Bounce</b>, <b>BOUNCE</b></p>'+
    '</div>'+
    '</div>';

  infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  marker = new google.maps.Marker({
    position: myLatLng,
    draggable: true,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'MARKER!!'
  });

  marker.addListener('click', function() {
    toggleBounce();
    infowindow.open(map, marker);
  });
  marker.setMap(map);
  markers.push(marker);
  map.panTo(marker.getPosition());
};

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function locateUser() {
  if (navigator.geolocation) {
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

function geolocationSuccess(position) {
  // here we take the `position` object returned by the geolocation api
  // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
  // it 2 arguments: one for latitude, one for longitude.
  // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
  // But you must use coordinates to use this method.
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // Draw the map - you have to use 'getElementById' here.
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}
