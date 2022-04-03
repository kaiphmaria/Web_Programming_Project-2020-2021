const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
const sum= urlParams.get('sum');
document.querySelector(".sumprice").innerHTML=sum
document.querySelector(".yposynolo_price").innerHTML=sum


window.addEventListener("scroll", (e) => {
    if(document.querySelector("body").scrollTop>0){
        document.querySelector("#header").style="visibility:hidden;transition:0.25s";
        document.querySelector("#progress_box").style="position:fixed;top:0;transition:0.5s";
        document.querySelector(".Body").style="position:relative;padding-top:400px;transition:0s";
    }
    else{
        document.querySelector("#header").style="visibility:visible;transition:0.5s";
        document.querySelector("#progress_box").style="position:relative;";
        document.querySelector(".Body").style="position:relative;padding-top:200px;transition:0s";


    }
}); 

function openMenu() {
    document.getElementById("MainMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("MainMenu").style.width = "0";
}


document.querySelector(".drop1").addEventListener("click",()=>{
    let progress_bar=document.querySelector(".drop2");
    if (progress_bar.style.visibility==""){
    progress_bar.style="visibility:hidden;top:-30px;transition: top 0.7s;height:0;margin:0;padding:0";
    document.querySelector(".Body").style="padding-top: 300px;";
    
    }
    else if (progress_bar.style.visibility=="hidden"){
        progress_bar.style.visibility="";
        progress_bar.style="top:0px;";
        document.querySelector(".Body").style="padding-top:300px;transition:0s";
    }
});

function createElements(){
    let counter=0
    let yphresies=document.querySelectorAll("#box")
    let n=yphresies.length-4
    for (let i=0;i<n-4;i++){
        yphresies[i].parentNode.removeChild(yphresies[i])
    }

    let containers=document.querySelector(".containers");
    for (let i=0;i<Math.floor(n/2);i++){
        let row1=document.createElement("div");
        row1.classList.add("row");
        row1.id="row1";
        for(let j=0;j<2;j++){
            row1.appendChild(yphresies[counter])
            counter+=1
        }
        containers.appendChild(row1);
    }
    let row1=document.createElement("div");
    row1.classList.add("row");
    row1.id="row1";
    for(let k=0;k<n%2;k++){
       row1.appendChild(yphresies[counter])
       counter+=1
    }
}

function addClickEvent_to_yphresiabuttons(){

    let yphresia_buttons=document.querySelectorAll(".add_btn");

    for (let i=0;i<yphresia_buttons.length;i++){
    yphresia_buttons[i].addEventListener("click",(e)=>{
        
        var container=e.target.parentNode.parentNode;
        var yphresiaprice=e.target.parentNode.parentNode.children[0].children[1].innerHTML.split("€")[0];
        let selected_yphresies=document.querySelectorAll(".reserv_info")[4]; 
        
        for (let i=0;i< selected_yphresies.childNodes.length;i++){
            let childd=selected_yphresies.childNodes[i];
            if(childd.className=="non_selected"){
                selected_yphresies.removeChild(document.querySelector(".non_selected"));
            }
        }
        
        if(e.target.value=="ΠΡΟΣΘΗΚΗ"){
        container.classList.add("choosed");
        e.target.value="ΑΦΑΙΡΕΣΗ";
        setTimeout(changeFont,500);
        document.querySelector(".sumprice").style="font-size:30px";

        document.querySelector(".sumprice").innerHTML=parseInt(document.querySelector(".sumprice").innerHTML.split("€")[0])+parseInt(yphresiaprice)+"€";
        document.querySelector(".yposynolo_price").innerHTML=parseInt(document.querySelector(".yposynolo_price").innerHTML.split("€")[0])+parseInt(yphresiaprice)+"€";
        const newelement=document.createElement("p");
        newelement.classList.add("selected_yphresia");
        const elem_title=document.createElement("span");
        elem_title.innerHTML=container.children[0].children[0].innerHTML;
        const elem_price=document.createElement("span");
        elem_price.innerHTML=yphresiaprice+"€";
        newelement.appendChild(elem_title);
        newelement.appendChild(elem_price);
        selected_yphresies.appendChild(newelement);
        
        }
        else if(e.target.value=="ΑΦΑΙΡΕΣΗ"){
            setTimeout(changeFont,500);
            document.querySelector(".sumprice").style="font-size:35px";

            let target_title=e.target.parentNode.parentNode.children[0].children[0].innerHTML;
            container.classList.remove("choosed");
            document.querySelector(".sumprice").innerHTML=parseInt(document.querySelector(".sumprice").innerHTML.split("€")[0])-parseInt(yphresiaprice)+"€";
            document.querySelector(".yposynolo_price").innerHTML=parseInt(document.querySelector(".yposynolo_price").innerHTML.split("€")[0])-parseInt(yphresiaprice)+"€";
            e.target.value="ΠΡΟΣΘΗΚΗ";
            let elements=selected_yphresies.children;
            for(let j=0;j<elements.length;j++){
                console.log(elements[j]);
                if(elements[j].children[0].innerHTML==target_title){
                    selected_yphresies.removeChild(elements[j]);
                    break
                }
            }
            
        }
        if(selected_yphresies.children.length==0){
            let newelem=document.createElement("label");
            newelem.classList.add("non_selected")
            newelem.innerHTML="Επιλέξτε επιπλέον προϊόντα και υπηρεσίες";
            document.querySelectorAll(".reserv_info")[4].appendChild(newelem);
        }
        
    })
    }

}  

function changeFont(){
    document.querySelector(".sumprice").style="font-size:20px";
}
    
document.querySelector("#continue").addEventListener("click",()=>{
    
    let proionta_kai_yphresies=document.querySelectorAll(".reserv_info")[4].children;
    let queryString='';
    let counter=0;
    
    if(proionta_kai_yphresies[0].className!="non_selected"){
        for ( i=0;i<proionta_kai_yphresies.length;i++){
            list=proionta_kai_yphresies[i].children;
            queryString+="&yphresia"+i+"="+list[0].innerHTML;
            queryString+="&price"+i+"="+list[1].innerHTML;
            counter+=1
        }
    }
    queryString+="&sum="+document.querySelector(".sumprice").innerHTML+"&num_yphresies="+counter;


    let username=document.querySelector("#Username").innerHTML
    let form=document.querySelector("#yphresiesForm");
    form.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/payment?"+queryString
    
    
    

});


let n=3;
createElements(n);
addClickEvent_to_yphresiabuttons();