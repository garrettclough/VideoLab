function login(element) {
    if (document.querySelector(element).innerText == "Login") {
        document.querySelector(element).innerText = "Logout"
    }
    else {
        document.querySelector(element).innerText = "Login"
    }
}