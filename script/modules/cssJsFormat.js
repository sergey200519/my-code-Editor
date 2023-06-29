import {fromStrToArray, fromArrayToStr, findSnipets,
replaceForSnipets, wordBackForJsAndCss} from "./functions.js"
import {Format} from "./Format.js"
import {iframeClass} from "./userCode.js"
import {cssUserCodeBox, jsUserCodeBox} from  "./../script.js"

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

  enter() {
    console.log("Enter");
    let start = this.textarea.selectionStart
    let end = this.textarea.selectionEnd
    let firstCode = this.textarea.value
    let n = this.nSpaseBeforeRow(firstCode, start - 1)
    let arr = fromStrToArray(firstCode)
    if (this.isBetweenStaples(firstCode, start - 1)) {
      arr[start - 1] += `\n  ${this.createSpase(n)}\n${this.createSpase(n)}`
      this.textarea.value = fromArrayToStr(arr)
      iframeClass.update(fromArrayToStr(arr))
      this.textarea.selectionStart = start + n + 3
      this.textarea.selectionEnd = end + n + 3
    } else {
      arr[start - 1] += `\n${this.createSpase(n)}`
      this.textarea.value = fromArrayToStr(arr)
      iframeClass.update(fromArrayToStr(arr))
      this.textarea.selectionStart = start + n + 1
      this.textarea.selectionEnd = end + n + 1
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
    if (event.key == "Enter") {
      event.preventDefault()
      cssFormat.enter()
    }
    cssUserCodeBox.update()
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
    if (event.key == "Enter") {
      event.preventDefault()
      jsFormat.enter()
    }
    jsUserCodeBox.update()
  })
}

export {newCssFormat, newJsFormat}

// '_'
