<!DOCTYPE html>
<html>
  <head>
    <title>Simple Markers</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUnDC9o2ZiEwPVocuzLnqvVDFAXfJc5D0&callback=initMap&libraries=&v=weekly"
      defer
    ></script>    
    <script>
      "use strict";

      function initMap(float lat, float long) {
        const myLatLng = {
          lat: 19.331901,
          lng: -99.158452
        };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: myLatLng,
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: false
        });
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Hello World!"
        });
      }
    </script>
  </head>
  <body>
    <div id="map"></div>
    </body>
</html>

function initMap() {
        const myLatLng = {
          lat: 19.331901,
          lng: -99.158452
        };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: myLatLng,
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: false
        });
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Ubicacion de dispositivo"
        });
      }