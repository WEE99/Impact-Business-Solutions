//change the num as the number that was needed to be checked 
var num = 726358263582647
  
var myArr = String(num).split("").map((num)=>{
  return Number(num)
})

var SumOfABCDE=[];


//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
var arrayA = [];
var SumOfArrayA = 0;
  
for(i=0;i<myArr.length;i+=5)
{
    // console.log(myArr[i]);
    var A = myArr[i]*10;
    arrayA.push(A);
    // console.log(arrayA);
}

for (i=0;i<arrayA.length;i++)
{
    SumOfArrayA += arrayA[i];
}

console.log("Array A : "+ arrayA);
console.log("Sum of Array A : "+ SumOfArrayA);
SumOfABCDE.push(SumOfArrayA);
console.log(SumOfArrayA);
console.log(SumOfABCDE);

//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var arrayB = [];
var SumOfArrayB = 0;
  
for(i=1;i<myArr.length;i+=5)
{
    // console.log(myArr[i]);
    var B = myArr[i]*8;
    arrayB.push(B);
    // console.log(arrayB);
}

for (i=0;i<arrayB.length;i++)
{
    SumOfArrayB += arrayB[i];
}

console.log("Array B : "+ arrayB);
console.log("Sum of Array B : "+ SumOfArrayB);
SumOfABCDE.push(SumOfArrayB);
console.log(SumOfArrayB);
console.log(SumOfABCDE);

//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
var arrayC = [];
var SumOfArrayC = 0;
  
for(i=2;i<myArr.length;i+=5)
{
    // console.log(myArr[i]);
    var C = myArr[i]*6;
    arrayC.push(C);
    // console.log(arrayC);
}

for (i=0;i<arrayC.length;i++)
{
    SumOfArrayC += arrayC[i];
}

console.log("Array C : "+ arrayC);
console.log("Sum of Array C : "+ SumOfArrayC);
SumOfABCDE.push(SumOfArrayC);
console.log(SumOfArrayC);
console.log(SumOfABCDE);


//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
var arrayD = [];
var SumOfArrayD = 0;
  
for(i=3;i<myArr.length;i+=5)
{
    // console.log(myArr[i]);
    var D = myArr[i]*4;
    arrayD.push(D);
    // console.log(arrayD);
}

for (i=0;i<arrayD.length;i++)
{
    SumOfArrayD += arrayD[i];
}

console.log("Array D : "+ arrayD);
console.log("Sum of Array D : "+ SumOfArrayD);
SumOfABCDE.push(SumOfArrayD);
console.log(SumOfArrayD);
console.log(SumOfABCDE);

//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
var arrayE = [];
var SumOfArrayE = 0;
  
for(i=4;i<myArr.length;i+=5)
{
    // console.log(myArr[i]);
    var E = myArr[i]*2;
    arrayE.push(E);
    // console.log(arrayE);
}

for (i=0;i<arrayE.length;i++)
{
    SumOfArrayE += arrayE[i];
}

console.log("Array E : "+ arrayE);
console.log("Sum of Array E : "+ SumOfArrayE);
SumOfABCDE.push(SumOfArrayE);
console.log(SumOfArrayE);
console.log(SumOfABCDE);

//////////////////////////////////////////////////////////Final
var TotalABCDE=0;
var FinalCheckValue=0;


for (i=0;i<SumOfABCDE.length;i++)
{
    TotalABCDE += SumOfABCDE[i];
    
}
console.log(TotalABCDE);

var myArr2 = String(TotalABCDE).split("").map((TotalABCDE)=>{
    return Number(TotalABCDE)
  })
  
console.log(myArr2);

for (i=0;i<myArr2.length;i++)
{
    FinalCheckValue += myArr2[i];   
}

console.log();
console.log();
console.log("### The check digit is",FinalCheckValue ,"###");
console.log();
console.log();



