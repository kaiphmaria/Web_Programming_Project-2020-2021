n=8;
/* 
window.addEventListener("load",()=>{
    
    for(let i=0;i<n/3-1;i++){
        let container2=document.createElement("div");
        container2.classList.add("row");
        container2.id="dontainer2";
        for(let j=0;j<3;j++){
            let imgbox=document.createElement("div");
            imgbox.classList.add("col");
            imgbox.classList.add("col-4");
            imgbox.id="imgbox";
            let img=document.createElement("img");
            img.src="img/insurance.jpg";
            let yphresies_info=document.createElement("div");
            yphresies_info.classList.add("yphresies_info");
            let infotitle=document.createElement("div");
            infotitle.classList.add("infotitle");
            infotitle.innerHTML="ΤΙΤΛΟΣ ΥΠΗΡΕΣΙΑΣ";
            let infoinfo=document.createElement("div");
            infoinfo.classList.add("infoinfo");
            infoinfo.innerHTML="Λεπτομέρειες";
            let learn_more=document.createElement("a");
            learn_more.href="";
            learn_more.classList.add("learn_more");
            learn_more.innerHTML="Μάθετε περισότερα";
            
            yphresies_info.appendChild(infotitle);
            yphresies_info.appendChild(infoinfo);
            yphresies_info.appendChild(document.createElement("div").appendChild(document.createElement("hr")));
            yphresies_info.appendChild(learn_more);
            imgbox.appendChild(img);
            imgbox.appendChild(yphresies_info);
            container2.appendChild(imgbox);
        }
        document.querySelector(".main-container").appendChild(container2);

    }
    let container2=document.createElement("div");
    container2.classList.add("row");
    container2.id="dontainer2";
    for(let i=0;i<n%3;i++){
        let imgbox=document.createElement("div");
        imgbox.classList.add("col");
        imgbox.classList.add("col-4");
        imgbox.id="imgbox";
        let img=document.createElement("img");
        img.src="img/insurance.jpg";
        let yphresies_info=document.createElement("div");
        yphresies_info.classList.add("yphresies_info");
        let infotitle=document.createElement("div");
        infotitle.classList.add("infotitle");
        infotitle.innerHTML="ΤΙΤΛΟΣ ΥΠΗΡΕΣΙΑΣ";
        let infoinfo=document.createElement("div");
        infoinfo.classList.add("infoinfo");
        infoinfo.innerHTML="Λεπτομέρειες";
        let learn_more=document.createElement("a");
        learn_more.href="";
        learn_more.classList.add("learn_more");
        learn_more.innerHTML="Μάθετε περισότερα";
        
        yphresies_info.appendChild(infotitle);
        yphresies_info.appendChild(infoinfo);
        yphresies_info.appendChild(document.createElement("div").appendChild(document.createElement("hr")));
        yphresies_info.appendChild(learn_more);
        imgbox.appendChild(img);
        imgbox.appendChild(yphresies_info);
        container2.appendChild(imgbox);

    }
    document.querySelector(".main-container").appendChild(container2)

}) */




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

function communication_details_inmenu(){
    document.querySelector(".communication").addEventListener("click",()=>{
        let communication_details=document.querySelector(".communication-details");
        if(communication_details.style.display==''){
            communication_details.style.display='block';
        }
        else if (communication_details.style.display=="block"){
            communication_details.style.display="";}
    });

}

document.querySelector(".drop").addEventListener("click",()=>{
    let drop_menu=document.querySelector(".drop_menu");
    if(drop_menu.style.display==''){
        drop_menu.style.display='block';
    }
    else if (drop_menu.style.display=="block"){
        drop_menu.style.display="";}
});

communication_details_inmenu();
