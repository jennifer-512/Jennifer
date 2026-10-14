//global scope-visible outside the function
//function scope
//block scope


var a=10;
let k;

function test(){
    console.log(a);
    a=100;
    console.log(a);
}

if(a==100){
    let k=500;// block scope,declared inside block using let
    console.log(a);
}

console.log(k);

test();

let emp={
    id:100,
    name:"abc",
    salary:50000
}
let student={
    regno:133,
    name:"aaa"
}

