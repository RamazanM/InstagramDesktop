const { app, BrowserWindow } = require('electron')
function createWindow () {
    let win = new BrowserWindow({
      width: 600,
      height: 800,
      webPreferences: {
        nodeIntegration: false
      },
      autoHideMenuBar:true
      
    })
    win.setMenuBarVisibility=false;
    win.removeMenu();
    win.loadURL("https://www.instagram.com/",{userAgent:"Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36"});
  }
  
  app.on('ready', createWindow)