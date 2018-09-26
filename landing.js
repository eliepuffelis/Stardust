function delayAuthBox() {
    setTimeout(showAuthBox, 0600);
}

function showAuthBox() {
    var authBox = document.getElementById("authBox");
    var stardustHeader = document.getElementById("stardustHeader");
    authBox.style.visibility = 'visible';
    authBox.style.opacity = '1';
}

function slideRegistration() {
    var welcome = document.getElementById("welcome");
    var welcomeText = document.getElementById("welcomeText");
    var register = document.getElementById("register");
    var loginButton = document.getElementById("loginButton");
    welcome.style.left = '0';
    welcome.style.right = '60%';
    welcome.style.width = '40%';
    welcome.style.borderTopRightRadius = '0';
    welcome.style.borderBottomRightRadius = '0';
    welcomeText.style.marginBottom = '5%';
    register.style.width = '60%';
    loginButton.style.width = '135px';
    loginButton.style.marginBottom = '25px';
    loginButton.style.marginTop = '20px';
    loginButton.style.height = '33px';

    setTimeout(showRegistration, 0700);

}

function showRegistration() {
    var register = document.getElementById("register");
    register.style.visibility = 'visible';
}

function check() {
    var registerPasswordConfirmationField = document.getElementById("registerPasswordConfirmationField");
    var checkmark = document.getElementById("checkmark");
    if (document.getElementById("registerPasswordField").value == registerPasswordConfirmationField.value && registerPasswordConfirmationField.value != "") {
        registerPasswordConfirmationField.style.borderColor = 'slateblue';
        checkmark.style.visibility = 'visible';
        checkmark.style.opacity = '1';
        checkmark.style.color = 'rgb(1, 194, 7)';

    } else if (registerPasswordConfirmationField.value == "") {
        registerPasswordConfirmationField.style.borderColor = 'slateblue';
        checkmark.style.color = 'lightgray';
    }
       
     else {
        registerPasswordConfirmationField.style.borderColor = 'red';
        checkmark.style.color = 'lightgray';

     }
    
}

function lastRegisterFieldOut() {
    var registerPasswordConfirmationField = document.getElementById("registerPasswordConfirmationField");
    if(document.getElementById("registerPasswordField").value == registerPasswordConfirmationField.value)
        registerPasswordConfirmationField.style.borderColor = 'lightgray';

}

function lastRegisterFieldOn() {
    var registerPasswordConfirmationField = document.getElementById("registerPasswordConfirmationField");
    if(document.getElementById("registerPasswordField").value == registerPasswordConfirmationField.value)
        registerPasswordConfirmationField.style.borderColor = 'slateblue';
}