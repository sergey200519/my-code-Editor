import { BaseLine } from "../Line/Line";
import { UserCodeEditorContext } from "../types/types";


interface IRows {
    [key: number]: BaseLine;
}

interface IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;
    parentData?: {
        nextRow: (id: number) => void;
        prevRow: (id: number) => void;
        self?: UserCode;
    };

    nextRow(id: number): void;
    prevRow(id: number): void;
}


export class UserCode {
    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) { }
}