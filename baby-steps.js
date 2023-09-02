const args = process.argv.slice(2)
const sum = args.reduce((acc, curr) => {
	return Number(acc) + Number(curr)
}, 0)

console.log(sum)
