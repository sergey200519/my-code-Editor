import { Cursor } from "../cursoor/Cursor";
import { Keyboard } from "../keyboard/Keyboard";
import { Settings } from "../settings/Settings";

export interface UserCodeEditorContext {
    settings: Settings;
    cursor: Cursor;
    keyboard: Keyboard;
}