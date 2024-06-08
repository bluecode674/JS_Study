let fs = require('fs');
let file = fs.readFileSync("input.txt")
let str = file.toString()
fs.writeFileSync("prt.txt", str)