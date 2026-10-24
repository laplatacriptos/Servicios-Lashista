
let divline1 = document.querySelector('.divline1');
let efectos = document.querySelector('#efectos');
/*variables frente tarjeta*/
let frenteRimel = document.querySelector('.frenteRimel');
let frente2d = document.querySelector('.frente2d');
let frente3d = document.querySelector('.frente3d');
let frente4d = document.querySelector('.frente4d');
let frenteRusso = document.querySelector('.frenteRusso');
let frenteMegaVolumen = document.querySelector('.frenteMegaVolumen');
/*variable mas info tarjeta*/
let masInfoRimel = document.querySelector('.masInfoRimel');
let masInfo2D = document.querySelector('.masInfo2D');
let masInfo3D = document.querySelector('.masInfo3D');
let masInfo4D = document.querySelector('.masInfo4D');
let masInfoRusso = document.querySelector('.masInfoRusso');
let masInfoMegaVolumen = document.querySelector('.masInfoMegaVolumen');
/*variables dorso tarjeta*/
let dorsoRimel = document.querySelector('.dorsoRimel');
let dorso2d = document.querySelector('.dorso2d');
let dorso3d = document.querySelector('.dorso3d');
let dorso4d = document.querySelector('.dorso4d');
let dorsoRusso = document.querySelector('.dorsoRusso');
let dorsoMegaVolumen = document.querySelector('.dorsoMegaVolumen');

let strongef = document.querySelector('.strong-ef p strong');
let frente = document.querySelectorAll('#efectos .frente');
let dorso = document.querySelectorAll('#efectos .dorso');

/*RIMEL*/
/*AGREGA EVENTO AL BOTON MAS INFO RIMEL*/
masInfoRimel.addEventListener('click', verDorsoRimel);
function verDorsoRimel() {
    frenteRimel.style.display = 'none';
    dorsoRimel.style.display = 'flex';
}
/*AGREGA TEXTO A DORSO RIMEL*/
let txtDorsoRimel = document.querySelector('#efectos .dorsoRimel p');
let rellenoDorsoRimel = 'Este estilo proporciona un efecto diario, realzando tus pestañas con un toque de oscuridad. Ideal para un look natural y elegante, el Rimel se destaca por su sutileza y destaca cada pestaña de manera suave y definida. Perfecto para pestañas en busca de un refuerzo sutil.';
txtDorsoRimel.textContent = rellenoDorsoRimel;
/*VOLVER DORSO A FRENTE RIMEL*/
dorsoRimel.addEventListener('click', vuelveFrenteRimel);
function vuelveFrenteRimel() {
    dorsoRimel.style.display = 'none';
    frenteRimel.style.display = 'block';
}

/*2D*/
/*AGREGA EVENTO AL BOTON MAS INFO 2D*/
masInfo2D.addEventListener('click', verDorso2d);
function verDorso2d() {
    frente2d.style.display = 'none';
    dorso2d.style.display = 'flex';
}
/*AGREGA TEXTO A DORSO 2D*/
let txtDorso2d = document.querySelector('#efectos .dorso2d p');
let rellenoDorso2d = 'Para un doble volumen y una mirada llamativa, el efecto 2D es la elección perfecta. Este estilo agrega una dimensión extra, aumentando el espesor de tus pestañas, proporcionando una apariencia coqueta y voluminosa.';
txtDorso2d.textContent = rellenoDorso2d;
/*VOLVER DORSO A FRENTE 2D*/
dorso2d.addEventListener('click', vuelveFrente2d);
function vuelveFrente2d() {
    dorso2d.style.display = 'none';
    frente2d.style.display = 'block';
}

/*3D*/
/*AGREGA EVENTO AL BOTON MAS INFO 3D*/
masInfo3D.addEventListener('click', verDorso3d);
function verDorso3d() {
    frente3d.style.display = 'none';
    dorso3d.style.display = 'flex';
}
/*AGREGA TEXTO A DORSO 3D*/
let txtDorso3d = document.querySelector('#efectos .dorso3d p');
let rellenoDorso3d = 'Experimenta la profundidad y densidad tridimensional con el efecto 3D. Adecuado para pestañas que buscan un cambio dramático, este estilo resalta cada pestaña con una riqueza de detalle, logrando un aspecto cautivador.';
txtDorso3d.textContent = rellenoDorso3d;
/*VOLVER DORSO A FRENTE 3D*/
dorso3d.addEventListener('click', vuelveFrente3d);
function vuelveFrente3d() {
    dorso3d.style.display = 'none';
    frente3d.style.display = 'block';
}

