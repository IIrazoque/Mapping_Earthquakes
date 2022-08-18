// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/<IIrazoque>/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });


L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
layer.bindPopup("<h2>" + "Airport code:"+ feature.properties.faa + "</h2><hr><p>"+"Airport name:"+ feature.properties.name + "</p>");
}
}).addTo(map);
});

//-----SKILL DRILL-------------
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//         layer.bindPopup()
//         .bindPopup("<h2>" + "Airport code:"+ features.properties.faa + 
//         "</h2><hr><p>"+"Airport name:"+ features.properties.name + "</p>");
//     }
// }).addTo(map);
// }


//------Skill Drill ------
//Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names.
// createFeatures(data.features);
// function createFeatures(airportData) {
//     function onEachFeature(feature, layer) {
//         layer.bindPopup("<h2" + "Airport Code:"+ feature.properties.faa +
//         "<h3><hr><p>" + "Airport Name: "+ feature.properties.name +"</p>");
//     }
// var Airportdetails = L.geoJSON(airportData, {
//     onEachFeature: onEachFeature
// });

//     createMap(Airportdetails);
// }



// // Add console.log to check to see if our code is working.
// console.log("working");
// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   // use onEachFeature dding functionality to a marker
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup()    
//     .bindPopup("<h2>" + "Airport code:"+ feature.properties.faa + "</h2>" + "<h3>"+
//     "Airport name:"+ feature.properties.name + "</h3>");
//   }

// }).addTo(map);

