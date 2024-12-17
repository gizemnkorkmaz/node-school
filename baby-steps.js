const arguments = process.argv.slice(2)

function getSum(arr) {
    const sum = arr.reduce((acc, curr) => {
       return Number(acc) + Number(curr)
    }, 0)

    return sum
}

console.log(getSum(arguments))