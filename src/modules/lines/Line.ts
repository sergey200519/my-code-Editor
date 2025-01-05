import { Keyboard } from "../keyboard/Keyboard";
import { KeyboardAction } from "../keyboard/KeyboardAction";
import { KeyboardInputResult, UserCodeEditorContext } from "../types/types";

interface IBaseLine {
    putCursor(): void;
    initRow(): void;
    viewCode(code: string): string;

    // Text edit methods
    insertText(text: string, data: KeyboardInputResult): void;
    deletePreviousChar(): void;
    moveCursorLeft(): void;
    moveCursorRight(): void;
    moveCursorUp(): void;
    moveCursorDown(): void;
    pageUp(): void;
    pageDown(): void;

    copy(): void;
    paste(): void;
    cut(): void;
    undo(): void;
    redo(): void;
    // End of text edit methods
}

export abstract class BaseLine implements IBaseLine {
    private userCodeBox: HTMLElement;
    protected context: UserCodeEditorContext;
    private settings: any;
    private cursor: any;
    private keyboard: any;
    row: HTMLElement | undefined;
    rowText: string;
    rowCursorPosition: number;
    view: any;
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
    insertText(text: string, data: KeyboardInputResult): void {
        // this.rowText += data.text;
        this.rowText = this.rowText.slice(0, this.rowCursorPosition) + data.text + this.rowText.slice(this.rowCursorPosition);
        this.shiftAdd = 1;
    }
    deletePreviousChar(): void {
        this.rowText = this.rowText.slice(0, -1);
    }
    moveCursorLeft(): void {
        if (this.rowCursorPosition > 0) {
            this.rowCursorPosition--;
        }
    }
    moveCursorRight(): void {
        if (this.rowCursorPosition < this.rowText.length) {
            this.rowCursorPosition++;
        }
    }
    moveCursorUp(): void {
        if (this.context.parentDate && (this.context.parentDate.id as number) > 0) {
            if (this.context.parentDate && typeof this.context.parentDate.prevRow === 'function') {
                this.context.parentDate.prevRow();
            }
        }
    }
    moveCursorDown(): void {
        if (this.context.parentDate && typeof this.context.parentDate.nextRow === 'function') {
            this.context.parentDate.nextRow();
        }
    }
    pageUp(): void {
        throw new Error("Method not implemented.");
    }
    pageDown(): void {
        throw new Error("Method not implemented.");
    }
    copy(): void {
        throw new Error("Method not implemented.");
    }
    paste(): void {
        throw new Error("Method not implemented.");
    }
    cut(): void {
        throw new Error("Method not implemented.");
    }
    undo(): void {
        throw new Error("Method not implemented.");
    }
    redo(): void {
        throw new Error("Method not implemented.");
    }

    putCursor() {
        this.cursor.putCursor(this.rowCursorPosition + this.shiftAdd + 1, this);
        this.rowCursorPosition += this.shiftAdd;
        this.shiftAdd = 0;
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
            KeyboardAction.action(data, this);
        });
    }

    abstract viewCode(code: string): string;
}
