 const boton = document.getElementById('botonInicio');
  const mensajeDiv = document.getElementById('mensaje');

  boton.addEventListener('click', () => {
    const nom = prompt("Ingrese su nombre completo:");
    //ampliacion
    if (!nom) {
      mensajeDiv.textContent = "No ingresaste tu nombre.";
      return;
    }
    const ed = prompt("Ingresa tu edad:");
    //ampliacion
    if (!ed) {
      mensajeDiv.textContent = "No ingresaste tu edad.";
      return;
    }

    mensajeDiv.textContent = `Bienvenido a la página: ${nom}, tu edad es: ${ed}.`;
  });