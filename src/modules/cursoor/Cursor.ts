import { Settings } from "../settings/Settings";

interface ILine {
    row: HTMLElement;
    rowText: string;
}

interface ICursor {
    cursor: HTMLElement;
    line: ILine;
    flag: boolean;
    positionN: number;
    initCursor(): void;
    initPutCursor(event: MouseEvent, line: ILine): number;
    putCursor(nLetter: number, line: ILine): number;
}

export class Cursor implements ICursor {
    cursor: HTMLElement;
    line: ILine;
    flag: boolean;
    positionN: number;

    constructor() {
        console.log("Cursor constructor");
        
        this.cursor = document.createElement("div");
        this.line = { row: document.createElement("div"), rowText: "" };
        this.flag = false;
        this.positionN = 0;

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

    initPutCursor(event: MouseEvent, line: ILine) {
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
        this.positionN = x / Settings.letterWidth;
        return x;
    }

    putCursor(nLetter: number, line: ILine) {
        let x = nLetter * Settings.letterWidth;
        if (x > line.rowText.length * Settings.letterWidth) {
            x = line.rowText.length * Settings.letterWidth;
        } else {
            x = Math.trunc(x / Settings.letterWidth) * Settings.letterWidth - Settings.letterWidth;
        }
        this.cursor.style.left = `${x}px`;

        line.row.appendChild(this.cursor);
        this.line = line;
        this.flag = true;
        this.positionN = x / Settings.letterWidth;
        return x;
    }
}