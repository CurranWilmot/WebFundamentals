//exercise 1
console.log("Print odds 1-20");
for(var i = 1; i < 20; i +=2){
    console.log(i);
}

//exercise 2
console.log("Decreasing Multiples of 3");
for(var i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//exercise 3
console.log("Print the sequence");
for(var i = 4; i > -4; i -= 1.5){
    console.log(i);
}

//exercise 4
console.log("Sigma");
var sum = 0;
for(var i = 1; i < 101; i++){
    sum += i;
}
console.log(sum);

//exercise 5
console.log("Factorial")
var product = 1;
for(var i = 1; i < 13; i++){
    product *= i;
}
console.log(product);