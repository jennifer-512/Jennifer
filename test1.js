console.log("hello");
var a=150;
var b=170;
var c=a+b;
console.log(c);
var d=420;
var e=254;
var f=d-e;
console.log(f);
var g=a*e;
console.log(g);
var h=d/a;
console.log(h);
var i=a*d/c;
console.log(i);
console.log(a<b);
console.log(b>e);
var aa=100;
console.log(typeof(aa));
var ab=13.3;
console.log(typeof(ab));
var bb="idiot";
console.log(typeof(bb));
var cc=true;
console.log(typeof(cc));
var dd={name:"Baka"};
console.log(typeof(dd));
var ee=function(){};
console.log(typeof(ee));
var ff=[12,14,17,60];
console.log(typeof(ff));
if (a>b){
    console.log("a is greater");
}
else{
    console.log("b is greater");
}
var m=7;
var n=5;
if (m>n){
    console.log("m is greater");
}
else{
    console.log("n is greater");
}
var x=true;
var y=false;
console.log(x&&y);

var week=1;
switch(week){
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    default:console.log("No match");

}
var month =5;
switch(month){
    case 1:console.log("January");break;
    case 2:console.log("February");break;
    case 3:console.log("March");break;
    case 4:console.log("April");break;
    case 5:console.log("May");break;
    case 6:console.log("June");break;
    case 7:console.log("July");break;
    case 8:console.log("August");break;
    case 9:console.log("September");break;
    default:console.log("No match");

}
var q=5;
var r=0;
while(r<q){
    console.log(r);
    r=r+1;
}
var s=1;
var t=5;
while(s<=t){
    console.log(s*s);
    s=s+1;
}
var u=5;
var v=1;
while(v<=u){
    console.log(v+1);
    v=v+1;
}
var a1=5;
var a2=9;
var sum=0;
while(a2<=a1){
    sum=sum+a2;
    console.log(sum);
    a2=a2+1;
}
console.log(sum);
var a3=5;
var a4=1;
var prod=1;
while(a4<=a3){
    prod=prod*a4;
    console.log(prod);
    a4=a4+1;
}
console.log(prod);
for(i1=0;i1<=5;i1++){
    console.log(i1);
}
for(i2=0;i2<=5;i2++){
    console.log(i2*i2);
}
var sum1=0;
var prod1=1;
for(i3=1;i3<=5;i3++){
    sum1=sum+i3;
    prod1*=i3;
}
console.log(sum1);
console.log(prod1);
let ar=[10,20,30,40];
console.log(ar[0]);
console.log(ar[1]);
ar[4]=90;
console.log(ar);
for(i=0;i<ar.length;i++)
{
    console.log(ar[i]);
}