"use strict";

window.addEventListener("load", setupButtons);
window.addEventListener("load", citySelections);
window.addEventListener("load", makeAsideStyles);

//This sets up the white/black background buttons as well as the 3/5 day buttons
function setupButtons(){
    var pageStyle = document.createElement("link");
    pageStyle.setAttribute("href", "bc_page.css");
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("disabled", "disabled"); 

    document.head.appendChild(pageStyle);
    pageStyle.disabled = true;



    // Here are the three day and five day radio buttons
    // Three day radio button here
    var radioDIV = document.createElement("div");
    radioDIV.setAttribute("id", "styleRadios"); 

    var tdTitle = document.createElement("h5");
    tdTitle.setAttribute("id", "3Day")
    var tdTitleText = document.createTextNode("Three days: ");
    var threeDays = document.createElement("input");

    threeDays.setAttribute("type", "radio");
    threeDays.setAttribute("value", "threeDays");

    threeDays.onclick = function(e){
        var weather = ["Snow", "Snow", "Overcast"];
        var tempurature = ["11 / -3", "8 / -7", "20 / 3"];
        var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy"];
        var statusHTML = ``;
        
        //This removes the previous 3-5 divs
        for(var i = 0; i< 5; i++){
            var remove = document.getElementById("day" + (i + 1));
            if(remove != null){
                remove.parentNode.removeChild(remove);
            }
        }
        //This add the divs back into the document allowing it to change from 5 to 3
        for(var i = 0; i< weather.length; i++){
            var weatherDiv = document.createElement("div");
            weatherDiv.setAttribute("id", "day" + (i + 1));
            body.appendChild(weatherDiv);
            statusHTML += `${weather[i]}<br />`;
            if(weather[i] === "Snow"){
                statusHTML += `<img src="snowicon.png" alt="Snow icon" id="logoimg" /> <br />${tempurature[i]}<br/> ${desc[i]}`;
            }
            else if(weather[i] === "Overcast"){
                statusHTML += `<img src="overcasticon.png" alt="Snow icon" id="logoimg" /> <br />${tempurature[i]}<br/> ${desc[i]}`;
            } 
            var idName = `day${i+1}`;
            document.getElementById("day" + (i + 1)).innerHTML = statusHTML;

            statusHTML = ``;
        }
    }
    
    tdTitle.appendChild(tdTitleText);
    tdTitle.appendChild(threeDays);


    // 5 day radio button here
    var fdTitle = document.createElement("h5");
    fdTitle.setAttribute("id", "5Day")
    var fdTitleText = document.createTextNode("Five days: ")
    var fiveDays = document.createElement("input");

    fiveDays.setAttribute("type", "radio");
    fiveDays.setAttribute("value", "fiveDays");

    fiveDays.onclick = function(e){
        var weather = ["Snow", "Snow", "Overcast", "Snow", "Snow"];
        var tempurature = ["11 / -3", "8 / -7", "20 / 3", "10 / 0", "12 / 1"];
        var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy", "Some snowfall", "Heavy Snow"];
        var statusHTML = ``;

        // removes the previous divs 
        for(var i = 0; i< 5; i++){
            var remove = document.getElementById("day" + (i + 1));
            if(remove != null){
                remove.parentNode.removeChild(remove);
            }
        }
        
        // enters 5 divs for the next 5 days
        for(var i = 0; i< weather.length; i++){
            var weatherDiv = document.createElement("div");
            weatherDiv.setAttribute("id", "day" + (i + 1));
            body.appendChild(weatherDiv);
            statusHTML += `${weather[i]}<br />`;
            if(weather[i] === "Snow"){
                statusHTML += `<img src="snowicon.png" alt="Snow icon" id="logoimg" /> <br />${tempurature[i]}<br/> ${desc[i]}`;
            }
            else if(weather[i] === "Overcast"){
                statusHTML += `<img src="overcasticon.png" alt="Snow icon" id="logoimg" /> <br />${tempurature[i]}<br/> ${desc[i]}`;
            } 
            var idName = `day${i+1}`;
            document.getElementById("day" + (i + 1)).innerHTML = statusHTML;

            statusHTML = ``;
        }
    }
    
    
    fdTitle.appendChild(fdTitleText);
    fdTitle.appendChild(fiveDays);

    

    
    radioDIV.appendChild(tdTitle);
    radioDIV.appendChild(fdTitle);

    //enters the radio buttons into the html
    document.body.insertBefore(radioDIV, document.body.firstChild);

    



    //This is where the background buttons are
    var buttonDIV = document.createElement("div");
    buttonDIV.setAttribute("id", "styleButtons");
    
    //The white background button is here
    var whiteButton = document.createElement("input");
    whiteButton.setAttribute("type", "button");
    whiteButton.setAttribute("value", "White Background");

    //Styles the background and changes the text colors
    whiteButton.onclick = function(e){
        document.body.style.backgroundColor = "white";
        document.getElementById("3Day").style.color = "black";
        document.getElementById("5Day").style.color = "black";
        document.getElementById("title").style.color = "black";
        document.getElementById("thisDate").style.color = "black";
        document.getElementById("city").style.color = "black";
        document.getElementById("foot").style.color = "black";
        // var remove = document.getElementById("myVideo");
        // remove.parentNode.removeChild(remove);
    }

    //The black background button is here
    var blackButton = document.createElement("input");
    blackButton.setAttribute("type", "button");
    blackButton.setAttribute("value", "Black Background");

    //Styles the background and changes the text colors
    blackButton.onclick = function(e){
        document.body.style.backgroundColor = "black";
        document.getElementById("3Day").style.color = "white";
        document.getElementById("5Day").style.color = "white";
        document.getElementById("title").style.color = "white";
        document.getElementById("thisDate").style.color = "white";
        document.getElementById("city").style.color = "white";
        document.getElementById("foot").style.color = "white";
    }

    // Still working on adding an animation button which will add a video background
    // I can get the video to start, but once it starts, i cant change it back to a plain background.

    // var videoButton = document.createElement("input");
    // var videoHTML = ``
    // videoHTML += `<source src="snowvid.mp4" type="video/mp4">`
    // videoButton.setAttribute("type", "button");
    // videoButton.setAttribute("value", "Animated Background")
    // videoButton.onclick = function(e){
    //     var video = document.createElement("video");
    //     video.setAttribute("id", "myVideo");
    //     var videosrc = `<source src="snowvid.mp4" type="video/mp4">`;
    //     video.setAttribute("type", "video/mp4");
    //     document.getElementById("myVideo").innerHTML = videosrc;
    // }

    buttonDIV.appendChild(whiteButton);
    buttonDIV.appendChild(blackButton);
    // buttonDIV.appendChild(videoButton);

    //Inserts the buttons into the html
    document.body.insertBefore(buttonDIV, document.body.firstChild);
    

    //Styles the background buttons
    var buttonStyles = document.createElement("style");
    document.head.appendChild(buttonStyles);

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "div#styleButton { \
            position: fixed; \
        }", 0);

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "div#styleButtons input { \
            background-color: rgba(68, 94, 186, 0.6); \
            border: 3px solid rgba(0, 24, 123, 0.6); \
            border-radius: 100%; \
            cursor: pointer; \
            color: white; \
            dispaly: inline-block; \
            font-size: 1.2 em; \
            height: 60px; \
            margin: 5px 10px; \
            width: 100 px; \
        }", 1);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "@media print{ \
            div#styleButtons { \
                display: none; \
            } \
        }", 2);

}





