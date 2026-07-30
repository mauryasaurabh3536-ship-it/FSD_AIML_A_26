const num=[11,22,33,44,55,42,56,78];
const even=num.filter((i)=>(i%2==0));
console.log("num=",num);
console.log("even=",even);
const square=even.map((i)=>(i*i));
console.log("square=",square);
const sum=square.reduce((i,s)=>(i+s));
console.log("sum=",sum);