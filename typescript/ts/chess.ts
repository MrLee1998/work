// 获取所有的单元格
window.onload = function () {
    let cells = document.querySelectorAll('.cell')
        console.log(cells);
        cells.forEach(function(item){
        // console.log(item);
        let cell = item as HTMLDivElement
        cell.addEventListener('click',clickCell, {once: true})
    
    })
    let currentPlayer = 'x'
    let gameBord = document.querySelector('#bord')
    console.log(gameBord);
    function clickCell(event: MouseEvent){
        // console.log('click',event.target);
        let target = event.target as HTMLDivElement
        target.classList.add(currentPlayer)    
    
        currentPlayer = currentPlayer === 'x' ? 'o':'x'
       
        //处理玩家切换 
        gameBord.classList.remove('x', 'o')
        gameBord.classList.add(currentPlayer)
    }
}




