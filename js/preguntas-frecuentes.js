
//Damos texto a parrafo primera sesion

let primeraSesion = document.querySelector('.primeraSesion');
let textoPrimeraSesion = 'Antes de tu emocionante primera sesión de extensiones de pestañas, hay algunos puntos importantes que debes tener en cuenta para asegurarte de obtener los mejores resultados y disfrutar de la experiencia al máximo.';
primeraSesion.textContent = textoPrimeraSesion;

//PREGUNTAS FRECUENTES
let preguntasFrec1 = document.querySelector('.fa-down')
let preguntasFrec2 = document.querySelector('.fa-down2')
let preguntasFrec3 = document.querySelector('.fa-down3')
let preguntasFrec4 = document.querySelector('.fa-down4')
let preguntasFrec5 = document.querySelector('.fa-down5')
let preguntasFrec6 = document.querySelector('.fa-down6')
let preguntasFrec7 = document.querySelector('.fa-down7')
let preguntasFrec8 = document.querySelector('.fa-down8')

//¿Qué debo saber antes de mi primera sesión?
preguntasFrec1.addEventListener('click', muestradivline1);

function muestradivline1(){ 
    if(document.querySelector('main .divline1 div:nth-child(3)').style.display === 'flex'){
        document.querySelector('main .divline1 div:nth-child(3)').style.display = 'none'
        preguntasFrec1.style.animation = 'aparece';
    }else {
    document.querySelector('main .divline1 div:nth-child(3)').style.display = 'flex';
    preguntasFrec1.style.animation = 'none';}    
}   
//¿Cómo hacer un adecuado mantenimiento de mis pestañas?
preguntasFrec2.addEventListener('click', muestradivline2);

function muestradivline2(){ 
    if(document.querySelector('main .divline1 div:nth-child(6)').style.display === 'flex'){
        document.querySelector('main .divline1 div:nth-child(6)').style.display = 'none'
        preguntasFrec2.style.animation = 'none';
    }else {
    document.querySelector('main .divline1 div:nth-child(6)').style.display = 'flex';
    preguntasFrec2.style.animation = 'aparece';}    
}  
//¿Puedo hacerme las pestañas durante el embarazo?
preguntasFrec3.addEventListener('click', muestradivline3);

function muestradivline3(){ 
    if(document.querySelector('main .divline1 div:nth-child(9)').style.display === 'flex'){
        document.querySelector('main .divline1 div:nth-child(9)').style.display = 'none'
        preguntasFrec3.style.animation = 'none';
    }else {
    document.querySelector('main .divline1 div:nth-child(9)').style.display = 'flex';
    preguntasFrec3.style.animation = 'aparece';}    
}     
//¿Cuánto tiempo dura el procedimiento...
preguntasFrec4.addEventListener('click', muestradivline4);

function muestradivline4(){ 
if(document.querySelector('main .divline1 div:nth-child(12)').style.display === 'flex'){
    document.querySelector('main .divline1 div:nth-child(12)').style.display = 'none'
    preguntasFrec4.style.animation = 'none';
}else {
document.querySelector('main .divline1 div:nth-child(12)').style.display = 'flex';
preguntasFrec4.style.animation = 'aparece';}  
}
//¿Es seguro...
preguntasFrec5.addEventListener('click', muestradivline5);

function muestradivline5(){ 
if(document.querySelector('main .divline1 div:nth-child(14)').style.display === 'flex'){
    document.querySelector('main .divline1 div:nth-child(14)').style.display = 'none'
    preguntasFrec5.style.animation = 'none';
}else {
document.querySelector('main .divline1 div:nth-child(14)').style.display = 'flex';
preguntasFrec5.style.animation = 'aparece';}  
}
//¿Cuanto tiempo duran...
preguntasFrec6.addEventListener('click', muestradivline6);

function muestradivline6(){ 
if(document.querySelector('main .divline1 div:nth-child(16)').style.display === 'flex'){
    document.querySelector('main .divline1 div:nth-child(16)').style.display = 'none'
    preguntasFrec6.style.animation = 'none';
}else {
document.querySelector('main .divline1 div:nth-child(16)').style.display = 'flex';
preguntasFrec6.style.animation = 'aparece';}  
}
//¿Puedo maquillarme...
preguntasFrec7.addEventListener('click', muestradivline7);

function muestradivline7(){ 
if(document.querySelector('main .divline1 div:nth-child(18)').style.display === 'flex'){
    document.querySelector('main .divline1 div:nth-child(18)').style.display = 'none'
    preguntasFrec7.style.animation = 'none';
}else {
document.querySelector('main .divline1 div:nth-child(18)').style.display = 'flex';
preguntasFrec7.style.animation = 'aparece';}  
}
//¿Como elijo un estilo...
preguntasFrec8.addEventListener('click', muestradivline8);

function muestradivline8(){ 
if(document.querySelector('main .divline1 div:nth-child(20)').style.display === 'flex'){
    document.querySelector('main .divline1 div:nth-child(20)').style.display = 'none'
    preguntasFrec8.style.animation = 'none';
}else {
document.querySelector('main .divline1 div:nth-child(20)').style.display = 'flex';
preguntasFrec8.style.animation = 'aparece';}  
}

//Damos texto a ver mas primera sesion parrafo 1
let primeraSesionP1 = document.querySelector('.primeraSesionP1');
let textoPrimeraSesionP1 = 'Por favor, llega a tu cita con los ojos completamente limpios y sin ningún rastro de maquillaje. Esto nos ayudará a aplicar las extensiones de pestañas de manera eficaz y duradera.';
primeraSesionP1.textContent = textoPrimeraSesionP1;

