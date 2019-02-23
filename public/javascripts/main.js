var player = document.createElement("div");
// element.addClass("player");
player.classList.add("player");

var currentPosition = 0;



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

    // var startingCell = document.querySelector('.cell');
    // startingCell.classList.add("player")
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
            return 1;
        case 40:
            return 10
    }
}

function canMove(keyCode) {
    var myBorders = maze[parseInt(currentPosition / 10)][currentPosition % 10];// /10; restul%
    console.info('borders', myBorders);
    switch (keyCode) {
        case 37:
            return true;
        case 38:
           return true;
        case 39:
            return !myBorders.includes('r');
        case 40:
            return true
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
