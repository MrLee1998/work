let tip = document.getElementById('.tip')
let skill = document.getElementById('.skill')
function light(obj) {
    obj.style.zIndex = 4;
    obj.style.position = 'relative';
    obj.style.backgroundColor = '#fff';
    // getBoundingClientRect();
    // {left, bottom}
    let {left, bottom} = obj.getBoundingClientRect();
    tip.style.position = 'fixed'
    tip.style.zIndex = 4;
    tip.style.left = left + 10 + 'px'
    tip.style.top = bottom + 10 + 'px'
}
light(skill);