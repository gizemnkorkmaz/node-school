const listFiles = require('./mymodule')

const directoryPath = process.argv[2];
const extension = process.argv[3];

listFiles(directoryPath, extension, (error, files) => {
  if(error) {
    return console.log('error! error!', error)
  }

  files.forEach(element => {
    console.log(element)
  });
})
