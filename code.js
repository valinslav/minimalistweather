let city = localStorage.getItem("cityInSearchBar");
let tempType = 'metric';
let degree = '\&#xb0;'
let tempLetter = 'C';
if(tempType == 'imperial') {
    templetter = 'F';
}

$.getJSON(`https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c08f28491a3a2bbb6672e149c1e6342e&units=${tempType}`).done(callBack).fail(jsonFail);

let pictures = [
{
    type: "Clear",
    timeOfDay: "night",
    creator: "James Wheeler",
    url: "Photos/clearNight.jpg",
    website: "https://pixabay.com/photos/british-columbia-canada-clear-lake-2382640/",
    host: "Pixabay"
},    
{
    type: "Clear",
    timeOfDay: "day",
    creator: "Pixabay",
    url: "Photos/clearDay.jpg",
    website: 'https://www.pexels.com/photo/skyscrapers-in-city-against-clear-sky-316137/',
    host: "Pexels"
},
{
    type: "Clouds",
    timeOfDay: "night",
    creator: "Ryan Loughlin",
    url: "Photos/cloudsNight.jpg",
    website: "https://unsplash.com/photos/Ta9_HNeuQkU",
    host: "Unsplash"
},
{
    type: "Clouds",
    timeOfDay: "day",
    creator: "Lucas Kloeppel",
    url: "Photos/cloudsDay.jpg",
    website: "https://www.pexels.com/photo/aerial-architecture-blue-sky-buildings-466685/",
    host: "Pexels"
},
{
    type: "Thunderstorm",
    timeOfDay: "night",
    creator: "Andre Furtando",
    url: "Photos/thunderstorm.jpg",
    website: "https://www.pexels.com/photo/lightning-and-gray-clouds-1162251/",
    host: "Pexels"
},
{
    type: "Thunderstorm",
    timeOfDay: "day",
    creator: "skeeze",
    url: "Photos/lightningDay.jpg",
    website: "https://pixabay.com/photos/lightning-strike-bolt-electricity-2617904/",
    host: "Pixabay"
},
{
    type: "Drizzle",
    timeOfDay: "night",
    creator: "Aleksandar Pasaric",
    url: "Photos/drizzle.jpg",
    website: "https://www.pexels.com/photo/woman-walking-in-the-street-during-night-time-1134166/",
    host: "Pexels"
},
{
    type: "Drizzle",
    timeOfDay: "day",
    creator: "Josh Hild",
    url: "Photos/drizzleDay.jpg",
    website: "https://www.pexels.com/photo/raining-in-the-city-2448749/",
    host: "Pexels"
},
{
    type: "Rain",
    timeOfDay: "night",
    creator: "Osman Rana",
    url: "Photos/rainNight.jpg",
    website: "https://unsplash.com/photos/GXEZuWo5m4I",
    host: "Unsplash"
},
{
    type: "Rain",
    timeOfDay: "day",
    creator: "Genaro Servin",
    url: "Photos/rainDay.jpg",
    website: "https://www.pexels.com/photo/person-riding-a-bicycle-during-rainy-day-763398/",
    host: "Pexels"
},
{
    type: "Snow",
    timeOfDay: "night",
    creator: "Lisa Fotios",
    url: "Photos/snowNight.jpg",
    website: "https://www.pexels.com/photo/rain-of-snow-in-town-painting-730256/",
    host: "Pexels"
},
{
    type: "Snow",
    timeOfDay: "day",
    creator: "Fabian Mardi",
    url: "Photos/snowDay.jpg",
    website: "https://unsplash.com/photos/kVKz9qnJC-k",
    host: "Unsplash"
},
{
    type: "Mist",
    timeOfDay: "any",
    creator: "jiawei cui",
    url: "Photos/mist.jpg",
    website: "https://www.pexels.com/photo/aerial-photography-of-city-buildings-under-cloudy-sky-2310885/",
    host: "Pexels"
},
{
    type: "Smoke",
    timeOfDay: "any",
    creator: "Sawyer Bengtson",
    url: "Photos/smoke.jpg",
    website: "https://unsplash.com/photos/Pia51dSIwd0",
    host: "Unsplash"
},
{
    type: "Haze",
    timeOfDay: "any",
    creator: "Ishan @seefromthesky",
    url: "Photos/haze.jpg",
    website: "https://unsplash.com/photos/6U-sSfBV-gM",
    host: "Unsplash"
},
{
    type: "Dust",
    timeOfDay: "any",
    creator: "carloyuen",
    url: "Photos/dust.jpg",
    website: "https://pixabay.com/photos/skyscraper-dust-fog-foggy-2517650/",
    host: "Pixabay"
},
{
    type: "Ash",
    timeOfDay: "any",
    creator: "Gary Saldana",
    url: "Photos/ash.jpg",
    website: "https://unsplash.com/photos/KRttQCXUjNI",
    host: "Unsplash"
},
{
    type: "Squall",
    timeOfDay: "any",
    creator: "SturmjaegerTobi",
    url: "Photos/squall.jpg",
    website: "https://pixabay.com/photos/sky-squall-line-storm-thunderstorm-3176547/",
    host: "Pixabay"
},
{
    type: "Tornado",
    timeOfDay: "any",
    creator: "Lucy Chian",
    url: "Photos/tornado.jpg",
    website: "https://unsplash.com/photos/LYq7W1lRal4",
    host: "Unsplash"
}
];

