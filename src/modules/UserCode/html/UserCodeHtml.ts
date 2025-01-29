import { UserCodeEditorContext } from "../../types/types";
import { UserCode } from "../UserCode";

export class UserCodeHtml extends UserCode {
    constructor(userCodeBox: HTMLElement, context: UserCodeEditorContext) {
        super(userCodeBox, context);
        console.log("html");
    }
}