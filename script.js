setInterval(function(){
    const time = document.querySelector('#time')
    const dataCompleta = document.querySelector('#data')
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    

    if(hours < 10){
        hours = '0' + hours
    }

    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    time.textContent = hours + ':' + minutes + ':' + seconds
    dataCompleta.textContent = date.toLocaleString('pt-BR',{dateStyle:'full'})
})
