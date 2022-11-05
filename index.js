const signUp = document.getElementById('register');
const signIn = document.getElementById('login');

signUp.addEventListener('click', () => {
    const form = document.getElementById('signUp');
    document.getElementById('signIn').style.display = 'none';
    signUp.className = 'selected';

    if(form.style.display === 'none') {
        form.style.display = 'block';
    }
    
});


signIn.addEventListener('click', () => {
    const form = document.getElementById('signIn');
    document.getElementById('signUp').style.display = 'none';
    signIn.className = 'selected';

    if(form.style.display === 'none') {
        form.style.display = 'block';
    }
    
});

// var selectElement = document.querySelector(".selected");
// selectElement.addEventListener("change", function() {
//     if(signIn === 'selected') {
//                 signUp.remove = 'selected';
//             } else if(signUp === 'selected') {
//                 signIn.remove = 'selected';
//             }
// });

// function selectElement() {
//     if(signIn === 'selected') {
//         signUp.remove = 'selected';
//     } else if(signUp === 'selected') {
//         signIn.remove = 'selected';
//     }
// };

function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

        if(username == "sdzygal" && password == "dzygal8744") {
            alert("Welcome back, sdzygal!");
            return false;
        } else {
            alert ("Wrong credentials. Try again.");
        }
}