//This is where the aside and cities are located
function citySelections(){
    var aside = document.createElement("aside");
    aside.setAttribute("id", "cityNames");
    var header = document.createElement("h1");
    header.setAttribute("id", "headerTitle");
    var headerText = document.createTextNode("City List")
    var cityList = document.createElement("ul");

    header.appendChild(headerText);
    aside.appendChild(header);
    aside.appendChild(cityList);
    
    //Delcares the cities inside the array
    var cities = ["Great Falls", "Billings", "Helena"];
    cities.sort();

    //Makes the cities clickable
    for(var i = 0; i < cities.length; i++){
        var cityListItem = document.createElement("li");
        cityListItem.setAttribute("id", "city" + (i));
        var cityLink = document.createElement("a");
        cityLink.innerHTML = cities[i];
        var linkID = replaceWS(cities[i]);
        cityLink.setAttribute("href", "#" + "keyword_" + linkID);
        cityListItem.appendChild(cityLink);
        cityList.appendChild(cityListItem);
        
    }

    //inserts the aside into the html
    var titleDoc = document.getElementById("title");
    document.body.insertBefore(aside, titleDoc);

    //Changes the location to the place that is clicked on
    document.getElementById("city0").onclick = function(e){
        document.getElementById("city").innerHTML = cities[0];
    }
    document.getElementById("city1").onclick = function(e){
        document.getElementById("city").innerHTML = cities[1];
    }
    document.getElementById("city2").onclick = function(e){
        document.getElementById("city").innerHTML = cities[2];
    }
}

function replaceWS(textStr) {
    var revText = textStr.replace(/\s+/g,"_");
    return revText;
 }





//Styles the aside
function makeAsideStyles(){
    var style = document.createElement("style");
    document.head.appendChild(style);

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#cityNames { \
            border: 3px solid rgb(101, 101, 101); \
            background-color: rgb(255,255,255); \
            float: right; \
            margin: 20px 20px 20px 20px; \
            padding: 10px; \
            width: 15%; \
        )", 0);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#cityNames h1 { \
            font-size: 2em; \
            margin: 5px; \
            text-align: center; \
        )", 1);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#cityNames ol { \
            margin-left: 20px; \
            font-size: 1.2em; \
        )", 2);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#cityNames ol li { \
            line-height: 1.5em; \
        )", 3);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#cityNames ol li a{ \
            color: rgb(101, 101, 101); \
            text-decoration: none; \
        )", 4);
}


//This is for when the website first loads
var title = "Weather Forecast";
var currentDay = new Date();
var currentCity = "Great Falls"
var weather = ["Snow", "Snow", "Overcast"];
var tempurature = ["11 / -3", "8 / -7", "20 / 3"];
var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy"]

var heading = document.getElementById("title");
heading.textContent = "Brandon's " + title;

var dateStr = currentDay.toLocaleDateString();
var date = document.getElementById("thisDate");        
date.textContent = (dateStr);

var city = document.getElementById("city");
city.textContent = currentCity;

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

// document.getElementById("foot").innerHTML = footerHTML;