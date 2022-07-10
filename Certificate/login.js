const btn_login = document.querySelector("#btn_login");
let userId = "Admin";
let userPass = "pass123"
let pass_wrong = document.querySelector("#pass_wrong");

btn_login.addEventListener('click', function(){
    let pass = document.querySelector("#floatingPassword");
    let user = document.querySelector("#floatingInput");
    if(user.value == userId && pass.value == userPass ){
        window.open("home.html", "_self");
    }else {
        pass_wrong.innerHTML = "Wrong Password";
    }
});
function loadingInfo(){
    let headName = document.querySelector("#head-name");
    headName.innerHTML = "Hi , " + userId  + "!";
}
function navigate(){
    window.open('create.html', '_self');
}

