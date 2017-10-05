const {Button, TextView, ui, ProgressBar, device} = require('tabris');
const Header = require('./components/Header');
let progress = 0;

// ui.statusBar.background = 'rgba(0, 0, 0, 0.4)';
// ui.statusBar.displayMode = 'float';
// console.log(ui.statusBar.displayMode);
console.log(333, device.version);

new Header().appendTo(ui.contentView);
let button = new Button({
    centerX: 0, top: 100,
    text: 'click me'
}).appendTo(ui.contentView);

let textView = new TextView({
    centerX: 0, top: [button, 50],
    font: '24px'
}).appendTo(ui.contentView);

let progressBar = new ProgressBar({
    tintColor: 'rgba(144, 250, 102, 1)',
    left: 15,
    right: 15,
    maximum: 100,
    centerY: 0,
    selection: 0
}).appendTo(ui.contentView);

setInterval(()=>{
    let progress = progressBar.selection + 5;
    progressBar.selection = progress > 100 ? 0 : progress;
}, 200);

button.on('select', () => {
    textView.text = '你好中国，你好世界！';
});

