let html = document.querySelector(".user_code_html")
let css = document.querySelector(".user_code_css")
let js = document.querySelector(".user_code_js")
let iframemy = document.querySelector("#ifr");


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


function htmlCode() {
  //console.log("html");
  let teg = html.value;
  let js_code = js.value
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
  //let innerDoc = iframe.contentWindow.document.body.innerHTML = teg;
  let n = document.querySelector(".user_code_html").value.split('\n').length;
  let span = "";
  let i = 1;
  while (i <= n) {
    span += "<span>" + String(i) + "</span>"
    i++
  }
  document.querySelector(".user_code_html_n").innerHTML = span
  let scroll = html.pageYOffset || html.scrollTop;
  //console.log(scroll);
  document.querySelector(".user_code_html_n").scroll(0, scroll)
  cssCode()
}
let keyhtml;
function keyPressed(e) {
	var keyCode;
	if (window.event) {
		keyCode = window.event.keyCode;
	} else if (e) {
		keyCode = e.which;
	}
  keyhtml = keyCode;
}
htmlCode()
html.oninput = function funhtml() {
  htmlCode()
}
window.addEventListener('keydown', function() {
  //console.log("dfghjkll;lkjhghyui");
  if (html === document.activeElement) {
    //console.log("active");
    document.onkeydown = keyPressed;
    if (keyhtml == 38 || keyhtml == 40) {
      console.log(3840);
      htmlCode()
    }
  }
});



function cssCode() {
  //console.log("css");
  let teg = css.value
  let iframe = document.querySelector("#ifr");
  let innerDoc = iframe.contentWindow.document.head.innerHTML = teg
  let n = document.querySelector(".user_code_css").value.split('\n').length;
  let span = "";
  let i = 1;
  while (i <= n) {
    span += "<span>" + String(i) + "</span>"
    i++
  }
  document.querySelector(".user_code_css_n").innerHTML = span
  let scroll =  css.pageYOffset || css.scrollTop;
  console.log(scroll);
  document.querySelector(".user_code_css_n").scroll(0, scroll)
}
let keycss;
cssCode()
css.oninput = function () {
  cssCode()
}
function csskeyPressed(e) {
	let keyCode;
	if (window.event) {
		keyCode = window.event.keyCode;
	} else if (e) {
		keyCode = e.which;
	}
  keycss = keyCode;
}
window.addEventListener('keydown', function() {
  if (css === document.activeElement) {
    console.log("active");
    document.onkeydown = csskeyPressed;
    if (keycss == 38 || keycss == 40) {
      console.log("38");
      cssCode()
    }
  }
});

function jscode() {
  let parents = document.querySelector(".right_side_of_code")
  //console.log("js");
  let teg = html.value;
  let js_code = js.value
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
  //let innerDoc = iframe.contentWindow.document.body.innerHTML = teg;
  let n = document.querySelector(".user_code_js").value.split('\n').length;
  let span = "";
  let i = 1;
  while (i <= n) {
    span += "<span>" + String(i) + "</span>"
    i++
  }
  document.querySelector(".user_code_js_n").innerHTML = span
  let scroll = js.pageYOffset || js.scrollTop
  console.log(scroll);
  document.querySelector(".user_code_js_n").scroll(0, scroll)
}
let keyjs;
js.oninput = function () {
  jscode()
}
function jskeyPressed(e) {
	let keyCode;
	if (window.event) {
		keyCode = window.event.keyCode;
	} else if (e) {
		keyCode = e.which;
	}
  keyjs = keyCode;
}
window.addEventListener('keydown', function() {
  if (js === document.activeElement) {
    console.log("active");
    document.onkeydown = jskeyPressed;
    if (keyjs == 38 || keyjs == 40) {
      console.log("38");
      jscode()
    }
  }
});
// js.addEventListener("change", e => {
//   jscode()
// });


let inputFontSize = document.querySelector(".font-size_input");
inputFontSize.addEventListener("change", e => {
document.documentElement.style.setProperty("--font-size", inputFontSize.value + "px");
  let time = inputFontSize + 2
  document.documentElement.style.setProperty("--line_h", time + "px");
});


let btn = document.querySelector(".btn");
let pre = document.querySelector(".answer_code_in_html")
btn.addEventListener("click", e => {
  let answer = "<!DOCTYPE html>"
  answer += iframemy.contentWindow.document.querySelector('html').outerHTML
  navigator.clipboard.writeText(answer)
  document.documentElement.style.setProperty("--top_popap", "15px")
  function des() {
    document.documentElement.style.setProperty("--top_popap", "-115px")
  }
  setTimeout(des, 2000)
  pre.innerText = answer
});

window.onload = function(){
   let allcode = document.documentElement.innerHTML;
};



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
  let windowWidth = window.innerWidth;
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
  if (width >= windowWidth) {
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
  // let width = document.querySelector(".right_side_of_code_inner").offsetWidth;
  // document.querySelector(".width_preview_in_html").value = width;
}



document.querySelector(".width_preview_in_html").addEventListener("change", e => {
  funWidth_preview()
});



// определяем функцию, которая будет выдавать номер клавиши
// function keyPressed(e) {
// 	var keyCode;
// 	if (window.event) {
// 		keyCode = window.event.keyCode;
// 	} else if (e) {
// 		keyCode = e.which;
// 	}
//   alert(keyCode);
// }
//
// document.onkeydown = keyPressed;









//end
