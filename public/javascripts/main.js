var player = document.createElement("div");
player.classList.add("player");

var castle = document.createElement("div");
castle.classList.add("castle");

var currentPosition;
var finishPosition;
var size;
var sizeY;

var API_URL = {
    load: function (id) {
        if (location.host === "andreeaotet.github.io") {
            return `data/maze-${id}.json`
        }
        return `maze?id=${id}`
    }
};

var form = document.getElementById("mazeLevels");
form.addEventListener('click', displayLevels);

function displayLevels() {
    var newTopic = "";
    var topicOption = document.getElementById('optionSelect').value;

    if (topicOption == 2) {
        newTopic = "Welcome - Level 1";
    } else if (topicOption == 3) {
        newTopic = "Welcome to our Easy game";
    } else if (topicOption == 4) {
        newTopic = "Welcome to our Medium game";
    } else if (topicOption == 5) {
        newTopic = "Welcome to our Average game";
    } else if (topicOption == 6) {
        newTopic = "Welcome to our Classic game";
    } else if (topicOption == 7) {
        newTopic = "Welcome to our Hard game";
    } else if (topicOption == 1) {
        newTopic = "Welcome to our Master game";
    } else {
        newTopic = "";
    }

    var mazeTopic = document.getElementById('mazeTopic');
    mazeTopic.innerText = newTopic;
}

function loadMaze() {
    var id = document.getElementById('optionSelect').value;

    $.ajax(API_URL.load(id), {
        //CONTENT TYPE json
    }).done(function (response) {
        var maze;
        if (typeof response.maze === 'string') {
            maze = JSON.parse(response.maze);

            currentPosition = response.initial_position; // DB
            finishPosition = response.final_position; // DB
            size = response.x; // DB
            sizeY = response.y
        } else {
            maze = response.maze;
        }

        currentPosition = response.initial_position; // DB
        finishPosition = response.final_position; // DB
        size = response.x; // DB
        sizeY = response.y;

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
            return -size;
        case 39:
            return +1;
        case 40:
            return +size
    }
}

function canMove(keyCode) {
    var rowNr = parseInt(currentPosition / size);
    var colNr = currentPosition % size;
    var myBorders = maze[rowNr][colNr];// /size; restul%

    if (currentPosition !== finishPosition) {
        switch (keyCode) {
            case 37: /* left */
                return !myBorders.includes('l') && !maze[rowNr][colNr - 1].includes('r');
            case 38: /* up */
                var bottomBorder = rowNr === 0 ? 'b' : maze[rowNr - 1][colNr];
                return !myBorders.includes('t') && !bottomBorder.includes('b');
            case 39: /* right */
                return !myBorders.includes('r') && !maze[rowNr][colNr + 1].includes('l');
            case 40: /* down */
                var topBorder = rowNr === size - 1 ? 't' : maze[rowNr + 1][colNr];
                return !myBorders.includes('b') && !topBorder.includes('t');
        }
    } else {
        return modalVisibility('modal-message');
    }
}

function initEvents() {
    document.onkeydown = function (e) {
        currentPosition += getStep(e.keyCode);
        document.querySelectorAll(".cell")[currentPosition].appendChild(player);

        if (currentPosition === finishPosition) {
            return modalVisibility('modal-message');
        } else {
            return false
        }
    };
}

// window pop-up
function modalVisibility(id) {
    if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
    } else {
        document.getElementById(id).style.visibility = "visible";
    }
}

initEvents();