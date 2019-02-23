var player = document.createElement("div");
// element.addClass("player");
player.classList.add("player");

var castle = document.createElement("div");
castle.classList.add("castle");

var currentPosition = 26;
var finishPosition = 99;



function loadMaze() {
    $.ajax('/maze').done(function (response) {
        var maze;
        if (typeof response.maze === 'string') {
            maze = JSON.parse(response.maze);
        } else {
            maze = response.maze;
        }
        
        console.log('maze loaded: ', maze);
        window.maze = maze;
        render(maze);
        document.querySelectorAll(".cell")[currentPosition].appendChild(player);
        document.querySelectorAll('.cell')[finishPosition].appendChild(castle);
    });
}

function getBorderClass(cell) {
    return cell.split("").map(function (borderDirection) {
        return "b-" + borderDirection
    }).join(" ");
}

function render(maze) {
    var mainRows = maze.map(function (cells) {
        // console.log('cells', cells);

        var rows = cells.map(function (cell) {
            var cls = getBorderClass(cell);
            return `<div class="cell ${cls}"></div>`;
        });

        return '<div class="row">' + rows.join('') + '</div>';
    });

    document.querySelector('.container').innerHTML = mainRows.join('');
}

function getStep(keyCode) {
    if (!canMove(keyCode)) {
        return 0;
    }
    switch (keyCode) {
        case 37:
            return -1;
        case 38:
           return -10;
        case 39:
            return +1;
        case 40:
            return +10
    }
}

function canMove(keyCode) {
    var currentPositionDivide = parseInt(currentPosition / 10);
    var currentPositionMod = currentPosition % 10;
    var myBorders = maze[currentPositionDivide][currentPositionMod];// /10; restul%

    //left
    var rightBorder = maze[currentPositionDivide][currentPositionMod - 1]
    // up
    var bottomBorder = maze[currentPositionDivide - 1][currentPositionMod];
    // right
    var leftBorder = maze[currentPositionDivide][currentPositionMod + 1];
   // bottom
   var topBorder = maze[currentPositionDivide + 1][currentPositionMod];

    console.info('borders', myBorders);
    switch (keyCode) {
        case 37: /* left */
            return !myBorders.includes('l') && !rightBorder.includes('r');
        case 38: /* up */
           return !myBorders.includes('t') && !bottomBorder.includes('b');
        case 39: /* right */
            return !myBorders.includes('r') && !leftBorder.includes('l');
        case 40: /* down */
            return !myBorders.includes('b') && !topBorder.includes('t');
    }
}

function initEvents() {
    document.onkeydown = function(e) {
        currentPosition += getStep(e.keyCode);
        document.querySelectorAll(".cell")[currentPosition].appendChild(player);
    };

}

// loadMaze();
initEvents();
