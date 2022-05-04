"use strict";

const container = document.querySelector('#container');

function paintGrid (gridSize: number) {
    for (let i = 0; i < gridSize; i++) {
        var colCurrent = document.createElement('div');
        colCurrent.classList.add('grid');
        colCurrent.classList.add('row');
            for (let i = 0; i < gridSize; i++) {
                var rowCurrent = document.querySelector('.row');
                var rowElement = document.createElement('div');
                rowElement.classList.add('col');
                rowElement.classList.add('grid');
                rowCurrent.appendChild(rowElement);
            }
        container.appendChild(colCurrent);
    }
}


paintGrid(16);
