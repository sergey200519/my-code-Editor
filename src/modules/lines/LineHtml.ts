import { BaseLine } from "./Line";
import { ViewCodeHtml } from "./../viewCode/ViewCodeHtml";
import { Settings } from "../settings/Settings";

export class LineHtml extends BaseLine {
    initRow() {
        super.initRow();
        if (this.row) {
            this.row.classList.add(`${Settings.rowClass}-html`);
        }
        this.view = new ViewCodeHtml(this, this.context);
    }
}
