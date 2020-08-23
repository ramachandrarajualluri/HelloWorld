const yargs = require('yargs')
const date = require('date-and-time')
const options = yargs
	.usage("Usage: -d <dob>")
	.option("d", { alias: "dob", describe: "Your dob in YYYY-MM-DD format", type: "string", demandOption: true })
	.argv;
	
const yourdob = `Your entered dob: ${options.dob}`

const dob = date.parse(options.dob, 'YYYY-MM-DD')
const diff = date.subtract(new Date(), dob).toMilliseconds();
var age = Math.abs(new Date(diff).getUTCFullYear() - 1970);

const yourage = `Your age is : ${age}`

console.log(yourdob)
console.log(yourage)