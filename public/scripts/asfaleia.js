function SingIn(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    
    if (username.value=="" & password.value==""){
        username.classList.add("is-invalid");
        password.classList.add("is-invalid");
    }
    else if(username.value!="" & password.value==""){
        username.classList.remove("is-invalid");
        password.classList.add("is-invalid");
    }
    else if(username.value=="" & password.value!=""){
        username.classList.add("is-invalid");
        password.classList.remove("is-invalid");
    }
    else if(username.value!="" & password.value!=""){
        if (document.getElementById("remember-me").checked) {
            localStorage.setItem(document.getElementById("username").value,document.getElementById("password").value);
        } 
        else {
            console.log("Checkbox is not checked..");
        }
        username.classList.remove("is-invalid");
        password.classList.remove("is-invalid");
        
        var queryString = "?username=" + username.value + "&password=" + password.value ;
        window.location.href = "SignedIn/User_Homepage.html" + queryString;
        
    }
};

function Go_register(){
    window.location.href = 'register/register.html';
}


function openMenu() {
    document.getElementById("MainMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("MainMenu").style.width = "0";
}

    document.querySelector(".communication").addEventListener("click",()=>{
        let communication_details=document.querySelector(".communication-details");
        console.log(communication_details.style.display)
        if(communication_details.style.display==''){
            communication_details.style.display='block';
        }
        else if (communication_details.style.display=="block"){
            communication_details.style.display="";}
    });

