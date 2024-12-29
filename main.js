//1
var num1 = 2;
var num2 = 18;

if (num1 > 10 && num2 > 10) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}

//2
// var userName = prompt("Enter your user name:");

// var password = prompt("Enter your user password:");

// if (userName === "Mohammad Shoqair" && password === "123123") {
//   console.log("Access granted");
// } else console.log("Access denied");

//3

var num3 = 15;

if (num3 >= 10 && num3 < 20) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

//4
var age = 15;
if (age >= 18) {
  console.log(" you can drive");
} else {
  console.log("you cannot drive");
}

//5
var num4 = 10;
if (num4 > 10 || num4 < 0) {
  console.log("invaild number");
} else {
  console.log("vaild number");
}
//6
var num5 = 15;
if ((num5 > 5 && num5 < 10) || (num5 > 20 && num5 < 25)) {
  console.log("the numberis vaild");
} else {
  console.log("the number is not vaild");
}

//7

var password = "eman";
if (password == "secret") {
  console.log("Access granted");
} else {
  console.log(" access denied");
}
//8
var num6 = 88;
if (num6 > 0 && num6 < 100 && num6 % 2 == 0) {
  console.log("Even and between 0 and 100");
} else {
  console.log("Not even and between 0 and 100");
}

//9

num7 = -9;
num8 = -46;

if (num7 < 0 && num8 < 0) {
  console.log("Both nums are negative");
} else {
  console.log("At least one number is negative");
}

//10

var studentAge = 10;

var isStudent = false;

if (studentAge <= 18 || isStudent === true) {
  console.log("You qualify for a discount");
} else {
  console.log("You aren't qualified!");
}
