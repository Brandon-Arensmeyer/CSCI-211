"use strict";

var title = "Weather Forecast";
var currentDay = new Date();
var weather = ["Snow", "Snow", "Overcast"];
var tempurature = ["11 / -3", "8 / -7", "20 / 3"];
var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy"]

var heading = document.getElementById("title");
heading.textContent = "Brandon's " + title;

var dateStr = currentDay.toLocaleDateString();
var date = document.getElementById("thisDate");
        
date.textContent = (dateStr);

var videoHTML = ``
videoHTML += `<source src="snowvid.mp4" type="video/mp4">`
document.getElementById("myVideo").innerHTML = videoHTML;


var statusHTML = ``;
for(var i = 0; i< weather.length; i++){
    statusHTML += `${weather[i]}<br />`;
    if(weather[i] === "Snow"){
        statusHTML += `<img src="snowicon.png" alt="Snow icon" id="logoimg" /> <br />${tempurature[i]}<br/> ${desc[i]}`;
    }
    else if(weather[i] === "Overcast"){
        statusHTML += `<img src="overcasticon.png" alt="Snow icon" id="logoimg" /> <br />${tempurature[i]}<br/> ${desc[i]}`;
    } 
    var idName = `day${i+1}`;
    document.getElementById(idName).innerHTML = statusHTML;

    statusHTML = ``;
}
var footerHTML = `All images and videos obtained from <a href="https://pixabay.com/">https://pixabay.com</a>`;

document.getElementById("foot").innerHTML = footerHTML;