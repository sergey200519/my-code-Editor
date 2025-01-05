import "./style.scss";
import { Settings } from "./modules/settings/Settings";
import { UserCodeEditor } from "./modules/UserCodeEditor";

const UserCodeBox: HTMLElement = document.querySelector(".code_box .code_part") as HTMLElement;
new UserCodeEditor(UserCodeBox, Settings);




// '_'
