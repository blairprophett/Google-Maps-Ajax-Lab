

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 2
  };
  var div = document.getElementById('map-canvas');
  var map = new google.maps.Map(div, mapOptions);
  var loc = new google.maps.LatLng(28.333, -21.572);
  var newMarker = new google.maps.Marker({
    position: loc,
    map: map
    });

//AJAX GET
  
  var pins = [];
  $.ajax('/pins.json', {type: 'get'}).success(function(data){
    pins = data['pin']
    for (var i in pins) {
      var lat = pins[i]['lat'];
      var lng = pins[i]['long'];
      addPin(lat, lng);
    }
  });

  addPin = function(lat, long) {
    var loc = new google.maps.LatLng(lat, long);
    var newMarker = new google.maps.Marker({
      position: loc,
      map: map
    });
  };
    addPin()
 
  // var loc = new google.maps.LatLng(lat, long);
  
 

//AJAX POST

    // google.maps.event.addListener(map, 'click', function(event) {
    //   var lat = event.LatLng.lat()
    //   var lng = event.LatLng.long()

    //   $.ajax ({
    //     method: 'post',
    //     url: '/pins',
    //     data: { 
    //       'pin': {
    //           'lat': lat,
    //           'long': long,
    //         }
    // }
    //   dataType: 'json'
    //   success
    
    // });
};

google.maps.event.addDomListener(window, 'load', initialize);