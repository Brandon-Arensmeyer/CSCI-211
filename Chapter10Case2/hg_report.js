"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Brandon Arensmeyer
   Date: 11/3/2022   
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1>"
gameReport += "<h2>By: " + itemManufacturer + "</h2>"
gameReport += "<img src='hg_10551.png' alt='id' id='gameImg' />"
gameReport += "<table>"
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>"
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>"
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>"
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>"
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>"
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>"
gameReport += "</table>"
gameReport += itemSummary

document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingsSum = 0;
var ratingsCount = ratings.length;
for(var i = 0; i < ratingsCount; i++){
    ratingsSum += ratings[i];
}

var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1>"
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>"

for(var i = 0; i <= 2; i++){
    ratingReport += "<div class='review'>"
    ratingReport += "<h1>" + ratingTitles[i] + "</h1>"
    ratingReport += "<table>"
    ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>"
    ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>"
    ratingReport += "<tr><th>Rating</th><tr>"
    for(var j = 0; j < ratings[i]; j++){
        ratingReport += "<img src='hg_star.png' />"
    }
    ratingReport += "</td></tr></table>"
    ratingReport += ratingSummaries[i]
    ratingReport += "</div>"
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;