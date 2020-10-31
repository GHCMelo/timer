function exercicio(){
    const timer = document.getElementById('timer');
    const btnIniciar = document.querySelector('.iniciar')
    const btnPausar = document.querySelector('.pausar')
    const btnZerar = document.querySelector('.zerar')
    let seconds = 0
    let timerShow

    function createHour(seconds){
        const hour = new Date(seconds * 1000);
        const newHour = hour.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
        return newHour
    }

    function startClock(){
        clearInterval(timerShow)
        timerShow = setInterval(() => {
            timer.innerHTML = createHour(seconds)
            seconds++
        }, 1000)
    }

    function stopClock(){
        clearInterval(timerShow);
    }

    function clearClock(){
        clearInterval(timerShow);
        timer.innerHTML = '00:00:00'
    }

    btnIniciar.addEventListener("click", () => {
        timer.classList.remove('stoped')
        startClock();        
    })

    btnPausar.addEventListener("click", () => {
        stopClock();
        timer.classList.add('stoped')
    })

    btnZerar.addEventListener("click", () => {
        clearClock();
        seconds = 0
    })
}

exercicio()