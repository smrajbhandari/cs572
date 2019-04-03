const http = require("http");
const fs = require("fs");
const path = require("path");


// Sync

const donwloadVideo = http.createServer((req, res) => {
  const video = fs.readFileSync(path.join(__dirname, 'movie.mp4'));
  res.write(file);
  res.end();
});


// Async

// const donwloadVideo = http.createServer((req, res) => {
//   fs.readFile(path.join(__dirname, 'movie.mp4'), (err, data) => {
//     res.write(data);
//     res.end();
//   });
// });

// Stream

// const donwloadVideo = http.createServer((req, res) => {
//   fs.createReadStream(path.join(__dirname, 'movie.mp4'))
//     .pipe(res);
// });

donwloadVideo.listen(5000, ()=> console.log("Listening on 5000"));
