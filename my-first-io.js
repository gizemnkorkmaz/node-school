const fs = require('fs');
const file = fs.readFileSync(process.argv[2])

function countLines(file) {
    return file.toString().split('\n').length - 1
}

console.log(countLines(file))