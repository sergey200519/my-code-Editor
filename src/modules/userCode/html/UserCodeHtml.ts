import { LineHtml } from "../../lines/LineHtml";
import { UserCodeEditorContext } from "../../types/types";
import { UserCode } from "../UserCode";

export class UserCodeHtml extends UserCode {   
    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        super(userCodeBox, context);
        console.log("html");
        
        this.createNewRow();
        this.createNewRow();
    }
    createNewRow() {
        const line = new LineHtml(this.userCodeBox, this.context);
        // this.rows[this.rows.length + 1] = line.row;
        // this.userCodeBox.appendChild(line.row);
    }
}