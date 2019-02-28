var player = document.createElement("div");
player.classList.add("player");

var castle = document.createElement("div");
castle.classList.add("castle");

var currentPosition = 26;
var finishPosition = 99;


var form = document.getElementById("mazeLevels");
form.addEventListener('click', displayLevels);
function displayLevels() {
    var newTopic = "";
    var topicOption = document.getElementById('optionSelect').value;

    if (topicOption == 2) {
        newTopic = "Very easy";
    } else if (topicOption == 3) {
        newTopic = "Easy";
    } else if (topicOption == 4) {
        newTopic = "Medium";
    } else if (topicOption == 5) {
        newTopic = "Average";
    } else if (topicOption == 6) {
        newTopic = "Classic";
    } else if (topicOption == 7) {
        newTopic = "Hard";
    } else if (topicOption == 1) {
        newTopic = "Master";
    } else {
        newTopic = "";
    }
}


function loadMaze() {
    var id = document.getElementById('optionSelect').value

    $.ajax(`/maze?id=${id}`).done(function (response) {
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

// ############## MAZE HARD ###############

// function getStep9(keyCode) {
//     if (!canMove9(keyCode)) {
//         return 0;
//     }
//     switch (keyCode) {
//         case 37:
//             return -1;
//         case 38:
//             return -9;
//         case 39:
//             return +1;
//         case 40:
//             return +9
//     }
// }

// function canMove9(keyCode) {
//     var currentPositionDivide = parseInt(currentPosition / 9);
//     var currentPositionMod = currentPosition % 9;
//     var myBorders = maze[currentPositionDivide][currentPositionMod];// /10; restul%

//     var rightBorder = maze[currentPositionDivide][currentPositionMod - 1]; //left
//     var bottomBorder = maze[currentPositionDivide - 1][currentPositionMod + 1];  // up
//     var leftBorder = maze[currentPositionDivide][currentPositionMod + 1]; // right
//     var topBorder = maze[currentPositionDivide + 1][currentPositionMod - 1]; // bottom


//     console.info('borders', myBorders);
//     switch (keyCode) {
//         case 37: /* left */
//             return !myBorders.includes('l') && !rightBorder.includes('r');
//         case 38: /* up */
//            return !myBorders.includes('t') && !bottomBorder.includes('b');
//         case 39: /* right */
//             return !myBorders.includes('r') && !leftBorder.includes('l');
//         case 40: /* down */
//             return !myBorders.includes('b') && !topBorder.includes('t');
//     }
// }

// ############## MAZE MASTER ##############

function getStep10(keyCode) {
    if (!canMove10(keyCode)) {
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

function canMove10(keyCode) {
    var currentPositionDivide = parseInt(currentPosition / 10);
    var currentPositionMod = currentPosition % 10;
    var myBorders = maze[currentPositionDivide][currentPositionMod];// /10; restul%

    var rightBorder = maze[currentPositionDivide][currentPositionMod - 1]; //left
    var bottomBorder = maze[currentPositionDivide - 1][currentPositionMod];  // up
    var leftBorder = maze[currentPositionDivide][currentPositionMod + 1]; // right
    var topBorder = maze[currentPositionDivide + 1][currentPositionMod]; // bottom

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
        currentPosition += getStep10(e.keyCode);
        document.querySelectorAll(".cell")[currentPosition].appendChild(player);
    };

}

// loadMaze();
initEvents();
