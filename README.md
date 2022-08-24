# Mapping_Earthquakes

## Purpose: 
The purpose of this project is to visually display differences between earthquake magnitudes all over the world for the last seven days. By using Leaflet library  from JavaScript we were able to plot data on Mapbox map through an API request. The user will be able to select the preferred map style and display earthquake features by checking/unchecking the overlays.  We used JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON links (Links provided under Resources)

**Resources:** *JavaScript (D3 & geoJSON), HTML, css, Leaflet, MapBox API*
#### Links to geoJSON 

> Tectonic Plates – [click here](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

> Major Earthquakes - [click here](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)

#### *Figure 1. Map Layers and Earthquake attributes*

![This is an image](https://github.com/IIrazoque/Mapping_Earthquakes/blob/d92c88c77f30b37f05b0a920f215687981d296bc/Earthquake_Challenge/Images/image1.PNG)
 

## Deliverable 1: Add Tectonic Plate Data

Added tectonic plate geoJSON data using d3.json() and an overlay object with the earthquake data. 

#### *Figure 2. Tectonic Plates on Satellite view*

![This is an image](https://github.com/IIrazoque/Mapping_Earthquakes/blob/d92c88c77f30b37f05b0a920f215687981d296bc/Earthquake_Challenge/Images/image2.PNG)
 

## Deliverable 2: Add Major Earthquake Data

#### *Figure 3. Major Earthquakes on Street view*

<sub>*unchecked Earthquakes and Tectonic Plates overlays</sub>

![This is an image](https://github.com/IIrazoque/Mapping_Earthquakes/blob/d92c88c77f30b37f05b0a920f215687981d296bc/Earthquake_Challenge/Images/image3.PNG)
 
## Deliverable 3: Add an Additional Map

The “Nagivation-night-v1” map style was added as a tile layer variable and into the baseMaps layer object.

#### *Figure 4. Adding third Map Style Layer “Night Navigation”*

![This is an image](https://github.com/IIrazoque/Mapping_Earthquakes/blob/d92c88c77f30b37f05b0a920f215687981d296bc/Earthquake_Challenge/Images/image4.PNG)

  
 

