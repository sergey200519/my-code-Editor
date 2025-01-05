import { BaseLine } from "./Line";
import { ViewCodeHtml } from "./../viewCode/ViewCodeHtml";
import { Settings } from "../settings/Settings";
import { UserCodeEditorContext } from "../types/types";

export class LineHtml extends BaseLine {
    viewCode(code: string): string {
        return this.view.render(code);
    }
    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        super(userCodeBox, context);
    }
    initRow() {
        super.initRow();
        console.log("initRow html");
        
        if (this.row) {
            this.row.classList.add(`${Settings.rowClass}-html`);
        }
        this.view = new ViewCodeHtml(this, this.context);
    }
}
