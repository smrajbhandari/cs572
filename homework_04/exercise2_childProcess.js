const fs = require("fs");
const path = require("path");
process.on('message', (url) => {
    const src = fs.createReadStream(path.join(__dirname, url));
    src.on('data', function (data) {
        process.send(data)
    });
    src.on('end', function () {
        process.send('endthis');
    })
    src.on('error', function (err) { console.log(err) });

});