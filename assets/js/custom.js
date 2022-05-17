var timer_seconds = document.getElementById('seconds');
var timer_milli_seconds = document.getElementById('milli-seconds');

var button_start = document.getElementById('button-start');
var button_stop = document.getElementById('button-stop');
var button_reset = document.getElementById('button-reset');

let secs=0;
let milli_secs=0;


// event listners on buttons: start, stop and reset
button_start.addEventListener('click', ()=>{
    set_interval = setInterval(timer_starts,1); 
})

button_stop.addEventListener('click', ()=>{
    timer_stops();
})

button_reset.addEventListener('click', ()=>{
    timer_resets();
})

function timer_starts(){
console.log('start');
    milli_secs++;

    if(milli_secs<10){
        timer_milli_seconds.innerHTML='0' + milli_secs;
    }
    if(milli_secs>9){
        timer_milli_seconds.innerHTML=milli_secs;
    }
    if(milli_secs==1000){
        milli_secs=0;
        secs++;
        timer_milli_seconds.innerHTML='0' + milli_secs;
        if(secs<10){
            timer_seconds.innerHTML='0' + secs;
        }
        else{
            timer_seconds.innerHTML=secs;
        }
    }

}

function timer_stops(){
    clearInterval(set_interval);
}

function timer_resets(){
    clearInterval(set_interval);
    console.log('button reset');
    secs=0;
    milli_secs=0;
    timer_seconds.innerHTML='0' + secs;
    timer_milli_seconds.innerHTML= '0' + milli_secs;
}
