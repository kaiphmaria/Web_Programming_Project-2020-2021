

var stathmos_par=document.getElementById("stathmos_par");
var stathmos_ep=document.getElementById("stathmos_ep");
var date1=document.getElementById("date_paralavis");
var date2=document.getElementById("date_epistrofis");
var time1=document.getElementById("time1");
var time2=document.getElementById("time2");
var tomorrow=new Date(new Date().getTime()+(1*24*60*60*1000)).toJSON().slice(0,10);   
var twodays_from_today = new Date(new Date().getTime()+(2*24*60*60*1000)).toJSON().slice(0,10);
var threedays_from_today = new Date(new Date().getTime()+(3*24*60*60*1000)).toJSON().slice(0,10);
var fourdays_from_today = new Date(new Date().getTime()+(4*24*60*60*1000)).toJSON().slice(0,10);

window.addEventListener("load",()=>{

    document.getElementById("date_paralavis").value=twodays_from_today;
    document.getElementById("date_epistrofis").value=fourdays_from_today;

    $("#welcome").fadeOut(2500);

    document.querySelector("#deals_date1").innerHTML=date1.value
    document.querySelector("#deals_date2").innerHTML=date2.value
        
})

function Go_register(){
    window.location.href = 'Register';
}

function insert_age(){
    var age=document.getElementById("age");
    const date1 = new Date(age.value);
    const date2 = new Date(tomorrow);
    var diffYears = parseInt( ((date2 - date1)-1) / (1000 * 60 * 60 * 24 * 30 * 12), 10); 

    console.log(diffYears);

    if (age.value!="" & (diffYears)>=18){
        document.getElementById("age_input").style.display="none";
        document.getElementById("divcheckbox").style.display="none";
        document.getElementById("age_inserted").style.display="block";
        document.getElementById("age_field").innerHTML=age.value;
    }
    if (age.value==""){
        age.classList.add("is-invalid");
    }
    if( (diffYears) <18 ){
        age.classList.add("is-invalid");
        document.getElementById("age_alert").innerHTML="Ο οδηγός πρέπει να είναι άνω των 18.";
    }
}

function hide_age_input(){
    document.getElementById("age_checkbox").checked=1;
    document.getElementById("age_input").style.display="none";
    document.getElementById("divcheckbox1").style.display="block";

}

