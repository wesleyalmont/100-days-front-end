const btnAdd = document.querySelector('.btn-add');
const btnStart= document.querySelector('.btn-start');
const textInput = document.querySelector('.scroller-input-text');
const textOutput = document.querySelector('.scroller-text-output');
const scrollerTime = document.querySelector('.scroller-set-time');

const DEFAULT_SECONDS = 1000;
const words = [];
let seconds;
let topPosition = 0;

// Adiciona palavras no array
btnAdd.addEventListener('click', () => {
    words.push(textInput.value);
})

// Define o tempo de animação
scrollerTime.addEventListener('keyup', () => {
    seconds = scrollerTime.value * 1000 || DEFAULT_SECONDS;
})

// Função para percorrer o array e adicionar as palavras como parágrafos no HTML
function addTexts(){
    textOutput.innerHTML = words.map((word) => `<p>${word}</p>`).join('')
}

function startAnimation(){
    topPosition += 1   // velocidade da animação
    textOutput.style.top = -topPosition+'px';
    if(topPosition > textOutput.offsetHeight - 95){
        topPosition = 0;
    }
    anima = requestAnimationFrame(startAnimation)
}

// Inicia a animação
btnStart.addEventListener('click', (e) => {
    e.preventDefault()
    addTexts()
    startAnimation()
})