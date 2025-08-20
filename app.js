const value1 = document.getElementById('val1');
const value4 = document.getElementById('val4');
const value7 = document.getElementById('val7');
const value11 = document.getElementById('val11');
const value13 = document.getElementById('val13');
const value15 = document.getElementById('val15');
const value20 = document.getElementById('val20');
const value23 = document.getElementById('val23');
const value26 = document.getElementById('val26');
const value28 = document.getElementById('val28');
const value29 = document.getElementById('val29');
const value34 = document.getElementById('val34');
const value36 = document.getElementById('val36');
const value40 = document.getElementById('val40');
const value48 = document.getElementById('val48');
const value49 = document.getElementById('val49');
const value54 = document.getElementById('val54');
const value56 = document.getElementById('val56');
const value59 = document.getElementById('val59');
const value60 = document.getElementById('val60');
const value63 = document.getElementById('val63');
const value67 = document.getElementById('val67');
const value72 = document.getElementById('val72');
const value75 = document.getElementById('val75');
const value76 = document.getElementById('val76');
const value80 = document.getElementById('val80');

let inputBox=[value1,value4,value7,value11,value13,value15,value20,value23,value26,value28,value29,value34,value36,value40,value48,value49,value54,value56,value59,value60,value63,value67,value72,value75,value76,value80];

const colorChange = document.querySelector('.box');
const finshed = document.getElementById('Finsh');
const final = document.getElementById('gameFinsh');
const start = document.getElementById('startBtn');
const time = document.getElementById('timer');


let insertedValue='';
let insertedValue1='';
let insertedValue2='';
let insertedValue3='';
let insertedValue4='';
let insertedValue5='';
let insertedValue6='';
let insertedValue7='';
let insertedValue8='';
let insertedValue9='';
let insertedValue10='';
let insertedValue11='';
let insertedValue12='';
let insertedValue13='';
let insertedValue14='';
let insertedValue15='';
let insertedValue16='';
let insertedValue17='';
let insertedValue18='';
let insertedValue19='';
let insertedValue20='';
let insertedValue21='';
let insertedValue22='';
let insertedValue23='';
let insertedValue24='';
let insertedValue25='';
let secouns='0'

