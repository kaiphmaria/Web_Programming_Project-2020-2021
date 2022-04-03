window.addEventListener("load",()=>{
    $("#welcome").fadeOut(2500);
})

let SingInForm=document.getElementById("SingInForm") 
SingInForm.addEventListener("submit",(e)=>{
    var username1=document.getElementById("username1");
    var password1=document.getElementById("password1");
    
    SingInForm.action="/car"+window.location.search
    
    if (username1.value=="" & password1.value==""){
        username1.classList.add("is-invalid");
        password1.classList.add("is-invalid");
    }
    else if(username1.value!="" & password1.value==""){
        username1.classList.remove("is-invalid");
        password1.classList.add("is-invalid");
    }
    else if(username1.value=="" & password1.value!=""){
        username1.classList.add("is-invalid");
        password1.classList.remove("is-invalid");
    }
    else if(username1.value!="" & password1.value!=""){
        username1.classList.remove("is-invalid");
        password1.classList.remove("is-invalid");

    }
}); 

function openMenu() {
    document.getElementById("MainMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("MainMenu").style.width = "0";
}
function Go_register(){
    window.location.href = 'Register';
}

let RegistrationForm=document.querySelector("#RegistrationForm")
RegistrationForm.addEventListener("submit",(e)=>{
    let pass1=document.querySelector("#password").value
    let  pass2=document.querySelector("#password-repeat").value
    if(pass1!=pass2){ 
        alert("Οι δύο κωδικοί πρέπει να είναι ίδιοι.");
        e.preventDefault();
    }
    RegistrationForm.action="/car"+window.location.search
  })