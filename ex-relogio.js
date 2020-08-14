function relogio() {

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0
    let timer

    function CriaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = CriaHoraDosSegundos(segundos)
        }, 1000)
    }

    document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('zerar')) {

            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0

        }


        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()

        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')

        }
    })
}

relogio()