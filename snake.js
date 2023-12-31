const snakeHead = document.getElementById("head");

// game container
const game_console = document.getElementById("game_console");
const console_width = game_console.offsetWidth;

// buttons
const btnLeft = document.querySelector(".btn_left");
const btnRight = document.querySelector(".btn_right");
const btnTop = document.querySelector(".btn_up");
const btnDown = document.querySelector(".btn_down");


let inter;
function moveSnake(position) {
    console.log(snakeHead.style)
    let adder = 3;
    inter = setInterval(() => {
        adder += 1;
        if (adder == 100) {
            clearInterval(inter);
        }

        const left = `left: ${adder}%`;
        const top = `top: ${adder}%`;

        if (position) {
            snakeHead.style = `${left};${top}%`;
        } else {
            snakeHead.style = `${left}`;
        }


    }, 100);
}

btnDown.addEventListener("click", (e) => {
    clearInterval(inter);
    moveSnake("top");
});

window.addEventListener("load", (e) => {
    moveSnake("left")
});