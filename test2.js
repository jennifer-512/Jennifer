let ar=[10,20,30,40];
console.log(ar[0]);
console.log(ar[1]);
ar[4]=90;
console.log(ar);
for(i=0;i<ar.length;i++)
{
    if(ar[i]%2==0)
    {
        console.log(ar[i],"is even");
    }
    else{
        console.log(ar[i],"is odd");
    }
}
var sum=0;
var prod=1;
 for(i=0;i<ar.length;i++){
    sum=ar[i];
    prod*=ar[i];
 }


 function hello(a,b,c){
    console.log(a*b*c);
 }
 hello(10,20,30);

 function hello(a){
    var i=0;
    while(i<=0)
    console.log(a);

 }
 function hello(a){
    var flag=true;
    for(i=2;i<a;i++){
        if(a%i==0){
            flag=false;
        }
    }
    if (flag==true){
        console.log(a,"is prime");
    }else{
        console.log(a,"is not prime");
    }
 }
function hello(a){
    for(i=0;i<a.length;i++){
        console.log(a[i]*a[i]);
    }
}

function hello(a){
    for(i=onabort;i<a.length;i++){
        if(a[i]%2==0){
            console.log(a[i]);
        }
    }
}