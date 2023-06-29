import {fromStrToArray, fromArrayToStr, wordBack, findSnipets,
replaceForSnipets} from "./functions.js"
import {Format} from "./Format.js"
import {iframeClass} from "./userCode.js"
import {htmlUserCodeBox} from  "./../script.js"

class HtmlFormat extends Format {
  snippets() {
    let start = this.textarea.selectionStart
    let end = this.textarea.selectionEnd
    if (start == end) {
      let word = wordBack(this.textarea.value, start - 1)
      let snipet = findSnipets(this.snipets, word)
      if (!snipet) {
        this.tabs()
      } else {
        let arr = fromStrToArray(this.textarea.value)
        this.textarea.value = replaceForSnipets(arr, word, snipet, start, "str")
        iframeClass.update(replaceForSnipets(arr, word, snipet, start, "str"))
        this.textarea.selectionStart = start - word.length + (snipet.length / 2)
        this.textarea.selectionEnd = end - word.length + (snipet.length / 2)
      }
    } else {
      this.tabs()
    }
  }

  enter() {
    let start = this.textarea.selectionStart
    let end = this.textarea.selectionEnd
    let firstCode = this.textarea.value
    let n = this.nSpaseBeforeRow(firstCode, start - 1)
    let arr = fromStrToArray(firstCode)
    if (this.isBetweenTeg(firstCode, start - 1)) {
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

function newHtmlFormat(snipets) {
  let html = document.querySelector(".user_code-html")
  let htmlFormat = new HtmlFormat(snipets, html)
  html.addEventListener('keydown', function(event) {
    if (event.key == "Tab") {
      event.preventDefault()
      htmlFormat.snippets()
      htmlUserCodeBox.update()
    }
    if (event.key == "Enter") {
      event.preventDefault()
      htmlFormat.enter()
      htmlUserCodeBox.update()
    }
  })
}

export {newHtmlFormat}

// '_'
