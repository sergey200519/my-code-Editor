import { Keyboard } from "../keyboard/Keyboard";
import { KeyboardInputResult, UserCodeEditorContext } from "../types/types";

export abstract class BaseLine {
    private userCodeBox: HTMLElement;
    protected context: UserCodeEditorContext;
    private settings: any;
    private cursor: any;
    private keyboard: any;
    protected row: HTMLElement | undefined;
    rowText: string;
    rowCursorPosition: number;
    protected view: any;
    private shiftAdd: number;

    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        this.userCodeBox = userCodeBox;
        this.context = context;
        this.settings = this.context.settings;
        this.cursor = this.context.cursor;

        this.row;
        this.rowText = "";
        this.rowCursorPosition = 0;

        this.view;

        this.shiftAdd = 0;

        this.initRow();
    }

    putCursor() {
        this.cursor.putCursor(this.rowCursorPosition + this.shiftAdd + 1, this);
        this.rowCursorPosition += this.shiftAdd;
    }

    initRow() {
        this.row = document.createElement("div");
        this.row.className = this.settings.rowClass;
        this.row.setAttribute("tabindex", "0");
        this.userCodeBox.appendChild(this.row);

        this.row.addEventListener("focus", (event: FocusEvent) => {
            if (this.row) {
                this.row.classList.add(this.settings.rowClassFocused);
            }
        });
        this.row.addEventListener("blur", () => {
            if (this.row) {
                this.row.classList.remove(this.settings.rowClassFocused);
            }
        });

        this.row.addEventListener("click", (event: MouseEvent) => {
            this.cursor.initPutCursor(event, this);
            this.rowCursorPosition = this.cursor.positionN;
        });

        this.row.addEventListener("keydown", (event: KeyboardEvent) => {
            const data: KeyboardInputResult = Keyboard.input(event);
            if (data.simpleCharacter) {
                this.rowText += data.text;
                this.shiftAdd = 1;
            } else {
                console.log("else");
            }
            if (this.row && this.view) {
                this.row.innerHTML = this.view.viewCode(this.rowText);
                this.putCursor();
            }
        });
    }

    abstract viewCode(code: string): string;
}
