import { LineHtml } from "../../lines/LineHtml";
import { UserCodeEditorContext } from "../../types/types";
import { UserCode } from "../UserCode";

export class UserCodeHtml extends UserCode {   
    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        super(userCodeBox, context);
        console.log("html");
        
        this.createNewRow();
        this.createNewRow();

        console.log(this.rows, "html rows");
        
    }
    createNewRow() {
        const id = Object.keys(this.rows).length;
        const line = new LineHtml(this.userCodeBox, {...this.context, parentDate: {...this.parentDate, id: id}}); 
        this.rows[id] = line;
        // this.userCodeBox.appendChild(line.row);
    }
}