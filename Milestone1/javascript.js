"use strict";

window.addEventListener("load", startLayout);
window.addEventListener("load", setupButtons);
window.addEventListener("load", citySelections);
window.addEventListener("load", makeAsideStyles);

function startLayout() {
    //This is for when the website first loads
    //var apiString = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode`;
    var apiString = `https://api.open-meteo.com/v1/forecast?latitude=47.50&longitude=-111.30&hourly=relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FDenver`;
    var sandbox = document.getElementById("sandbox");


    const xhr = new XMLHttpRequest();

    xhr.open("GET", apiString, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(this.responseText);

            var opStr = `${response.daily.time[0]}`;
            sandbox.textContent = opStr;
            console.log(JSON.stringify(response));



            var title = "Weather Forecast";
            var currentDay = new Date();
            var currentCity = "Great Falls"
            var weather = ["Snow", "Snow", "Overcast"];
            var relHum = ["43%", "53%", "20%"];
            var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy"]
            var forecast = [];
            var weatherCode = ["Clear sky", "Mainly Clear", "Partly cloudy", "Overcast", "Fog", "Light Drizzle", "Moderate Drizzle", "Dense Drizzle", "Slight Rain", "Moderate Rain", "Heavy Rain", 
                                "Slight Snow fall", "Moderate Snow Fall", "Heavy Snow Fall", "Snow Grains"];

            var heading = document.getElementById("title");
            heading.textContent = "Brandon's " + title;

            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var dateStr = currentDay.toLocaleDateString();
            var date = document.getElementById("thisDate");
            var day = currentDay.getDay();
            date.textContent = (dateStr);

            var city = document.getElementById("city");
            city.textContent = currentCity;

            var statusHTML = ``;
            for (var i = 0; i < weather.length; i++) {
                if (day > 6) {
                    day = 0
                }
                if (response.daily.weathercode[i] == 0) {
                    forecast[i] = weatherCode[0];
                }
                else if (response.daily.weathercode[i] == 1) {
                    forecast[i] = weatherCode[1];
                }
                else if (response.daily.weathercode[i] == 2) {
                    forecast[i] = weatherCode[2];
                }
                else if (response.daily.weathercode[i] == 3) {
                    forecast[i] = weatherCode[3];
                }
                else if (response.daily.weathercode[i] == 45 || response.daily.weathercode[i] == 48) {
                    forecast[i] = weatherCode[4];
                }
                else if (response.daily.weathercode[i] == 51 || response.daily.weathercode[i] == 56) {
                    forecast[i] = weatherCode[5];
                }
                else if (response.daily.weathercode[i] == 53) {
                    forecast[i] = weatherCode[6];
                }
                else if (response.daily.weathercode[i] == 55 || response.daily.weathercode[i] == 57) {
                    forecast[i] = weatherCode[7];
                }
                else if (response.daily.weathercode[i] == 61 || response.daily.weathercode[i] == 66 || response.daily.weathercode[i] == 80) {
                    forecast[i] = weatherCode[8];
                }
                else if (response.daily.weathercode[i] == 63 || response.daily.weathercode[i] == 81) {
                    forecast[i] = weatherCode[9];
                }
                else if (response.daily.weathercode[i] == 65 || response.daily.weathercode[i] == 67 || response.daily.weathercode[i] == 82) {
                    forecast[i] = weatherCode[10];
                }
                else if (response.daily.weathercode[i] == 71 || response.daily.weathercode[i] == 85) {
                    forecast[i] = weatherCode[11];
                }
                else if (response.daily.weathercode[i] == 73) {
                    forecast[i] = weatherCode[12];
                }
                else if (response.daily.weathercode[i] == 75 || response.daily.weathercode[i] == 86) {
                    forecast[i] = weatherCode[13];
                }
                else if (response.daily.weathercode[i] == 77) {
                    forecast[i] = weatherCode[14];
                }

                statusHTML += `${weekday[day]}<br />`;
                day++;
                if (weather[i] === "Snow") {
                    statusHTML += `<img src="snowicon.png" alt="Snow icon" id="logoimg" />`;
                }
                else if (weather[i] === "Overcast") {
                    statusHTML += `<img src="overcasticon.png" alt="Snow icon" id="logoimg" />`;
                }
                statusHTML += `<p id="desc"> Hi: ${Math.trunc(response.daily.temperature_2m_max[i] * (9 / 5) + 32)} </p>`;
                statusHTML += `<p id="desc"> Lo: ${Math.trunc(response.daily.temperature_2m_min[i] * (9 / 5) + 32)} </p>`;
                statusHTML += `<p id="desc"> RH ${relHum[i]} </p><br />`;
                statusHTML += `${forecast[i]}`;
                var idName = `day${i + 1}`;
                document.getElementById(idName).innerHTML = statusHTML;

                statusHTML = ``;
            }
            var footerHTML = `All images and videos obtained from <a href="https://pixabay.com/">https://pixabay.com</a>`;
        }
        else {
            var err = `ajax failed code = ${this.status}`;
            console.log(this.status);
        }

    }

    xhr.send();
}

