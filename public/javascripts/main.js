var player = document.createElement("div");
// element.addClass("player");
player.classList.add("player");

var currentPosition = 68;



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

// function moveElement() {
//     document.querySelectorAll(".cell")[currentPosition + 1].appendChild(element);
// }


// var divs = document.querySelectorAll('div');
// function moveElement() {
// 	document.onkeydown = function (e) {
        
//         document.querySelectorAll('.cell').classList.add('player');
//         document.querySelectorAll('.cell').classList.remove('player');
//         i++;
//         }
// 	}
// }


// function moveElement(){
//     $("div:not(.container, .row)").keydown(function() {
//         // var $cell = $(this);
//         if ($("div:not(.container)").hasClass("player") ) {
//           $("div:not(.container)").removeClass("player");
//           $(this).addClass("player");
//         } else {
//           $(this).addClass("player");
//         }
//       });
//     }

function initEvents() {
	// var divs = document.querySelectorAll("div");
    // divs.forEach(moveElement)
    
    document.onkeydown = function(e) {
        
        switch (e.keyCode) {
            case 37:
               currentPosition--;
                break;
            case 38:
               currentPosition -= 10;
                break;
            case 39:
                currentPosition++;
                break;
            case 40:
                currentPosition += 10;
                break;
        }

        document.querySelectorAll(".cell")[currentPosition].appendChild(player);
    };


}


loadMaze();
initEvents();
