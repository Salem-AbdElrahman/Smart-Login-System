



var mainImg =document.querySelector('#mainImg');
var item =document.querySelectorAll('.items')
for(var i=0;i<item.length;i++){
    item[i].addEventListener('click',function(e){
    var imgSrc= e.target.getAttribute('src');
    mainImg.setAttribute('src',imgSrc);
    var activeElement = document.querySelector('.active');
activeElement.classList.remove('active')
e.target.classList.add('active')

    })
}

var imgList=Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer=document.querySelector('.lightbox-container');
var lightBoxItem=document.querySelector('.lightbox-item');
var currentIndexSlider;
var nextBtn=document.querySelector('#next');
var prevBtn=document.querySelector('#prev');
var closeBtn=document.querySelector('#close');
for(var i=0 ; i<imgList.length;i++){
    imgList[i].addEventListener('click',function(e){
        lightBoxContainer.classList.replace('d-none','d-flex');
        currentIndexSlider= imgList.indexOf(e.target);
       var imgSrc= e.target.getAttribute('src');
       lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    })
}

console.log(currentIndexSlider);



function nextslider(){
    currentIndexSlider++;
if(currentIndexSlider ==imgList.length){
    currentIndexSlider=0;
}

   var imgSrc = imgList[currentIndexSlider].getAttribute('src');
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
function prevslider(){
    currentIndexSlider--;
if(currentIndexSlider <0){
    currentIndexSlider=imgList.length-1;
}

   var imgSrc = imgList[currentIndexSlider].getAttribute('src');
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
function closeSlider(){
    lightBoxContainer.classList.replace('d-flex','d-none');

}
nextBtn.addEventListener('click',nextslider)
prevBtn.addEventListener('click',prevslider)
closeBtn.addEventListener('click',closeSlider)
document.addEventListener('keydown',function(e){
    if(e.key == 'ArrowRight'){
        nextslider()
    }
    else if(e.key == 'ArrowLeft'){
        prevslider();
    }
    else if(e.key == 'Escape'){
        closeSlider()
    }
})
lightBoxContainer.addEventListener('click',function(){
    closeSlider();
})
lightBoxItem.addEventListener('click',function(e){
    e.stopPropagation();
})