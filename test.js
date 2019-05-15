/* var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate); */

var birthday = new Date(1994, 2, 17, 16, 30, 23);
var birthday2 = new Date(1994, 2, 17, 16, 30, 23);

console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthdays are equal");

} else{

    console.log("birthdays are not equal");

}