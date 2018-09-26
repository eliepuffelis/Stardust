function delayAuthBox(){
    setTimeout(showAuthBox, 0600);
}
function showAuthBox(){
    var authBox = document.getElementById("authBox");
    var stardustHeader = document.getElementById("stardustHeader");
    authBox.style.visibility = 'visible';
    authBox.style.opacity = '1';
    stardustHeader.style.visibility = 'visible';
    stardustHeader.style.opacity = '1';
}

function slideRegistration(){
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
    loginButton.style.height = '34px';
    
    setTimeout(showRegistration, 0700);

}
function showRegistration(){
    var register = document.getElementById("register"); 
    register.style.visibility = 'visible';
}

function check(){
    if(document.getElementById("registerPasswordField").value == 
        document.getElementById("registerPasswordConfirmationField").value){
        document.getElementById("checkmark").style.color = 'rgb(1, 194, 7)';
    }
    else{

        var checkmark = document.getElementById("checkmark")
        checkmark.style.color = 'red';
        document.getElementById("checkmark").UIkit.icon('.checkmark', {icon: close});    
    }
        
}