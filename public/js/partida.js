window.onload = start;


function start (){
    var config = {
        pieceTheme: 'chesspieces/{piece}.png',
        position: 'start'
    }
    var board = Chessboard('board', config)
}
