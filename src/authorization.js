document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});

var firebaseConfig = {
    apiKey: "AIzaSyClidLlJT070WFfbMXcBQ1MgLfUWmU2Ak0",
    authDomain: "sddd-92f2c.firebaseapp.com",
    projectId: "sddd-92f2c",
    storageBucket: "sddd-92f2c.appspot.com",
    messagingSenderId: "530070435721",
    appId: "1:530070435721:web:dbea243042fb5a0eabd358",
    measurementId: "G-2ZB1EX8VS1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase


const auth = firebase.auth();

const signUpForm = document.querySelector('#signUpForm');
const signInForm = document.querySelector('#signInForm');
// const signOutBtn = document.querySelector('#signOut');

signUpForm.addEventListener('submit', formSubmitHandler);
signInForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();
}

//Registration
function signUp() {
    const email = document.querySelector('#emailSignUp');
    const password = document.querySelector('#passwordSignUp');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    console.log(email);
    promise.catch(error => M.toast({ html: error }))

}


//Authorization
function signIn() {
    const email = document.querySelector('#emailSignIn');
    const password = document.querySelector('#passwordSignIn');
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(error => M.toast({ html: error }))

}
let signInBtn = document.querySelector('#passwordSignIn');
signInBtn.addEventListener('click', () => {
    signIn()
})

function signOut() {
    auth.signOut();

}

auth.onAuthStateChanged((user) => {
    if (user) {
        const email = user.email
        M.toast({ html: 'Active user!, ' + email })
    } else {
        M.toast({ html: 'No Active user ' })
    }
})