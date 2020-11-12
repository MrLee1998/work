// 获取所有的单元格
window.onload = function () {
};
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var cells = document.querySelectorAll('.cell');
// console.log(cells);
cells.forEach(function (item) {
    // console.log(item);
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
var currentPlayer = Player.X;
var gameBord = document.querySelector('#bord');
// console.log(gameBord);
function clickCell(event) {
    // console.log('click',event.target);
    var target = event.target;
    target.classList.add(currentPlayer);
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    //处理玩家切换 
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
// enum Gender {
//     Female,
//     Male
// }
//数字枚举的默认情况
// let userGender: Gender
// userGender = Gender.Female
// userGender = Gender.Male
// console.log(userGender);
// console.log(Gender.Female);
// console.log(Gender.Male);
