import { BaseLine } from "../lines/Line";
import { Settings } from "../settings/Settings";

// interface ILine {
//     row: HTMLElement;
//     rowText: string;
// }

// interface ICursor {
//     cursor: HTMLElement;
//     line: ILine;
//     flag: boolean;
//     positionN: number;
//     initCursor(): void;
//     initPutCursor(event: MouseEvent, line: ILine): number;
//     putCursor(nLetter: number, line: ILine): number;
//     moveCursor(row: BaseLine, positionN: number): void;
// }

// export class Cursor implements ICursor {
//     cursor: HTMLElement;
//     line: ILine;
//     flag: boolean;
//     positionN: number;

//     constructor() {
//         console.log("Cursor constructor");

//         this.cursor = document.createElement("div");
//         this.line = { row: document.createElement("div"), rowText: "" };
//         this.flag = false;
//         this.positionN = 0;

//         setInterval(() => {
//             if (this.flag) {
//                 this.cursor.classList.toggle("none");
//             }
//         }, 500);

//         this.initCursor();
//     }

//     initCursor() {
//         this.cursor = document.createElement("div");
//         this.cursor.id = Settings.rowCursorId;
//         this.cursor.textContent = Settings.rowCursorContent;
//     }

//     initPutCursor(event: MouseEvent, line: ILine) {
//         let x = event.screenX;
//         if (x > line.rowText.length * Settings.letterWidth) {
//             x = line.rowText.length * Settings.letterWidth;
//         } else {
//             x = Math.trunc(x / Settings.letterWidth) * Settings.letterWidth - Settings.letterWidth;
//         }
//         this.cursor.style.left = `${x}px`;

//         line.row.appendChild(this.cursor);
//         this.line = line;
//         this.flag = true;
//         this.positionN = x / Settings.letterWidth;
//         return x;
//     }

//     putCursor(nLetter: number, line: ILine) {
//         let x = nLetter * Settings.letterWidth;
//         if (x > line.rowText.length * Settings.letterWidth) {
//             x = line.rowText.length * Settings.letterWidth;
//         } else {
//             x = Math.trunc(x / Settings.letterWidth) * Settings.letterWidth - Settings.letterWidth;
//         }
//         this.cursor.style.left = `${x}px`;

//         line.row.appendChild(this.cursor);
//         this.line = line;
//         this.flag = true;
//         this.positionN = x / Settings.letterWidth;
//         return x;
//     }


//     moveCursor(row: BaseLine, positionN: number) {
//         this.cursor.remove();
//         this.initCursor();
//         row.row?.appendChild(this.cursor);
//     }

// }
interface ICursor {
    cursor: HTMLElement | null | undefined;
    line: BaseLine | null | undefined;
    isActive: boolean;
    positionIndex: number;
    initialize(): void;
    updateCursorPositionEvent(event: MouseEvent, line: BaseLine): number;
    setCursor(position: number, line: BaseLine): void;
    moveCursorToLine(row: BaseLine, positionIndex: number): void;
    removeCursor(): void;
}


export class Cursor implements ICursor {
    cursor: HTMLElement | null | undefined;
    line: BaseLine | null | undefined;
    isActive: boolean;
    positionIndex: number;

    constructor() {
        console.log("Cursor initialized");

        this.cursor = this.createCursorElement();
        this.line;
        this.isActive = false;
        this.positionIndex = 0;

        this.toggleBlinking();
    }

    private createCursorElement(): HTMLElement {
        const cursor = document.createElement("div");
        cursor.id = Settings.rowCursorId;
        cursor.textContent = Settings.rowCursorContent;
        return cursor;
    }

    private toggleBlinking(isDelete?: boolean): void {
        const interval = setInterval(() => {
            if (this.isActive && this.cursor && this.cursor.parentNode) {
                this.cursor.classList.toggle("none");
            }
        }, 50000000);
        if (isDelete) {
            clearInterval(interval);
        }
    }


    private calculateCursorPosition(x: number, line: BaseLine): number {
        const maxWidth = line.rowText.length * Settings.letterWidth;
        return Math.min(Math.trunc(x / Settings.letterWidth) * Settings.letterWidth, maxWidth);
    }

    initialize(): void {
        this.cursor = this.createCursorElement();
    }

    updateCursorPositionEvent(event: MouseEvent, line: BaseLine): number {
        const x = this.calculateCursorPosition(event.screenX, line);
        if (this.cursor) {
            this.cursor.style.left = `${x}px`;
        }

        if (this.cursor) {
            line.row?.appendChild(this.cursor);
        }

        this.line = line;
        this.isActive = true;
        this.positionIndex = x / Settings.letterWidth;
        return x;
    }
    setCursor(position: number, line: BaseLine): void {
        const x = this.calculateCursorPosition(position * Settings.letterWidth, line);
        if (this.cursor) {
            this.cursor.style.left = `${x}px`;

            line.row?.appendChild(this.cursor);
            this.line = line;
            this.isActive = true;
            this.positionIndex = x / Settings.letterWidth;
        }

    }

    removeCursor(): void {
        if (this.cursor && this.cursor.parentNode) {
            this.cursor.parentNode.removeChild(this.cursor);
        }
        this.cursor = null; // Сброс ссылки на элемент
    }


    moveCursorToLine(line: BaseLine, positionIndex: number): void {
        this.toggleBlinking(true);
        console.log(this.cursor, this.line?.row);

        this.removeCursor();
        console.log(this.cursor);

        this.line = line;
        //this.initialize();
        //if (this.cursor) {
        console.log(line.row);
        const tempCursor = this.createCursorElement();
        console.log(tempCursor, tempCursor.parentElement);
        if (line.row) {
            console.log("adding cursor");
            line.row.focus();
            line.row.appendChild(tempCursor);
        }
        //line.row?.append(tempCursor);
        console.log(line.row);

        this.cursor = tempCursor;
        //this.cursor.parentElement = line.row;
        //}
        //this.positionIndex = positionIndex;
    }
}