const boton = document.getElementById('botonCambiar');
    const parrafo = document.getElementById('parrafo');
    const mensajeError = document.getElementById('mensajeError');
    const contadorDiv = document.getElementById('contador');
    let contador = 0;

    boton.addEventListener('click', () => {
      mensajeError.textContent = '';
      const nom = prompt("Ingrese su nombre completo:");
      const ed = prompt("Ingresa tu edad:");
      parrafo.innerText = `Bienvenido a la página: ${nom}, tu edad es: ${ed}`;
      //ampliacion
      contador++;
      contadorDiv.textContent = `Cambios realizados: ${contador}`;
    });