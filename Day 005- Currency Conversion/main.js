const dollar = document.getElementById('fdollar');
const real = document.getElementById('freal');
const cvtBtn = document.getElementById('f-btn');

const dollarprice = 5.10;

function toDollar(real){
    let totalDollars = real / dollarprice;
    fmt = totalDollars.toLocaleString('us', {style: 'currency', currency: 'USD'})
    dollar.value = fmt
}

document.addEventListener('click', (e) =>{
    const el = e.target;
    if(el.classList.contains('f-btn')){
        toDollar(Number(real.value))
    }
})