const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
const newGame = document.querySelector('.new');
const mainMsg = document.querySelector('.msg')
const msg = document.querySelector('.win');

let turnO = true;
let count = 0;

let winningPattern = [[0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]]

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBox();
    mainMsg.classList.add('hide');
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "#1022aa";
            box.style.backgroundColor = "#83176e";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#21d22f";
            box.style.backgroundColor = "#cb7172";
            turnO = true;
        }
        count += 1;
        box.disabled = true;

        let isWinner = checkWinner();

        if (!isWinner && count === 9) {
            draw();
        }
    });
})

const disabledBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes) {
        box.style.backgroundColor = "#e7db2f";
        box.disabled = false;
        box.innerText = "";
    }
};

const draw = () => {
    msg.innerText = "The Match is Drawn.";
    mainMsg.classList.remove("hide");
    disabledBox();
    
};

const showWinner = (winner) => {
    draw();
    msg.innerText = `Congratulations, Winner is ${winner}`;
    mainMsg.classList.remove("hide");
    disabledBox();
};



const checkWinner = () => {
    for(pattern of winningPattern) {
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;
        
        if(pos0Val != "" && pos1Val != "" && pos2Val != "") {
            if (pos0Val === pos1Val && pos1Val === pos2Val) {
                showWinner(pos0Val);
                return true;
            }
        }
    }
    return false;
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);