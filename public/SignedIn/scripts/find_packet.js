
let searchParams = new URLSearchParams(window.location.search);
let price=parseInt(searchParams.get("price").split("€")[0]) 
let date1=new Date(document.querySelector(".date1").innerHTML)
let date2=new Date(document.querySelector(".date2").innerHTML)
let diff=(date2-date1)/(1000*60*60*24)
document.querySelector(".sumprice").innerHTML=price*diff+"€";
document.querySelector(".yposynolo_price").innerHTML=price*diff+"€"; 



window.addEventListener("scroll", (e) => {
    if(document.querySelector("body").scrollTop>0){
        document.querySelector("#header").style="visibility:hidden;transition:0.25s";
        document.querySelector("#progress_box").style="position:fixed;top:0;transition:0.5s";
        document.querySelector(".Body").style="position:relative;padding-top:400px;transition:0s"

    }
    else{
        document.querySelector("#header").style="visibility:visible;transition:0.5s";
        document.querySelector("#progress_box").style="position:relative;";
        document.querySelector(".Body").style="position:relative;padding-top:200px;transition:0s"
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
    console.log(progress_bar.style.visibility);
    if (progress_bar.style.visibility==""){
    progress_bar.style="visibility:hidden;top:-30px;transition: top 0.7s;height:0;margin:0;padding:0";
    document.querySelector(".Body").style="padding-top: 250px;";
    
    }
    else if (progress_bar.style.visibility=="hidden"){
        progress_bar.style.visibility="";
        progress_bar.style="top:0px;";
        document.querySelector(".Body").style="padding-top:300px";
    }
});

function addClickEvent_to_packetbuttons(){
    let PacketButtons=document.querySelectorAll("#CheckPacket");
    let vasikh_kalypsi=document.querySelector("#vasikh_kalypsi");
    
    for (let i=0;i<PacketButtons.length;i++){
        PacketButtons[i].addEventListener("click",(e)=>{
            
            console.log(PacketButtons[i].parentNode.parentNode.parentNode.parentNode)
            var container=e.target.parentNode.parentNode.parentNode.parentNode;
            var packetprice=e.target.parentNode.parentNode.children[0].innerHTML.split("€")[0];

            for (let j=0;j<PacketButtons.length;j++){
                if (e.target!=PacketButtons[j]){
                    PacketButtons[j].parentNode.parentNode.parentNode.parentNode.classList.remove("choosed");
                    PacketButtons[j].value="ΠΡΟΣΘΗΚΗ";
                }
            }
            document.querySelector(".sumprice").innerHTML=parseInt(new URLSearchParams(window.location.search).get('price'))*diff+"€";
            document.querySelector(".yposynolo_price").innerHTML=parseInt(new URLSearchParams(window.location.search).get('price'))*diff+"€";
            vasikh_kalypsi.classList.remove("choosed");
            
            if(e.target.value=="ΠΡΟΣΘΗΚΗ"){
                container.classList.add("choosed");
                e.target.value="ΑΦΑΙΡΕΣΗ";
                setTimeout(changeFont,500);
                document.querySelector(".sumprice").style="font-size:30px";
                document.querySelector(".sumprice").innerHTML=parseInt(document.querySelector(".sumprice").innerHTML.split("€")[0]) +parseInt(packetprice)+"€";
                document.querySelector(".yposynolo_price").innerHTML=parseInt(document.querySelector(".yposynolo_price").innerHTML.split("€")[0])+parseInt(packetprice)+"€";
                document.querySelector(".selected_yphresia").children[0].innerHTML=e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerHTML;
                document.querySelector(".selected_yphresia").children[1].innerHTML=packetprice+"€";
            }
            else if(e.target.value=="ΑΦΑΙΡΕΣΗ"){
                setTimeout(changeFont,500);
                document.querySelector(".sumprice").style="font-size:30px";
                container.classList.remove("choosed");
                e.target.value="ΠΡΟΣΘΗΚΗ";
                vasikh_kalypsi.classList.add("choosed");
                document.querySelector(".selected_yphresia").children[0].innerHTML="Βασική Κάλυψη";
                document.querySelector(".selected_yphresia").children[1].innerHTML="0,00€";
            }
            
        });
    }
}

function changeFont(){
    document.querySelector(".sumprice").style="font-size:20px";
}

document.querySelector("#continue").addEventListener("click",()=>{
    let choosed=document.querySelector(".choosed");
    let choosed_packet;
    let packet_price;
    if (choosed.parentNode.id!="box1"){
        choosed_packet=choosed.children[0].children[0].innerHTML;
        packet_price=choosed.children[1].children[3].children[0].innerHTML
    }
    else{
        choosed_packet=choosed.children[0].children[0].innerHTML;
        packet_price="0€";
    }
    
    let username=document.querySelector("#Username").innerHTML
    let queryString= "?packet_title="+choosed_packet+"&packet_price="+packet_price+"&sum="+document.querySelector(".sumprice").innerHTML;
    let form=document.querySelector("#packetForm");
    //let queryString="?packet_title="+document.querySelector("#carclass").innerHTML+"&model="+document.querySelector("#modal_model").innerHTML+"&img="+document.querySelector("#car_image").src+"&price="+document.querySelector("#price").innerHTML
    form.action="/SignedIn/"+document.querySelector("#Username").innerHTML+"/findyphresies"+queryString
    form.addEventListener("submit",(e)=>{
        let model=document.querySelector("#modal_model").innerHTML;
        console.log(model)
    
    })
      
});


addClickEvent_to_packetbuttons();
