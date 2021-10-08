if (document.body.offsetWidth < 450) {
  alert("Ширина браузера слишком мала для коимфортной работы.");
}

let html = document.querySelector(".user_code_html");
let css = document.querySelector(".user_code_css");
let js = document.querySelector(".user_code_js");
let iframemy = document.querySelector("#ifr");



// function refresh() {
//   let htmlvalue = html.value;
//   let cssvalue = css.value;
//   let jsvalue = js.value;
//   let data_body = "html=" + htmlvalue + "css=" + cssvalue + "js=" + jsvalue;

//   fetch("index.php", {
//   	method: "POST",
//     body: data_body,
//   	headers:{"content-type": "application/x-www-form-urlencoded"}
//   }).then(
//     (response) => {
//       if (response.status !== 200) {
//   			return Promise.reject();
//       } else {
//         iframemy.contentWindow.location.reload(true);
//       }
//           //return response.text()
//   })

// }
// html.oninput = function () {
//   refresh()
//   console.log("dfghjkl");
// }
// css.oninput = function () {
//   refresh()
// }
// js.oninput = function () {
//   refresh()
// }
function countReplacements(string, search, replacement) {
  let count = 0;
  const result = string.replace(search, () => {
    count++;
    return replacement;
  });
  return { count, result };
}

