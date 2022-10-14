import {widthPreview} from "./../script.js"
import {popap} from "./functions.js"
let widthWindow = document.documentElement.clientWidth
const iframeConst = document.querySelector(".view")

class IFrame {
  allCode = ""
  allCodeForCopy = ""
  constructor(iframeBox, html, css, js) {
    this.iframeBox = iframeBox
    this.iframe = this.iframeBox.querySelector(".screen")
    this.logs = this.iframeBox.querySelector(".logs")
    this.htmlCode = html
    this.cssCode = css
    this.jsCode = js
    this.widthIframe = this.iframe.offsetWidth
  }

  reset() {
    this.iframe.remove()
    this.iframeBox.innerHTML = '<iframe class="screen"></iframe> \n <textarea class="logs"></textarea>'
    this.iframe = this.iframeBox.querySelector(".screen")
    this.logs = this.iframeBox.querySelector(".logs")
  }

  changeWidthIframe(width) {
    widthWindow = document.documentElement.clientWidth
    if (width > widthWindow) {
      let style = document.querySelector(".style_min")
      style.href = "style/min.css"
      width = widthWindow
      widthPreview.value = widthWindow
      popap(`Максимальная ширина првью окна для вашего экрана ${widthWindow}px`)
    } else if (width > (widthWindow / 100 * 80)) {
      let style = document.querySelector(".style_min")
      style.href = "style/min.css"
      widthPreview.value = width
    } else if (width < 300) {
      let style = document.querySelector(".style_min")
      style.href = "style/style.css"
      width = 300
      widthPreview.value = 300
      popap("Минимальная ширина превью окна 300px")
    } else if (width < (widthWindow / 100 * 80)) {
      let style = document.querySelector(".style_min")
      style.href = "style/style.css"
      widthPreview.value = width
    }
    let padding = 30
    width = parseInt(width)
    document.documentElement.style.setProperty("--width_screen", `${width + 2}px`)
    let twoPerson = widthWindow / 100 * 2
    document.documentElement.style.setProperty("--width_code_box", `${widthWindow - width - twoPerson - 2 - padding}px`)
    this.widthIframe = width
  }

  addCode(html=null, css=null, js=null) {
    if (html != null) {
      this.htmlCode = html
    } else if (css != null) {
      this.cssCode = css
    } else if (js != null) {
      this.jsCode = js
    }
    this.mergeCode()
  }

  mergeCode() {
    if (typeof this.htmlCode == "object") this.htmlCode = ""
    if (typeof this.cssCode == "object") this.cssCode = ""
    if (typeof this.jsCode == "object") this.jsCode = ""
    this.allCodeForCopy = `
    <!DOCTYPE html>
    <html>
      <head>
        ${this.cssCode}
      </head>
      <body>
        ${this.htmlCode}
        <script>
          ${this.jsCode}
        </script>
      </body>
    </html>
    `
    this.allCode = `
    <!DOCTYPE html>
    <html>
      <head>
        ${this.cssCode}
      </head>
      <body>
        ${this.htmlCode}
        <script>
        (function () {
            console.log = function (message) {
                if (typeof message == 'object') {
                    window.parent.postMessage((JSON && JSON.stringify ? JSON.stringify(message) : message), "*");
                } else {
                    window.parent.postMessage(message, "*")
                }
            }
          })();
          ${this.jsCode}
        </script>
      </body>
    </html>
    `
    this.write(this.allCode)
  }

  update(html=null, css=null, js=null) {
    if (html != null) this.htmlCode = html
    if (css != null) this.cssCode = css
    if (js != null) this.js = js
    this.mergeCode()
  }

  write(code) {
    this.reset()
    this.iframe.contentWindow.document.open()
    this.iframe.contentWindow.document.write(code)
    this.iframe.contentWindow.document.close()
  }
}



export {IFrame, iframeConst}



// '_'
