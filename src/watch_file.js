const PATH = require('path');
const chokidar = require('chokidar');
const { spawn } = require('child_process');
let childProcess;
const watcher = chokidar.watch(PATH.join(__dirname, './mockData/api'), {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
});
watcher.on('all', (path, stats) => {
    console.log(path, stats);
    childProcess && childProcess.kill();
    debounceStartServer();
});
const debounceStartServer = debounce(startServer, 1000);
function startServer() {
    childProcess = spawn('node', [`${process.cwd() + PATH.sep}src${PATH.sep}server_app.js`], {
        stdio: [process.stdin, process.stdout, process.stderr],
    });
    console.log('[ starting ] >', `${childProcess}node ${process.cwd() + PATH.sep}src${PATH.sep}server_app.js`);
}
function debounce(fun, wait = 300) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(context, args);
        }, wait);
    };
}
