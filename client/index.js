const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

const selectActivity = document.getElementById('activities-choices');
const selectRest = document.getElementById('restaurants-choices');
const selectHotel = document.getElementById('hotels-choices');

var allData;

fetch('/api/attractions')
  .then(result => result.json())
  .then(data => {
      let currParent = document.getElementById('activities-choices')
      data.activities.forEach(function(x){
        let newEl = document.createElement('option')
        newEl.append(x.name);
        currParent.append(newEl);
      })
      let currParent2 = document.getElementById('hotels-choices')
      data.hotels.forEach(function(x){
        let newEl = document.createElement('option')
        newEl.append(x.name);
        currParent2.append(newEl);
      })
      let currParent3 = document.getElementById('restaurants-choices')
      data.restaurants.forEach(function(x){
        let newEl = document.createElement('option')
        newEl.value = x.id;
        newEl.id = x.name;
        newEl.append(x.name);
        currParent3.append(newEl);
      })
      allData = data;
  })
  .catch(console.error);



  document.getElementById('hotels-add').addEventListener('click', function(){
    let currHotel = document.getElementById();
    
  })

  document.getElementById('activities-add').addEventListener('click', function(){
    let currHotel = document.getElementById('activities-choices');
    let hotelname = currHotel.value;
    console.log(hotelname);
  })

  document.getElementById('restaurants-add').addEventListener('click', function(){
    let currHotel = document.getElementById('restaurants-choices');
    let hotelname = currHotel.value;
    console.log(hotelname);
  })

mapboxgl.accessToken = "pk.eyJ1Ijoiampkb29sZXkiLCJhIjoiY2o2ODQ1dXNrMGQzejJ3bG1lb3ozNmp1OCJ9.ltqfS9u3cbP9eLvH8_O21Q";
const map = new mapboxgl.Map({
  container: "map-canvas",
  center: [-74.0, 40.731],
  zoom: 12.5, // starting zoom
  pitch: 35,
  bearing: 20,
  style: "mapbox://styles/mapbox/streets-v10"
});
