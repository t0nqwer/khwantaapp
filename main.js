// import { app, BrowserWindow } from "electron";
const { app, ipcMain, BrowserWindow } = require("electron");

const path = require("path");
const { remote } = require("electron");

const { PosPrinter } = require("electron-pos-printer");
const usbDetect = require("usb-detection");

usbDetect.startMonitoring();
usbDetect.on("add", function (device) {
  console.log("add", device);
});
usbDetect.on("add:vid", function (device) {
  console.log("add", device);
});
usbDetect.on("add:vid:pid", function (device) {
  console.log("add", device);
});

// Detect remove
usbDetect.on("remove", function (device) {
  console.log("remove", device);
});
usbDetect.on("remove:vid", function (device) {
  console.log("remove", device);
});
usbDetect.on("remove:vid:pid", function (device) {
  console.log("remove", device);
});

// Detect add or remove (change)
usbDetect.on("change", function (device) {
  console.log("change", device);
});
usbDetect.on("change:vid", function (device) {
  console.log("change", device);
});
usbDetect.on("change:vid:pid", function (device) {
  console.log("change", device);
});

// Get a list of USB devices on your system, optionally filtered by `vid` or `pid`
usbDetect.find(function (err, devices) {
  console.log("find", devices, err);
});
usbDetect.find(vid, function (err, devices) {
  console.log("find", devices, err);
});
usbDetect.find(vid, pid, function (err, devices) {
  console.log("find", devices, err);
});
// Promise version of `find`:
usbDetect
  .find()
  .then(function (devices) {
    console.log(devices);
  })
  .catch(function (err) {
    console.log(err);
  });
require("@electron/remote/main").initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,

      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on("greet", (event, arg) => {
  console.log(arg);
});

// const web = getCurrentWebContents;
// console.log(web);

// let printers = web.getPrintersAsync(); //list the printers
// console.log(printers);
const options = {
  preview: false, // Preview in window or print
  width: 400, //  width of content body
  margin: "0 0 0 0", // margin of content body
  copies: 1, // Number of copies to print
  printerName: "EPSON TM-T82X Receipt", // printerName: string, check it at webContent.getPrinters()
  timeOutPerLine: 400,
  silent: true,
};

ipcMain.on("print", (event, arg) => {
  const data = JSON.parse(arg);
  console.log(data);
  PosPrinter.print(data, options)
    .then(() => {
      console.log(12);
    })
    .catch((error) => {
      console.error(error);
    });
});
