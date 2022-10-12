// window.addEventListener("DOMContentLoaded", () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector);
//     if (element) element.innerText = text;
//   };

//   for (const type of ["chrome", "node", "electron"]) {
//     replaceText(`${type}-version`, process.versions[type]);
//   }
// });

let { remote } = require("electron");
// console.log(process.versions.electron);


const { ipcRenderer, contextBridge } = require("electron");

const WINDOW_API = {
  greet: (e) => ipcRenderer.send("greet", e),
  print: (e) => ipcRenderer.send("print", JSON.stringify(e)),
};

contextBridge.exposeInMainWorld("api", WINDOW_API);

