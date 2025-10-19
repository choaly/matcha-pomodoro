const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    let iconPath = path.join(__dirname, 'assets', 'icon.icns');

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: iconPath,
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});