var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var count = 0;

var foodPos;

//Botão de inicio
startBtn.onclick = () => {
    setInterval(() => {
        startBtn.disabled = true;
        startBtn.style = "background-color: darkgray";
        moveSnake();  
    } ,100);
    count++;
    food();
}

//Botão para pause
stopBtn.onclick = () => {
    startBtn.disabled = false;
    startBtn.style = "background-color: black";
    clearInterval(count);
};

//Função que gera a comida em uma célula aleatória
let food = () => {
    foodPos = Math.floor(Math.random()*2399);
    cels[foodPos].style = "background-color: white";
}