function callBack(data) {
    console.log(data);
    console.log(data.name);
    console.log(Math.round(data.main.temp));
    console.log(data.weather[0].main);
    let pic = pictures.find(x => (x.type == data.weather[0].main) && (x.timeOfDay == "any" || x.timeOfDay == getTime(data.timezone)));
    console.log(data.sys.country);
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + degree + tempLetter;
    document.getElementById('weather').innerHTML = data.weather[0].main;
    document.getElementById('creator').innerHTML = `Photo by ${pic.creator} from ${pic.host}`;
    document.getElementById('site').href = pic.website;
    document.getElementsByTagName('body')[0].style = `background-image: url(${pic.url});
    background: linear-gradient(
                     rgba(54, 53, 53, 0.5), 
                     rgba(49, 48, 48, 0.5)),
                     url(${pic.url});
    background-size: 1920px 1080px;`; 
}

function jsonFail(){
    if(localStorage.getItem("cityInSearchBar" === undefined)){
        document.getElementById('city').innerHTML = "Welcome to Minimalist Weather!"
        document.getElementById('temp').innerHTML = "Type in the search bar to get the weather of the city you desire!";
        document.getElementById('creator').innerHTML = `Photo by ${pic.creator} from ${pic.host}`;
        document.getElementById('site').href = pictures[1].website;
        document.getElementsByTagName('body')[0].style = `background-image: url(${pictures[1].url});
        background: linear-gradient(
                         rgba(54, 53, 53, 0.5), 
                         rgba(49, 48, 48, 0.5)),
                         url(${pictures[1].url});
        background-size: 1920px 1080px;`; 
    }
    else {
        document.getElementById('city').innerHTML = "City not found";
        document.getElementById('temp').innerHTML = "Please search again";
    }    
}

function toMetric() {
    let t = document.getElementById('temp').innerHTML;
    t = t.substring(0, t.length - 2);
    if(tempType == 'imperial') {
        tempLetter = 'C';
        document.getElementById('temp').innerHTML = Math.round((t - 32) * (5/9)) + degree + tempLetter;
        tempType = "metric";
    } 
}

function toImperial() {
    let t = document.getElementById('temp').innerHTML;
    t = t.substring(0, t.length - 2);
    if(tempType == 'metric') {
        tempLetter = 'F';
        document.getElementById('temp').innerHTML = Math.round((t * (9/5)) + 32) + degree + tempLetter;
        tempType = "imperial";
    } 
}

let enter = document.getElementById('search-bar');
if(enter) {
    enter.addEventListener("keyup",function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('search-btn').click();
        }
    });
};

function actSearch() {
   city = document.getElementById('search-bar').value;
   localStorage.setItem("cityInSearchBar", city);
   window.location.reload();
}

function getTime(seconds){
    let n = new Date();
    let hours = seconds/3600;
     if(n.getUTCHours() + hours >= 6 && n.getUTCHours() + hours <= 18) {
        return "day";
    } else {
        return "night";
    }    
}
