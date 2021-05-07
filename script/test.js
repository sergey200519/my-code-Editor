let html = document.querySelector(".user_code_html")
let css = document.querySelector(".user_code_css")
let js = document.querySelector(".user_code_js")
let iframemy = document.querySelector("#ifr");

function unification() {
  let teg = html.value;
  let js_code = js.value
  function script(h, js) {
    let id = substringSearch(h, "<body>")
    //console.log(id)
    h = h.split("")
    h[id] = js_code + h[id]
    return arrayToString(h)
  }
  teg = script(teg, js_code)
  let iframex = document.querySelector("#ifr");
  iframex.contentWindow.document.open();
  iframex.contentWindow.document.write(teg);
  iframex.contentWindow.document.close();
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
  let nsear = sear.length
  let i = 0
  while (i + nsear <= n) {
    if (s[i] == sear[0]) {
      let time = 0
      let j = 0
      while (j < nsear) {
        if (s[i] == sear[j]) {
          time++
        }
        i++
        j++
      }
      if (time == nsear) {
        return i
      }
    }
    i++
  }
  return false
}

function strN(from, address) {
  let n = from.value.split('\n').length;
  let span = "";
  let i = 1;
  while (i <= n) {
    span += "<span>" + String(i) + "</span>";
    i++
  }
  document.querySelector(address).innerHTML = span;
}

//---------------------------------------------------------------------------------------

function htmlCode() {
  unification();
  strN(html, ".user_code_html_n");
  let scroll = html.pageYOffset || html.scrollTop;
  document.querySelector(".user_code_html_n").scroll(0, scroll);
  percent()
  cssCode();
}
htmlCode();
html.oninput = function funhtml() {
  htmlCode();
}
html.addEventListener('keydown', function() {
  htmlCode();
});



function cssCode() {
  //console.log("css");
  let teg = css.value
  let iframe = document.querySelector("#ifr");
  let innerDoc = iframe.contentWindow.document.head.innerHTML = teg
  strN(css, ".user_code_css_n")
  let scroll =  css.pageYOffset || css.scrollTop;
  document.querySelector(".user_code_css_n").scroll(0, scroll)
  percent()
}
cssCode()
css.oninput = function () {
  cssCode()
}
css.addEventListener('keydown', function() {
  cssCode()
});

function jscode() {
  unification()
  strN(js, ".user_code_js_n")
  let scroll = js.pageYOffset || js.scrollTop
  document.querySelector(".user_code_js_n").scroll(0, scroll)
  percent()
  cssCode()
}
js.oninput = function () {
  jscode()
}
js.addEventListener('keydown', function() {
  jscode()
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
  document.documentElement.style.setProperty("--top_popap", "15px")
  function des() {
    document.documentElement.style.setProperty("--top_popap", "-115px")
  }
  setTimeout(des, 2000)
  // pre.innerText = answer
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
  funWidth_preview()
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
    alert("Ширина окна браузеpа соответственно максимальная ширина экрана ровна: " + windowWidth + "px")
  }
  if (width < 300) {
    document.documentElement.style.setProperty("--width_preview", "300px")
    let delta = windowWidth - document.querySelector(".right_side_of_code_inner").offsetWidth - width_n;
    //document.documentElement.style.setProperty("--width_left", delta + "px")
    document.querySelector(".width_preview_in_html").value = 300;
    alert("Минимальная ширина экрана 300px")
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

function setting(earlyExit) {
  document.documentElement.style.setProperty("--transition-on_off", "1s")
  let widthOnOff = document.querySelector(".popap_settings").offsetWidth - 25;
  if (earlyExit) {
    document.documentElement.style.setProperty("--transition-on_off", "0s");
    document.documentElement.style.setProperty("--left-pos_on-off", widthOnOff + "px");
    return "";
  }
  if (oldPos) {
    document.documentElement.style.setProperty("--type-pos_settings", "fixed");
    document.documentElement.style.setProperty("--pos_settings", "-" + (widthOnOff + 25) + "px");
    document.documentElement.style.setProperty("--left-pos_on-off", "-25px");
    document.documentElement.style.setProperty("--cursor-on_off", "e-resize")
    oldPos = false;
  }else {
    document.documentElement.style.setProperty("--type-pos_settings", "inherit");
    document.documentElement.style.setProperty("--pos_settings", "0");
    oldPos = true;
    console.log(widthOnOff);
    document.documentElement.style.setProperty("--left-pos_on-off", widthOnOff + "px");
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

//end
