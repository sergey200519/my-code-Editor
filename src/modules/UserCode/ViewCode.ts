import { BaseLine } from "../Line/Line";
import { UserCodeEditorContext } from "../types/types";

export class ViewCode {
    line: BaseLine;
    context: UserCodeEditorContext;
    reHtml: RegExp;

    constructor(line: BaseLine, context: UserCodeEditorContext) {
        this.line = line;
        this.context = context;

        this.reHtml = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/;
    }

    replaceSpaces(code: string): string {
        let answer = "";
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            if (element == " ") answer += "&nbsp;";
            else answer += element;
        }
        return answer;
    }
}