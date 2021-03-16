"use strict";

  const Posicion = {
      lat: 19.331901,
      lng: -99.158452
  }

  function initMapa(Posicion) {
    const map = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 15,
      center: Posicion,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: false
    });
    new google.maps.Marker({
      position: Posicion,
      map,
      title: "Ubicacion de dispositivo"
    });
  }
  initMapa(Posicion)