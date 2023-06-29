import {fromStrToArray, fromArrayToStr, wordBack, findSnipets,
replaceForSnipets, wordBackForJsAndCss} from "./functions.js"

class Format {
  constructor(snipets, textarea) {
    this.snipets = snipets
    this.textarea = textarea
  }

  nSpaseBeforeRow(text, position) {
    let flag = false
    let n = 0
    let i = position
    while (i >= 0) {
      if (text[i] == " ") {
        flag = true
        n++
      } else if (text[i] == "\n" && flag) {
        return n
      } else if (text[i] == "\n") {
        return 0
      } else {
        flag = false
        n = 0
      }
      i--
    }
    return 0
  }

  createSpase(count) {
    if (count == 0) return ""
    let answer = ""
    for (let i = 0; i < count; i++) {
      answer += " "
    }
    return answer
  }

  isBetweenTeg(text, position) {
    let endTag = text.slice(position + 1, position + 3)
    if (text[position] == ">" && endTag == "</") return true
    return false
  }

  isBetweenStaples(text, position) {
    if (text[position] == "{" && text[position + 1] == "}") return true
    return false
  }

  tabs() {
    let start = this.textarea.selectionStart
    let end = this.textarea.selectionEnd
    let arr = fromStrToArray(this.textarea.value)
    arr[start - 1] += "  "
    let codeStr = fromArrayToStr(arr)
    this.textarea.value = codeStr
    this.textarea.selectionStart = start + 2
    this.textarea.selectionEnd = end + 2
  }

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
        this.textarea.selectionStart = start - word.length + snipet.length
        this.textarea.selectionEnd = end - word.length + snipet.length
      }
    }
  }
}



export {Format}
