document.addEventListener("DOMContentLoaded", ()=> {

    const botaoEnviar = document.getElementById("botaoEnviar");
    const inputsFormulario = document.querySelectorAll(".input");


    // botaoEnviar.addEventListener('click', (e) => {
    //     e.preventDefault()
        
    //     inputsFormulario.forEach(input => {
    //         if (input.value == "") {
    //             input.style.borderColor = "#F52E2E";
    //             input.nextElementSibling.style.visibility = 'visible'
    //         }
    //     })
    // })


    // inputsFormulario.forEach(input => {

    //     input.addEventListener('change', (e) => {
    //         if (input.value !== "") {
    //             input.style.borderColor = "#00C22B";
    //             input.nextElementSibling.style.visibility = 'hidden'
    //         } else if (input.value == "") {
    //             input.style.borderColor = "black";
    //         }
    //     })
    // })

        botaoEnviar.addEventListener('click', (e)=>{
            e.preventDefault()
        
    inputsFormulario.forEach((input)=>{
        console.log(input.value)
        if(input.value !== ""){
            input.classList.remove('erro')
            input.classList.add('valido')
            input.nextElementSibling.style.visibility = 'hidden'
        }else{
            input.classList.remove('valido')
            input.classList.add('erro')
            input.nextElementSibling.style.visibility = 'visible'
        }
    })

})


})
