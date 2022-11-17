"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Brandon Arensmeyer
   Date: 11/16/2022  

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/








/* Supplied Functions */
window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
    var aside = document.createElement("aside");
    aside.setAttribute("id", "keywords");
    var title = document.createElement("h1");
    var headingText = document.createTextNode("Keyword List");
    var keyWordList = document.createElement("ol");
    
    title.appendChild(headingText)
    aside.appendChild(title);
    aside.appendChild(keyWordList);
    
    var keyWordElems = document.querySelectorAll("article#doc dfn");
    var keyWords = new Array(keyWordElems.length);
    
    for(var i = 0; i < keyWordElems.length; i++){
        keyWords[i] = keyWordElems[i].textContent;
        var linkID = replaceWS(keyWords[i]);
        keyWordElems[i].setAttribute("id", "keyword_" + linkID);
    }
    
    keyWords.sort();
    
    for(var i = 0; i < keyWords.length; i++){
        var keyWordListItem = document.createElement("li");
        var keyWordLink = document.createElement("a");
        keyWordLink.innerHTML = keyWords[i];
        var linkID = replaceWS(keyWords[i]);
        keyWordLink.setAttribute("href", "#" + "keyword_" + linkID);
        keyWordListItem.appendChild(keyWordLink);
        keyWordList.appendChild(keyWordListItem);
    }
    
    var historyDoc = document.getElementById("doc");
    historyDoc.insertBefore(aside, historyDoc.firstChild);

}



function makeKeyStyles(){
    var style = document.createElement("style");
    document.head.appendChild(style);

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords { \
            border: 3px solid rgb(101, 101, 101); \
            float: right; \
            margin: 20px 0px 20px 20px; \
            padding: 10px; \
            width: 320px; \
        )", 0);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords h1 { \
            font-size: 2em; \
            margin: 5px; \
            text-align: center; \
        )", 1);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords ol { \
            margin-left: 20px; \
            font-size: 1.2em; \
        )", 2);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords ol li { \
            line-height: 1.5em; \
        )", 3);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords ol li a{ \
            color: rgb(101, 101, 101); \
            text-decoration: none; \
        )", 4);
}


function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
