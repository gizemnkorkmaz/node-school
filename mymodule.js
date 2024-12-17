const fs = require("fs");
const path = require("path");

module.exports = function listFiles(directoryPath, extension, callback) {
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      return callback(error);
    }

    const fileList = files.filter((file) => {
      return path.extname(file) === '.' + extension;
    });

    callback(null, fileList);
  });
};
