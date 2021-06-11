<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Редактор кода</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="img/logo.png">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap" rel="stylesheet">
  </head>
  <body>
    <!-- <iframe id="5afb55c9-e388-48a4-8feb-e479e7bc9a52" src="https://www.vectary.com/viewer/v1/?model=5afb55c9-e388-48a4-8feb-e479e7bc9a52&env=kiara9dusk" frameborder="0" width="100%" height="480"></iframe> -->
    <section class="settings">
      <div class="on-off"></div>
      <div class="popap_settings">
        <h1>Редактор кода</h1>
        <p>Это редакто для html, css, js и <br> для работы с vue и react.</p>
        <h2>Настройки</h2>
        <label class="settings"><input class="font-size_input" type="number" value="16"><p>размер шрифта</p><br>
        <input type="number" class="width_preview_in_html" placeholder="ширина сайта"><p>ширина экрана</p><br><p>(это без учёта границ <br> которые равны 2px)</p> </label>
        <div class="answer_code"><p class="answer_code_in_html" wrap="hard"></p><br><button class="btn">Получить скомпелированый код</button></div>
        <div class="tabs">
          <div class="tabs_html"><p class="tabs_html_p cross">HTML</p><div class="html-percent"></div></div>
          <div class="tabs_css"><p class="tabs_css_p cross">CSS</p><div class="css-percent"></div></div>
          <div class="tabs_js"><p class="tabs_js_p cross">JS</p><div class="js-percent"></div></div>
        </div>
        <div class="frameworks">
          <div class="framework">
            <h3><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></h3>
            <div class="plus bootstrap"></div>
          </div>
          <div class="framework">
            <h3><a href="https://ru.vuejs.org/" target="_blank">Vue.js</a></h3>
            <div class="plus vue"></div>
          </div>
          <div class="framework">
            <h3><a href="https://reactjs.org/" target="_blank">React.js</a></h3>
            <div class="plus react"></div>
          </div>
        </div>
        <div class="search_snippets">
          <h2>Поиск снипетов</h2>
          <div class="html_snippets snippets_box">
            <input class="html_snippets_input" type="text" placeholder="Поиск html снипетов">
            <div>
              <ul class="html_snippets_ul">

              </ul>
            </div>
          </div>
          <div class="css_snippets snippets_box">
            <input class="css_snippets_input" type="text" placeholder="Поиск css снипетов">
            <div>
              <ul class="css_snippets_ul">

              </ul>
            </div>
          </div>
          <div class="js_snippets snippets_box">
            <input class="js_snippets_input" type="text" placeholder="Поиск js снипетов">
            <div>
              <ul class="js_snippets_ul">

              </ul>
            </div>
          </div>
          <div class="new_snippets">
            <h2>Сделать свой снипет</h2>
            <p>Надо писать по образцу: в первое поле пишите ключевое слово а во второе код.</p>
            <div class="new_snippets_html"><input class="new_snippets_html_input"><input class="new_snippets_html_input2"><button class="new_snippets_html_button">Сделать html снипет</button></div>
            <div class="new_snippets_css"><input class="new_snippets_css_input"><input class="new_snippets_css_input2"><button class="new_snippets_css_button">Сделать css снипет</button></div>
            <div class="new_snippets_js"><input class="new_snippets_js_input"><input class="new_snippets_js_input2"><button class="new_snippets_js_button">Сделать js снипет</button></div>
          </div>
        </div>
        <footer>
          <p>Автор: Оборок Сергей В</p>
          <br>
          <a href="https://sergey200519.github.io/portfolio2/" target="_blank">Портфолио</a>
          <br>
          <p>v 0.8</p>
        </footer>
      </div>
    </section>
    <section class="box_code">
      <div class="left">
        <div class="user_code_html_box html">
          <div class="html_off code_off">&#215;</div>
        <!-- <div class="user_code_html_n"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div> -->
        <textarea class="user_code_html_n"></textarea>
        <textarea class="user_code_html" placeholder="HTML" wrap="off">
<!DOCTYPE html>
<html>
  <body>
    <h1>Добро пожаловать</h1>
  </body>
</html>
          </textarea>
        </div>
        <div class="user_code_css_box css">
          <div class="css_off code_off">&#215;</div>
          <textarea class="user_code_css_n"></textarea>
          <textarea class="user_code_css">
<style>
h1 {
  font-size: 30px;
  text-align: center;
}
</style>
          </textarea>
        </div>
        <div class="user_code_js_box js">
          <div class="js_off code_off">&#215;</div>
          <textarea class="user_code_js_n">123</textarea>
          <textarea class="user_code_js">
<script>

</script>
          </textarea>
        </div>
      </div>
      <div class="right_side_of_code">
        <iframe src="fiframe.php" width="" height="" class="right_side_of_code_inner" id="ifr"></iframe>
      </div>
    </section>
    <div class="popap"><p class="popap_p"></p></div>
    <script src="script/snippets.js"></script>
    <script src="script/script.js"></script>
  </body>
</html>
