var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var count = 0;

var foodPos;

startBtn.onclick = () => {
    setInterval(() => {
        startBtn.disabled = true;
        startBtn.style = "background-color: darkgray";
        moveSnake();  
    } ,100);
    count++;
}

stopBtn.onclick = () => {
    startBtn.disabled = false;
    startBtn.style = "background-color: black";
    clearInterval(count);
};


let food = () => {
    foodPos = Math.floor(Math.random()*2399);
    cels[foodPos].style = "background-color: white";
}


food();