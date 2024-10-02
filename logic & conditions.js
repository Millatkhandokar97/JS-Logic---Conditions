//if and else conditions
let a = 10
let b = 20

if(a > b){
    console.log('A is greater then B');
}
else{
    console.log('B is greater then A');
}

let n = 90

if(n % 2 === 0){
    console.log('N is Even Number');
}
else{
    console.log('N is Odd Number');
}


//else if conditions
let x = 30
let y = 30

if(x > y){
    console.log('x is greater then y');
}
else if(x < y){
    console.log('y is greater then x');
}
else{
    console.log('x and y same');
}

let z = 101
if(z % 2 === 0){
    console.log('Z is Even Number');
}
else if(z % 2 === 1){
    console.log('Z is Odd Number');

}
else{
    console.log('Z is not Number');

}




// if, else if and else conditions for executing Now Day 
let date = new Date()
let today = date.getDay()


if(today === 0){
    console.log('today is Sunday');
}
else if(today === 1){
    console.log('today is Monday');
}
else if(today === 2){
    console.log('today is Tuesday');
}
else if(today === 3){
    console.log('today is Wednesday');
}
else if(today === 4){
    console.log('today is Thursday');
}
else if(today === 5){
    console.log('today is Friday');
}
else{
    console.log('today is Saturday');
}

// executing Day with Switch Statements

switch (today){
    case 0:
    console.log('today is Sunday');
    break
case 1:
    console.log('today is Monday');
    break
case 2:
    console.log('today is Tuesday');
    break
case 3:
    console.log('today is Wednesday');
    break
case 4:
    console.log('today is Thursday');
    break
case 5:
    console.log('today is Friday');
    break
case 6:
    console.log('today is Saturday');
    break
default: console.log('Not a valid Answer');

}