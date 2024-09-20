
function passwordChecker()
{
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const message = document.getElementById("message");
    console.log(password, confirmPassword);

    if(password.value != 0){
        if(password.value == confirmPassword.value){
            message.textContent = "Password match";
            message.style = "color : green";
            password.style = "border-color:green"
            confirmPassword.style = "border-color:green"
           }
        
           else {
            message.textContent = "Password don't match. Try again";
            message.style = "color:red";
            password.style =  "border-color:red"
            confirmPassword.style = "border-color:red"
           }
    }

    else {
        message.style = "display:none"
    }
}

