// 获取所有的单元格
window.onload = function () {
    var cells = document.querySelectorAll('.cell');
    console.log(cells);
    cells.forEach(function (item) {
        // console.log(item);
        var cell = item;
        cell.addEventListener('click', clickCell, { once: true });
    });
    var currentPlayer = 'x';
    var gameBord = document.querySelector('#bord');
    console.log(gameBord);
    function clickCell(event) {
        // console.log('click',event.target);
        var target = event.target;
        target.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        //处理玩家切换 
        gameBord.classList.remove('x', 'o');
        gameBord.classList.add(currentPlayer);
    }
};
