

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 2
  };
  var div = document.getElementById('map-canvas');
  var map = new google.maps.Map(div, mapOptions);

//AJAX GET
  
  var addPin = function(lat, long) {

    var loc = new google.maps.LatLng(28.333, -21.572);
    // var loc = new google.maps.LatLng(lat, long);
  
      var newMarker = new google.maps.Marker({
        position: loc,
        map: map
          });
      };

//AJAX POST

    // google.maps.event.addListener(map, 'click', function(event) {
    //   $.ajax ({
    //     type: 'POST',
    //     url: '/pins',
    //     data: { lat: ,long: }
    //   })
    
    // });
}

google.maps.event.addDomListener(window, 'load', initialize);