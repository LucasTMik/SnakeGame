var cels = document.getElementsByTagName('td');

// movimentaçao para direita 1 esquerda -1 cima -80 baixo 80

var snake = {
    direction: 1,
    body: [500],
}

let addTail = () => {
    snake.body.push(snake.body[snake.body.length-1]-snake.direction);
}

let showSnake = () => {
    for(let i = 0; i <= snake.body.length-1; i++){
        cels[snake.body[i]].style = "background-color: green";
    }
}

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