//-------------------input cheak value -----------------------
value1.addEventListener('input', 
    function() {
        insertedValue = value1.value.trim(); 
        if (insertedValue === '2') {
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

value4.addEventListener('input', 
    function() {
        insertedValue1 = value4.value.trim(); 
        if (insertedValue1 === '9') {
            value4.classList.add('wright');
            return insertedValue1;
        }
        else if(insertedValue1 === ''){
            value4.classList.remove('wright');
            value4.classList.remove('wrong');
        }else{
            value4.classList.add('wrong')

        }
    });

value7.addEventListener('input', 
    function() {
        insertedValue2 = value7.value.trim(); 
        if (insertedValue2 === '8') {
            value7.classList.add('wright');
            return insertedValue2;
        }
        else if(insertedValue2 === ''){
            value7.classList.remove('wright');
            value7.classList.remove('wrong');
        }else{
            value7.classList.add('wrong')

        }
    });
value11.addEventListener('input', 
    function() {
        insertedValue3 = value11.value.trim(); 
        if (insertedValue3 === '5') {
            value11.classList.add('wright');
            return insertedValue3;
        }
        else if(insertedValue3 === ''){
            value11.classList.remove('wright');
            value11.classList.remove('wrong');
        }else{
            value11.classList.add('wrong')

        }
    });

value13.addEventListener('input', 
    function() {
        insertedValue4 = value13.value.trim(); 
        if (insertedValue4 === '8') {
            value13.classList.add('wright');
            return insertedValue4;
        }
        else if(insertedValue4 === ''){
            value13.classList.remove('wright');
            value13.classList.remove('wrong');
        }else{
            value13.classList.add('wrong')

        }
    });

value15.addEventListener('input', 
    function() {
        insertedValue5 = value15.value.trim(); 
        if (insertedValue5 === '4') {
            value15.classList.add('wright');
            return insertedValue5;
        }
        else if(insertedValue5 === ''){
            value15.classList.remove('wright');
            value15.classList.remove('wrong');
        }else{
            value15.classList.add('wrong')

        }
    });

value20.addEventListener('input', 
    function() {
        insertedValue6 = value20.value.trim(); 
        if (insertedValue6 === '8') {
            value20.classList.add('wright');
            return insertedValue6;
        }
        else if(insertedValue6 === ''){
            value20.classList.remove('wright');
            value20.classList.remove('wrong');
        }else{
            value20.classList.add('wrong')

        }
    });


value23.addEventListener('input', 
    function() {
        insertedValue7 = value23.value.trim(); 
        if (insertedValue7 === '7') {
            value23.classList.add('wright');
            return insertedValue7;
        }
        else if(insertedValue7 === ''){
            value23.classList.remove('wright');
            value23.classList.remove('wrong');
        }else{
            value23.classList.add('wrong')

        }
    });

value26.addEventListener('input', 
    function() {
        insertedValue8 = value26.value.trim(); 
        if (insertedValue8 === '5') {
            value26.classList.add('wright');
            return insertedValue8;
        }
        else if(insertedValue8 === ''){
            value26.classList.remove('wright');
            value26.classList.remove('wrong');
        }else{
            value26.classList.add('wrong')

        }
    });

value28.addEventListener('input', 
    function() {
        insertedValue9 = value28.value.trim(); 
        if (insertedValue9 === '5') {
            value28.classList.add('wright');
            return insertedValue9;
        }
        else if(insertedValue9 === ''){
            value28.classList.remove('wright');
            value28.classList.remove('wrong');
        }else{
            value28.classList.add('wrong')

        }
    });
value29.addEventListener('input', 
    function() {
        insertedValue10 = value29.value.trim(); 
        if (insertedValue10 === '4') {
            value29.classList.add('wright');
            return insertedValue10;
        }
        else if(insertedValue10 === ''){
            value29.classList.remove('wright');
            value29.classList.remove('wrong');
        }else{
            value29.classList.add('wrong')

        }
    });

value34.addEventListener('input', 
    function() {
        insertedValue11 = value34.value.trim(); 
        if (insertedValue11 === '7') {
            value34.classList.add('wright');
            return insertedValue11;
        }
        else if(insertedValue11 === ''){
            value34.classList.remove('wright');
            value34.classList.remove('wrong');
        }else{
            value34.classList.add('wrong')

        }
    });
value36.addEventListener('input', 
    function() {
        insertedValue12 = value36.value.trim(); 
        if (insertedValue12 === '2') {
            value36.classList.add('wright');
            return insertedValue12;
        }
        else if(insertedValue12 === ''){
            value36.classList.remove('wright');
            value36.classList.remove('wrong');
        }else{
            value36.classList.add('wrong')

        }
    });

value40.addEventListener('input', 
    function() {
        insertedValue13 = value40.value.trim(); 
        if (insertedValue13 === '7') {
            value40.classList.add('wright');
            return insertedValue13;
        }
        else if(insertedValue13 === ''){
            value40.classList.remove('wright');
            value40.classList.remove('wrong');
        }else{
            value40.classList.add('wrong')

        }
    });
value48.addEventListener('input', 
    function() {
        insertedValue14 = value48.value.trim(); 
        if (insertedValue14 === '3') {
            value48.classList.add('wright');
            return insertedValue14;
        }
        else if(insertedValue14 === ''){
            value48.classList.remove('wright');
            value48.classList.remove('wrong');
        }else{
            value48.classList.add('wrong')

        }
    });
value49.addEventListener('input', 
    function() {
        insertedValue15 = value49.value.trim(); 
        if (insertedValue15 === '4') {
            value49.classList.add('wright');
            return insertedValue15;
        }
        else if(insertedValue15 === ''){
            value49.classList.remove('wright');
            value49.classList.remove('wrong');
        }else{
            value49.classList.add('wrong')

        }
    });
value54.addEventListener('input', 
    function() {
        insertedValue16 = value54.value.trim(); 
        if (insertedValue16 === '1') {
            value54.classList.add('wright');
            return insertedValue16;
        }
        else if(insertedValue16 === ''){
            value54.classList.remove('wright');
            value54.classList.remove('wrong');
        }else{
            value54.classList.add('wrong')

        }
    });
value56.addEventListener('input', 
    function() {
        insertedValue17 = value56.value.trim(); 
        if (insertedValue17 === '9') {
            value56.classList.add('wright');
            return insertedValue17;
        }
        else if(insertedValue17 === ''){
            value56.classList.remove('wright');
            value56.classList.remove('wrong');
        }else{
            value56.classList.add('wrong')

        }
    });
value59.addEventListener('input', 
    function() {
        insertedValue18 = value59.value.trim(); 
        if (insertedValue18 === '6') {
            value59.classList.add('wright');
            return insertedValue18;
        }
        else if(insertedValue18 === ''){
            value59.classList.remove('wright');
            value59.classList.remove('wrong');
        }else{
            value59.classList.add('wrong')

        }
    });
value60.addEventListener('input', 
    function() {
        insertedValue19 = value60.value.trim(); 
        if (insertedValue19 === '7') {
            value60.classList.add('wright');
            return insertedValue19;
        }
        else if(insertedValue19 === ''){
            value60.classList.remove('wright');
            value60.classList.remove('wrong');
        }else{
            value60.classList.add('wrong')

        }
    });
value63.addEventListener('input', 
    function() {
        insertedValue20 = value63.value.trim(); 
        if (insertedValue20 === '8') {
            value63.classList.add('wright');
            return insertedValue20;
        }
        else if(insertedValue20 === ''){
            value63.classList.remove('wright');
            value63.classList.remove('wrong');
        }else{
            value63.classList.add('wrong')

        }
    });
value67.addEventListener('input', 
    function() {
        insertedValue21 = value67.value.trim(); 
        if (insertedValue21 === '1') {
            value67.classList.add('wright');
            return insertedValue21;
        }
        else if(insertedValue21 === ''){
            value67.classList.remove('wright');
            value67.classList.remove('wrong');
        }else{
            value67.classList.add('wrong')

        }
    });
value72.addEventListener('input', 
    function() {
        insertedValue22 = value72.value.trim(); 
        if (insertedValue22 === '6') {
            value72.classList.add('wright');
            return insertedValue22;
        }
        else if(insertedValue22 === ''){
            value72.classList.remove('wright');
            value72.classList.remove('wrong');
        }else{
            value72.classList.add('wrong')

        }
    });
value75.addEventListener('input', 
    function() {
        insertedValue23 = value75.value.trim(); 
        if (insertedValue23 === '1') {
            value75.classList.add('wright');
            return insertedValue23;
        }
        else if(insertedValue23 === ''){
            value75.classList.remove('wright');
            value75.classList.remove('wrong');
        }else{
            value75.classList.add('wrong')

        }
    });
value76.addEventListener('input', 
    function() {
        insertedValue24 = value76.value.trim(); 
        if (insertedValue24 === '2') {
            value76.classList.add('wright');
            return insertedValue24;
        }
        else if(insertedValue24 === ''){
            value76.classList.remove('wright');
            value76.classList.remove('wrong');
        }else{
            value76.classList.add('wrong')

        }
    });
value80.addEventListener('input', 
    function() {
        insertedValue25 = value80.value.trim(); 
        if (insertedValue25 === '7') {
            value80.classList.add('wright');
            return insertedValue25;
        }
        else if(insertedValue25 === ''){
            value80.classList.remove('wright');
            value80.classList.remove('wrong');
        }else{
            value80.classList.add('wrong')

        }
    });

//----------------timer---------------------    
let timerInterval;
let startTime;
let formattedTime;
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("startBtn").disabled = true;
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("timer").innerText = ('Your Time is '+formattedTime);
    return formattedTime
}

function formatTime(time) {
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return (
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0')
    );
}
//------------start function-------------------
start.addEventListener("click", function() {
    inputBox.forEach(changeToUnable => {
        changeToUnable.disabled= false;
        
    });    
});
//-------------finsh function ------------------
finshed.addEventListener("click",function(){
    if(insertedValue ==="2"&&insertedValue1 ==='9'&&insertedValue2 ==='8'&&insertedValue3==='5'&&insertedValue4==='8'&&insertedValue5==='4'&&insertedValue6==='8'&&insertedValue7==='7'&&insertedValue8==='5'&&insertedValue9==='5'&&insertedValue10==='4'&&insertedValue11==='7'&&insertedValue12==='2'&&insertedValue13==='7'&&insertedValue14==='3'&&insertedValue15==='4'&&insertedValue16==='1'&&insertedValue17==='9'
        &&insertedValue18==='6'&&insertedValue19==='7'&&insertedValue20==='8'&&insertedValue21==='1'&&insertedValue22==='6'&&insertedValue23==='1'&&insertedValue24==='2'&&insertedValue25==='7'){
        final.innerHTML==="";
        final.innerHTML="!!!!You Finsh the Game!!!" ;
        clearInterval(timerInterval);
        document.getElementById("startBtn").disabled = false;
        
    }else{
        final.innerHTML="";
        final.innerHTML = "??There is still empty Blanc??";
        
    }
    

});