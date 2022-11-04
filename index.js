$(window).on("hashchange", function(){
	if(location.hash.slice(1)=="register"){
		$(".card").addClass("extend");
		$("#login").removeClass("selected");
		$("#register").addClass("selected");
	} else {
		$(".card").removeClass("extend");
		$("#login").addClass("selected");
		$("#register").removeClass("selected");
	}
});
$(window).trigger("hashchange");

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

