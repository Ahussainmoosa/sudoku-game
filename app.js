const value1 = document.getElementById('val4');
const colorChange = document.querySelector('.box');
const finshed = document.getElementById('Finsh');
const final = document.getElementById('gameFinsh');
const start =document.getElementById('Start');
const time = document.getElementById('timer');

let insertedValue='';
let secouns='0'
value1.addEventListener('input', 
    function() {
        insertedValue = value1.value.trim(); 
        if (insertedValue === '4') {
            value1.classList.add('wright');
            return insertedValue;
        }
        else if(insertedValue === ''){
            value1.classList.remove('wright');
            value1.classList.remove('wrong');
        }else{
            value1.classList.add('wrong')

        }
    });
finshed.addEventListener("click",function(){
    if(insertedValue==='4'){
        final.innerHTML = "The game is finshed!";
    }else{
        final.innerHTML="ther is still emty blanc??";
    }
    
})

start.addEventListener("click",
    function(){
        for(let seconds=0;seconds<1000;seconds++){
            final.innerHTML= "The is "+seconds;
    }
            
})
