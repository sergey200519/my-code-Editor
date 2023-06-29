import {html, css, js} from "./userCode.js"

function widthUserCodeBox(count) {
  if (count == 3) {
    document.documentElement.style.setProperty("--width_user_code_box", "31%")
  } else if (count == 2) {
    document.documentElement.style.setProperty("--width_user_code_box", "46%")
  } else {
    document.documentElement.style.setProperty("--width_user_code_box", "100%")
  }
}

// -----------------------------------------------------------------------------

function percent() {
  let htmlN = html.value.length;
  let cssN = css.value.length;
  let jsN = js.value.length;
  let sum = (htmlN + cssN + jsN) / 100;
  let htmlP = (htmlN / sum).toFixed(2);
  document.querySelector(".html-percent").innerHTML = htmlP + "%";

  let cssP = (cssN / sum).toFixed(2);
  document.querySelector(".css-percent").innerHTML = cssP + "%";

  let jsP = (jsN / sum).toFixed(2);
  document.querySelector(".js-percent").innerHTML = jsP + "%";
}

// -----------------------------------------------------------------------------

function fromStrToArray(str) {
  let answer = []
  for (let i = 0; i < str.length; i++) {
    answer.push(str[i])
  }
  return answer
}
function fromArrayToStr(arr) {
  let answer = ""
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i]
  }
  return answer
}

// -----------------------------------------------------------------------------

function wordBack(text, position) {
  let answer = false
  let i = position
  while (i >= 0) {
    if (text[i] == " " || text[i] == ">" || text[i] == "\n") {
      break
    } else {
      if (answer == false) {
        answer = ""
      }
      answer += text[i]
    }
    i--
  }
  if (answer != false) {
    return answer.split("").reverse().join("")
  }
  return answer
}

function wordBackForJsAndCss(text, position) {
  let answer = false
  let i = position
  while (i >= 0) {
    if (text[i] == " " || text[i] == "\n" || text[i] == ";") {
      break
    } else {
      if (answer == false) {
        answer = ""
      }
      answer += text[i]
    }
    i--
  }
  if (answer != false) {
    return answer.split("").reverse().join("")
  }
  return answer
}

// -----------------------------------------------------------------------------

function findSnipets(list, snipet) {
  let i = 0
  while (i < list.length) {
    if (list[i][0] == snipet) {
      return list[i][1]
    }
    i++
  }
  return false
}

// -----------------------------------------------------------------------------

function replaceForSnipets(arr, word, snipet, cursor, returnData="arr") {
  let answer = []
  let i = 0
  let j = 0
  let wordStatus = false
  let end = false
  while (i < arr.length) {
    if (i == cursor - word.length && !wordStatus) {
      wordStatus = true
      answer.push(snipet)
    }
    if (wordStatus) {
      if (j >= word.length) {
        wordStatus = false
        answer.push(arr[i])
      }
      j++
      i++
      continue
    }
    answer.push(arr[i])
    i++
  }
  if (returnData == "arr") return answer
  if (returnData == "str") return fromArrayToStr(answer)
}

// -----------------------------------------------------------------------------

function popap(text) {
  document.querySelector(".popap_text").innerText = text;
  document.documentElement.style.setProperty("--popap_top", "15px");
  function des() {
    document.documentElement.style.setProperty("--popap_top", "-115px");
  }
  setTimeout(des, 10000);
}

export {widthUserCodeBox, percent, fromStrToArray, fromArrayToStr, wordBack, findSnipets, replaceForSnipets, popap, wordBackForJsAndCss}
