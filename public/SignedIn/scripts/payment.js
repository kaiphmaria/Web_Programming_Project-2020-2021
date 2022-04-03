const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
const sum= urlParams.get('sum');
const appeared=0;

document.querySelector(".sumprice").innerHTML=sum

let yphresies_cont=document.querySelector("#yphresies_cont")
for(let i=0;i<parseInt(urlParams.get("num_yphresies"));i++){
    yphresia_title=urlParams.get("yphresia"+i)
    yphresia_kostos=urlParams.get("price"+i)
    p=document.createElement("p");
    p.classList.add("selected_yphresia")
    titlos=document.createElement("span")
    titlos.innerHTML=yphresia_title
    kostos=document.createElement("span")
    kostos.innerHTML=yphresia_kostos
    p.appendChild(titlos)
    p.appendChild(kostos)
    yphresies_cont.appendChild(p)

}

document.querySelector(".drop1").addEventListener("click",()=>{
    let drop3=document.querySelector(".drop3");
    console.log(drop3.style.display)
    if (drop3.style.display=="flex"){
        document.querySelector(".more_info").innerHTML="Περισσότερες Λεπτομέρειες";
        drop3.style="display:none;;top:-30px;transition: top 0.7s;height:0;margin:0;padding:0";
        
    }
    else if (drop3.style.display=="" | drop3.style.display=="none"){
        document.querySelector(".more_info").innerHTML="Λιγότερες Λεπτομέρειες";
        drop3.style.visibility="";
        drop3.style="display:flex;top:0px;";
    }
});

document.querySelector("#payment_options").addEventListener("click",(e)=>{
    if (e.target.id==="card-btn" | document.querySelector("#card-btn").checked ){
        document.querySelector("#card_data").style="display:flex;visibility:visible;top:0px";
    }
    else{
        document.querySelector("#card_data").style="display:none;visibility:hidden;top:-100px";
    }


})


let form=document.querySelector("#paymentForm");
document.querySelector("#Submit_Reservation").addEventListener("click",(e)=>{
    form.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/SubmitReservation"
    let options=document.querySelectorAll(".form-check-input")
    for(let i=0;i<options.length;i++){
        if(options[i].checked){
            if( options[i].value=='option3'){
                let card_num=document.querySelector("#card_num").value
                let name=document.querySelector("#name").value
                let exp=document.querySelector("#exp").value
                let cvv=document.querySelector("#cvv").value
                console.log(card_num)
                if(card_num!="" && name!="" && exp!="" && cvv!=""){
                    if(isNaN(card_num)){
                        alert("Ο αριθμός κάρτας πρέπει να περιέχει αριθμούς.")
                    }
                    if(card_num.length!=16){
                        alert("Δώστε έγκυρο αριθμό κάρτας")
                        break
                    }
                    if (name != name.toUpperCase()){
                        alert("Δώστε με κεφαλαία γράμματα το όνομα κατόχου.")
                        break
                    }
                    if(exp.length!=5 || !exp.includes("/")){
                        alert("Η ημερομηνία λήξης της κάρτας πρέπει να είναι στην μορφή: ΜΜ/ΥΥ")
                        break
                    }
                    
                    if(parseInt(exp.split("/")[1])<= parseInt(new Date().getFullYear().toString().slice(-2)) ) {
                        console.log(parseInt(new Date().getMonth().toString()))
                        if(parseInt(exp.split("/")[0])<= parseInt(new Date().getMonth().toString()) ){
                            alert("Η κάρτα σας έχει λήξει")
                            break
                        }
                    }
                    else{
                        form.submit()
                    }
                }
                else{
                    alert("Δώστε τα στοιχεία της κάρτας σας.")
                    break
                }
            }
            else{
                form.submit()
            }
        }
    }

})