function loadMaze() {
    $.ajax('data/mazeeg.json').done(function (maze) {
        window.maze = maze;
        render(maze);
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

        var rows = cells.map(function (cell, index) {
            var cls = getBorderClass(cell);
            return `<div class="cell ${cls}">&nbsp;</div>`;
        });

        return '<div class="row">' + rows.join('') + '</div>';
    });

    document.querySelector('.container').innerHTML = mainRows.join('');

    //var startingCell = document.querySelector('.cell').innerHTML = "&#128113;";
   
    var startingCell = document.querySelector('.cell');
    startingCell.classList.add("player")
    
    // var finishCell = document.querySelector('').innerHTML = "&#128187;"
}

function initEvents() {
    $(document).keydown(function(e) {
        var position = $(".player").position();

        switch (e.keyCode) {
            case 37:
            $(".player").css('left', position.left - 50 + 'px');
                console.warn('left');
                break;
            case 38:
               $(".player").css('top', position.top - 50 + 'px');
                console.warn('up');
                break;
            case 39:
                $(".player").css('left', position.left + 50 + 'px');
                console.warn('right');
                break;
            case 40:
                $(".player").css('top', position.top + 50 + 'px');
                console.warn('down');
                break;
        }
    });
}

loadMaze();
initEvents();
