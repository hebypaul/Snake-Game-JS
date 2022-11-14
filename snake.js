import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [
    {x:10 , y:11},
    {x:11 , y:11},
    {x:12 , y:11},
    {x:13 , y:11},
    {x:15 , y:11}
]
export function update(){
    const inputdirection = getInputDirection()
    for(let i =snakeBody.length - 2 ; i >= 0 ; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x +=inputdirection.x
    snakeBody[0].y +=inputdirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart =segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}