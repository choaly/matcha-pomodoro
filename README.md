Matcha Pomodoro is a pixel art pomodoro timer desktop widget application. Built with HTML, CSS, JavaScript, and ElectronJS. Inspired by [@NashAllery](https://www.instagram.com/nashallery).

<img src="assets/screenshot.png" alt="MyApp Screenshot" width="200px"/>

## Features


- **Custom Focus Timer:** Set a focus session anywhere from 1 to 60 minutes.  
- **Custom Break Timer:** Set a break session anywhere from 1 to 20 minutes.  
- **Start/Pause/Reset:** Easily start, pause, or reset your timer at any time.  
- **Simple and Intuitive Interface:** Minimalist design focused on productivity.  
- **Desktop Notifications (wip):** Alerts when focus or break sessions end.

---

## Installation (macOS)

Currently working on providing a prebuilt .dmg file. However, if you'd like run or build the app yourself, follow the steps below.

## Build from Source (Optional)

```bash
# Clone the repo:
   
git clone https://github.com/choaly/matcha-pomodoro.git
cd matcha-pomodoro

# Install dependencies:
npm install

# Run the app in development mode:
npm start

# Build the app for macOS:

npm run make

#The packaged app will appear in the out/make/ folder.