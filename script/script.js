let widthWindow = document.documentElement.clientWidth
export default widthWindow

import {iframeClass, newUserCodeBox} from "./modules/userCode.js"
import {htmlSnipets, cssSnipets, jsSnipets} from "./snippets.js"
import {newCssFormat, newJsFormat} from "./modules/cssJsFormat.js"
import {newHtmlFormat} from "./modules/htmlFormat.js"
import {popap} from "./modules/functions.js"
import settings from "./modules/settings.js"

if (document.body.offsetWidth < 500) {
  popap("Ширина браузера слишком мала для коимфортной работы.")
}

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
newUserCodeBox(cssBox, "css")
newUserCodeBox(jsBox, "js")

newHtmlFormat(htmlSnipets)
newCssFormat(cssSnipets)
newJsFormat(jsSnipets)

// Создаём экземпляр класса Settings
settings(settingsBox)

export {widthPreview, htmlUserCodeBox}
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
// '_'
