function getNewRow() {
    return `<tr>
                <td><input type="text" name="1" placeholder="x"/></td>
                <td><input type="text" name="2" placeholder="x"/></td>
                <td><input type="text" name="3" placeholder="x"/></td>
            </tr>`;
}

var borderB = document.getElementsByClassName('b-b')
var vorderT = document.getElementsByClassName('b-t')
var borderR = document.getElementsByClassName('b-r')
var borderL = document.getElementsByClassName('b-l')

// function createCell(border1, border2, border3, border4) {
//     return `<div class="cell ${border1} ${border2} ${border3} ${border4}">X</div>`;
// }



// for (var i = 0; i < 5; i++) {
//     document.querySelector('body').innerHTML += createCell('b-t', 'b-b');
// }

function loadMaze() {
    $.ajax('data/maze.json').done(function (maze) {
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
        console.log('cells', cells);

        var rows = cells.map(function (cell) {
            //console.log('show cell', cell);
            var cls = getBorderClass(cell);
            return `<div class="cell ${cls}">&nbsp;</div>`;
        });

        //console.log('rows', rows);
        console.info(rows.join(''));

        return '<div class="row">' + rows.join('') + '</div>';
    });
    
    console.log(mainRows);

    document.querySelector('.container').innerHTML = mainRows.join('');
}

loadMaze();
