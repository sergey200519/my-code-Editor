export class Settings {
  static letterWidth = 9.6;


  static pairedCharacters = {
    "'": "''",
    '"': '""',
    "[": "[]",
    "{": "{}",
    "(": "()",
    "`": "``"
  };

  static rowClass = "user_code-row";
  static rowClassFocused = "user_code-row-focused";
  static rowCursorId = "user_code-row-cursor";
  static rowCursorContent = "&nbsp;";

  static listKeysSpecialCharacters = ["Backspace", "Enter",
    "Shift", "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown",
    "Alt", "Meta", "Control", "CapsLock", "Tab", "Escape",
    "PageUp", "PageDown", "Home", "End", "PrintScreen",
    "Insert", "Delete", "Pause"];



  static TegForCodeView = "span";

  static HtmlTegClassView = "html_teg";
  static AttributeHtmlTegClassView = `${this.HtmlTegClassView}-attribute`;
  static AttributeStringHtmlTegClassView = `${this.AttributeHtmlTegClassView}-string`;
  static HtmlTextClassView = `${this.HtmlTegClassView}-text`;

}
