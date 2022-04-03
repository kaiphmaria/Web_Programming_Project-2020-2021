$("#welcome").fadeOut(2500);

document.querySelector("#RegistrationForm").addEventListener("submit",(e)=>{
    let pass1=document.querySelector("#password").value
    let  pass2=document.querySelector("#password-repeat").value
    console.log(pass1,pass2)
    if(pass1!=pass2){ 
        alert("Οι δύο κωδικοί πρέπει να είναι ίδιοι.");
        e.preventDefault();
      }
      else{
        alert("Εγγραφήκατε!")
      }
  })