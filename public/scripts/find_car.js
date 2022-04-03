
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

window.addEventListener("load",()=>{
    AppendCarImages();
    createSlider();
})
     
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
        
        var queryString = "&username=" + username.value + "&password=" + password.value ;
        fetch('/SignedIn/' + username.value)
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            window.location.href="/SignedIn/"
        })
        .catch(function (error) {
            console.log('Request failed', error)
        });
        
    }
        
};

function Go_register(){
    window.location.href = 'register';
}

function openMenu() {
    document.getElementById("MainMenu").style="width : 250px";
}

function closeMenu() {
    document.getElementById("MainMenu").style.width = "0";
}

function getRandomNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
  

    
function AppendCarImages(){
    
    var card=document.querySelectorAll(".card")
    let n=card.length;
    
    var pages=document.querySelector("#pages");
    
    let numpages=Math.floor(n/9);
    let counter=0;
    
    for(let i=0;i<n;i++){
        card[i].parentNode.removeChild(card[i])
    }
    
    //Σελιδες
    for (let l=0;l<numpages;l++){
        const page=document.createElement("div");
        const container_images=document.createElement("div");
        container_images.id="container_images";
        page.classList.add("page");
        page.id=l;
        
        //Γραμμες
        for (let i=0;i<3;i++){
            const container_row=document.createElement("div");
            container_row.classList.add("container_row");
            container_images.appendChild(container_row);
            
            //Καρτες
            for (let j=0;j<3;j++){
                
                container_row.appendChild(card[counter]);
                
                counter+=1
            }
            container_images.appendChild(container_row);
            
            n=n-3;
        }
        page.appendChild(container_images);
        pages.appendChild(page);
        
    }
    const page=document.createElement("div");
    const container_images=document.createElement("div");
    container_images.id="container_images";
    page.classList.add("page");
    page.id=numpages;
    
    for (let a=0;a<Math.floor(n/3);a++){
        const container_row=document.createElement("div");
        container_row.classList.add("container_row");
        container_images.appendChild(container_row);
        
        for (let j=0;j<3;j++){
            
            container_row.appendChild(card[counter]);
            counter+=1
        }
        container_images.appendChild(container_row); 
    }
    page.appendChild(container_images);
    pages.appendChild(page);
    
    const container_row=document.createElement("div");
    container_row.classList.add("container_row");
    container_images.appendChild(container_row);
    
    for (let b=0;b<n%3;b++){
        
        container_row.appendChild(card[counter]);
        counter+=1
    }
    container_images.appendChild(container_row);
    
    document.querySelector("#Main-container").appendChild(pages);
    addClickEvent_to_carbuttons();
    addPagebuttons(document.querySelectorAll(".page").length);
    setActivepage(0);
    document.querySelector(".num_of_cars").innerHTML=n;

    
}  



function setActivepage(id){
    const page=document.querySelectorAll(".page");
    for(let i=0;i<page.length;i++){
        page[i].style.display="none";
        if (page[i].id==id){
            page[i].style.display="block";
        }
    }
    
}
function addPagebuttons(n){
    const page_buttons=document.createElement("div");
    const label=document.createElement("label");
    label.innerHTML="Σελίδα";
    page_buttons.appendChild(label);
    page_buttons.classList.add("page_buttons");
    for (let i=0;i<n;i++){
        const page_button=document.createElement("input");
        page_button.type="button";
        page_button.classList.add("page_button");
        page_button.id=i;
        page_button.value=i;
        page_buttons.appendChild(page_button);
    }
    pages.appendChild(page_buttons);
}


function addClickEvent_to_carbuttons(){
    
    let carbuttons=document.querySelectorAll("#selectcar-btn");
    
    for (let i=0;i<carbuttons.length;i++){
        carbuttons[i].dataset.toggle="modal";
        carbuttons[i].dataset.target="#CarModal";
        carbuttons[i].addEventListener("click",(e)=>{
            let card=e.target.parentNode.parentNode;
            let model=card.children[1].children[0];
            console.log(card.children[1].children)
            let car_info=card.children[1].children[1].innerHTML;
            let price=e.target.defaultValue;
            let modal_car_info=document.querySelector(".not_important");
            let modal_carclass=document.querySelector("#carclass")
            let modal_price=document.querySelector("#price");
            let modal_model=document.querySelector("#modal_model");
            let modal_img=document.querySelector(".main_modal_car_info");
            modal_img.children[0].children[0].src=card.children[0].children[0].src;
            modal_model.innerHTML=model.innerHTML;
            modal_price.innerHTML=price;
            modal_car_info.innerHTML=car_info;
            modal_carclass.innerHTML=card.children[1].children[2].innerHTML

            
            let form=document.querySelector("#carForm");
            var queryString="?carclass="+modal_carclass.innerHTML+"&model="+document.querySelector("#modal_model").innerHTML+"&img="+document.querySelector("#car_image").src+"&price="+document.querySelector("#price").innerHTML
            form.action="/car"+queryString
            
        });

    }
}

