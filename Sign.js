var uname = document.getElementById("name");
var mail = document.getElementById("mail");
var pass = document.getElementById("pass");
var com = document.getElementById("com");
var error = document.getElementById("error");
var us = document.getElementById("us");
var prof = document.getElementById("prof");
var confirmBox = document.getElementById("confirm");

function valid(){

    if(uname.value.trim() == ""){
        error.innerText = "You are required to enter your full name.";
        alert("You are required to enter your full name.");
        return false;
    }

    else if(us.value.trim() == ""){
        error.innerText = "Please provide a username.";
        alert("Please provide a username.");
        return false;
    }

    else if(mail.value.trim() == ""){
        error.innerText = "Please provide your email address.";
        alert("Please provide your email address.");
        return false;
    }

    else if(
        mail.value.indexOf("@") == -1 ||
        mail.value.indexOf(".") == -1 ||
        mail.value.startsWith("@") ||
        mail.value.endsWith(".")
    ){
        error.innerText = "Please enter a valid email address.";
        alert("Please enter a valid email address.");
        return false;
    }

    else if(pass.value == ""){
        error.innerText = "Please enter a passcode.";
        alert("Please enter a passcode.");
        return false;
    }

    else if(pass.value.length < 8){
        error.innerText = "Your passcode must contain at least 8 characters.";
        alert("Your passcode must contain at least 8 characters.");
        return false;
    }

    else if(prof.value.trim() == ""){
        error.innerText = "Please enter your occupation.";
        alert("Please enter your occupation.");
        return false;
    }

    else if(com.value.trim() == ""){
        error.innerText = "Please provide your contact number.";
        alert("Please provide your contact number.");
        return false;
    }

    else if(isNaN(com.value)){
        error.innerText = "Contact number must contain digits only.";
        alert("Contact number must contain digits only.");
        return false;
    }

    else if(com.value.length != 11){
        error.innerText = "Contact number must contain exactly 11 digits.";
        alert("Contact number must contain exactly 11 digits.");
        return false;
    }

    else if(confirmBox.checked == false){
        error.innerText = "You must confirm that the provided information is accurate.";
        alert("You must confirm that the provided information is accurate.");
        return false;
    }

    else{
        error.innerText = "";
        alert("Sign in completed successfully.");
        return true;
    }
}