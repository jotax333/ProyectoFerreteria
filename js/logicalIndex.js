const formulario = document.querySelector('#register');
const numTelefono = /^[0-9]+$/;
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener('submit', function (validacion) {

    validacion.preventDefault(); /* Evita que la pagina recarge cada vez que se envia el formulario dando pie al resto de eventos */

    const camposRequeridos = formulario.querySelectorAll('[required]'); /* Solo toma del formulario los campos con required*/
    let formularioValido = true; /* boolean */

    camposRequeridos.forEach(function (campo) { /* recorres los campos requeridos del formulario (los lees) con el forEach */

        if (campo.value.trim() === '' ){

            campo.classList.add('campo-error');
            formularioValido = false;
        } else{
            campo.classList.remove('campo-error');
            campo.classList.add('campo-check');
        }
    });

    const correo = document.querySelector('#correo');
    if(!patronCorreo.test(correo.value.trim())){ /* test verifica que el patron del correo se cumpla */
        correo.classList.remove('campo-check')
        correo.classList.add('campo-error')
        formularioValido = false;

    }else{
        correo.classList.remove('campo-error')
        correo.classList.add('campo-check')
    }

    const telefono = document.querySelector('#telefono');
    if(!numTelefono.test(telefono.value.trim())){ 
        telefono.classList.remove('campo-check')
        telefono.classList.add('campo-error')
        formularioValido = false;
    
    }else{
        telefono.classList.remove('campo-error')
        telefono.classList.add('campo-check')
    }

    if (formularioValido) {
        
        window.location.href = 'producto.html'; /* si el Formulario es valido te redireciona a la seccion de productos*/
    }

    

});

