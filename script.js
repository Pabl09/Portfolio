let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion para visualizar y descargar CV en formato PDF
document.getElementById('download-btn').addEventListener('click', function() {
    var url = 'https://drive.google.com/file/d/1y5zof6-df35xgKt5XeaxB98f5uGZh-HP/view?usp=sharing';
    window.open(url, '_blank');
});

// Funcionalidad del formulario. 

const form = document.getElementById('form')
const sendMail = document.getElementById('emailA')

function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
        'href',
        `mailTo:jpablo.engineer@gmail.com?subject=${fd.get('subject')}&body=${fd.get('mensaje')}`
    )

     // Limpiar el formulario
     form.reset();

    sendMail.click()
}

form.addEventListener('submit', handleSendEmail)

//Script para Controlar el Deslizamiento de la sección certificaciones

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

// Desplazamiento automático cada 5 segundos
setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 5000);