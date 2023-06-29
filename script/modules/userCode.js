import {IFrame, iframeConst} from "./iframe.js"
import {percent, widthUserCodeBox, fromStrToArray, fromArrayToStr, popap} from "./functions.js"

let html = document.querySelector(".user_code-html")
let css = document.querySelector(".user_code-css")
let js = document.querySelector(".user_code-js")
let count_user_code_box = 3
let pairedCharacters = {
  "'": "''",
  '"': '""',
  "[": "[]",
  "{": "{}",
  "(": "()",
  "`": "``"
}


class UserCode {
  scroll;
  constructor(userCodeBox, typeCode) {
    this.userCodeBox = userCodeBox
    this.typeCode = typeCode
    if (this.userCodeBox.querySelector(".user_code") != null) {
      this.userCodeText = this.userCodeBox.querySelector(".user_code")
    } else {
      this.userCodeText = this.userCodeBox.querySelector(".user_code_min")
    }

    if (this.userCodeBox.querySelector(".user_code_n") != null) {
      this.userCodeN = this.userCodeBox.querySelector(".user_code_n")
    } else {
      this.userCodeN = this.userCodeBox.querySelector(".user_code_n_min")
    }

    this.userCodeOff = this.userCodeBox.querySelector(".user_code_on_of")

    if (this.typeCode == "html") {
      this.userCodeOnOff = document.querySelector(".tabs_html_p")
    } else if (this.typeCode == "css") {
      this.userCodeOnOff = document.querySelector(".tabs_css_p")
    } else if (this.typeCode == "js") {
      this.userCodeOnOff = document.querySelector(".tabs_js_p")
    }
  }


  inputText(text, type="insert") {
    let start = this.userCodeText.selectionStart
    let end = this.userCodeText.selectionEnd
    if (type == "insert") {
      if (start == end && pairedCharacters[text[start - 1]] !== undefined) {
        text = this.doubleCharacters(text[start - 1])
        this.userCodeText.value = text
        this.userCodeText.selectionStart = start
        this.userCodeText.selectionEnd = end
      }
    }
    if (this.typeCode == "html") {
      iframeClass.addCode(text, null, null)
    } else if (this.typeCode == "css") {
      iframeClass.addCode(null, text, null)
    } else if (this.typeCode == "js") {
      iframeClass.addCode(null, null, text)
    }
    this.inputN()
    //console.clear()
  }


  inputN() {
    this.scroll = this.userCodeText.pageYOffset || this.userCodeText.scrollTop
    let n = this.userCodeText.value.split("\n").length
    let numbers = ""
    let i = 1
    while (i <= n) {
      numbers += `${i}\n`
      i++
    }
    this.userCodeN.value = numbers
    this.userCodeN.scroll(0, this.scroll)
    percent()
  }

  close() {
    this.userCodeBox.classList.add("none")
    this.userCodeOnOff.classList.remove("cross")
    this.userCodeOnOff.classList.add("plus")
    count_user_code_box--
    widthUserCodeBox(count_user_code_box)
    popap("Выможите вернуть окно в настройках, нажав на плюс")
  }

  onOff() {
    if (this.userCodeOnOff.classList.contains("cross")) {
      this.userCodeBox.classList.add("none")
      this.userCodeOnOff.classList.remove("cross")
      this.userCodeOnOff.classList.add("plus")
      count_user_code_box--
      widthUserCodeBox(count_user_code_box)
    } else if (this.userCodeOnOff.classList.contains("plus")) {
      this.userCodeOnOff.classList.remove("plus")
      this.userCodeOnOff.classList.add("cross")
      this.userCodeBox.classList.remove("none")
      count_user_code_box++
      widthUserCodeBox(count_user_code_box)
    }
  }

  doubleCharacters(symbol) {
    let start = this.userCodeText.selectionStart
    let end = this.userCodeText.selectionEnd
    if (start == end) {
      let arr = fromStrToArray(this.userCodeText.value)
      arr[start - 1] = pairedCharacters[symbol]
      return fromArrayToStr(arr)
    }
  }

  update() {
    this.inputN()
  }
}







let iframeClass = new IFrame(iframeConst, html, css, js)

function newUserCodeBox(userCodeBox, typeCode) {
  let box = new UserCode(userCodeBox, typeCode)
  box.inputText(box.userCodeText.value)

  box.userCodeText.oninput = (e) => {
    if (e.inputType == "insertText") {
      box.inputText(box.userCodeText.value, "insert")
    } else if (e.inputType == "deleteContentBackward") {
      box.inputText(box.userCodeText.value, "delete")
    } else {
      box.inputText(box.userCodeText.value)
    }
  }
  box.userCodeText.addEventListener("scroll", e => {
    box.inputN()
  })
  box.userCodeOff.onclick = () => {
    box.close()
  }
  box.userCodeOnOff.onclick = () => {
    box.onOff()
  }
  return box
}

export {iframeClass, newUserCodeBox, html, css, js}
// '_'
