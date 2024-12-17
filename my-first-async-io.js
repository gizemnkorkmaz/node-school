const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lineCount = data.split('\n').length - 1;

  console.log(lineCount);
});
