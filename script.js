
const skillsContenedorNode = document.querySelectorAll("[data-skills-contenedor]");
const skillsTexto = document.querySelectorAll("[data-skills-texto]");


const skillsContenedor = Array.prototype.slice.call(skillsContenedorNode);

console.log(skillsTexto[1]);


skillsContenedor.forEach( (contenedor) => {

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