/*4D*/
/*AGREGA EVENTO AL BOTON MAS INFO 4D*/
masInfo4D.addEventListener('click', verDorso4d);
function verDorso4d() {
    frente4d.style.display = 'none';
    dorso4d.style.display = 'flex';
    /*AGREGAR TEXTO A DORSO 4D*/
    let txtDorso4d = document.querySelector('#efectos .dorso4d p');
    let rellenoDorso4d = 'Cuatro dimensiones de volumen y drama se unen en el efecto 4D. Perfecto para un impacto asombroso, este estilo intensifica tus pestañas, creando un look dramático y deslumbrante.';
    txtDorso4d.textContent = rellenoDorso4d;
}
/*VOLVER DORSO A FRENTE 4D*/
dorso4d.addEventListener('click', vuelveFrente4d);
function vuelveFrente4d() {
    dorso4d.style.display = 'none';
    frente4d.style.display = 'block';
}

/*RUSSO*/
/*AGREGA EVENTO AL BOTON MAS INFO RUSSO*/
masInfoRusso.addEventListener('click', verDorsoRusso);
function verDorsoRusso() {
    frenteRusso.style.display = 'none';
    dorsoRusso.style.display = 'flex';
    /*AGREGAR TEXTO A DORSO RUSSO*/
    let txtDorsoRusso = document.querySelector('#efectos .dorsoRusso p');
    let rellenoDorsoRusso = 'Si buscas un efecto lujoso y exuberante, el estilo Russo es tu elección. Este estilo se adapta a pestañas largas y abundantes, ofreciendo una apariencia opulenta y sofisticada.';
    txtDorsoRusso.textContent = rellenoDorsoRusso;
}
/*VOLVER DORSO A FRENTE RUSSO*/
dorsoRusso.addEventListener('click', vuelveFrenteRuso);
function vuelveFrenteRuso() {
    dorsoRusso.style.display = 'none';
    frenteRusso.style.display = 'block';
}

/*MEGA VOLUMEN*/
/*AGREGA EVENTO AL BOTON MAS INFO MEGA VOLUMEN*/
masInfoMegaVolumen.addEventListener('click', verDorsoMegaVolumen);
function verDorsoMegaVolumen() {
    frenteMegaVolumen.style.display = 'none';
    dorsoMegaVolumen.style.display = 'flex';
    /*AGREGAR TEXTO A DORSO MEGA VOLUMEN*/
    let txtDorsoMegaVolumen = document.querySelector('#efectos .dorsoMegaVolumen p');
    let rellenoDorsoMegaVolumen = 'Máxima densidad y glamour en tus pestañas. Este estilo es perfecto para aquellos que desean un aspecto intenso y atractivo con un énfasis en la densidad.';
    txtDorsoMegaVolumen.textContent = rellenoDorsoMegaVolumen;
}
/*VOLVER DORSO A FRENTE MEGAVOLUMEN*/
dorsoMegaVolumen.addEventListener('click', vuelveFrenteMegaVolumen);
function vuelveFrenteMegaVolumen() {
    dorsoMegaVolumen.style.display = 'none';
    frenteMegaVolumen.style.display = 'block';
}





/*MENU RESPONSIVE*/

let capa1BackMenu = document.querySelector('#capa1-back-menu');
let btnIconMenu = document.querySelector('.material-symbols-outlined');
let menu = document.querySelector('.menu-ol');
let wsp = document.querySelector('.wsp');

btnIconMenu.addEventListener('click', abreMenu);
capa1BackMenu.addEventListener('click', cierraMenu);


function abreMenu() {
    menu.style.right = '0px';
    capa1BackMenu.style.display = 'block';



}
function cierraMenu() {
    menu.style.right = '-250px';
    capa1BackMenu.style.display = 'none';

}


/*TEMPORIZADORES*/


const contenedores = document.querySelectorAll('.contenedorPromo');

const temporizadorGlobal = document.querySelector('.temporizador');
const txtDias = temporizadorGlobal.querySelector('.txtDias');
const txtHoras = temporizadorGlobal.querySelector('.txtHoras');
const txtMinutos = temporizadorGlobal.querySelector('.txtMinutos');
const txtSegundos = temporizadorGlobal.querySelector('.txtSegundos');

