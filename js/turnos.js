let tituloOriginal = document.querySelector('h1').innerText;


function mostrarConfirmacion() {
    // Obtén los valores ingresados por el usuario
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let estilo = document.getElementById('estilo').value;
    let dia = document.getElementById('dia').value;
    let horario = document.getElementById('horario').value;
    let domicilio = document.getElementById('domicilio').value;
    let wsp = document.getElementById('wsp').value;
    let termsCheckbox = document.getElementById('terms');
    let termsLabel = document.querySelector('label[for="terms"]');
    let titulo = document.querySelector('h1');

    // Validación de campos
    let error = false;

    // Validación de fecha no menor a la actual
    let fechaActual = new Date();
    let fechaIngresada = new Date(dia);
    
    // Validación de fecha
    
    if (!dia || !validarFecha(dia)) {
        mostrarError('error', 'dia');
        error = true;
    } else {
        ocultarError('error', 'dia');
    }

    if (!nombre) {
        mostrarError('error', 'nombre');
        error = true;
    } else {
        ocultarError('error', 'nombre');
    }

    if (!correo) {
        mostrarError('error', 'correo');
        error = true;
    } else {
        ocultarError('error', 'correo');
    }

    if (!horario) {
        mostrarError('error', 'horario');
        error = true;
    } else {
        ocultarError('error', 'horario');
    }

    if (!domicilio) {
        mostrarError('error', 'domicilio');
        error = true;
    } else {
        ocultarError('error', 'domicilio');
    }

    if (!wsp) {
        mostrarError('error', 'wsp');
        error = true;
    } else {
        ocultarError('error', 'wsp');
    }  
    // Validación del checkbox de términos y condiciones
    if (!termsCheckbox.checked) {
        mostrarError('error', 'terms');
        termsLabel.classList.add('error-label');
        error = true;
    } else {
        ocultarError('error', 'terms');
        termsLabel.classList.remove('error-label');
    }
    // Si no hay errores, procede a mostrar la confirmación
    if (!error) {
        // Actualiza los campos en el formulario de confirmación
        document.getElementById('confirm-dia').value = dia;
        document.getElementById('confirm-horario').value = horario;
        document.getElementById('confirm-domicilio').value = domicilio;
        document.getElementById('confirm-nombre').value = nombre;
        document.getElementById('confirm-correo').value = correo;
        document.getElementById('confirm-estilo').value = estilo;
        document.getElementById('confirm-wsp').value = wsp;

        
        // Oculta el formulario original
        document.querySelector('#form').style.display = 'none';
        /*Cambia titulo*/
        titulo.innerText = 'Revisa los datos:';
        document.querySelector('.terms-checkbox').style.display = 'none';
        // Muestra el formulario de confirmación
        document.getElementById('confirm-form').style.display = 'block';
        document.getElementById('btnMostrarConfirmacion').style.display = 'none';
        document.getElementById('btnSolicitarTurno').style.display = 'block';
        

    }
    
}
function confirmar (){

        document.getElementById('confirm-form').style.display = 'none';
        document.getElementById('btnMostrarConfirmacion').style.display = 'none';
        document.getElementById('btnSolicitarTurno').style.display = 'none';
        document.getElementById('btnModificar').style.display = 'none';
        document.querySelector('h1').style.display = 'none';

        // Muestra el div "check" y aplica la clase "show"
        let checkDiv = document.getElementById('checkDiv');
        checkDiv.style.display = 'flex';
        checkDiv.classList.add('show');
    
        // Espera 2 segundos antes de ocultar el div
        setTimeout(function () {
            checkDiv.classList.remove('show');
        }, 4000);

}

function validarCorreoElectronico(correo) {
    // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
function validarFecha(dia) {
    let fechaActual = new Date();
    let fechaIngresada = new Date(dia);

    // Establece las horas de ambas fechas a las 00:00:00 para comparar solo las fechas
    fechaActual.setHours(0, 0, 0, 0);
    fechaIngresada.setHours(0, 0, 0, 0);

    if (fechaIngresada < fechaActual) {
        mostrarError('error', 'dia');
        return false;
    } else {
        ocultarError('error', 'dia');
        return true;
    }
}
function modificar() {
    document.querySelector('h1').innerText = tituloOriginal;
    // Muestra el formulario original
    document.getElementById('form').style.display = 'block';

    // Oculta el formulario de confirmación
    document.getElementById('confirm-form').style.display = 'none';
    document.getElementById('btnSolicitarTurno').style.display = 'none';
    document.getElementById('btnMostrarConfirmacion').style.display = 'block';
    document.querySelector('.terms-checkbox').style.display = 'flex';
}

function mostrarError(claseError, idCampo) {
    document.querySelector(`.${claseError}`).style.display = 'block';
    document.getElementById(idCampo).style.border = '2px solid red';
}

function ocultarError(claseError, idCampo) {
    document.querySelector(`.${claseError}`).style.display = 'none';
    document.getElementById(idCampo).style.border = '2px solid #ded7e4';
}

function validarCorreoElectronico(correo) {
    // Lógica de validación del correo electrónico
    // Devuelve true si el formato es válido, de lo contrario, devuelve false
}
