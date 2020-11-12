// 获取所有的单元格
window.onload = function () {
   
}
enum Player {
    X= 'x',
    O= 'o'
}
let cells = document.querySelectorAll('.cell')
// console.log(cells);
cells.forEach(function(item){
    // console.log(item);
    let cell = item as HTMLDivElement
    cell.addEventListener('click',clickCell, {once: true})

})
let currentPlayer = Player.X
let gameBord = document.querySelector('#bord')
// console.log(gameBord);
function clickCell(event: MouseEvent){
    // console.log('click',event.target);
    let target = event.target as HTMLDivElement
    target.classList.add(currentPlayer)    

    currentPlayer = currentPlayer ===  Player.X ?  Player.O: Player.X

    //处理玩家切换 
    gameBord.classList.remove( Player.X,  Player.O)
    gameBord.classList.add(currentPlayer) 
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






