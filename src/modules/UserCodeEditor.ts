import { UserCodeHtml  } from "./UserCode/html/UserCodeHtml";
import { Cursor } from "./Cursor/Cursor";
import { Keyboard } from "./Keyboard/Keyboard";
import { Settings } from "./Settings/Settings";
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
            cursor: this.cursor
        };

        this.userCodeBoxHtml = this.userCodeBox.querySelector(".user_code-html") as HTMLElement;
        this.userCodeBoxHtmlObj = new UserCodeHtml(this.userCodeBoxHtml, this.context);
    }
}