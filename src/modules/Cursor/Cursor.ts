import { BaseLine } from "../Line/Line";

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
        this.cursor = null;
        this.line = null;
        this.isActive = false;
        this.positionIndex = 0;
    }

    initialize(): void {
        throw new Error("Method not implemented.");
    }
    updateCursorPositionEvent(event: MouseEvent, line: BaseLine): number {
        throw new Error("Method not implemented.");
    }
    setCursor(position: number, line: BaseLine): void {
        throw new Error("Method not implemented.");
    }
    moveCursorToLine(row: BaseLine, positionIndex: number): void {
        throw new Error("Method not implemented.");
    }
    removeCursor(): void {
        throw new Error("Method not implemented.");
    }

}