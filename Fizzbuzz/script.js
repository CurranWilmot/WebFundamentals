//For loop runs through all integers 1-100
for(var i = 1; i < 101; i++){
    //first condition checks if the integer is not divisible by NEITHER 3 NOR 5
    //if neither 3 or 5 go into it, it will print the integer
    if((i % 3 != 0) && (i % 5 != 0)){
        console.log(i);
    }
    //second contition checks if the integer is divisible by 3 and NOT 5
    //if it is divisible by 3, and not by 5, it will print "Fizz"
    else if((i % 3 == 0) && (i % 5 != 0)){
        console.log("Fizz");
    }
    //third condition checks if the integer is divisible by 5 and NOT by 3
    //if it is divisible by 5, and not by 3, it will print "Buzz"
    else if((i % 5 == 0) && (i % 3 != 0)){
        console.log("Buzz");
    }
    //fourth condition checks if the integer is divisible by BOTH 3 AND 5
    //if it is divisible by 3 and 5, it will print "FizzBuzz"
    else if((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz");
    }
    //Prints error if a number somehow makes it through the loop
    else console.log("error");
}
