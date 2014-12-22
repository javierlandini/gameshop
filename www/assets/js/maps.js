function initialize() {
  var gameshopLatlng = new google.maps.LatLng(-32.950270, -60.645720);
  var mapOptions = {
    zoom: 15,
    center: gameshopLatlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var gameshopMarker = new google.maps.Marker({
      position: gameshopLatlng,
      map: map,
      title: 'GAMESHOP'
  });
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAKQMj5g4nU5hSmIEJmTYd2tF0MkNYWj_M&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;