let imgs=document.querySelectorAll(".header-slider ul img");
let prev_btn=document.querySelector(".control-prev");
let next_btn=document.querySelector(".control-next")

let n=0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block";
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})

let scrollContainer=document.querySelectorAll(".products");

for(let item of scrollContainer){
    item.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

const sidebar=document.querySelector(".sidebar")
const cross=document.querySelector(".sidebar-close")
const black=document.querySelector(".black")
const sidebtn=document.querySelector(".nav-bar")

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active")
    cross.classList.add("active")
    black.classList.add("active")
})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active")
    black.classList.remove("active")
    cross.classList.remove("active")
})



