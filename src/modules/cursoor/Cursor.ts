import { Settings } from "../settings/Settings";

interface Line {
    row: HTMLElement;
    rowText: string;
}

export class Cursor {
    private cursor: HTMLElement;
    private line: Line;
    private flag: boolean;

    constructor() {
        console.log("Cursor constructor");
        
        this.cursor = document.createElement("div");
        this.line = { row: document.createElement("div"), rowText: "" };
        this.flag = false;

        setInterval(() => {
            if (this.flag) {
                this.cursor.classList.toggle("none");
            }
        }, 500);

        this.initCursor();
    }

    initCursor() {
        this.cursor = document.createElement("div");
        this.cursor.id = Settings.rowCursorId;
        this.cursor.textContent = Settings.rowCursorContent;
    }

    putCursor(event: MouseEvent, line: Line) {
        let x = event.screenX;
        if (x > line.rowText.length * Settings.letterWidth) {
            x = line.rowText.length * Settings.letterWidth;
        } else {
            x = Math.trunc(x / Settings.letterWidth) * Settings.letterWidth - Settings.letterWidth;
        }
        this.cursor.style.left = `${x}px`;

        line.row.appendChild(this.cursor);
        this.line = line;
        this.flag = true;
        return x;
    }
}