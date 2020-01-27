console.log('hello from index.js')

const markerFactory = require('./marker')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibXdlbGxoODQiLCJhIjoiY2s1d296ZTJzMXhyMTNsbnF0YTZqa25hMSJ9.48yTgvY6gHaIK_OpTHCbyQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);

markerFactory('Hotel', [-74.0137, 40.7040]).addTo(map)
markerFactory('Restaurant', [-74.00678, 40.70588]).addTo(map)