function openMenu() {
    document.getElementById("MainMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("MainMenu").style.width = "0";
}

function carousel_active(id){
    if (id=="option1"){
        document.getElementById("city-cars-carousel").style.display="block ";
        document.getElementById("epaggelmatika-cars-carousel").style.display="none";
        document.getElementById("used-cars-carousel").style.display="none";
        document.getElementById("lux-cars-carousel").style.display="none ";
        }
    else if (id=="option2"){
        document.getElementById("city-cars-carousel").style.display="none";
        document.getElementById("epaggelmatika-cars-carousel").style.display="block";
        document.getElementById("used-cars-carousel").style.display="none";
        document.getElementById("lux-cars-carousel").style.display="none ";
    }
    else if (id=="option3"){
        document.getElementById("city-cars-carousel").style.display="none ";
        document.getElementById("epaggelmatika-cars-carousel").style.display="none";
        document.getElementById("used-cars-carousel").style.display="block";
        document.getElementById("lux-cars-carousel").style.display="none ";
    }
    else if (id=="option4"){
        document.getElementById("city-cars-carousel").style.display="none";
        document.getElementById("epaggelmatika-cars-carousel").style.display="none";
        document.getElementById("used-cars-carousel").style.display="none";
        document.getElementById("lux-cars-carousel").style.display="block ";
    }
}



let cardeals=document.querySelectorAll(".car-selection-button")
for(let i=0; i<cardeals.length;i++){
    cardeals[i].addEventListener("click",(e)=>{
        let carclass=e.target.parentNode.children[2].innerHTML
        let form=e.target.parentNode.parentNode
        let dates="?stathmos_par="+document.querySelector("#stathmos_par").value+"&stathmos_ep="+document.querySelector("#stathmos_ep").value+"&date1="+document.querySelector("#date_paralavis").value+"&date2="+document.querySelector("#date_epistrofis").value
        let queryString=dates+"&img="+e.target.parentNode.children[0].children[0].src+"&carclass="+carclass+"&model="+e.target.parentNode.children[1].innerHTML+"&price="+e.target.innerHTML.split("/")[0]
        form.action="/car"+queryString
        form.submit() 
    })
}

document.querySelector("#Find_Car_Form").addEventListener("submit",(e)=>{ 
        
    
    var age_checkbox=document.getElementById("age_checkbox");
    var age=document.getElementById("age");
    const date11 = new Date(age.value);
    const date22 = new Date(tomorrow);
    var diffYears = parseInt( ((date22 - date11)-1) / (1000 * 60 * 60 * 24 * 30 * 12), 10); 
    
    if (age_checkbox.checked | (diffYears)>=18){
        
        if (stathmos_par.value==""){stathmos_par.classList.add("is-invalid");e.preventDefault()}
        if (stathmos_ep.value==""){stathmos_ep.classList.add("is-invalid");e.preventDefault()}
        if (date1.value< tomorrow){date1.classList.add("is-invalid");e.preventDefault()}
        if (date2.value<threedays_from_today){date2.classList.add("is-invalid");e.preventDefault()}
        if (date1.value>=date2.value & time1.value>=time2.value|date1.value>date2.value){
            document.getElementById("dates1").classList.add("is-invalid");
            document.getElementById("dates2").classList.add("is-invalid");
            e.preventDefault()
        }

        if(stathmos_par.value!="" & stathmos_ep.value!="" & date1.value >= tomorrow & date2.value>= threedays_from_today &((date1.value<=date2.value & time1.value<time2.value)|date1.value<date2.value)){
            var queryString = "?stathmos_par=" + stathmos_par.value + "&stathmos_ep=" + stathmos_ep.value +"&date1=" + date1.value+ "&date2=" + date2.value +"&time1="+time1.value+"&time2="+time2.value;
        }
    else{
        age.classList.add("is-invalid");
        e.preventDefault()
    }
}
})

function appendDates_to_FindCar(){

    var tomorrow=new Date(new Date().getTime()+(1*24*60*60*1000)).toJSON().slice(0,10);   
    var threedays_from_today = new Date(new Date().getTime()+(3*24*60*60*1000)).toJSON().slice(0,10);   
        
    document.getElementById("date_paralavis").value=tomorrow;
    document.getElementById("date_epistrofis").value=threedays_from_today;


    document.getElementById("age_checkbox").addEventListener("change", ()=>{
        if (!this.checked){
            document.getElementById("divcheckbox").style.display="none";
            document.getElementById("age_input").style.display="block";
            
        }
    });
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

function Window_Resize(){
    window.addEventListener("resize",()=>{
        if (window.innerWidth<800){

        let carousels=document.querySelectorAll(".CarCarousel-container");
        let carousel_inner=document.querySelectorAll(".carousel-inner");
        let cards=document.querySelectorAll(".cars-card");
        let counter=0;

        for(let k=0;k<carousels.length;k++){
            carousels[k].children[0].children[0].style="display:flex;flex-direction:row;justify-content:center";

            let items=carousels[k].children[0].children[0].children;

            for (let i=0;i<carousel_inner.length;i++){
                carousels[k].children[0].removeChild(carousel_inner[i]);
            }
            for (let j=0;j<9;j++){
                let item=document.createElement("div");
                item.classList.add("item");
                if (j==0){
                    item.classList.add("active");
                }
                let cars_list=document.createElement("div");
                cars_list.classList.add("cars-list");
                console.log(cards[counter],counter)
                cars_list.style="justify-content:center";
                cars_list.appendChild(cards[counter]);
                item.appendChild(cars_list);
                carousel_inner[k].appendChild(item);
                counter=counter+1;
            } 
        }
        }
    })
}


appendDates_to_FindCar();
communication_details_inmenu();
Window_Resize();