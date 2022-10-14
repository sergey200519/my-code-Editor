import {fromStrToArray, fromArrayToStr, findSnipets,
replaceForSnipets, wordBackForJsAndCss} from "./functions.js"
import {Format} from "./Format.js"
import {iframeClass} from "./userCode.js"
import {htmlUserCodeBox} from  "./../script.js"

class CssAndJs extends Format {
  snippets() {
    let start = this.textarea.selectionStart
    let end = this.textarea.selectionEnd
    if (start == end) {
      let word = wordBackForJsAndCss(this.textarea.value, start - 1)
      let snipet = findSnipets(this.snipets, word)
      if (!snipet) {
        this.tabs()
      } else {
        let arr = fromStrToArray(this.textarea.value)
        this.textarea.value = replaceForSnipets(arr, word, snipet, start, "str")
        this.textarea.selectionStart = start - word.length + snipet.length
        this.textarea.selectionEnd = end - word.length + snipet.length
      }
    }
  }
}

class CssFormat extends CssAndJs {}
class JsFormat extends CssAndJs {}



function newCssFormat(snipets) {
  let css = document.querySelector(".user_code-css")
  let cssFormat = new CssFormat(snipets, css)
  css.addEventListener('keydown', function(event) {
    if (event.key == "Tab") {
      event.preventDefault()
      cssFormat.snippets()
    }
  })
}

function newJsFormat(snipets) {
  let js = document.querySelector(".user_code-js")
  let jsFormat = new JsFormat(snipets, js)
  js.addEventListener('keydown', function(event) {
    if (event.key == "Tab") {
      event.preventDefault()
      jsFormat.snippets()
    }
  })
}

export {newCssFormat, newJsFormat}

// '_'
