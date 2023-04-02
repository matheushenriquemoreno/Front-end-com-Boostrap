(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation');

    console.log("Duas formas de se transformar em array os elementos pegados na don.")
    console.log(Array.from(forms));
    console.log(Array.prototype.slice.call(forms));

    Array.from(forms).forEach((form) => {

        form.addEventListener('submit', (event) => {
            const formTeste = { form }
            console.log(formTeste)
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');

        }, false)
    });

})(); /*Função auto invocada*/


/* https://www.w3schools.com/js/js_validation_api.asp */ 













// entrei dia 01/01/2023 - tempo 3 meses apos adimisão: so entraria no publico alvo no dia 01/04/2023?
