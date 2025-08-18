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
//input cheak value ---------------------------------
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
        insertedValue = value4.value.trim(); 
        if (insertedValue === '9') {
            value4.classList.add('wright');
            return insertedValue1;
        }
        else if(insertedValue === ''){
            value4.classList.remove('wright');
            value4.classList.remove('wrong');
        }else{
            value4.classList.add('wrong')

        }
    });

value7.addEventListener('input', 
    function() {
        insertedValue = value7.value.trim(); 
        if (insertedValue === '8') {
            value7.classList.add('wright');
            return insertedValue2;
        }
        else if(insertedValue === ''){
            value7.classList.remove('wright');
            value7.classList.remove('wrong');
        }else{
            value7.classList.add('wrong')

        }
    });
value11.addEventListener('input', 
    function() {
        insertedValue = value11.value.trim(); 
        if (insertedValue === '5') {
            value11.classList.add('wright');
            return insertedValue3;
        }
        else if(insertedValue === ''){
            value11.classList.remove('wright');
            value11.classList.remove('wrong');
        }else{
            value11.classList.add('wrong')

        }
    });

value13.addEventListener('input', 
    function() {
        insertedValue = value13.value.trim(); 
        if (insertedValue === '8') {
            value13.classList.add('wright');
            return insertedValue4;
        }
        else if(insertedValue === ''){
            value13.classList.remove('wright');
            value13.classList.remove('wrong');
        }else{
            value13.classList.add('wrong')

        }
    });

value15.addEventListener('input', 
    function() {
        insertedValue = value15.value.trim(); 
        if (insertedValue === '4') {
            value15.classList.add('wright');
            return insertedValue5;
        }
        else if(insertedValue === ''){
            value15.classList.remove('wright');
            value15.classList.remove('wrong');
        }else{
            value15.classList.add('wrong')

        }
    });

value20.addEventListener('input', 
    function() {
        insertedValue = value20.value.trim(); 
        if (insertedValue === '8') {
            value20.classList.add('wright');
            return insertedValue6;
        }
        else if(insertedValue === ''){
            value20.classList.remove('wright');
            value20.classList.remove('wrong');
        }else{
            value20.classList.add('wrong')

        }
    });


value23.addEventListener('input', 
    function() {
        insertedValue = value23.value.trim(); 
        if (insertedValue === '7') {
            value23.classList.add('wright');
            return insertedValue7;
        }
        else if(insertedValue === ''){
            value23.classList.remove('wright');
            value23.classList.remove('wrong');
        }else{
            value23.classList.add('wrong')

        }
    });

value26.addEventListener('input', 
    function() {
        insertedValue = value26.value.trim(); 
        if (insertedValue === '5') {
            value26.classList.add('wright');
            return insertedValue8;
        }
        else if(insertedValue === ''){
            value26.classList.remove('wright');
            value26.classList.remove('wrong');
        }else{
            value26.classList.add('wrong')

        }
    });

value28.addEventListener('input', 
    function() {
        insertedValue = value28.value.trim(); 
        if (insertedValue === '5') {
            value28.classList.add('wright');
            return insertedValue9;
        }
        else if(insertedValue === ''){
            value28.classList.remove('wright');
            value28.classList.remove('wrong');
        }else{
            value28.classList.add('wrong')

        }
    });
value29.addEventListener('input', 
    function() {
        insertedValue = value29.value.trim(); 
        if (insertedValue === '4') {
            value29.classList.add('wright');
            return insertedValue10;
        }
        else if(insertedValue === ''){
            value29.classList.remove('wright');
            value29.classList.remove('wrong');
        }else{
            value29.classList.add('wrong')

        }
    });

value34.addEventListener('input', 
    function() {
        insertedValue = value34.value.trim(); 
        if (insertedValue === '7') {
            value34.classList.add('wright');
            return insertedValue11;
        }
        else if(insertedValue === ''){
            value34.classList.remove('wright');
            value34.classList.remove('wrong');
        }else{
            value34.classList.add('wrong')

        }
    });
value36.addEventListener('input', 
    function() {
        insertedValue = value36.value.trim(); 
        if (insertedValue === '2') {
            value36.classList.add('wright');
            return insertedValue12;
        }
        else if(insertedValue === ''){
            value36.classList.remove('wright');
            value36.classList.remove('wrong');
        }else{
            value36.classList.add('wrong')

        }
    });

value40.addEventListener('input', 
    function() {
        insertedValue = value40.value.trim(); 
        if (insertedValue === '7') {
            value40.classList.add('wright');
            return insertedValue13;
        }
        else if(insertedValue === ''){
            value40.classList.remove('wright');
            value40.classList.remove('wrong');
        }else{
            value40.classList.add('wrong')

        }
    });
value48.addEventListener('input', 
    function() {
        insertedValue = value48.value.trim(); 
        if (insertedValue === '3') {
            value48.classList.add('wright');
            return insertedValue14;
        }
        else if(insertedValue === ''){
            value48.classList.remove('wright');
            value48.classList.remove('wrong');
        }else{
            value48.classList.add('wrong')

        }
    });
