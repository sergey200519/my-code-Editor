import { Cursor } from "../cursoor/Cursor";
import { Keyboard } from "../keyboard/Keyboard";
import { Settings } from "../settings/Settings";

export interface UserCodeEditorContext {
    settings: Settings;
    cursor: Cursor;
}

export interface KeyboardInputResult {
    text: string;             // Текст введённого символа (если это простой символ), иначе пустая строка
    simpleCharacter: boolean; // Признак того, что нажатая клавиша является простым символом
    combination: string | null; // Строка с комбинацией клавиш, если использовались модификаторы, иначе null
    specialKey: string | null;  // Название специальной клавиши (Backspace, ArrowUp и т.д.), иначе null
}
