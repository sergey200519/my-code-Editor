let widthWindow = document.documentElement.clientWidth
export default widthWindow

import {iframeClass, newUserCodeBox, html, css, js} from "./modules/userCode.js"
import {htmlSnipets, cssSnipets, jsSnipets} from "./snippets.js"
import {newCssFormat, newJsFormat} from "./modules/cssJsFormat.js"
import {newHtmlFormat} from "./modules/htmlFormat.js"
import {popap} from "./modules/functions.js"
import settings from "./modules/settings.js"

if (document.body.offsetWidth < 500) {
  popap("Ширина браузера слишком мала для коимфортной работы.")
}

if (localStorage.getItem("html") != null) html.value = localStorage.getItem("html")
if (localStorage.getItem("css") != null) css.value = localStorage.getItem("css")
if (localStorage.getItem("js") != null) js.value = localStorage.getItem("js")

let htmlBox = document.querySelector(".user_code_box-html")
let cssBox = document.querySelector(".user_code_box-css")
let jsBox = document.querySelector(".user_code_box-js")
let widthPreview = document.querySelector(".width_preview_in_html")
widthPreview.value = iframeClass.widthIframe
let codeBox = document.querySelector(".code_box")
let settingsBox = document.querySelector(".settings")

window.onresize = function(e) {
  widthWindow = document.documentElement.clientWidth
  iframeClass.changeWidthIframe(widthPreview.value)
}

let htmlUserCodeBox = newUserCodeBox(htmlBox, "html")
let cssUserCodeBox = newUserCodeBox(cssBox, "css")
let jsUserCodeBox = newUserCodeBox(jsBox, "js")

newHtmlFormat(htmlSnipets)
newCssFormat(cssSnipets)
newJsFormat(jsSnipets)

// Создаём экземпляр класса Settings
settings(settingsBox)

export {widthPreview, htmlUserCodeBox, cssUserCodeBox, jsUserCodeBox}
// import fun from "./script/test.js";
// fun()
window.addEventListener('message', function(event) {
  let message = event.data
  let logs = document.querySelector(".logs")
  if (logs.value == "") {
    logs.value = message
  } else {
    logs.value = `${logs.value}\n${message}`
  }
})

document.querySelector(".update").onclick = (e) => {
  iframeClass.mergeCode()
}

// window.onbeforeunload = function(event) {
//   return "alo?"
// }


// '_'