let epiloges_anazhthsis_btn=document.querySelector("#epiloges_anazhthshs-btn");
let filters=document.querySelector("#filters");

epiloges_anazhthsis_btn.addEventListener("click",()=>{
    if (filters.style.display=="none"){
        filters.style.display="block";
        filters.classList.add("col-3");
        pages.classList.remove("col-12");
        pages.classList.add("col-9");
    }
    else{
        filters.style.display="none";
        pages.classList.remove("col-9");
        pages.classList.add("col-12");
    }
});

function createSlider(){
    
    var inputLeft=document.getElementById("input-left");
    var inputRight=document.getElementById("input-right");
    var thumbLeft=document.querySelector(".slider .thumb.left");
    var thumbRight=document.querySelector(".slider .thumb.right");
    var range=document.querySelector(".slider .range");
    
    function setLeftValue(){
        var _this=inputLeft,
        min=parseInt(_this.min),
        max=parseInt(_this.max);
        
        _this.value=Math.min(parseInt(_this.value),parseInt(inputRight.value)-1);
        var percent=((_this.value-min)/(max-min))*100;
        
        thumbLeft.style.left=percent+"%";
        range.style.left=percent+"%";
        document.querySelector(".minprice").innerHTML=Math.round(percent)+" €";
        
    }
    setLeftValue();
    
    function setRightValue(){
        var _this=inputRight,
        min=parseInt(_this.min),
        max=parseInt(_this.max);
        
        _this.value=Math.max(parseInt(_this.value),parseInt(inputLeft.value)-1);
        var percent=((_this.value-min)/(max-min))*100;
        
        thumbRight.style.right=(100-percent)+"%";
        range.style.right=(100-percent)+"%";
        
        document.querySelector(".maxprice").innerHTML=Math.round(percent)+" €";
    }
    setRightValue();
    
    inputLeft.addEventListener("input",setLeftValue);
    inputRight.addEventListener("input",setRightValue);
    
    inputLeft.addEventListener("mouseover",()=>{
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout",()=>{
        thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown",()=>{
        thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup",()=>{
        thumbLeft.classList.remove("active");
    });
    
    inputRight.addEventListener("mouseover",()=>{
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout",()=>{
        thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown",()=>{
        thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup",()=>{
        thumbRight.classList.remove("active");
    });
    
}

document.querySelector(".drop1").addEventListener("click",()=>{
    let progress_bar=document.querySelector(".drop2");
    if (progress_bar.style.visibility==""){
    progress_bar.style="visibility:hidden;top:-30px;transition: top 0.7s;height:0;margin:0;padding:0";
    document.querySelector(".Body").style="padding-top: 250px;"
    
    }
    else if (progress_bar.style.visibility=="hidden"){
        progress_bar.style.visibility="";
        progress_bar.style="top:0px;";
        document.querySelector(".Body").style="padding-top:350px";


    }
});

let page_button=document.querySelectorAll(".page_button");
for(let i=0;i<page_button.length;i++){
    page_button[i].addEventListener("click",()=>{
        setActivepage(i);
    });
}

document.querySelector(".drop1").addEventListener("click",()=>{
    let progress_bar=document.querySelector(".drop2");
    console.log(progress_bar.style.display);
    if (progress_bar.style.visibility=="visible"){
    progress_bar.style="visibility:hidden;top:-30px;transition: top 0.7s;height:0;margin:0;padding:0";
    document.querySelector(".Body").style="padding-top: 250px;"
    
    }
    else if (progress_bar.style.visibility==""){
        progress_bar.style="visibility:visible;top:0px;";
        document.querySelector(".Body").style="padding-top:250px";


    }
});

function CheckCar(){
    var queryString="&carclass="+document.querySelector(".select_carclass").value +"&model="+ document.querySelector("#modal_model").innerHTML+"&price="+document.querySelector("#price").innerHTML+"&car_info="+document.querySelector(".not_important").innerHTML;


}

function SearchCar(e){

    let cars=document.querySelectorAll(".card")
    let carclass=document.querySelector(".select_carclass").value;
    let minprice=parseInt(document.querySelector(".minprice").innerHTML.split("€")[0])
    let maxprice=parseInt(document.querySelector(".maxprice").innerHTML.split("€")[0])
    let n=0;
    for(let i=0;i<cars.length;i++){
        let carprice=parseInt(cars[i].children[2].children[0].value.split("€")[0]);
        if(cars[i].children[1].children[2].innerHTML!=carclass || (carprice<parseInt(minprice) || carprice>parseInt(maxprice))){
            console.log(carprice, minprice,maxprice)
            cars[i].style="display:none";
        }
        else{
            cars[i].style="display:block";
            n=n+1;
        }
    }
    document.querySelector(".num_of_cars").innerHTML=n;
}