// Fecha de finalización de la promoción
const finPromo = new Date(2026, 9, 30, 23, 59, 59);

let intervalo;

// Calcular los precios de las promociones
contenedores.forEach(contenedor => {
    const porcentaje = contenedor.querySelector('.porcentaje strong');
    const precioOriginal = contenedor.querySelector('.promocion div h3');
    const precioFinal = contenedor.querySelector('.promocion div h4');

    const descuento = parseFloat(porcentaje.textContent);
    const valorOriginal = parseFloat(
        precioOriginal.textContent.replace(/[^\d.,]/g, '').replace(',', '.')
    );

    const valorConDescuento = Math.round(
        valorOriginal - (valorOriginal * descuento / 100)
    );

    precioFinal.textContent = `$${valorConDescuento}-.`;
});

function temporizador() {
    const diferencia = finPromo.getTime() - Date.now();

    // Si la promoción terminó
    if (diferencia <= 0) {
        clearInterval(intervalo);

        // Ocultar todo el temporizador, incluidas las cajas
        temporizadorGlobal.style.display = 'none';      

        // Restaurar los precios originales en todas las tarjetas
        contenedores.forEach(contenedor => {
            const porcentaje = contenedor.querySelector('.porcentaje');
            const precioOriginal = contenedor.querySelector('.promocion div h3');
            const precioFinal = contenedor.querySelector('.promocion div h4');

            const valorOriginal = parseFloat(
                precioOriginal.textContent.replace(/[^\d.,]/g, '').replace(',', '.')
            );

            porcentaje.style.display = 'none';
            precioOriginal.style.display = 'none';
            precioFinal.textContent = `$${valorOriginal}-.`;

            // Aplicar el padding de 60px a cada tarjeta de promo individualmente
            contenedor.style.padding = '60px 0';
            
        });

        // No modificar el fondo ni los estilos de las tarjetas
        return;
    }

    // Si la promoción sigue vigente
    temporizadorGlobal.style.display = '';

    let segundos = Math.trunc(diferencia / 1000);
    let minutos = Math.trunc(segundos / 60);
    let horas = Math.trunc(minutos / 60);
    const dias = Math.trunc(horas / 24);

    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    txtDias.textContent = String(dias).padStart(2, '0');
    txtHoras.textContent = String(horas).padStart(2, '0');
    txtMinutos.textContent = String(minutos).padStart(2, '0');
    txtSegundos.textContent = String(segundos).padStart(2, '0');
}

// Crear el intervalo antes de ejecutar la función
intervalo = setInterval(temporizador, 1000);
temporizador();


//@keyframes para los iconos grandes 
document.addEventListener("DOMContentLoaded", function () {
    var iconSpans = document.querySelectorAll(".icono-contenedor");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        iconSpans.forEach(function (iconSpan) {
            if (isElementInViewport(iconSpan)) {
                iconSpan.classList.add("animate-visible");
            }
        });
    }

    // Agrega un listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Llama a handleScroll al cargar la página para verificar elementos visibles inicialmente
    handleScroll();
});

// Seleccionar el interruptor
const switchInput = document.getElementById('flexSwitchCheckChecked');

// Comprobar preferencia guardada en localStorage
const savedMode = localStorage.getItem('dark-mode');

if (savedMode === 'enabled') {
    // Si la preferencia es modo oscuro, aplicarlo
    document.body.classList.add('dark-mode');
    switchInput.checked = true;
} else if (savedMode === 'disabled') {
    // Si la preferencia es modo claro, asegurarse de desactivarlo
    document.body.classList.remove('dark-mode');
    switchInput.checked = false;
} else {
    // Si no hay preferencia guardada, forzar modo oscuro
    document.body.classList.add('dark-mode');
    switchInput.checked = true;
    localStorage.setItem('dark-mode', 'enabled'); // Guardar modo oscuro como predeterminado
}

// Evento para cambiar entre modos y actualizar localStorage
switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Guardar preferencia
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Guardar preferencia
    }
});

// Obtener el contenedor donde se mostrará el día de la semana
const diaSemanaDiv = document.getElementById('diaSemana');

// Obtener el día de la semana actual
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const hoy = new Date();
const diaSemana = dias[hoy.getDay()];

// Insertar el día de la semana en el contenedor
diaSemanaDiv.textContent = `Hoy es ${diaSemana}`;








