function delayAuthBox(){
    setTimeout(showAuthBox, 1500);
}
function showAuthBox(){
    var authBox = document.getElementById("authBox");
    authBox.style.visibility = 'visible';
    authBox.style.opacity = '1';
}

function slideRegistration(){
    var welcome = document.getElementById("welcome");
    var register = document.getElementById("register");
    var loginButton = document.getElementById("loginButton");
    welcome.style.left = '0';
    welcome.style.right = '60%';
    welcome.style.width = '40%';
    register.style.width = '60%';
    loginButton.style.width = '40%';
    loginButton.style.marginBottom = '7%';
    loginButton.style.marginTop = '10%';
    loginButton.style.height = '8%';
    
    setTimeout(showRegistration, 0700);

}
function showRegistration(){
    var register = document.getElementById("register"); 
    register.style.visibility = 'visible';
}