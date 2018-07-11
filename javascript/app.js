var linkGithub = document.getElementById('link-github')
var linkCodepen = document.getElementById('link-codepen')
var linkLinkedin = document.getElementById('link-linkedin')
var linkPinterest = document.getElementById('link-pinterest')


linkGithub.onmouseover = function () { changeBorderColor('#333')}
linkGithub.onmouseout = function () { changeBorderColor('#2e3842') }
linkCodepen.onmouseover = function () { changeBorderColor('#000') }
linkCodepen.onmouseout = function () { changeBorderColor('#2e3842') }
linkLinkedin.onmouseover = function () { changeBorderColor('#0077B5') }
linkLinkedin.onmouseout = function () { changeBorderColor('#2e3842') }
linkPinterest.onmouseover = function () { changeBorderColor('#BD081C') }
linkPinterest.onmouseout = function () { changeBorderColor('#2e3842') }

// socialMedia = {
//     github: { color: "#333" },
//     codepen: { color: "#000" },
//     linkedin: { color: "#0077B5" },
//     pinterest: { color: "#BD081C" }
// }
// var linkSocialMedia = document.getElementsByName('link-social')

// function addEventListenerByName(name) {
//     var list = document.getElementsByName(name);
    
//     for (var i = 0, len = list.length; i < len; i++) {
//             var color_je = socialMedia[list[i].className].color;
//             console.log("COLOR",color_je);
//         list[i].onmouseover = function () { return changeBorderColor(color_je).clone         }
//         list[i].onmouseout = function () { return changeBorderColor('#2e3842') }

//     }
// }

// addEventListenerByName('link-social');

function changeBorderColor(color) {
    // console.log("eita", color);
    
    document.getElementById('main').style.borderColor = color;
}