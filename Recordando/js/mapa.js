const Posicion = {
  //lat: 19.331901,
  lat: 19.331901,
  //lng: -99.158452
  lng: -98.158452
}

let map, infoWindow, marcador;
const valIdDispo = document.getElementById('idDispositivo')

console.log("Prueba")
window.onload = () => {
  
  const formMapa = document.getElementById('form-mapa');
  formMapa.onsubmit = (e) =>{
      e.preventDefault();
      const valPosLat = document.getElementById('poslatitud')
      const valPosLng = document.getElementById('poslongitud')
      Posicion.lat = parseFloat(valPosLat.value);
      Posicion.lng = parseFloat(valPosLng.value);
      console.log(valIdDispo.innerText)
      const mapa = document.getElementById('mapa')
     initMap()
  }
  
}

function initMap() {
  map = new google.maps.Map(document.getElementById("mapa"), {
    center: Posicion,
    zoom: 15,
  });
  
  infoWindow = new google.maps.InfoWindow();
  
  infoWindow.setPosition(Posicion);
 
  //infoWindow.open(map);
  
  const marcador = new google.maps.Marker({
      position: Posicion,
      map,
      
  });
  
  google.maps.event.addListener(marcador, "click", () => {
      infoWindow.setContent("Dispositivo: "+valIdDispo.innerText+'<br>'+
                            "Ubicación aproximada:"+'<br>'+marcador.getPosition());
      infoWindow.open(map, marcador);
     
    }); 
    
}