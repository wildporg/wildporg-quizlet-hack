// ==UserScript==
// @name         wildporg Colors Exploit
// @namespace    https://github.com/wildporg/wildporg-quizlet-hack/
// @version      1.1.3
// @description  Color matching items in quizlet match.
// @author       wildporg (https://github.com/wildporg/)
// @downloadURL  https://github.com/wildporg/wildporg-quizlet-hack/raw/site-intergration/main.user.js
// @updateURL    https://github.com/wildporg/wildporg-quizlet-hack/raw/main/main.js
// @match        https://quizlet.com/*/*
// @icon         https://github.com/favicon.ico
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

var tiles;
var x;
var colors = ['', '#FF0000','#FFFF00','#00FF00','#00FFFF','#0000FF','#FF6600'];
var state;
var wasEnabled = false;

(function() {
    if (GM_getValue('wp-quizlet-hack-enabled')) {
        state = 'checked';
    } else {
        state = '';
        GM_setValue('wp-quizlet-hack-enabled', false);
    };
    setInterval( function() {
        if (document.querySelectorAll('.MatchModeQuestionScatterTile').length > 0 && document.querySelector('.ModeControls-main').children.length == 3) {
            document.querySelector('.ModeControls-main').innerHTML += '<div style="display: flex;"><input type="checkbox" id="wp-hack-checkbox" '+state+'><label for="wp-hack-checkbox">Enabled</label></div>';
            tiles = document.querySelectorAll('.MatchModeQuestionScatterTile');
        };
        if (document.getElementsByClassName("MatchModeQuestionScatterTile").length > 0) {
            if (document.querySelector('#wp-hack-checkbox').checked) {
                console.log('no problemo here')
                if (!wasEnabled) {
                    GM_setValue('hackEnabled', true);
                    console.log('was not enabled. ok')
                    for(x = 0; x < tiles.length; x++) {
                        console.log(x);
                        tiles[x].style.background = colors[Math.round((x+1)/2)];
                    };
                    wasEnabled = true;
                };
            } else {
                GM_setValue('hackEnabled', false);
                for(x = 0; x < tiles.length; x++) {
                    tiles[x].style.background = '';
                };
                wasEnabled = false;
            };
        };
    }, 100);
})();
