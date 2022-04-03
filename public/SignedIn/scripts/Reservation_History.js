

window.addEventListener("load",()=>{
    $("#welcome").fadeOut(2500);


    let queryString=""
    let scope=document.querySelectorAll(".scope")
    let krathseis=document.querySelectorAll(".krathseis")
    let modals=document.querySelectorAll(".modal")
    for(let i=0;i<scope.length;i++){
        scope[i].innerHTML=i
        krathseis[i].dataset.target="#ReservationModal"+i
        modals[i].id="ReservationModal"+i
        krathseis[i].addEventListener("click",(e)=>{
            let row=e.target.parentNode
            let id=row.children[0].innerHTML
            let modalOn=document.querySelector("#ReservationModal"+id)
            let modal_body_items=modalOn.children[0].children[0].children[1].children[0]
            let ar_krathshs=modal_body_items.children[0].children[1].innerHTML
            queryString=ar_krathshs
        })
    }
    let dates1=document.querySelectorAll(".date1")
    let modal_body=document.querySelectorAll(".modal-body")
    let modal_footer=document.querySelectorAll(".modal-footer")
    let modal_body_items=document.querySelectorAll(".modal-body-items")
    let today = new Date();
    for(let i=0;i<krathseis.length;i++){
        date1=new Date(dates1[i].innerHTML);
        let diff=(date1-today)/(1000*60*60*24);
        if (diff>2){
            let button=document.createElement("button");
            button.type="submit";
            button.dataset.dismiss="modal"
            button.dataset.target="#ConfirmationModal"
            button.dataset.toggle="modal"
            console.log(modal_body[i].parentNode.parentNode.parentNode.className)
            button.classList.add("btn");
            button.classList.add("btn-danger");
            button.id="Cancel_Reservation";
            
            button.innerHTML="Ακύρωση Κράτησης";
            document.querySelectorAll(".modal-footer")[i].appendChild(button)
            
            
        }
    }
    
    let form=document.querySelector("#CancelReservationForm");
    form.addEventListener("submit",(e)=>{
        form.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/CancelReservation/"+queryString ;
        
    })
    
})


