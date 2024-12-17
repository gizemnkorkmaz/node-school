const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err);
  }

  files.forEach((file) => {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
