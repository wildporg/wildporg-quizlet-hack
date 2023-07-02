// ==UserScript==
// @name         wildporg Colors Exploit
// @namespace    https://github.com/wildporg/wildporg-quizlet-hack/blob/main/main.js
// @version      1.1.1
// @description  Color matching items in quizlet match.
// @author       wildporg (https://github.com/wildporg/)
// @match        https://quizlet.com/*/*
// @icon         https://github.com/favicon.ico
// @grant        none
// ==/UserScript==

var answers;
var i = 0;
var x;
var colors = ["","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF6600"];
var isEnabled;
var wasEnabled;
var inputNode;

(function() {
    isEnabled = window.localStorage.getItem("hackEnabled");
    if (isEnabled == "true") {
        isEnabled = " checked";
    } else if (isEnabled == "false") {
        isEnabled = "";
    } else {
        isEnabled = " checked";
        window.localStorage.setItem("hackEnabled", "true");
    };
    inputNode = document.createElement('div');
    inputNode.style.display = 'flex';
    inputNode.innerHTML = '<input type="checkbox"'+isEnabled+'><p>Enabled</p>';
    setInterval( function() {
        if (document.getElementsByClassName("MatchModeQuestionScatterTile").length > 0) {
            if (i == 0) {
                document.getElementsByClassName("ModeControls-main")[0].append(inputNode);
                answers = document.getElementsByClassName("MatchModeQuestionScatterTile");
                i = 1;
            };
            if (document.getElementsByClassName("ModeControls-main")[0].lastElementChild.firstElementChild.checked && !wasEnabled) {
                wasEnabled = true;
                window.localStorage.setItem("hackEnabled", "true");
                for(x = 0; x < answers.length; x++) {
                    answers[x].style.background = colors[Math.round((x+1)/2)];
                };
            } else {
                wasEnabled = false;
                window.localStorage.setItem("hackEnabled", "false");
                for(x = 0; x < answers.length; x++) {
                    answers[x].style.background = "";
                };
            };
        };
    }, 100);
})();
