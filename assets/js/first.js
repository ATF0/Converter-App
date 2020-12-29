
// document.write("<h1>JS is awesome!</h1>");
// alert("Hello, World!");
/*Note that JS is case sensitive*/
// alert("Hello, again")



var task = ("we have 20 people in our law program",

"10 in room1, 5 in room2 and 5 in room3. later 50 people joined and had the following placements...30 inroom1, 15 in room2 and 5 in room3.",

"declare a variable to contain the initial values for these rooms, reassign variables to update the current." ,

"declare a variable to update the total rooms value. ");

/*
I want you to handle this scenario with conditional statements. 
 
 if ladies took the test 90% should return excellent,  60 should return passed, below should return failed;


 2 create an alert that asks for gender, then write a condition that  anybody that isn't a female to exit the next door.

*/

var room1=10;
var room2=2;
var room3=5;

room1=room1 + 30;
room2 = room2 + 15;
room3 = room3 + 5;

var total=room1 + room2 + room3;
var totalRooms="The total room's value:"
console.log(totalRooms)
console.log(total)

// Q1.
var score=70;
score;

if (score >=90){
  console.log("excellent") ;
} else if (( score >= 60) && (score < 90)){
  console.log("passed");
}
 else{
  console.log("failed");
}


// Q2.
//alert();
var gender=prompt("Hello! Are you male or female?");
if  (gender == "male"){
  document.write("Whoops this isn't for you. Please leave.");
}
else if (gender == "female"){
    document.write("You're welcome here");
}
else{
    document.write("Whoops this isn't for you. Please leave.");
}


function atf (a){
    var y = a +  4;
    console.log(y)
    // this variable can only operate within this function;
  }

  console.log(atf)
  