window.addEventListener('mouseup', mousemove);

let throttle = (func, delay) => {
    let prev = Date.now() - delay;
    return (...args) => {
        let current = Date.now();
        if (current - prev >= delay) {
            prev = current;
            func.apply(null, args);
        }
    }
}
document.addEventListener('mousemove', throttle(mousemove, 1));


oldX = 0
oldY = 0
itemActive = false

function mousemove(event, item) {
    var item = document.querySelector('.card');

    posX = event.pageX;
    posY = event.pageY;

    posX = posX - item.offsetLeft - 150;
    posY = posY - item.offsetTop - 50


    if (itemActive == true) {
        item.style.transform = "translate(" + posX + "px, " + posY + "px)";

        item.onclick = function () {
            itemActive = false;
        }

    }
    item.addEventListener('mousedown', function (event) {
        if (event.button === 0) {
            itemActive = true;
            mousemove(event);
        }

    });


    // console.log(posX, posY);


    // xvalues
    shadowX = posX / 10;

    // yvalues
    shadowY = posY / 10;

    item.style.boxShadow = shadowX + "px " + shadowY + "px 0px 0px #00567a;"

    oldX = posX;
    oldY = posY;
}

document.getElementById('btn5').addEventListener('mousemove', (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);

})