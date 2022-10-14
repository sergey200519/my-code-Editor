import {popap} from "./functions.js"
import {iframeClass} from "./userCode.js"
import {widthPreview} from "./../script.js"
import {htmlSnipets, cssSnipets, jsSnipets} from "./../snippets.js"

class Settings {
  htmlSnippetsForSite = {}
  constructor(settingsBox) {
    this.settingsBox = settingsBox
    this.searchHtmlSnippetsBox = this.settingsBox.querySelector(".html_snippets")
    this.searchCssSnippetsBox = this.settingsBox.querySelector(".css_snippets")
    this.searchJsSnippetsBox = this.settingsBox.querySelector(".js_snippets")

    this.addLi(htmlSnipets, this.searchHtmlSnippetsBox.querySelector(".html_snippets_ul"), "html_li_snippets")
    this.addLi(cssSnipets, this.searchCssSnippetsBox.querySelector(".css_snippets_ul"), "css_li_snippets")
    this.addLi(jsSnipets, this.searchJsSnippetsBox.querySelector(".js_snippets_ul"), "js_li_snippets")
  }

  addLi(arr, element, className) {
    let box = element
    let code = ""
    for (let i = 0; i < arr.length; i++) {
      code += `<li class="${className}"></li>`
    }
    box.innerHTML = code
    let li = document.querySelectorAll(`.${className}`)
    for (let i = 0; i < li.length; i++) {
      li[i].innerText = `${arr[i][1]} => ${arr[i][0]}`
    }
  }

  search(value, className) {
    let items = document.querySelectorAll(`.${className}`)
    if (value != "") {
      items.forEach(function (elem) {
        if (elem.innerText.search(value) == - 1) {
          elem.classList.add("none")
        } else {
          elem.classList.remove("none")
        }
      })
    } else {
      items.forEach(function (elem) {
        elem.classList.remove("none")
      })
    }
  }
}

function newSnippet(obj, classButton, classInput1, classInput2, type) {
  document.querySelector(`.${classButton}`).onclick = (e) => {
    let newInput1 = document.querySelector(`.${classInput1}`)
    let newInput2 = document.querySelector(`.${classInput2}`)
    if (newInput1.value == "" || newInput2.value == "") {
      popap("Оба поля должны быть заполнены")
    } else {
      if (type == "html") {
        htmlSnipets.push([newInput1.value, newInput2.value])
        obj.addLi(htmlSnipets, obj.searchHtmlSnippetsBox.querySelector(".html_snippets_ul"), "html_li_snippets")
      } else if (type == "css") {
        cssSnipets.push([newInput1.value, newInput2.value])
        obj.addLi(cssSnipets, obj.searchCssSnippetsBox.querySelector(".css_snippets_ul"), "css_li_snippets")
      } else if (type == "js") {
        jsSnipets.push([newInput1.value, newInput2.value])
        obj.addLi(jsSnipets, obj.searchJsSnippetsBox.querySelector(".js_snippets_ul"), "js_li_snippets")
      }
      popap(`Снипет усешно создан\n${newInput2.value} => ${newInput1.value}`)
    }
  }
}

function settings(settingsBox) {
  let settings = new Settings(settingsBox)
  let onOff = document.querySelector(".on_off")
  let settingsButton = document.querySelector(".settings")
  iframeClass.changeWidthIframe(widthPreview.value)

  document.querySelector(".copy_button").onclick = (e) => {
    navigator.clipboard.writeText(iframeClass.allCodeForCopy)
    popap(`Код успешно скопирован в буфер обмена`)
  }
  widthPreview.oninput = (e) => {
    iframeClass.changeWidthIframe(widthPreview.value)
  }
  onOff.onclick = (e) => {
    settingsButton.classList.toggle("none")
  }

  let htmlSnippetsInput = document.querySelector(".html_snippets_input")
  htmlSnippetsInput.oninput = (e) => {
    settings.search(htmlSnippetsInput.value.trim(), "html_li_snippets")
  }

  let cssSnippetsInput = document.querySelector(".css_snippets_input")
  cssSnippetsInput.oninput = (e) => {
    settings.search(cssSnippetsInput.value.trim(), "css_li_snippets")
  }

  let jsSnippetsInput = document.querySelector(".js_snippets_input")
  jsSnippetsInput.oninput = (e) => {
    settings.search(jsSnippetsInput.value.trim(), "js_li_snippets")
  }
  newSnippet(settings, "new_snippets_html_button", "new_snippets_html_input", "new_snippets_html_input2", "html")
  newSnippet(settings, "new_snippets_css_button", "new_snippets_css_input", "new_snippets_css_input2", "css")
  newSnippet(settings, "new_snippets_js_button", "new_snippets_js_input", "new_snippets_js_input2", "js")






}

export default settings
// '_'
