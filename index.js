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