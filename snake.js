var cels = document.getElementsByTagName('td');

// movimentaçao para direita 1 esquerda -1 cima -80 baixo 80
var snake = {
    direction: 1,
    body: [500],
}

//Adciona um indice de celula ao corpo da cobra
let addTail = () => {
    snake.body.push(snake.body[snake.body.length-1]-snake.direction);
}


//Varre o array do corpo da cobra e pinta as celulas 
// correspondentes.
let showSnake = () => {
    for(let i = 0; i <= snake.body.length-1; i++){
        cels[snake.body[i]].style = "background-color: green";
    }
}

//Movimento da cobra, retira o ultimo quadrado e insere 
// na próxima posição. Caso encontre uma comida adiciona
// um quadrado na ultima posição.
let moveSnake = () => {
    snake.body.unshift(snake.body[0]+snake.direction);  
    let aux = snake.body.pop();    
    if(snake.body[0] == foodPos){
        addTail();
        food();
    }
    cels[aux].style = "background-color: blueviolet"
    showSnake();
}

//Evento das setas do tecaldo
window.onkeydown = (event) => {   
    if(event.keyCode == 38 && snake.direction != 80) 
        snake.direction = -80;
    else if(event.keyCode == 40 && snake.direction != -80)
        snake.direction = 80;
    else if(event.keyCode == 37 && snake.direction != 1)
        snake.direction = -1;
    else if(snake.direction != -1)
        snake.direction = 1;
}

