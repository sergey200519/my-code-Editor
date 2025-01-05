import { KeyboardInputResult } from "../types/types";

export class Keyboard {
    static input(event: KeyboardEvent): {
        text: string;
        simpleCharacter: boolean;
        combination: string | null;
        specialKey: string | null;
    } {
        const isSimpleCharacter = event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey;

        // Определение специальной клавиши
        const specialKeys = [
            'Backspace', 'Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
            'Escape', 'Delete', 'Insert', 'Home', 'End', 'PageUp', 'PageDown'
        ];
        const isSpecialKey = specialKeys.includes(event.key);

        // Обработка комбинаций клавиш
        let combination = null;
        if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
            const modifiers = [
                event.ctrlKey ? 'Ctrl' : '',
                event.altKey ? 'Alt' : '',
                event.metaKey ? 'Meta' : '',
                event.shiftKey ? 'Shift' : '',
            ].filter(Boolean).join('+');
            combination = `${modifiers}+${event.key}`;
        }

        return {
            text: isSimpleCharacter ? event.key : '',
            simpleCharacter: isSimpleCharacter,
            combination,
            specialKey: isSpecialKey ? event.key : null
        } as KeyboardInputResult;
    }
}
