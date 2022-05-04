"use strict";
var container = document.querySelector('#container');

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
            event.classList.add('red');
        });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function onMouseOut (event) {
    event.addEventListener('mouseout', async() => {
        await sleep(300);
        event.classList.remove('red');
    });
}
gridNodes.forEach(onHover);
gridNodes.forEach(onMouseOut);


