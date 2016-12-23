"use strict";
var electron = require("electron");
var mainWindow = null;
electron.app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        electron.app.quit();
    }
});
var winProps = {
    width: 1000,
    height: 800
};
electron.app.on('ready', function () {
    mainWindow = new electron.BrowserWindow(winProps);
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
