import { BaseLine } from "./Line";
import { UserCodeEditorContext } from "../types/types";
import { Settings } from "../Settings/Settings";
import { ViewCodeHtml } from "../UserCode/html/ViewCodeHtml";

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
            this.row.setAttribute("data-html-row-id", this.context.parentData?.id);
        }
        this.view = new ViewCodeHtml(this, this.context);
    }
}