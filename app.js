const background = document.getElementById('background');
const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
const vibes = [
    'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnRvb258ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnRvb258ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1712642724142-48e16e65291e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6ZClO61up-6bgaFvyRVGN-aLFmdSCn2-Lw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FMo6vGHvBT6twMy4Uwda3DO6yeupT6nOWg&s',
    'https://media.istockphoto.com/id/2129856121/photo/sky-is-covered-with-storm-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=TtGM0xu-JFPTVgoZZIYhwrUdLjnFweERTJvH8F8gHDg=',
    'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFya3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHx8MA%3D%3D'
];
let clickcount = 0;
function changeBackground(){
    clickcount++;
    if(clickcount >= vibes.length) {
        clickcount = 0;
    }
    background.style.backgroundImage = `url(${vibes[clickcount]})`
};     
changeBackgroundBtn.addEventListener('click', changeBackground)

// const paintBrush = createBrush ();
// const canvas = document.querySelector('.canvas');
// canvas.appendChild(paintBrush);

// function createBrush () {
//     const brush = document.createElement('div');
//     brush.classList.add('brush');
//     return brush;
// }

// function placeBrush(brush) {
//     const copy = brush.cloneNode(true);
// };
// function handleClick() {
//     placeCircle(mouseCircle);
// }
// let paintInterval;
// function handleStart() {
//   paintInterval = setInterval(() => placeCircle(paintBrush), 10)