let iframex = document.querySelector("#ifr");
iframex.contentWindow.document.open();
let js_code = js.value = "<script> let answer = [];</script>";
iframex.contentWindow.document.write(js_code);
iframex.contentWindow.document.close();
js.value = "<script></script>";
function unification() {
  let objlog = countReplacements(js.value, /console.log\(/g, "({log:function(l){answer.push(l)}}).log(");
  let log = objlog.result;
  let n = objlog.count;
  log = log.replace("<script>", "<script> answer = [];");
  let search = "({log:function(l){answer.push(l)}}).log(";
  let nsearch = search.length;
  let point = [];
  // находим начало искомой строки.
  let i = 0;
  let j = 0;
  while (i < n) {
    let index = log.indexOf(search, j);
    point.push(index + nsearch);
    j = index + nsearch;
    i++
  }
  //console.log(point, "log: ", log[point[0] - 1], "-1", "0", log[point[0]], "0", log[point[0] + 1], log[point[0] + 2], log[point[0] + 3]);
  // находим конец искомой строки.
  i = 0;
  j = 0;
  log = StringToArray(log);
  while (i < n) {
    let lastIndex = log.indexOf(log[point[i]], point[i] + 1);
    // проверка на экронирование.
  //  console.log(lastIndex, log[point[i]], " log:   ", log[point + 1]);
  //  console.log(log[lastIndex - 1], log[lastIndex]);
    log[lastIndex + 1] += ";";
    //console.log(log);
    //console.log(log[lastIndex - 1], "000", log[lastIndex]);
    // if (log[lastIndex] == "\"" || log[lastIndex] == "\'") {
    //   console.log(log[point[i]]);
    //   i++
    //   continue;
    // }
    i++
  }
  log = arrayToString(log);
  log = log.replace("</script>", "window.parent.postMessage(answer, '*');</script>");
  //;window.parent.postMessage(answer, '*');
  let teg = html.value;
  let js_code = js.value
  js_code = arrayToString(log);
  //console.log(log);
  function script(h, js) {
    let id = substringSearch(h, "<body>")
    h = h.split("")
    h[id] = js_code + h[id]
    return arrayToString(h)
  }
  teg = script(teg, js_code);
  let iframex = document.querySelector("#ifr");
  iframex.contentWindow.document.open();
  iframex.contentWindow.document.write(teg);
  iframex.contentWindow.document.close();
  window.addEventListener("message", function(event) {
    let log = event.data
    //console.log(log);
    document.querySelector(".logs").value = log;
  });
}

function addingLi(arr, type) {
  let answer = "";
  let n = arr.length;
  let i = 0;
  while (i < n) {
    answer += "<li class=\"" + type + "_snippets_li-" + i + "\"></li>";
    i++
  }
  return answer;
}

function addingSnippets(arr, classs) {
  let n = arr.length;
  let i = 0;
  while (i < n) {
    document.querySelector(classs + i).innerText = arr[i][1] + " => " + arr[i][0];
    i++
  }
}

function searchmy(input, classs) {
  let value = input.value.trim();
	let list = document.querySelectorAll(classs);
	if (value) {
		list.forEach(elem => {
			if (elem.innerText.search(value) == -1) {
				elem.classList.add('none');
			}
		});
	} else {
		list.forEach(elem => {
			elem.classList.remove('none');
		});
	}

}

function popap(text) {
  document.querySelector(".popap_p").innerText = text;
  document.documentElement.style.setProperty("--top_popap", "15px");
  function des() {
    document.documentElement.style.setProperty("--top_popap", "-115px");
  }
  setTimeout(des, 5000);
}

function StringToArray(s) {
  let answer = [];
  let n = s.length;
  let i = 0;
  while (i < n) {
    answer[i] = s[i];
    i++
  }
  return answer;
}

function arrayToString(a) {
  let answer = ""
  let n = a.length
  let i = 0
  while (i < n) {
    answer += a[i]
    i++
  }
  return answer
}

function substringSearch(s, sear) {
  const n = s.length
  const nsear = sear.length
  let i = 0
  while (i < n) {
    let match = false
    if (s[i] == sear[0]) {
      let j = 0
      while (j < nsear && s[i] == sear[j]) {
        i++
        j++
      }
      if (j == nsear) {
        return i
      } else {
        match = true
      }
    }
    if (match == false) {
      i++
    }
  }
  return false
}

function strN(from, address) {
  let n = from.value.split('\n').length;
  let span = "";
  let i = 1;
  while (i <= n) {
    span += String(i) + "\n";
    i++
  }
  document.querySelector(address).innerHTML = span;
}

//---------------------------------------------------------------------------------------


function nSpace(n) {
  let answer = "";
  let i = 0;
  while (i < n - 1) {
    answer += " ";
    i++
  }
  return answer;
}
let nSpacelet = 0;
function nSpaceFromBehind(s, p) {
  nSpacelet = 0;
  p -= 2
  let status = true;
  let answer = false;
  let i = p;
  if (
    (s[i + 1] == "{" && s[i + 2] == "}") ||
    (s[i + 1] == "[" && s[i + 2] == "]") ||
    (s[i + 1] == "(" && s[i + 2] == ")") ||
    (s[i + 1] == '"' && s[i + 2] == '"') ||
    (s[i + 1] == "'" && s[i + 2] == "'")
  ) {
    return answer = false;

  }
  while (i >= 0) {

    if (s[i].charCodeAt(0) == 32) {
      console.log("only");
      answer = true;
      status = false;
    }
    if (answer != true && s[i] == "\n") {
      console.log("break", answer);
      break
    }
    if (s[i] == " " && s[i - 1] == " ") {
      nSpacelet += 1
    }
    i--
  }
  return answer;
}
function newlineRuleshtml(e, address) {
  let start = address.selectionStart;
  let end = address.selectionEnd;
  let code = StringToArray(address.value);
  function isClose() {
    let i = start - 1;
    while (i > 0) {
      if (code[i] == "/" && code[i - 1] == "<") {
        return true;
      } else if (code[i] == "\n") {
        return false;
      }
      i--
    }
  }
  function isClose2() {
    let i = start;
    while (i < address.value.length) {
      if (code[i - 1] == "<") {
        return true;
      } else if (code[i] == "\n") {
        return false;
      }
      i++
    }
    return false
  }
  function nTabBefore() {
    let answer = 0;
    let i = start - 1;
    while (i >= 0) {
      if (code[i] == " " && code[i - 1] == " ") {
        answer++
      } else if (code[i] == "\n") {
        break
      }
      i--
    }
    return answer + 1;
  }
  let res = func(e);
  if (res == 13 && start == end) {
    // e.preventDefault();
    let isCloseLet = isClose();
    let isCloseLet2 = isClose2();
    let nTabBeforeLet = nTabBefore();
    temp = StringToArray(address.value)
    if (isCloseLet2) {
      e.preventDefault();
      if (nTabBeforeLet > 1) {
        temp[start] = "\n" + nSpace(nTabBeforeLet + 1) + temp[start]
        address.value = arrayToString(temp);
        address.selectionStart = start + nTabBeforeLet + 1;
        address.selectionEnd = end + nTabBeforeLet + 1;
      } else {
        temp[start] = "\n" + nSpace(nTabBeforeLet) + temp[start];
        address.value = arrayToString(temp);
        address.selectionStart = start + nTabBeforeLet;
        address.selectionEnd = end + nTabBeforeLet;
      }
    }
    if (isCloseLet) {
      e.preventDefault();
      temp[start] = "\n" + nSpace(nTabBeforeLet + 1) + temp[start];
      address.value = arrayToString(temp);
      address.selectionStart = start + nTabBeforeLet + 1;
      address.selectionEnd = end + nTabBeforeLet + 1;
    } else {
      e.preventDefault();
      temp[start] = "\n" + nSpace(nTabBeforeLet + 1) + temp[start];
      address.value = arrayToString(temp);
      address.selectionStart = start + nTabBeforeLet + 1;
      address.selectionEnd = end + nTabBeforeLet + 1;
    }
  }
}

function htmlCode() {
  unification();
  strN(html, ".user_code_html_n");
  let scroll = html.pageYOffset || html.scrollTop;
  document.querySelector(".user_code_html_n").scroll(0, scroll);
  percent();
  cssCode();
  localStorage.setItem("html", html.value)
}
htmlCode();
html.oninput = function funhtml() {
  htmlCode();
}
// html.addEventListener('keyup', function() {
//   htmlCode();
//
// });
function func(events) {
	code = String.fromCharCode(events.keyCode);
	key = String.fromCharCode(events.keyCode);
  return code.charCodeAt(0);
	//result.innerHTML = 'Код: '+code + ', клавиша' + key;
}
function snippets(link, linkarr) {
  if (document.activeElement == link) {
    let start = link.selectionStart;
    let end = link.selectionEnd;
    if (start == end) {
      let i = start - 1;
      while (i > 0) {
        if (link.value[i] == " " || link.value[i] == ">" || link.value[i] == ";" || link.value[i] == "\n") {
          break
        }
        i = i - 1;
      }
      let answer = "";
      i++
      while (i <= start - 1) {
        answer += link.value[i];
        i++
      }
      if (i == start) {
        //console.log("=");
      }
      let j = 0;
      while (j < linkarr.length) {
        if (answer == linkarr[j][0]) {
          return linkarr[j];

        }
        j++
      }
      //console.log(answer, "keyword", html.value[start], i, start, answer.length);
      return "";
    }
  }
}
function subFunctionDoubling(e, code, start, end, address, dup) {
  e.preventDefault();
  if (code[start] <= code.length && code[start + 1].charCodeAt(0) == 32) {
    code[start] = dup;
    code[start + 1] = "\n";
  }else {
    code[start - 1] = code[start - 1] + dup;
  }
  let n = code.length;
  address.value = arrayToString(code);
  address.selectionStart = start + 1;
  address.selectionEnd = end + 1;
}
function doubling(e, address) {
  //console.log('Строковый код: ', event.code);
  let start = address.selectionStart;
  let end = address.selectionEnd;
  if (start == end) {
    let code = StringToArray(address.value);
    let key = e.charCode;
    if (e.shiftKey && key == 34) {
      subFunctionDoubling(e, code, start, end, address, '""');
    }
    if (key == 39) {
      subFunctionDoubling(e, code, start, end, address, "''");
    }
    if (e.shiftKey && key == 40) {
      subFunctionDoubling(e, code, start, end, address, "()");
    }
    if (e.shiftKey && key == 123) {
      subFunctionDoubling(e, code, start, end, address, "{}");
    }
    if (key == 91) {
      subFunctionDoubling(e, code, start, end, address, "[]");
    }
  }
}

function paste(s, address, npaste) {
  let selectionStartEnd = address.selectionStart;
  console.log("tab", selectionStartEnd);
  let arr = StringToArray(address.value);
  if (s == "  ") {
    arr[selectionStartEnd - 1] += s;
    address.value = arrayToString(arr);
    address.selectionEnd = selectionStartEnd + s.length;
    address.selectionStart = selectionStartEnd + s.length;
  } else {
    console.log(npaste);
    let i = 0;
    let del = selectionStartEnd - npaste;
    while (i < npaste) {
      arr[del] = "";
      del++
      console.log(del, selectionStartEnd, "185wasd");
      i++
    }
    arr[selectionStartEnd - npaste - 1] += s;
    address.value = arrayToString(arr);
    address.selectionEnd = selectionStartEnd + s.length - npaste;
    address.selectionStart = selectionStartEnd + s.length - npaste;
  }
}
html.addEventListener("keydown", function (e) {
  let res = func(e);
  if (res == 9) {
    e.preventDefault();
    let wordBefore = snippets(html, htmlSnippets);
    console.log(wordBefore, "word");
    if (wordBefore == "") {
      paste("  ", html);
    } else {
      paste(wordBefore[1], html, wordBefore[0].length)
    }
  }
  newlineRuleshtml(e, html);
});
html.addEventListener("keypress", function (event) {
 doubling(event, html);
});
document.addEventListener("selectionchange", function () {
  snippets()
});


function newlineRules(e, address) {
  let start = address.selectionStart;
  let end = address.selectionEnd;
  let res = func(e);
  if (res == 13 && start == end) {
    let start = address.selectionStart;
    let end = address.selectionEnd;
    let code = StringToArray(address.value);
    let res = func(e);
    function nTabBefore() {
      let answer = 0;
      let i = start - 1;
      while (i >= 0) {
        if (code[i] == " " && code[i - 1] == " ") {
          answer++
        } else if (code[i] == "\n") {
          break
        }
        i--
      }
      return answer;
    }
    let nTabBeforeLet = nTabBefore();
    let status = false;
    if (code[start - 1] == "{") {
      e.preventDefault();
      code[start] = "\n" + nSpace(nTabBeforeLet + 3) + code[start] + "\n";
      address.value = arrayToString(code);
      address.selectionStart = start + 3;
      address.selectionEnd = end + 3;
    } else if (code[start - 1] == ";") {
      e.preventDefault();
      code[start] = "\n" + nSpace(nTabBeforeLet + 2) + code[start];
      address.value = arrayToString(code);
      address.selectionStart = start + 3;
      address.selectionEnd = end + 3;
    }
  }
}
function cssCode() {
  //console.log("css");
  let teg = css.value
  let iframe = document.querySelector("#ifr");
  let innerDoc = iframe.contentWindow.document.head.innerHTML = teg
  strN(css, ".user_code_css_n")
  let scroll =  css.pageYOffset || css.scrollTop;
  document.querySelector(".user_code_css_n").scroll(0, scroll)
  percent();
  localStorage.setItem("css", css.value)
}
cssCode()
css.oninput = function () {
  cssCode()
}
css.addEventListener('keydown', function() {
  cssCode()
});
css.addEventListener("keydown", function (e) {
  let res = func(e);
  if (res == 9) {
    e.preventDefault();
    let wordBefore = snippets(css, cssSnippets);
    if (wordBefore == "") {
      paste("  ", css);
    } else {
      paste(wordBefore[1], css, wordBefore[0].length)
    }
  }
  newlineRules(e, css);
});
css.addEventListener("keypress", function (event) {
 doubling(event, css);
});



function jscode() {
  unification();
  strN(js, ".user_code_js_n");
  let scroll = js.pageYOffset || js.scrollTop;
  document.querySelector(".user_code_js_n").scroll(0, scroll);
  percent();
  cssCode();
  localStorage.setItem("js", js.value)
}
strN(js, ".user_code_js_n");
js.oninput = function () {
  jscode()
}
js.addEventListener('keydown', function() {
  jscode()
});
js.addEventListener("keydown", function (e) {
  let res = func(e);
  if (res == 9) {
    e.preventDefault();
    let wordBefore = snippets(js, jsSnippets);
    if (wordBefore == "") {
      paste("  ", js);
    } else {
      paste(wordBefore[1], js, wordBefore[0].length)
    }
  }
  newlineRules(e, js);
});
js.addEventListener("keypress", function (event) {
 doubling(event, js);
});

//------------------------------------------------------------------------------------------

let inputFontSize = document.querySelector(".font-size_input");
inputFontSize.addEventListener("change", e => {
document.documentElement.style.setProperty("--font-size", inputFontSize.value + "px");
  let time = inputFontSize + 2
  document.documentElement.style.setProperty("--line_h", time + "px");
  setting(true)
});


let btn = document.querySelector(".btn");
// let pre = document.querySelector(".answer_code_in_html")
btn.addEventListener("click", e => {
  let answer = "<!DOCTYPE html>"
  answer += iframemy.contentWindow.document.querySelector('html').outerHTML
  navigator.clipboard.writeText(answer)
  popap("Текст успешно скопирован в буфер обмена")
});

window.onload = function(){
   let allcode = document.documentElement.innerHTML;
};

//-----------------------------------------------------------------------------------------

let width = document.querySelector(".right_side_of_code_inner").offsetWidth;
document.querySelector(".width_preview_in_html").value = width;

window.onresize = function(event) {
  let widthr = document.querySelector(".right_side_of_code_inner").offsetWidth;
  document.querySelector(".width_preview_in_html").value = widthr;
  funWidth_preview();
  if (document.body.offsetWidth < 450) {
    alert("Ширина браузера слишком мала для коимфортной работы.");
  }
  let widthOnOff = document.querySelector(".popap_settings").offsetWidth - 25;
  document.documentElement.style.setProperty("--type-pos_settings", "fixed");
  document.documentElement.style.setProperty("--pos_settings", "-" + (widthOnOff + 25) + "px");
  document.documentElement.style.setProperty("--left-pos_on-off", "-25px");
  document.documentElement.style.setProperty("--cursor-on_off", "e-resize")
};


function funWidth_preview() {
  let width_n = document.querySelector(".user_code_js_n").offsetWidth;
  document.documentElement.style.setProperty("--flex", "row");
  let windowWidth = document.querySelector(".box_code").offsetWidth;
  width = document.querySelector(".width_preview_in_html").value
  document.documentElement.style.setProperty("--width_preview", width + "px")
  let delta = windowWidth - document.querySelector(".right_side_of_code_inner").offsetWidth - width_n;
  document.documentElement.style.setProperty("--height", "100%")
  document.documentElement.style.setProperty("--margin_right", "0 0 0 15px")
  //document.documentElement.style.setProperty("--width_left", delta + "px")
  if (delta <= 400) {
    document.documentElement.style.setProperty("--flex", "column-reverse")
    document.documentElement.style.setProperty("--width_left", "100%")
    document.documentElement.style.setProperty("--margin_right", "0 auto 15px auto")
    document.documentElement.style.setProperty("--display_right", "block")
    document.documentElement.style.setProperty("--height", "48%")
    document.documentElement.style.setProperty("--width_n", "80px")
    document.documentElement.style.setProperty("--width_code", "100%")
  }
  if (width >= (windowWidth - 30)) {
    //document.documentElement.style.setProperty("--width_left", "100%")
    document.documentElement.style.setProperty("--flex", "column-reverse")
    document.documentElement.style.setProperty("--width_preview", "100%")
    document.querySelector(".width_preview_in_html").value = windowWidth;
    popap("Ширина окна браузеpа соответственно максимальная ширина экрана ровна: " + windowWidth + "px");
  }
  if (width < 300) {
    document.documentElement.style.setProperty("--width_preview", "300px")
    let delta = windowWidth - document.querySelector(".right_side_of_code_inner").offsetWidth - width_n;
    //document.documentElement.style.setProperty("--width_left", delta + "px")
    document.querySelector(".width_preview_in_html").value = 300;
    popap("Минимальная ширина экрана 300px")
  }
}



document.querySelector(".width_preview_in_html").addEventListener("change", e => {
  funWidth_preview()
});

//-----------------------------------------------------------------------------------
document.documentElement.style.setProperty("--pos_settings", "-" + document.querySelector(".popap_settings").offsetWidth + "px");
let oldPos = false;
document.querySelector(".on-off").addEventListener('click', function() {
  setting(false)
  funWidth_preview()
});
let widthOnOff = document.querySelector(".popap_settings").offsetWidth - 25;
function setting(earlyExit) {
  if (earlyExit) {
    document.documentElement.style.setProperty("--left-pos_on-off", widthOnOff + "px");
    return "";
  }
  if (oldPos) {
    document.documentElement.style.setProperty("--type-pos_settings", "fixed");
    document.documentElement.style.setProperty("--pos_settings", "-" + (widthOnOff + 25) + "px");
    document.documentElement.style.setProperty("--left-pos_on-off", "-25px");
    document.documentElement.style.setProperty("--cursor-on_off", "e-resize")
    console.log("on");
    oldPos = false;
  }else {
    document.documentElement.style.setProperty("--type-pos_settings", "inherit");
    document.documentElement.style.setProperty("--pos_settings", "0");
    oldPos = true;
    //console.log(widthOnOff);
    document.documentElement.style.setProperty("--left-pos_on-off", (widthOnOff + 0) + "px");
    document.documentElement.style.setProperty("--cursor-on_off", "w-resize")

  }
}

let codeN = 0;
function heightCode(n) {
  if (n == 1) {
    document.documentElement.style.setProperty("--height_box", "45%")
  } else if (n == 2) {
    document.documentElement.style.setProperty("--height_box", "100%")
  } else {
    document.documentElement.style.setProperty("--height_box", "30%")
  }
}
function codeOff(link1, link2) {
  console.log("off");
  document.querySelector("." + link1).classList.add("none");
  document.querySelector("." + link1).classList.remove(link1);

  document.querySelector("." + link2).classList.add("plus");
  document.querySelector("." + link2).classList.remove("cross");
  codeN += 1;
  heightCode(codeN)
}
function CodeOn(link1, link2, link3) {
  console.log("on");
  document.querySelector("." + link1).classList.add(link2);
  document.querySelector("." + link1).classList.remove("none");

  document.querySelector("." + link3).classList.add("cross");
  document.querySelector("." + link3).classList.remove("plus");
  codeN -= 1;
  heightCode(codeN)
}
document.querySelector(".html_off").addEventListener("click", function () {
  codeOff("user_code_html_box", "tabs_html_p")
});
document.querySelector(".tabs_html_p").addEventListener("click", function () {
  if (document.querySelector(".tabs_html_p").classList.contains("cross")) {
    codeOff("user_code_html_box", "tabs_html_p")
  }else {
    CodeOn('html', "user_code_html_box", "tabs_html_p")
  }
});
//------
document.querySelector(".css_off").addEventListener("click", function () {
  codeOff("user_code_css_box", "tabs_css_p")
});
document.querySelector(".tabs_css_p").addEventListener("click", function () {
  if (document.querySelector(".tabs_css_p").classList.contains("cross")) {
    codeOff("user_code_css_box", "tabs_css_p")
  }else {
    CodeOn('css', "user_code_css_box", "tabs_css_p")
  }
});
//--------
document.querySelector(".js_off").addEventListener("click", function () {
  codeOff("user_code_js_box", "tabs_js_p")
});
document.querySelector(".tabs_js_p").addEventListener("click", function () {
  if (document.querySelector(".tabs_js_p").classList.contains("cross")) {
    codeOff("user_code_js_box", "tabs_js_p")
  }else {
    CodeOn('js', "user_code_js_box", "tabs_js_p")
  }
});
//---------------------------------
function percent() {
  let htmlN = html.value.length;
  let cssN = css.value.length;
  let jsN = js.value.length;
  let sum = (htmlN + cssN + jsN) / 100;
  // console.log(sum);
  let htmlP = (htmlN / sum).toFixed(2);
  document.querySelector(".html-percent").innerHTML = htmlP + "%";

  let cssP = (cssN / sum).toFixed(2);
  document.querySelector(".css-percent").innerHTML = cssP + "%";

  let jsP = (jsN / sum).toFixed(2);
  document.querySelector(".js-percent").innerHTML = jsP + "%";
}

//--------------------------------------------------------------------------------

function framework(link) {
  let answer = link + js.value;
  js.value = answer;
}
document.querySelector(".bootstrap").addEventListener("click", function () {
  framework('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script')
});
document.querySelector(".vue").addEventListener("click", function () {
  framework('<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>')
});
document.querySelector(".react").addEventListener("click", function () {
  framework('<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script><script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script><script src="like_button.js"></script>')
});

//------------------------------------------------------------------------------------

document.querySelector(".html_snippets_ul").innerHTML = addingLi(htmlSnippets, "html");
addingSnippets(htmlSnippets, ".html_snippets_li-")
document.querySelector(".html_snippets_input").oninput = function () {
  searchmy(document.querySelector(".html_snippets_input"), ".html_snippets_ul li")
}
//-------_______---------
document.querySelector(".css_snippets_ul").innerHTML = addingLi(cssSnippets, "css");
addingSnippets(cssSnippets, ".css_snippets_li-")
document.querySelector(".css_snippets_input").oninput = function () {
  searchmy(document.querySelector(".css_snippets_input"), ".css_snippets_ul li")
}
//-------_______---------
document.querySelector(".js_snippets_ul").innerHTML = addingLi(jsSnippets, "js");
addingSnippets(jsSnippets, ".js_snippets_li-")
document.querySelector(".js_snippets_input").oninput = function () {
  searchmy(document.querySelector(".js_snippets_input"), ".js_snippets_ul li")
}

//-----------------------------------------------------------------------------------------

function new_snippets(link, array) {
  let arr = Array(document.querySelector(".new_snippets_" + link + "_input").value);
  arr[1] = document.querySelector(".new_snippets_" + link + "_input2").value;
  if (arr[0] != "" && arr[1] != "") {
    array.push(arr);
    popap("Снипет создан успешно")
  } else {
    popap("Оба поля должны быть заполнены")
  }
}
document.querySelector(".new_snippets_html_button").addEventListener("click", function () {
  new_snippets("html", htmlSnippets)
});
document.querySelector(".new_snippets_css_button").addEventListener("click", function () {
  new_snippets("css", cssSnippets)
});
document.querySelector(".new_snippets_js_button").addEventListener("click", function () {
  new_snippets("js", jsSnippets)
});



















//end
