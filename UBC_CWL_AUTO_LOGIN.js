// ==UserScript==
// @name         UBC CWL Auto Login
// @namespace    http://eri.li
// @version      1
// @description  Auto Login UVic login
// @author       Lychwee
// @match        https://cas.id.ubc.ca/ubc-cas/login*
// @grant        none
// ==/UserScript==

window.onload = function(){
    check();
}
function check() {
    document.getElementById("username").value = "USERNAME_HERE"; //replace USERNAME_HERE with your UBC login
    document.getElementById("password").value = "PASSWORD_HERE"; //replace PASSWORD_HERE with your UBC password
    document.getElementsByTagName("input")[5].click();
}