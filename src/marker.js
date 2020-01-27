const mapboxgl = require("mapbox-gl");

const markerFactory = (type, coords) => {
  console.log('markerFactory is running')
  const markerDomEl = document.createElement("div")
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${typeMap[type]})`;
  console.log(markerDomEl.style.backgroundImage)
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords)
}


const typeMap = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',
  Hotel: 'http://i.imgur.com/D9574Cu.png',
  Restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

module.exports =  markerFactory
