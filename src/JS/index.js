document.addEventListener("DOMContentLoaded", ()=> {


    const botaoEnviar = document.getElementById("botaoEnviar");
    const inputsFormulario = document.querySelectorAll(".input");
    const preenchido = document.querySelector(".preenchido");


    botaoEnviar.addEventListener('click', () => {
        inputsFormulario.forEach(input => {
            if (input.value == "") {
                input.style.borderColor = "#F52E2E";
                input.nextElementSibling.style.visibility = 'visible'
                console.log(input.nextElementSibling)
            }
        })
    })


    inputsFormulario.forEach(input => {

        input.addEventListener('change', (e) => {
            if (input.value !== "") {
                input.style.borderColor = "#00C22B";
                input.nextElementSibling.style.visibility = 'hidden'
            } else if (input.value == "") {
                input.style.borderColor = "black";
            }
        })
    })
});



