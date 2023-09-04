const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;


resetBtn.addEventListener("click", resetTimer)

resumeBtn.addEventListener("click", () => {
    isPaused = false;
    resumeBtn.style.display = "none"
    pauseBtn.style.display = "block"
})

pauseBtn.addEventListener("click", () =>{
    isPaused = true;
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
})


function resetTimer(){
    clearInterval(interval);
    minutes = 00;
    seconds = 00;
    miliseconds = 000;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
   
}



startBtn.addEventListener("click", startTimer)

function startTimer(){

    interval = setInterval(() => {

        if(!isPaused){
            miliseconds += 10;

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milisecondsEl.textContent = formatMiliseconds(miliseconds);

        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";

    function resumeTimer(){
        isPaused = false;
        pauseBtn.style.display = "block";
        resumeBtn.style.display = "none"
    }

    function formatTime(time){
        return time < 10 ? `0${time}` : time
    }

    function formatMiliseconds(time){
        return time < 100 ? `${time}`.padStart(3, "0") : time;
    }




}
