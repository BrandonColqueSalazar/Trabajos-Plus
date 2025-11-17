function elegirColor(num) {
    switch (num) {
      case "1": return "red";
      case "2": return "green";
      case "3": return "blue";
      case "4": return "yellow";
      default: return null;
    }
  }

  const boton = document.getElementById('botonCambiar');
  const mensajeError = document.getElementById('mensajeError');

  boton.addEventListener('click', () => {
    mensajeError.textContent = '';

    let cajaNum = prompt("Elige una caja (1, 2 o 3):");
    //ampliacion
    if (!["1", "2", "3"].includes(cajaNum)) {
      mensajeError.textContent = "Por favor, elige una caja válida (1, 2 o 3).";
      return;
    }

    let texto = prompt("Escribe el texto:");
    //ampliacion
    if (!texto) {
      mensajeError.textContent = "El texto no puede estar vacío.";
      return;
    }

    let colorFondoNum = prompt("Elige color de fondo:\n1. Rojo\n2. Verde\n3. Azul\n4. Amarillo");
    let colorFondo = elegirColor(colorFondoNum);
    //ampliacion
    if (!colorFondo) {
      mensajeError.textContent = "Color de fondo inválido.";
      return;
    }

    let colorLetraNum = prompt("Elige color de letra:\n1. Rojo\n2. Verde\n3. Azul\n4. Amarillo");
    let colorLetra = elegirColor(colorLetraNum);
    //ampliacion
    if (!colorLetra) {
      mensajeError.textContent = "Color de letra inválido.";
      return;
    }

    let caja = document.getElementById("caja" + cajaNum);
    caja.textContent = texto;
    caja.style.backgroundColor = colorFondo;
    caja.style.color = colorLetra;
  });