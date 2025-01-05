import { UserCodeEditorContext } from "../types/types";

export class BaseLine {
    private userCodeBox: HTMLElement;
    protected context: UserCodeEditorContext;
    private settings: any;
    private cursor: any;
    private keyboard: any;
    protected row: HTMLElement | undefined;
    private rowText: string;
    private rowCursorPosition: number;
    protected view: any;

    
    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        this.userCodeBox = userCodeBox;
        this.context = context;
        this.settings = this.context.settings;
        this.cursor = this.context.cursor;
        this.keyboard = this.context.keyboard;

        this.row;
        this.rowText = "";
        this.rowCursorPosition = 0;

        this.view;
        this.initRow();
        this.view.viewCode("<h1 class=\"title\" dragable id=\"ind\">hi</h1><p class=\"text\" id=\"sdfrty\">par pu</p> <p>hi hi</p> <p drag>par    pu</p>");
        // this.view.viewCode("<g");
    }

    initRow() {
        this.row = document.createElement("div");
        this.row.className = this.settings.rowClass
        this.row.setAttribute("tabindex", "0")
        this.userCodeBox.appendChild(this.row);

        this.row.addEventListener("focus", (event: FocusEvent) => {
            if (this.row) {
                this.row.classList.add(this.settings.rowClassFocused);
            }
        })
        this.row.addEventListener("blur", () => {
            if (this.row) {
                this.row.classList.remove(this.settings.rowClassFocused);
            }
        })

        this.row.addEventListener("click", (event: MouseEvent) => {
            this.cursor.putCursor(event, this)
        })

        this.row.addEventListener("keydown", (event: KeyboardEvent) => {
            const data = this.keyboard.input(event);
            if (data.simpleCharacter) this.rowText += data.text;
            else {
                
            }
            if (this.row && this.view) {
                this.row.innerHTML = this.view.viewCode(this.rowText);
            }
        })
    }
}
