let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime -lastRenderTime )/1000
    
    if (secondsSinceLastRender < 1 /SNAKE_SPEED ) return

    console.log("render")
        
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){

}

function draw(){

}