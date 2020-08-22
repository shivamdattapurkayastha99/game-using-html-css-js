score=0;
cross=true;
document.onkeydown=function(e){
    console.log("Key code is ",e.keyCode)
    if(e.keyCode==38)
    {
        shivam=document.querySelector('.shivam');
        shivam.classList.add('animateShivam');
        setTimeout(()=> {
            shivam.classList.remove('animateShivam');
        },700)
    }
    if(e.keyCode==39)
    {
        shivam=document.querySelector('.shivam');
        shivamx=parseInt(window.getComputedStyle(shivam,null).getPropertyValue('left'));
        shivam.style.left=shivamx+112+"px";
        
    }
    if(e.keyCode==37)
    {
        shivam=document.querySelector('.shivam');
        shivamx=parseInt(window.getComputedStyle(shivam,null).getPropertyValue('left'));
        shivam.style.left=shivamx-112+"px";
        
    }
}
setInterval(()=>{
    shivam=document.querySelector('.shivam');
    gameOver=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(shivam,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(shivam,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<93&&offsetY<52)
    {
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(cross&&offsetX<145)
    {
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
           cross=true; 
        },1000);
    }
    


},100);
function updateScore(score){
    score.innerHTML+"Score:"+score;

}