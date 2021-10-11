//-------------------------------------------------------------------------------------------
let htmlSnippets = [
  ["h1", "<h1></h1>"],
  ["h2", "<h2></h2>"],
  ["h3", "<h3></h3>"],
  ["h4", "<h4></h4>"],
  ["div", "<div></div>"],
  [".", "<div></div>"],
  ['a', '<a href=""></a>'],
  // pars
  ['a:link', '<a href="http://"></a>'],
  ['a:mail', '<a href="mailto:"></a>'],
  ['base', '<base href="">'],
  ['br', '<br>'],
  ['link', '<link rel="stylesheet" href="">'],
  ['link:css', '<link rel="stylesheet" href="style.css">'],
  ['link:favicon', '<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">'],
  ['link:rss', '<link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">'],
  ['link:atom', '<link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">'],
  ['meta:utf', '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">'],
  ['meta:vp', '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">'],
  ['meta:compat', '<meta http-equiv="X-UA-Compatible" content="IE=7">'],
  ['script:src', '<script src=""></script>'],
  ['img', '<img src="" alt="">'],
  ['ifr', '<iframe src="" frameborder="0"></iframe>'],
  ['emb', '<embed src="" type="">'],
  ['obj', '<object data="" type=""></object>'],
  ['map', '<map name=""></map>'],
  ['map+', '<map name=""> <area shape="" coords="" href="" alt=""> </map>'],
  ['area', '<area shape="" coords="" href="" alt="">'],
  ['form', '<form action=""></form>'],
  ['form:geform:post', '<form action="" method="get"></form> <form action="" method="post"></form>'],
  ['label', '<label for=""></label>'],
  ['input', '<input type="text">'],
  ['inp', '<input type="text" name="" id="">'],
  ['input:h', '<input type="hidden" name="">'],
  ['input:p', '<input type="password" name="" id="">'],
  ['input:c', '<input type="checkbox" name="" id="">'],
  ['input:r', '<input type="radio" name="" id="">'],
  ['input:f', '<input type="file" name="" id="">'],
  ['input:s', '<input type="submit" value="">'],
  ['input:i', '<input type="image" src="" alt="">'],
  ['input:b', '<input type="button" value="">'],
  ['input:reset', '<input type="reset" value="">'],
  ['select', '<select name="" id=""></select>'],
  ['select+', '<select name="" id=""> <option value=""></option> </select>'],
  ['opt', '<option value=""></option>'],
  ['tarea', '<textarea name="" id="" cols="30" rows="10"> </textarea>'],
  ['video', '<video src=""></video>'],
  ['audio', '<audio src=""></audio>'],
  ['bq', '<blockquote></blockquote>'],
  ['fst', '<fieldset></fieldset>'],
  ['btn', '<button></button>'],
  ['btn:s', '<button type="submit"></button>'],
  ['btn:b', '<button type="button"></button>'],
  ['btn:r', '<button type="reset"></button>'],
  ['sect', '<section></section>'],
  ['art', '<article></article>'],
  ['hdr', '<header></header>'],
  ['ftr', '<footer></footer>'],
  ['str', '<strong></strong>'],
  ['ol+', '<ol> <li></li> </ol>'],
  ['ul+', '<ul> <li></li> </ul>'],
  ['dl+', '<dl> <dt></dt> <dd></dd> </dl>'],
  ['table', '<table></table>'],
  ['table+', '<table> <tr> <td></td> </tr> </table>'],
  ['tr+', '<tr> <td></td> </tr>'],
  ['c', '<!-- Комментарий -->'],
  ['cc:ie6', '<!--[if lte IE 6]> <![endif]-->'],
  ['cc:ie', '<!--[if IE]> <![endif]-->'],
  ['cc:noie', '<!--[if !IE]><!--> <!--<![endif]-->']
];
//-------------------------------------------------------------------------------------------
let cssSnippets = [
  ["m", "margin:"],
  ["p", "padding:"],
  ["media", `@media {

}`]
];
//-------------------------------------------------------------------------------------------
let jsSnippets = [
  ["cl", "console.log();"],
  ["l", "let"],
  ["c", "const"],
  ["f", `function () {

}`],
  ["cca", "charCodeAt()"]
];
//-------------------------------------------------------------------------------------------
