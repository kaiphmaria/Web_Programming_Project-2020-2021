

  function able_to_save(id){
    let savebtn=document.getElementsByClassName("btn btn-primary")[id];
    savebtn.disabled=0;
  }

  function Pop_up_saved(id){
   let popup=document.getElementsByClassName("saved")[id];
   let savebtn=document.getElementsByClassName("btn btn-primary")[id];
   console.log(savebtn);
   savebtn.disabled=1;
   popup.style.display="block";
    $(popup).fadeOut(1000); 
    
  }
  
  
let ChangePasswordForm=document.querySelector("#ChangePasswordForm")
let ChangeFnameForm=document.querySelector("#ChangeFnameForm")
let ChangeLnameForm=document.querySelector("#ChangeLnameForm")
let ChangeEmailForm=document.querySelector("#ChangeEmailForm")
let ChangePhoneForm=document.querySelector("#ChangePhoneForm")
let ChangeAdtForm=document.querySelector("#ChangeAdtForm")
let ChangeAr_DiplomatosForm=document.querySelector("#ChangeAr_DiplomatosForm")
let ChangeDieythinsiForm=document.querySelector("#ChangeDieythinsiForm")

let urlpassword=document.querySelector("#password")

function ChangePassword(){
  
  let oldpassword=document.getElementById("oldpassword1");
  let newpassword=document.getElementById("newpassword");
  ChangePasswordForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"
  
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");
    
    if(newpassword.value.length>=8){
      newpassword.classList.remove("is-invalid");
      newpassword.classList.add("is-valid");
      ChangePasswordForm.submit()
      Pop_up_saved(0);

    }
    else {
      document.getElementById("newpass_check").innerHTML="Ο κωδικός πρόσβασης πρέπει να είναι τουλαχιστον 8 χαρακτήρων.";
      newpassword.classList.add("is-invalid");

      }
    }
    else{
      oldpassword.classList.add("is-invalid");

    }
}
    
function ChangeFname(){
  let oldpassword=document.getElementById("oldpassword2");
  let newfname=document.getElementById("newfname");
  let fname=document.getElementById("fname");
  ChangeFnameForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"

  console.log(oldpassword.value);
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");

    if(1){
      newfname.classList.remove("is-invalid");
      newfname.classList.add("is-valid");
      Pop_up_saved(1);
      fname.value=newfname.value;
      ChangeFnameForm.submit()
    }
}
  else{
    oldpassword.classList.add("is-invalid");
  }
}

function ChangeLname(){
  let oldpassword=document.getElementById("oldpassword3");
  let newlname=document.getElementById("newlname");
  let lname=document.getElementById("lname");
  ChangeLnameForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"
  
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");

    if(1){
      newfname.classList.remove("is-invalid");
      newfname.classList.add("is-valid");
      Pop_up_saved(2);
      lname.value=newlname.value;
      ChangeLnameForm.submit()

    }
  }
  else{
    oldpassword.classList.add("is-invalid");
  }
}


function ChangeEmail(){
  let oldpassword=document.getElementById("oldpassword4");
  let newemail=document.getElementById("newemail");
  let email=document.getElementById("email");
  ChangeEmailForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"

  
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");

    if(1){
      newemail.classList.remove("is-invalid");
      newemail.classList.add("is-valid");
      Pop_up_saved(3);
      email.value=newemail.value;        
      ChangeEmailForm.submit()

    }
  }
  else{
    oldpassword.classList.add("is-invalid");
  }
}

  
function ChangePhone(){
  let oldpassword=document.getElementById("oldpassword5");
  let newphone=document.getElementById("newphone");
  let phone=document.getElementById("phone");
  ChangePhoneForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"
  
  console.log(oldpassword.value);
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");
    let isnumber=0;
    for(let i=0;i<newphone.value.length;i++){
      if(newphone.value[i]=="string"){
        newphone.classList.add("is-invalid");
        isnumber=1
      }
    }
    
    if(newphone.value.length<10 || isnumber==1){
      newphone.className="is-invalid";
  
    }
    else{
      newphone.classList.remove("is-invalid");
      newphone.classList.add("is-valid");
      Pop_up_saved(4);
      phone.value=newphone.value;
      ChangePhoneForm.submit()
      }
  }
  
  else{
    newphone.classList.add("is-invalid");

  }
}

  
function Changeadt(){
  let oldpassword=document.getElementById("oldpassword6");
  let newadt=document.getElementById("newadt");
  let adt=document.getElementById("adt");
  ChangeAdtForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"
  
  console.log(oldpassword.value);
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");

    if(newadt.value.length!=8){
      newadt.classList.add("is-invalid");
      alert("Ο Α.Δ.Τ πρέπει να έχει μήκος 8.")

    }
    else{
      newadt.classList.remove("is-invalid");
      newadt.classList.add("is-valid");
      Pop_up_saved(5);
      adt.value=newadt.value;
      ChangeAdtForm.submit()

    }
  }
  else{
    oldpassword.classList.add("is-invalid");
  }
}
  
function Changear_diplomatos(){
  let oldpassword=document.getElementById("oldpassword7");
  let newar_diplomatos=document.getElementById("newar_diplomatos");
  let ar_diplomatos=document.getElementById("ar_diplomatos");
  ChangeAr_DiplomatosForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"
  
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");

    if(newar_diplomatos.value.length!=11){
      newar_diplomatos.classList.add("is-invalid");

    }
    else{
      newar_diplomatos.classList.remove("is-invalid");
      newar_diplomatos.classList.add("is-valid");
      document.getElementById("save").disabled=1;
      Pop_up_saved(6);
      ar_diplomatos.value=newar_diplomatos.value;
      ChangeAr_DiplomatosForm.submit()

    }
  }
  else{
    oldpassword.classList.add("is-invalid");
  }
}

function ChangeAddress(){
  ChangeDieythinsiForm.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/ProfilSettings"
  let oldpassword=document.getElementById("oldpassword8");
  let nomos=document.getElementById("nomos");
  let poli=document.getElementById("poli");
  let odos=document.getElementById("odos");
  let arithmos=document.getElementById("arithmos");
  let tk=document.getElementById("tk");
  let newnomos=document.getElementById("newnomos");
  let newpoli=document.getElementById("newpoli");
  let newodos=document.getElementById("newpoli");
  let newarithmos=document.getElementById("newarithmos");
  let newtk=document.getElementById("newtk");
  
  if (oldpassword.value==urlpassword.value){
    oldpassword.classList.remove("is-invalid");
    oldpassword.classList.add("is-valid");

    if( newpoli.value!="" && newodos.value!="" && newarithmos.value!="" && newtk.value!=""){
      
      Pop_up_saved(7);
      ChangeDieythinsiForm.submit()
    }
  }
  else{
    oldpassword.classList.add("is-invalid");
  }
}



