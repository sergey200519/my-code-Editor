import { BaseLine } from "../lines/Line";
import { UserCodeEditorContext } from "../types/types";

interface IRows {
    [key: number]: HTMLElement | undefined;
}

interface IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;
}

export class UserCode implements IUserCode {
    userCodeBox: HTMLElement;
    context: UserCodeEditorContext;
    rows: IRows;

    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        this.userCodeBox = userCodeBox;
        this.context = context;

        this.rows = {};
    }
}