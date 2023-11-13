function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() Started")
    document.getElementById("loginStatus").innerHTML = "status of login";
    // varibles needed 
    var firstname;
    var lastname;
    var zipcode;
    var fullName;
    var fullNameLength;
    var zipcodenumb;


    // each variable gets defined
    // each defination gets a console log. i dont understand what that means or what the console is i just know that i can see the errors in the console
    //first name variable defined
    firstname = document.getElementById("fname").value;
    console.log("the first name was inputted as" + firstname);

    //last name gets defined
    lastname = document.getElementById("lname").value;
    console.log("the last name was inputted as" + lastname);
    // zip code gets defined
    zipcode = document.getElementById("zipcode").value;
    console.log("the zipcode was inputted as" + zipcode);


    //we define full name using the definitions from lname and fname
    fullName = firstname + " " + lastname;
    console.log("the fullname was inputted as" + fullName);


    // find the length of the full name
    fullNameLength = fullName.length;
    console.log("the full name has " + fullNameLength + " " + "characters.");


    // convert the carachters to numbers. don't understand parseint
    zipcodenumb = parseInt(zipcode);
    console.log("the zip code number is " + zipcodenumb);

    //things to check for... full name length is less than 20, zip code has 5 digits.

    // checks length of full name is less than 20 characters
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    }
    // checks zipcode is exactly 5 characters
    else if (zipcode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid Zipcode";
    }
    // creates an alert to alert user to the site
    else {
        alert("user credientals passed, welcome to the site, " + fullName);
    }
}

function checkPalin(){
    console.log("checkPalin() started");

var entStr;
entStr = document.getElementById("palinInput").value;
console.log("entStr is " + entStr);

//take away any spaces

var entStrNoSpace;
entStrNoSpace = entStr.split(" ").join("");
console.log("entStr with no space is " + entStrNoSpace);

//create rev array var and rev string
var revStr;
const revArray = [];
var length = entStrNoSpace.length - 1;
console.log("string length is " + length);

//input into array and reverse it

for(var i = length; i >= 0; i--){
    revArray.push(entStrNoSpace[i]);
}

//convert to a string from an array

revStr = revArray.join("");
console.log("reversed is " + revStr);

//compare rev to string and write to status
var equal = 0;
equal = (entStrNoSpace === revStr);
console.log("the ent and reverse being equal is: " + equal);

//write to palindrome status
if(equal == true){
    document.getElementById("palinStatus").innerHTML = entStr + " <b>is<b> a palindrome"
}else {
    document.getElementById("palinStatus").innerHTML = entStr + " is <b>not<b> a palindrome"
}


}