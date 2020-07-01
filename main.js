let myMap = L.map('map').setView([44, -73], 12)

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(myMap)

let marker = L.marker([44, -73])
marker.bindPopup('<h4>This is the center</h4>')
marker.addTo(myMap)

marker.addEventListener('mouseover', () => {
  marker.openPopup()
})

function placeMarker(address) {
  let urlAddress = encodeURI(address)

  fetch(`https://nominatim.openstreetmap.org/search?q=${urlAddress}&format=json`)
    .then((res) => res.json())
    .then(json => {
      
      console.log(json[0])
      let latLngArr = [json[0].lat, json[0].lon]

      L.marker(latLngArr).addTo(myMap)
    })
}

placeMarker('breadloaf')

placeMarker('ripton, vt')
