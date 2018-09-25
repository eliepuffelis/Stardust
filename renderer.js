// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Initialize Firebase

var config = {
    apiKey: "AIzaSyAGyI0h7geBuNuRrUPB8yVm9QIo7de3uBs",
    authDomain: "stardust-4808d.firebaseapp.com",
    databaseURL: "https://stardust-4808d.firebaseio.com",
    projectId: "stardust-4808d",
    storageBucket: "stardust-4808d.appspot.com",
    messagingSenderId: "339517051071"
};

firebase.initializeApp(config);

var dataBaseRef = firebase.database().ref();

var signUpButton = document.getElementById("signUpButton");
var loginButton = document.getElementById("loginButton");

signUpButton.addEventListener('click', function(){
    var emailField = document.getElementById('registerEmailField').value;
    var passwordField = document.getElementById('registerPasswordField').value;

    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function () {
        writeUserData();
        alert("User created!!!");
    }).catch(function (error) {
        if (error != null) {
            console.log(error.message);
            return;
        }
    });
    
});

loginButton.addEventListener('click', function(){
    var loginEmailField = document.getElementById('loginEmailField').value;
    var loginPasswordField = document.getElementById('loginPasswordField').value;

    firebase.auth().signInWithEmailAndPassword(loginEmailField, loginPasswordField).then(function () {
        // document.location.href = "signInPassed.html";
    }).catch(function (error) {
        if (error != null) {
            console.log(error.message);
            return;
        }

    });
});

function getCurrentUser() {
    var currentUser = firebase.auth().currentUser;

    if (currentUser) {
        // User signed in
        return currentUser;
    } else {
        // User not signed in
        return null;
    }
}

function writeUserData() {
    var currentUser = getCurrentUser();
    if (currentUser != null) {
        var userId, username, email;
        userId = currentUser.uid;
        username = "PlaceholderUsername";
        email = currentUser.email;

        databaseRef.child("users/" + userId).set({
            username: username,
            email: email
        });
    } else {
        console.log("User NOT CREATED! User is NULL")
    }
}
