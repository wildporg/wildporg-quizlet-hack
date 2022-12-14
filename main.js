// ==UserScript==
// @name         wildporg Colors Exploit
// @namespace    https://github.com/wildporg/wildporg-quizlet-hack/blob/main/main.js
// @version      1.0.1
// @description  Color matching items in quizlet match.
// @author       wildporg (https://github.com/wildporg/)
// @match        https://quizlet.com/*/*
// @icon         http://github.com/favicon.ico
// @grant        none
// ==/UserScript==

var answers;
var i = 0;
var x;
var colors = ["","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF6600"];

(function() {
    setInterval( function() {
        if (document.getElementsByClassName("MatchModeQuestionScatterTile").length > 0) {
            answers = document.getElementsByClassName("MatchModeQuestionScatterTile");
            if (i == 0) {
                for(x = 0; x < answers.length; x++) {
                    answers[x].style.background = colors[Math.round((x+1)/2)];
                };
                i = 1;
            };
        };
    }, 100);
})();
