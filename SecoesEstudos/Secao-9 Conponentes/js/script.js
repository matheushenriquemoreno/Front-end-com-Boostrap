/*Ativa todos os popover da pagina
var popoverListaAtivacao = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverListaAtivacao.map((popover) => {
    return new bootstrap.Popover(popover)
})
*/

AtivaElementosBoostrap('[data-bs-toggle="popover"]', (popover) => {
    return new bootstrap.Popover(popover)
})

AtivaElementosBoostrap('[data-bs-toggle="tooltip"]', (tooltip) => {
    return new bootstrap.Tooltip(tooltip)
})


function AtivaElementosBoostrap(tag, callback) {
    var elementoListaAtivacao = Array.from(document.querySelectorAll(tag));
    var elementoList = elementoListaAtivacao.map((element) => {
        return callback(element);
    })
}


document.querySelector('#Atualizar-progresso').addEventListener('click', () => {

    var intervalo = setInterval(() => {
        const progressBar = document.getElementById('progress-bar-teste');
        let progress = parseInt(progressBar.getAttribute('aria-valuenow'));

        progress += 4;

        if (progress >= 100)
            stopIntervalo();

        progressBar.setAttribute('aria-valuenow', progress)
        progressBar.style.width = progress + '%'

    }, 500);


    function stopIntervalo() {
        clearInterval(intervalo);
    }

})

