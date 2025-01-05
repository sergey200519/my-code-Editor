import { BaseLine } from "../lines/Line";
import { UserCodeEditorContext } from "../types/types";

interface IRows {
    [key: number]: BaseLine;
}

interface IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;
    parentDate: {
        nextRow: () => void;
        prevRow: () => void;
    };

    nextRow(): void;
    prevRow(): void;
}

export class UserCode implements IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;
    parentDate: {
        nextRow: () => void;
        prevRow: () => void;
    };

    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        this.userCodeBox = userCodeBox;
        this.context = context;

        this.rows = {};
        this.parentDate = {
            nextRow: this.nextRow,
            prevRow: this.prevRow,
        };
    }

    nextRow() {
        // this.context.cursor.putCursor(0, this.rows[0].row as HTMLElement);
    }
    prevRow() {}
}