value49.addEventListener('input', 
    function() {
        insertedValue = value49.value.trim(); 
        if (insertedValue === '4') {
            value49.classList.add('wright');
            return insertedValue15;
        }
        else if(insertedValue === ''){
            value49.classList.remove('wright');
            value49.classList.remove('wrong');
        }else{
            value49.classList.add('wrong')

        }
    });
value54.addEventListener('input', 
    function() {
        insertedValue = value54.value.trim(); 
        if (insertedValue === '1') {
            value54.classList.add('wright');
            return insertedValue16;
        }
        else if(insertedValue === ''){
            value54.classList.remove('wright');
            value54.classList.remove('wrong');
        }else{
            value54.classList.add('wrong')

        }
    });
value56.addEventListener('input', 
    function() {
        insertedValue = value56.value.trim(); 
        if (insertedValue === '9') {
            value56.classList.add('wright');
            return insertedValue17;
        }
        else if(insertedValue === ''){
            value56.classList.remove('wright');
            value56.classList.remove('wrong');
        }else{
            value56.classList.add('wrong')

        }
    });
value59.addEventListener('input', 
    function() {
        insertedValue = value59.value.trim(); 
        if (insertedValue === '6') {
            value59.classList.add('wright');
            return insertedValue18;
        }
        else if(insertedValue === ''){
            value59.classList.remove('wright');
            value59.classList.remove('wrong');
        }else{
            value59.classList.add('wrong')

        }
    });
value60.addEventListener('input', 
    function() {
        insertedValue = value60.value.trim(); 
        if (insertedValue === '7') {
            value60.classList.add('wright');
            return insertedValue19;
        }
        else if(insertedValue === ''){
            value60.classList.remove('wright');
            value60.classList.remove('wrong');
        }else{
            value60.classList.add('wrong')

        }
    });
value63.addEventListener('input', 
    function() {
        insertedValue = value63.value.trim(); 
        if (insertedValue === '8') {
            value63.classList.add('wright');
            return insertedValue20;
        }
        else if(insertedValue === ''){
            value63.classList.remove('wright');
            value63.classList.remove('wrong');
        }else{
            value63.classList.add('wrong')

        }
    });
value67.addEventListener('input', 
    function() {
        insertedValue = value67.value.trim(); 
        if (insertedValue === '1') {
            value67.classList.add('wright');
            return insertedValue21;
        }
        else if(insertedValue === ''){
            value67.classList.remove('wright');
            value67.classList.remove('wrong');
        }else{
            value67.classList.add('wrong')

        }
    });
value72.addEventListener('input', 
    function() {
        insertedValue = value72.value.trim(); 
        if (insertedValue === '6') {
            value72.classList.add('wright');
            return insertedValue22;
        }
        else if(insertedValue === ''){
            value72.classList.remove('wright');
            value72.classList.remove('wrong');
        }else{
            value72.classList.add('wrong')

        }
    });
value75.addEventListener('input', 
    function() {
        insertedValue = value75.value.trim(); 
        if (insertedValue === '1') {
            value75.classList.add('wright');
            return insertedValue23;
        }
        else if(insertedValue === ''){
            value75.classList.remove('wright');
            value75.classList.remove('wrong');
        }else{
            value75.classList.add('wrong')

        }
    });
value76.addEventListener('input', 
    function() {
        insertedValue = value76.value.trim(); 
        if (insertedValue === '2') {
            value76.classList.add('wright');
            return insertedValue24;
        }
        else if(insertedValue === ''){
            value76.classList.remove('wright');
            value76.classList.remove('wrong');
        }else{
            value76.classList.add('wrong')

        }
    });
value80.addEventListener('input', 
    function() {
        insertedValue = value80.value.trim(); 
        if (insertedValue === '7') {
            value80.classList.add('wright');
            return insertedValue25;
        }
        else if(insertedValue === ''){
            value80.classList.remove('wright');
            value80.classList.remove('wrong');
        }else{
            value80.classList.add('wrong')

        }
    });


//-------------------------------------------------

//-------------finsh function ----------------

//------------start function
start.addEventListener("click", function() {
    final.innerHTML = "The time is: " + time.innerText; // Display the timer value when Start button is clicked
});
//-----------timer---------------------    
let timerInterval;
let startTime;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("startBtn").disabled = true;
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("timer").innerText = (formattedTime);
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


finshed.addEventListener("click",function(){
    if(insertedValue1 ||insertedValue1||insertedValue3||insertedValue4||insertedValue5||insertedValue6||insertedValue7||insertedValue8||insertedValue9||insertedValue10||insertedValue11||insertedValue12||insertedValue13||insertedValue14||insertedValue15||insertedValue16||insertedValue17
        ||insertedValue18||insertedValue19||insertedValue20||insertedValue21||insertedValue22||insertedValue23||insertedValue24||insertedValue25 ===''){
        final.innerHTML="ther is still emty blanc??";
    }else{
        final.innerHTML = "The game is finshed!";
    }
    
})