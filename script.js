

//skills
const skillsContenedorNode = document.querySelectorAll("[data-skills-contenedor]");
const skillsTexto = document.querySelectorAll("[data-skills-texto]");
const skillsContenedor = Array.prototype.slice.call(skillsContenedorNode);

//contact
const inputName = document.querySelector('[name="name"]');
const labelName = document.querySelector('[data-name]');
const mensajeName = document.querySelector('[data-name-error]');

const inputEmail = document.querySelector('[name="email"]');
const labelEmail = document.querySelector('[data-email]');
const mensajeEmail = document.querySelector('[data-email-error]');

const inputMessage = document.querySelector('[name="message"]');
const labelMessage = document.querySelector('[data-message]');
const mensajeMessage = document.querySelector('[data-message-error]');

const boton = document.querySelector('[data-boton]');
const mensajeEnviado = document.querySelector('[data-mensaje-enviado]');


// dinamismo a sección skills
skillsContenedor.forEach((contenedor) => {

    let index = skillsContenedor.indexOf(contenedor);

    contenedor.addEventListener('mouseenter', () => {

        skillsTexto[index].classList.remove("inhabilitado");
        skillsTexto[index].classList.add("habilitado");

    });

    contenedor.addEventListener('mouseleave', () => {

        skillsTexto[index].classList.remove("habilitado");
        skillsTexto[index].classList.add("inhabilitado");

    });

});


// distintos estados de error
inputVacio(inputName, labelName, mensajeName, "Please enter your name");
inputVacio(inputEmail, labelEmail, mensajeEmail, "Please enter your email");
inputVacio(inputMessage, labelMessage, mensajeMessage, "Please enter a message");
nombreValido();
emailValido();
mensajeValido();


let nombreEsValido;
let emailEsValido;
let mensajeEsValido;
let botonHabilitado;

function inputVacio(input, label, mensaje, texto){

    let textoIngresado;

    input.addEventListener('blur', (caracterIngresado) => {

        textoIngresado = caracterIngresado.target.value;
    
        if (input.value == ''){
            estadoError(input, label, mensaje, texto);
            // botonHabilitado = false;
        }
    
    })

    input.addEventListener('input', (caracterIngresado) => {

        textoIngresado = caracterIngresado.target.value;
    
        if (textoIngresado =! ''){
            estadoNormal(input, label, mensaje);

        }
    
    })
    
}

function nombreValido(){

    let nombre;

    inputName.addEventListener('input', (caracterIngresado) => {

        const caracteresInvalidos = /[0-9+¿?/()&%$#"¡!'=|<>_;:.,]/;
        nombre = caracterIngresado.target.value;

        if (caracteresInvalidos.test(nombre) == true){
            estadoError(inputName, labelName, mensajeName, "Please don't enter invalid characters");
            nombreEsValido = false;
            // botonHabilitado = false;
        } else if(nombre.length > 50){
            estadoError(inputName, labelName, mensajeName, "Please enter less than 50 characters");
            nombreEsValido = false;
            // botonHabilitado = false;
        } else {
            nombreEsValido = true;
        }

        habilitado();

    });

}

function emailValido(){

    inputEmail.addEventListener('input', (caracterIngresado) => {

        const emailValido = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        email = caracterIngresado.target.value;

        if(emailValido.test(email) == false){
            estadoError(inputEmail, labelEmail, mensajeEmail, "Please enter a valid email");
            emailEsValido = false;
            // botonHabilitado = false;
        } else {
            emailEsValido = true;
        }

        habilitado();

    })

}

function mensajeValido(){

    inputMessage.addEventListener('input', (caracterIngresado) => {

        mensaje = caracterIngresado.target.value;

        if(mensaje.length > 300){
            estadoError(inputMessage, labelMessage, mensajeMessage, "Please enter less than 300 characters");
            mensajeEsValido = false;
        } else {
            mensajeEsValido = true;
        }

        habilitado();

    });

}


// estilización de errores
function estadoError(input, label, mensaje, texto){

    input.classList.remove("estadoNormal");
    input.classList.add("estadoInvalido");

    label.classList.remove("estadoNormalLabel");
    label.classList.add("estadoInvalidoLabel");

    mensaje.classList.remove("invisible");
    mensaje.classList.remove("visible");

    mensaje.innerHTML = texto;
    
}
function estadoNormal(input, label, mensaje){

    input.classList.remove("estadoInvalido");
    input.classList.add("estadoNormal");

    label.classList.remove("estadoInvalidoLabel");
    label.classList.add("estadoNormalLabel");

    mensaje.classList.remove("visible");
    mensaje.classList.add("invisible");
    
}



function habilitado(){

    if(nombreEsValido == true && emailEsValido == true && mensajeEsValido == true){
        boton.classList.replace("botonInactivo", "botonActivo");
        botonHabilitado = true;
    } else {
        boton.classList.replace("botonActivo", "botonInactivo");
        botonHabilitado = false;
    }
}


// escuchando botón

boton.addEventListener('click', () => {

    console.log(botonHabilitado);

    if(botonHabilitado == true){

        botonHabilitado = false;
        console.log(botonHabilitado);

        mensajeEnviado.classList.remove("invisible");
        mensajeEnviado.classList.remove("alFondo");
        mensajeEnviado.classList.remove("animacionDesaparecer");
        mensajeEnviado.classList.add("animacionAparecer");

        inputEmail.value = '';
        inputMessage.value = '';
        inputName.value = '';
        nombreEsValido = false;
        emailEsValido = false;
        mensajeEsValido = false;
        habilitado();

        document.body.classList.add("stop-scrolling");

        setTimeout(() => {
            mensajeEnviado.classList.replace("animacionAparecer", "animacionDesaparecer");
            mensajeEnviado.classList.add("alFondo");
            document.body.classList.remove("stop-scrolling");
        }, 2100)

    }
    

});
