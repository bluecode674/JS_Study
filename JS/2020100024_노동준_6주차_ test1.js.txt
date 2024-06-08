let output="";
for (let i = 1; i<=5; i++){
    for(let j = 1; j<=5-i; j++){
        output += " ";
    }
    for(let j = 1; j<=i; j++){
        output += j;
    }
    output += "\n";
}
console.log(output);