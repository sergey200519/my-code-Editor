import { Cursor } from "../Cursor/Cursor";
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
    private cursor: Cursor;
    // private keyboard: any;
    row: HTMLElement | undefined;
    rowText: string;
    rowCursorPosition: number;
    view: any;
    private shiftAdd: number;



    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        this.userCodeBox = userCodeBox;
        this.context = context;

        this.cursor = context.cursor;

        this.row;
        this.rowText = "";
        this.rowCursorPosition = 0;

        this.view;

        this.shiftAdd = 0;
    }


    putCursor(): void {
        throw new Error("Method not implemented.");
    }
    initRow(): void {
        throw new Error("Method not implemented.");
    }
    viewCode(code: string): string {
        throw new Error("Method not implemented.");
    }
    insertText(text: string, data: KeyboardInputResult): void {
        throw new Error("Method not implemented.");
    }
    deletePreviousChar(): void {
        throw new Error("Method not implemented.");
    }
    moveCursorLeft(): void {
        throw new Error("Method not implemented.");
    }
    moveCursorRight(): void {
        throw new Error("Method not implemented.");
    }
    moveCursorUp(): void {
        throw new Error("Method not implemented.");
    }
    moveCursorDown(): void {
        throw new Error("Method not implemented.");
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

}