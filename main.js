const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');
const auto=true;
const intervalTime=3000;
let slideInterval;

const nextSlide = () => {
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for current class
    if(current.nextElementSibling){
        //add current to next class(ie sibling or other class)
        current.nextElementSibling.classList.add('current');
    }
    else{
        //return to first current class
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide=() => {
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for current class
    if(current.previousElementSibling){
        //add current to next class(ie sibling or other class)
        current.previousElementSibling.classList.add('current');
    }
    else{
        //return to first current class
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}


next.addEventListener('click', e => {
    nextSlide();
    // if(auto){
    //     clearInterval(slideInterval);
    //     slideInterval=setInterval(nextSlide,intervalTime);
    // }
});

prev.addEventListener('click', e => {
    prevSlide();
    // if(auto){
    //     clearInterval(slideInterval);
    //     slideInterval=setInterval(nextSlide,intervalTime);
    // }
});

//auto slide
if(auto){
    slideInterval= setInterval(nextSlide,intervalTime);
}