// var alpha = "ABCDEFGHIJ"
// var jumps = 7
//"G", "D", "B","-", "A", "C", "F","-", "J", "E", "H","-","I"
var alpha = "1JD7H47FH2KD9G4"
var jumps =18

function myFunction(alpha, jumps) {
  var myArr = String(alpha).split("").map((alpha) => {
    return String(alpha)
  })

  var newArr = [];
  var lengths = myArr.length;
  var position = 0;
  var jump = jumps;
  var x = 1;
  var y = 1;
  // var damn = 0;


  // console.log(myArr[7%length-1]);


  for (i = 0; i < lengths; i++) {
    //  console.log(myArr);
    //  console.log(newArr);
    // console.log(i)
    position = jump % lengths - x;


    // if (position>10)  
    // // {
    // //   // position=Math.abs(position);
    // //   position=myArr.length-1;
    // //   console.log(position);
    // //   // newArr.push(myArr[myArr.length-1]);
    // //   newArr.push(myArr[position]);
    // // }
    // {
    //   // position=Math.abs(position);
    //   position=0;
    //   console.log(position);
    //   // newArr.push(myArr[myArr.length-1]);
    //   newArr.push(myArr["1 "+position]);
    // }

    if (position < 0)
    // {
    //   // position=Math.abs(position);
    //   position=0;
    //   console.log(position);
    //   // newArr.push(myArr[myArr.length-1]);
    //   newArr.push(myArr[position]);
    // }
    {
      if (position < myArr.length) {

        position = myArr.length - y + 1;
        // if (position>myArr.length)
        // {break;}
        // position=Math.abs(position);
        console.log(1);
        console.log(position);


        // if (myArr.length=1)
        // {position=0;
        //   console.log(1.5);      
        //     console.log(myArr.length);}
        // if (position >= myArr.length) {
        //   position = myArr.length +1 ;
        //   console.log(2);
        //   console.log(position);
        //   damn = 1;
        // }

        // position=Math.abs(position);
        // else {
        //   position = 0;
        //   console.log(2);
        //   console.log(position);
        // }



        // newArr.push(myArr[myArr.length-1]);

        if (typeof myArr[position] !== 'undefined') {
          newArr.push(myArr[position]);
        }


        // if (typeof newArr.push(myArr[position]) === 'undefined') {
        //   position=myArr.length-1;
        //   newArr.push(myArr[position]);
        // }

        y++;
      }

    }


    else {
      newArr.push(myArr[position]);

    }


    //  console.log(position);
    //  console.log(myArr[position-1]);
    //  newArr.push(myArr[position]);
    console.log(newArr);
    myArr.splice(position, 1);
    console.log(myArr);
    console.log(lengths + " " + position + " " + jump + " " + x + " " + myArr.length)
    if (myArr.length == 1) {
      position = 0;
      newArr.push(myArr[position]);
      myArr.splice(position, 1);
      console.log(lengths + " " + position + " " + jump + " " + x + " " + myArr.length);
    }
    //  myArr=myArr;
    // if (damn != 0) {
    //   position = position + 1;
    //   console.log(3);
    //   damn = 0;
    //   console.log(position);
    //   console.log("--" + damn);
    // }
    jump += jumps + x;
    x++;

  }

  var pos = 3;
  var interval = 4;

  while (pos < newArr.length) {
    newArr.splice(pos, 0, '-');
    pos += interval;
  }
  console.log();
  console.log();
  console.log(newArr);
  console.log();
  console.log();
  // return newArr;

}


myFunction(alpha, jumps)

// console.log(myFunction(alpha,jumps))