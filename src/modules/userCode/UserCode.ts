import { BaseLine } from "../lines/Line";
import { UserCodeEditorContext } from "../types/types";

interface IRows {
    [key: number]: BaseLine;
}

interface IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;
    parentData: {
        nextRow: (id: number) => void;
        prevRow: (id: number) => void;
        self?: UserCode;
    };

    nextRow(id: number): void;
    prevRow(id: number): void;
}

export class UserCode implements IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;
    parentData: { 
        nextRow: (id: number) => void;
        prevRow: (id: number) => void;
        self?: UserCode;
    };

    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        this.userCodeBox = userCodeBox;
        this.context = context;

        this.rows = {};
        this.parentData = {
            nextRow: this.nextRow,
            prevRow: this.prevRow.bind(this),
            self: this,
        };
        console.log("initial base", this);
        
    }

    nextRow(id: number) {

        // this.context.cursor.putCursor(0, this.rows[0].row as HTMLElement);
    }
    prevRow(id: number) {
        const newRow = this.rows[id - 1];
        if (newRow) {
            this.context.cursor.moveCursorToLine(newRow, 0);
            // this.context.cursor.putCursor(0, mewRow.row as HTMLElement);
        }
    }
}