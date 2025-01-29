import { BaseLine } from "../lines/Line";
import { KeyboardInputResult } from "../types/types";

export class KeyboardAction {
    static action(keyboardres: KeyboardInputResult, line: BaseLine): void {
        const { text, simpleCharacter, combination, specialKey } = keyboardres;

        if (simpleCharacter) {
            // Добавить символ в строку
            line.insertText(text, keyboardres);
            line.putCursor();
        } else if (specialKey) {
            switch (specialKey) {
                case 'Backspace':
                    // Удалить символ перед курсором
                    line.deletePreviousChar();
                    line.putCursor();
                    break;
                case 'ArrowLeft':
                    // Переместить курсор влево
                    line.moveCursorLeft();
                    line.putCursor();
                    break;
                case 'ArrowRight':
                    // Переместить курсор вправо
                    line.moveCursorRight();
                    line.putCursor();
                    break;
                case 'ArrowUp':
                    // Переместить курсор вверх
                    line.moveCursorUp();
                    break;
                case 'ArrowDown':
                    // Переместить курсор вниз
                    line.moveCursorDown();
                    break;
                case 'PageUp':
                    // Переместить на начало страницы или в начало документа
                    line.pageUp();
                    break;
                case 'PageDown':
                    // Переместить на конец страницы или в конец документа
                    line.pageDown();
                    break;
                default:
                    console.warn(`Unhandled special key: ${specialKey}`);
            }
        } else if (combination) {
            switch (combination) {
                case 'Ctrl+C':
                    // Скопировать выделенный текст
                    line.copy();
                    break;
                case 'Ctrl+V':
                    // Вставить текст из буфера обмена
                    line.paste();
                    break;
                case 'Ctrl+X':
                    // Вырезать выделенный текст
                    line.cut();
                    break;
                case 'Ctrl+Z':
                    // Отменить последнюю операцию
                    line.undo();
                    break;
                case 'Ctrl+Y':
                    // Повторить последнюю операцию
                    line.redo();
                    break;
                default:
                    console.warn(`Unhandled key combination: ${combination}`);
            }
        }
        const row = line.row;
        if (row && line.view) {
            row.innerHTML = line.view.viewCode(line.rowText);
        }
        
    }
}
