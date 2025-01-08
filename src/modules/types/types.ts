import { Cursor } from "../cursoor/Cursor";
import { Settings } from "../settings/Settings";


interface Constructor<T = any> {
    new (...args: any[]): T;
}

type perentDate = {
    [key: string]: Function | number | null | undefined | any;
}; 
export interface UserCodeEditorContext {
    settings: Settings;
    cursor: Cursor;
    parentData?: perentDate;
}

export interface KeyboardInputResult {
    text: string;             // Текст введённого символа (если это простой символ), иначе пустая строка
    simpleCharacter: boolean; // Признак того, что нажатая клавиша является простым символом
    combination: string | null; // Строка с комбинацией клавиш, если использовались модификаторы, иначе null
    specialKey: string | null;  // Название специальной клавиши (Backspace, ArrowUp и т.д.), иначе null
}
