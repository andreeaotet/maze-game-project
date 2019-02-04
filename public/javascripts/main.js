function loadMaze() {
    $.ajax('data/mazeeg.json').done(function (maze) {
        window.maze = maze;
        render(maze);
    });
}

function getBorderClass(cell) {
    return cell.split("").map(function(borderDirection) {
        return "b-" + borderDirection
    }).join(" ");
}

function render(maze) {
    var cells = maze[2];

    var mainRows = maze.map(function(cells) {
        // console.log('cells', cells);

        var rows = cells.map(function (cell) {
            //console.log('show cell', cell);
            var cls = getBorderClass(cell);
            return `<div class="cell ${cls}">&nbsp;</div>`;
        });

        //console.log('rows', rows);
        // console.info(rows.join(''));

        return '<div class="row">' + rows.join('') + '</div>';
    });
    
    // console.log(mainRows);

    document.querySelector('.container').innerHTML = mainRows.join('');
}

loadMaze();
