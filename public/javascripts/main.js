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
    $( ".player" ).keypress(function() {
        console.log( "Handler for .keypress() called." );
      });

      $( ".player" ).click(function() {
        $( ".player" ).keypress();
      });
}

loadMaze();
initEvents();