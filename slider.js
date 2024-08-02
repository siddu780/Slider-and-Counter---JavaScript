//^ slider javascript

const prev=document.getElementById('prev')
const next=document.getElementById('next')
const slider=document.querySelector('.slider')
const slides=document.querySelectorAll('.slide')
let slideNumber=1
next.addEventListener("click",()=>{
    if(slideNumber>=slides.length){
        slider.style.transform=`translateX(-0px)`;
        slideNumber=1;
    }else{
        slider.style.transform=`translateX(-${slideNumber*600}px)`;
        slideNumber++;
    }
});
prev.addEventListener("click", () => {
    if (slideNumber >= 1) {
        slider.style.transform = `translateX(-${(slideNumber - 1) * 600}px)`;
        slideNumber--;
    } else {
        slider.style.transform = `translateX(-${(slides.length - 1) * 600}px)`;
        slideNumber = slides.length;
    }
});