//Damos texto a ver mas primera sesion parrafo 2
let primeraSesionP2 = document.querySelector('.primeraSesionP2');
let textoPrimeraSesionP2 = 'Durante tu consulta inicial, hablaremos sobre tus preferencias de estilo y longitud. Si tienes alguna idea en mente o alguna pregunta ¡No dudes en compartirla con nosotros! Estamos acá para crear un look que se adapte a vos.';
primeraSesionP2.textContent = textoPrimeraSesionP2;

//Damos texto a ver mas primera sesion parrafo 3
let primeraSesionP3 = document.querySelector('.primeraSesionP3');
let textoPrimeraSesionP3 = 'Planifica con suficiente tiempo para tu primera sesión. La aplicación de extensiones de pestañas es un proceso meticuloso que puede llevar varias horas. Relajate y disfruta de tu tiempo de belleza.';
primeraSesionP3.textContent = textoPrimeraSesionP3;

//Damos texto a ver mas primera sesion parrafo 4
let primeraSesionP4 = document.querySelector('.primeraSesionP4');
let textoPrimeraSesionP4 = 'Es normal sentir un poco de incomodidad o picazón durante la aplicación. Esto es parte del proceso y generalmente desaparece rápidamente.';
primeraSesionP4.textContent = textoPrimeraSesionP4;

//Damos texto a ver mas primera sesion parrafo 5
let primeraSesionP5 = document.querySelector('.primeraSesionP5');
let textoPrimeraSesionP5 = 'Después de tus extensiones, asegúrate de seguir las instrucciones de cuidado adecuadas para mantener tus pestañas hermosas. Evita frotar los ojos y utiliza productos de cuidado adecuados.';
primeraSesionP5.textContent = textoPrimeraSesionP5;

//Damos texto a ver mas primera sesion parrafo 6
let primeraSesionP6 = document.querySelector('.primeraSesionP6');
let textoPrimeraSesionP6 = 'Las extensiones de pestañas requieren retoques periódicos para mantener su apariencia óptima. Consulta con tu lashista sobre cuándo debes programar tus retoces de llenado.';
primeraSesionP6.textContent = textoPrimeraSesionP6;

//Damos texto a ver mas primera sesion parrafo 7
let primeraSesionP7 = document.querySelector('.primeraSesionP7');
let textoPrimeraSesionP7 = 'La aplicación de extensiones de pestañas es una oportunidad para realzar tu belleza natural y simplificar tu rutina diaria de maquillaje. Disfruta de la experiencia y siéntete hermosa. Estamos emocionados de tenerte como cliente y esperamos verte en tu primera sesión. Si tienes alguna pregunta adicional o necesitas aclaraciones, no dudes en contactarnos. Tu comodidad y satisfacción son nuestra prioridad número uno.¡Esperamos darte la bienvenida y ayudarte a resaltar tu belleza con nuestras extensiones de pestañas profesionales!';
primeraSesionP7.textContent = textoPrimeraSesionP7;

//verMas boton abre articulo primera sesion
let verMasPrimeraSesion = document.querySelector('.verMasPrimeraSesion');
let articuloPrimeraSesion = document.querySelector('.articuloPrimeraSesion');
let verMenosPrimeraSesion = document.querySelector('.verMenosPrimeraSesion');

verMasPrimeraSesion.addEventListener('click', verMasArticuloPrimeraSesion);
function verMasArticuloPrimeraSesion(){
    articuloPrimeraSesion.style.display = 'block';
    verMasPrimeraSesion.style.display = 'none';
    verMenosPrimeraSesion.style.display = 'block';
}

//Ver menos - boton cierra ARTICLE Primera sesion
verMenosPrimeraSesion.addEventListener('click', verMenosArticuloPrimeraSesion);
function verMenosArticuloPrimeraSesion(){
    articuloPrimeraSesion.style.display = 'none';
    verMenosPrimeraSesion.style.display = 'none';
    verMasPrimeraSesion.style.display = 'inline-block';
}

//verMas boton abre articulo Cuidados
let verMasCuidados = document.querySelector('.btnCuidadosVerMas');
let articuloCuidados = document.querySelector('.articuloCuidando');
let verMenosCuidados = document.querySelector('.btnCuidadosVerMenos');

verMasCuidados.addEventListener('click', verMasArticuloCuidados);
function verMasArticuloCuidados(){
    articuloCuidados.style.display = 'block';
    verMasCuidados.style.display = 'none';
    verMenosCuidados.style.display = 'block';
}

//Ver menos - boton cierra ARTICLE Cuidados
verMenosCuidados.addEventListener('click', verMenosArticuloCuidados);
function verMenosArticuloCuidados(){
    articuloCuidados.style.display = 'none';
    verMenosCuidados.style.display = 'none';
    verMasCuidados.style.display = 'inline-block';
}

//verMas boton abre articulo Embarazo
let verMasEmbarazo = document.querySelector('.verMasEmbarazo');
let articuloEmbarazo = document.querySelector('.articuloEmbarazo');
let verMenosEmbarazo = document.querySelector('.verMenosEmbarazo');

verMasEmbarazo.addEventListener('click', verMasArticuloEmbarazo);
function verMasArticuloEmbarazo(){
    articuloEmbarazo.style.display = 'block';
    verMasEmbarazo.style.display = 'none';
    verMenosEmbarazo.style.display = 'block';
}

//Ver menos - boton cierra ARTICLE Embarazo
verMenosEmbarazo.addEventListener('click', verMenosArticuloEmbarazo);
function verMenosArticuloEmbarazo(){
    articuloEmbarazo.style.display = 'none';
    verMenosEmbarazo.style.display = 'none';
    verMasEmbarazo.style.display = 'inline-block';
}