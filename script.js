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
