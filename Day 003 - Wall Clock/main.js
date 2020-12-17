const deg = 6;
const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let min = day.getMinutes() * deg;
    let sec = day.getSeconds() * deg;

    h.style.transform = `rotateZ(${(hour)+(min/12)}deg)`
    m.style.transform = `rotateZ(${min}deg)`
    s.style.transform = `rotateZ(${sec}deg)`

}, 1000)