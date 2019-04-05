const http = require('http');
const url = require('url');
const { fork } = require('child_process');
http.createServer(function (req, res) {
    const thisurl = url.parse(req.url, true).query.url;
    const childProcess = fork('exercise2_childProcess.js');
    // childProcess.send(thisurl);
    childProcess.send(thisurl);
    childProcess.on('message', data => {
        if (data != 'endthis') {
           res.write(Buffer.from(data));
        }
        else {
            res.end();
        }
    });
    childProcess.on('error', error => {
        res.end(error.message);
    });
}).listen(4000, () => console.log("listening to 4000"));