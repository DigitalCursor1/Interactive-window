const {QMainWindow, QPushButton} = require("@nodegui/nodegui");

const win = new QMainWindow();

const button = new QPushButton();
button.setText('Click me');
button.addEventListener('clicked', () => {
    console.log('the button was clicked');
});

win.setCentralWidget(button);
win.show();
global.window = win;