//This sets up the white/black background buttons as well as the 3/5 day buttons
function setupButtons() {

    var apiString = `https://api.open-meteo.com/v1/forecast?latitude=47.50&longitude=-111.30&hourly=relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FDenver`;
    var sandbox = document.getElementById("sandbox");


    const xhr = new XMLHttpRequest();

    xhr.open("GET", apiString, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(this.responseText);

            var forecast = [];
            var weatherCode = ["Clear sky", "Mainly Clear", "Partly cloudy", "Overcast", "Fog", "Light Drizzle", "Moderate Drizzle", "Dense Drizzle", "Slight Rain", "Moderate Rain", "Heavy Rain", 
                                "Slight Snow fall", "Moderate Snow Fall", "Heavy Snow Fall", "Snow Grains"];

            for (var i = 0; i < 5; i++) {
                    if (response.daily.weathercode[i] == 0) {
                        forecast[i] = weatherCode[0];
                    }
                    else if (response.daily.weathercode[i] == 1) {
                        forecast[i] = weatherCode[1];
                    }
                    else if (response.daily.weathercode[i] == 2) {
                        forecast[i] = weatherCode[2];
                    }
                    else if (response.daily.weathercode[i] == 3) {
                        forecast[i] = weatherCode[3];
                    }
                    else if (response.daily.weathercode[i] == 45 || response.daily.weathercode[i] == 48) {
                        forecast[i] = weatherCode[4];
                    }
                    else if (response.daily.weathercode[i] == 51 || response.daily.weathercode[i] == 56) {
                        forecast[i] = weatherCode[5];
                    }
                    else if (response.daily.weathercode[i] == 53) {
                        forecast[i] = weatherCode[6];
                    }
                    else if (response.daily.weathercode[i] == 55 || response.daily.weathercode[i] == 57) {
                        forecast[i] = weatherCode[7];
                    }
                    else if (response.daily.weathercode[i] == 61 || response.daily.weathercode[i] == 66 || response.daily.weathercode[i] == 80) {
                        forecast[i] = weatherCode[8];
                    }
                    else if (response.daily.weathercode[i] == 63 || response.daily.weathercode[i] == 81) {
                        forecast[i] = weatherCode[9];
                    }
                    else if (response.daily.weathercode[i] == 65 || response.daily.weathercode[i] == 67 || response.daily.weathercode[i] == 82) {
                        forecast[i] = weatherCode[10];
                    }
                    else if (response.daily.weathercode[i] == 71 || response.daily.weathercode[i] == 85) {
                        forecast[i] = weatherCode[11];
                    }
                    else if (response.daily.weathercode[i] == 73) {
                        forecast[i] = weatherCode[12];
                    }
                    else if (response.daily.weathercode[i] == 75 || response.daily.weathercode[i] == 86) {
                        forecast[i] = weatherCode[13];
                    }
                    else if (response.daily.weathercode[i] == 77) {
                        forecast[i] = weatherCode[14];
                    }
            }
            console.log(response.daily.weathercode[0])

            var pageStyle = document.createElement("link");
            pageStyle.setAttribute("href", "bc_page.css");
            pageStyle.setAttribute("rel", "stylesheet");
            pageStyle.setAttribute("disabled", "disabled");

            document.head.appendChild(pageStyle);
            pageStyle.disabled = true;

            var date = new Date();
            let day = date.getDay();
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var weather = ["Snow", "Snow", "Overcast", "Overcast", "Snow"];
            var relHum = ["43%", "50%", "20%", "21", "42"];
            var desc = [];
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

            threeDays.onclick = function (e) {

                let day = date.getDay();
                var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy"];
                var statusHTML = ``;

                //This removes the previous 3-5 divs
                for (var i = 0; i < 5; i++) {
                    var remove = document.getElementById("day" + (i + 1));
                    if (remove != null) {
                        remove.parentNode.removeChild(remove);
                    }
                }

                //This add the divs back into the document allowing it to change from 5 to 3
                for (var i = 0; i < 3; i++) {
                    

                    var weatherDiv = document.createElement("div");
                    weatherDiv.setAttribute("id", "day" + (i + 1));
                    body.appendChild(weatherDiv);

                    if (day > 6) {
                        day = 0;
                    }
                    statusHTML += `${weekday[day]}<br />`;
                    day++;

                    if (weather[i] === "Snow") {
                        statusHTML += `<img src="snowicon.png" alt="Snow icon" id="logoimg" />`;
                    }
                    else if (weather[i] === "Overcast") {
                        statusHTML += `<img src="overcasticon.png" alt="Snow icon" id="logoimg" />`;
                    }
                    statusHTML += `<p id="desc"> Hi: ${Math.trunc(response.daily.temperature_2m_max[i] * (9 / 5) + 32)} </p>`;
                    statusHTML += `<p id="desc"> Lo: ${Math.trunc(response.daily.temperature_2m_min[i] * (9 / 5) + 32)} </p>`;
                    statusHTML += `<p id="desc"> RH: ${relHum[i]} </p><br />`;
                    statusHTML += `${forecast[i]}`
                    var idName = `day${i + 1}`;
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

            fiveDays.onclick = function (e) {
                var date = new Date();
                let day = date.getDay();

                // var desc = ["Large snow fall", "Moderate snow", "Cold and Cloudy", "Some snowfall", "Heavy Snow"];
                var statusHTML = ``;

                // removes the previous divs 
                for (var i = 0; i < 5; i++) {
                    var remove = document.getElementById("day" + (i + 1));
                    if (remove != null) {
                        remove.parentNode.removeChild(remove);
                    }
                }

                // enters 5 divs for the next 5 days
                for (var i = 0; i < 5; i++) {

                    

                    var weatherDiv = document.createElement("div");
                    weatherDiv.setAttribute("id", "day" + (i + 1));
                    body.appendChild(weatherDiv);

                    if (day > 6) {
                        day = 0;
                    }
                    statusHTML += `${weekday[day]}<br />`;
                    day++;
                    if (weather[i] === "Snow") {
                        statusHTML += `<img src="snowicon.png" alt="Snow icon" id="logoimg" />`;
                    }
                    else if (weather[i] === "Overcast") {
                        statusHTML += `<img src="overcasticon.png" alt="Snow icon" id="logoimg" />`;
                    }
                    statusHTML += `<p id="desc"> Hi ${Math.trunc(response.daily.temperature_2m_max[i] * (9 / 5) + 32)} </p>`;
                    statusHTML += `<p id="desc"> Lo ${Math.trunc(response.daily.temperature_2m_min[i] * (9 / 5) + 32)} </p>`;
                    statusHTML += `<p id="desc"> RH ${relHum[i]} </p><br />`;
                    statusHTML += `${forecast[i]}`;
                    var idName = `day${i + 1}`;
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
            whiteButton.onclick = function (e) {
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
            blackButton.onclick = function (e) {
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

            document.styleSheets[document.styleSheets.length - 1].insertRule(
                "div#styleButton { \
            position: fixed; \
        }", 0);

            document.styleSheets[document.styleSheets.length - 1].insertRule(
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

            document.styleSheets[document.styleSheets.length - 1].insertRule(
                "@media print{ \
            div#styleButtons { \
                display: none; \
            } \
        }", 2);
        }
    }
    xhr.send();
}




    //This is where the aside and cities are located
    function citySelections() {
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
        for (var i = 0; i < cities.length; i++) {
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
        document.getElementById("city0").onclick = function (e) {
            document.getElementById("city").innerHTML = cities[0];
        }
        document.getElementById("city1").onclick = function (e) {
            document.getElementById("city").innerHTML = cities[1];
        }
        document.getElementById("city2").onclick = function (e) {
            document.getElementById("city").innerHTML = cities[2];
        }
    }

    function replaceWS(textStr) {
        var revText = textStr.replace(/\s+/g, "_");
        return revText;
    }





    //Styles the aside
    function makeAsideStyles() {
        var style = document.createElement("style");
        document.head.appendChild(style);

        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "aside#cityNames { \
            border: 3px solid rgb(101, 101, 101); \
            background-color: rgb(255,255,255); \
            float: right; \
            margin: 20px 20px 20px 20px; \
            padding: 10px; \
            width: 15%; \
        )", 0);

        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "aside#cityNames h1 { \
            font-size: 2em; \
            margin: 5px; \
            text-align: center; \
        )", 1);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "aside#cityNames ol { \
            margin-left: 20px; \
            font-size: 1.2em; \
        )", 2);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "aside#cityNames ol li { \
            line-height: 1.5em; \
        )", 3);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "aside#cityNames ol li a{ \
            color: rgb(101, 101, 101); \
            text-decoration: none; \
        )", 4);
    }


