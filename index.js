let num = process.argv[2] ;
// set default number if missing
if (!num) {
    num = 15;
    console.log('You are missing number. Default number is set 15');
}

// iterate until given number and print to console
for(i = 1; i <= num; i += 1) {
    // returns 0 only when divided by 3 not by 15
    if(i % 3 == 0 && i % 15 !== 0) {
        console.log('Fizz');
    }
    // returns 0 only when divided by 5 not by 15
    else if(i % 5 == 0 && i % 15 !== 0) {
        console.log('Buzz');
    }// returns 0 only when divided by 15
    else if(i % 15 == 0) {
        console.log('FizzBuzz');
    }
    else{
        console.log(i);
    }
}