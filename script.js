score=0;
cross=true;
audio=new Audio('GameMusic.mp3');
audioGO=new Audio ('GameOver.wav');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode);
    if(e.keyCode==38){
        man=document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout(()=>{
            man.classList.remove('animateMan')
        }, 800);
    }

    if(e.keyCode==39){
        man=document.querySelector('.man');
        manX=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left=manX+112+"px"
    }

    
    if(e.keyCode==37){
        man=document.querySelector('.man');
        manX=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left=(manX-112)+"px"
    }
}

setInterval(() => {
    man=document.querySelector('.man');
    gameOver=document.querySelector('.gameOver');
    dog= document.querySelector('.dog');
    mx=parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));

    dx=parseInt(window.getComputedStyle(dog, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dog, null).getPropertyValue('top'));

    offsetX=Math.abs(mx-dx);
    offsetY=Math.abs(my-dy);
    console.log(offsetX, offsetY);

    if(offsetX<127 && offsetY<=120){
        dog.classList.remove('dogAni');
        audio.pause();
        audioGO.play();
        gameOver.style.visibility='visible';
        startOver.style.visibility='visible';
        
    }

    else if(offsetX<145 && cross){
        score+=10;
        updateScore(score);
        cross=false;
        setTimeout(() => {
           cross=true; 
        }, 1000);

        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(dog, null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.1;
            dog.style.animationDuration=newDur+'s';  
        }, 1000);

        

    }
    
}, 100);

function updateScore(score){
    scoreCont.innerHTML="Score:"+ score
}