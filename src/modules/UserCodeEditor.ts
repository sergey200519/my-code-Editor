import { UserCodeHtml  } from "./userCode/html/UserCodeHtml";
import { Cursor } from "./cursoor/Cursor";
import { Keyboard } from "./keyboard/Keyboard";
import { Settings } from "./settings/Settings";
import { UserCodeEditorContext } from "./types/types";


export class UserCodeEditor {
    private userCodeBox: HTMLElement;
    private settings: Settings;
    private cursor: Cursor;
    private context: UserCodeEditorContext;
    private userCodeBoxHtml: HTMLElement;
    private userCodeBoxHtmlObj: UserCodeHtml;

    constructor(userCodeBox: HTMLElement, settings: Settings) {
        this.userCodeBox = userCodeBox;
        this.settings = settings;

        this.cursor = new Cursor();

        this.context = {
            settings: this.settings,
            cursor: this.cursor
        };

        this.userCodeBoxHtml = this.userCodeBox.querySelector(".user_code-html") as HTMLElement;
        this.userCodeBoxHtmlObj = new UserCodeHtml(this.userCodeBoxHtml, this.context);
    }
}