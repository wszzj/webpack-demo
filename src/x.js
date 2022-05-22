export default "xxx";
import "./x.styl";
import "./y.scss";
import "./z.less";
import png from "./assets/1.png";

const div = document.getElementById("app1");
div.innerHTML = `
<img src="${png}">
`;
const button = document.createElement("button");
button.innerText = "懒加载";
div.appendChild(button);
button.onclick = () => {
  const promise = import("./y");
  promise.then((module) => {
    module.default();
  });
};
