import { BaseLine } from "../lines/Line";
import { Settings } from "../settings/Settings";
import { UserCodeEditorContext } from "../types/types";
import { ViewCode } from "./ViewCode";

export class ViewCodeHtml extends ViewCode {
    splitCodeTagSeparator(code: string): string[] {
        code = code.replace(/ /g, "&nbsp;");
        let codeArr: string[] = [];
        let partCode: string = "";

        function codeArrPush(element: string, flag: "before" | "after" = "before") {
            if (flag === "before") {
                partCode += element;
                codeArr.push(partCode);
                partCode = "";
            } else if (flag === "after") {
                if (partCode !== "") codeArr.push(partCode);
                partCode = "";
                partCode += element;
            }
        }

        for (let i = 0; i < code.length; i++) {
            let element = code[i];

            if (element === "<") {
                codeArrPush(element, "after");
            } else if (element === ">") {
                codeArrPush(element);
            } else {
                partCode += element;
            }
        }

        if (partCode !== "") codeArr.push(partCode);
        return codeArr;
    }

    classificationCode(codeArr: string[]): Record<number, { text: string; type: "teg" | "text" }> {
        let codeObj: Record<number, { text: string; type: "teg" | "text" }> = {};
        let i = 0;
        
        codeArr.forEach(element => {
            if (this.reHtml.test(element)) {
                codeObj[i] = { text: element, type: "teg" };
            } else {
                codeObj[i] = { text: element, type: "text" };
            }
            i++;
        });

        return codeObj;
    }

    findAttributedCode(code: string): string {
        const splitCode = code.split(/ |&nbsp;/);
        if (splitCode.length === 1 || code.indexOf("</") !== -1) {
            return code;
        }

        let answer: string[] = [];
        splitCode.forEach(element => {
            if (element[0] === "<") {
                answer.push(element);
            } else if (element[element.length - 1] !== ">") {
                if (element.indexOf("=") !== -1) {
                    const splitElement = element.split("=");
                    if (splitElement.length === 2) {
                        answer.push(`${this.getAttributeTeg(splitElement[0])}=${this.getAttributeStringTeg(splitElement[1])}`);
                    } else {
                        answer.push(this.getAttributeTeg(element));
                    }
                } else {
                    answer.push(this.getAttributeTeg(element));
                }
            } else if (element[element.length - 1] === ">") {
                const splitElement = element.split("=");
                if (splitElement.length === 2) {
                    answer.push(
                        `${this.getAttributeTeg(splitElement[0])}=${this.getAttributeStringTeg(splitElement[1].slice(0, splitElement[1].length - 1))}>`
                    );
                } else {
                    answer.push(`${this.getAttributeTeg(element.slice(0, element.length - 1))}>`);
                }
            } else {
                answer.push(element);
            }
        });
        return answer.join("&nbsp;");
    }

    splitCode(code: string): Record<number, { text: string; type: "teg" | "text" }> {
        code = this.replaceSpaces(code);
        const codeArr = this.splitCodeTagSeparator(code);
        return this.classificationCode(codeArr);
    }

    getTextTeg(content: string): string {
        return `<${Settings.TegForCodeView} class="${Settings.HtmlTextClassView}">${content}</${Settings.TegForCodeView}>`;
    }

    getTegForTeg(content: string): string {
        return `<${Settings.TegForCodeView} class="${Settings.HtmlTegClassView}">${content}</${Settings.TegForCodeView}>`;
    }

    getAttributeTeg(content: string): string {
        return `<${Settings.TegForCodeView} class="${Settings.AttributeHtmlTegClassView}">${content}</${Settings.TegForCodeView}>`;
    }

    getAttributeStringTeg(content: string): string {
        return `<${Settings.TegForCodeView} class="${Settings.AttributeStringHtmlTegClassView}">${content}</${Settings.TegForCodeView}>`;
    }

    assemblyCode(codeObj: Record<number, { text: string; type: "teg" | "text" }>): string {
        let resultHtml = "";
        
        for (let key in codeObj) {
            const item = codeObj[key];
            let code = item.text;

            if (item.type === "teg") {
                code = this.findAttributedCode(item.text);
                let tempHtml = "";

                if (code.indexOf("</") === 0) {
                    tempHtml = `${this.getTextTeg("<")}
                                ${this.getTextTeg("/")}
                                ${this.getTegForTeg(code.slice(2, code.length - 1))}
                                ${this.getTextTeg(">")}`;
                } else {
                    tempHtml = `${this.getTextTeg("<")}
                                ${this.getTegForTeg(code.slice(1, code.length - 1))}
                                ${this.getTextTeg(">")}`;
                }
                resultHtml += tempHtml;
            } else if (item.type === "text") {
                let newCode = "";
                if (code.indexOf("<") !== -1 || code.indexOf(">") !== -1) {
                    for (let i = 0; i < code.length; i++) {
                        const element = code[i];
                        if (element === "<" || element === ">") {
                            newCode += `<${Settings.TegForCodeView} class="${Settings.HtmlTextClassView}">${element}</${Settings.TegForCodeView}>`;
                        } else {
                            newCode += element;
                        }
                    }
                    code = newCode;
                }
                let tempHtml = `<${Settings.TegForCodeView} class="${Settings.HtmlTextClassView}">${code}</${Settings.TegForCodeView}>`;
                resultHtml += tempHtml;
            }
        }

        return resultHtml;
    }

    viewCode(code: string): string {
        const codeObj = this.splitCode(code);
        return this.assemblyCode(codeObj);
    }
}
