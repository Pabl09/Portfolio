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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("AndroidStudio");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Database");
        habilidades[3].classList.add("React");
        habilidades[4].classList.add("Figma");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
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