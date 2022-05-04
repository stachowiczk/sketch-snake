"use strict";
var container = document.querySelector('#container');
function getRandomInt () {
    const min = Math.ceil(0);
    const max = Math.floor(256);
    return Math.floor(Math.random() * (max - min) + min);
}
function paintGrid(gridSize) {
    for (var i = 0; i < gridSize; i++) {
        var colCurrent = document.createElement('div');
        colCurrent.classList.add('row');
        for (var i_1 = 0; i_1 < gridSize; i_1++) {

            var rowElement = document.createElement('div');
            rowElement.classList.add('col');
            rowElement.classList.add('grid');
            colCurrent.appendChild(rowElement);
        }
        container.appendChild(colCurrent);
    }
}
paintGrid(16);

let gridNodes = document.querySelectorAll('.grid');

function onHover (event) {
    event.addEventListener('mouseover', function () {
            console.log(event);
            if (event.classList.contains('red')) {
                sleepTime = 200;
            }
            else {
                event.classList.add('red');
            }
            if (event.id === "green") {
                sleepTime += 100;
                event.id = "";
                addFood();
            }
        });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let sleepTime = 300;
async function onMouseOut (event) {
    event.addEventListener('mouseout', async() => {
        await sleep(sleepTime);
        event.classList.remove('red');
    });
}

async function addFood () {
    await sleep(1000);
    let apple = gridNodes[getRandomInt()]
    apple.id = "green";
    await sleep(4000);
    if (apple.id === "green") {
        apple.id = "";
        addFood();
    }

}
addFood();
gridNodes.forEach(onHover);
gridNodes.forEach(onMouseOut);


