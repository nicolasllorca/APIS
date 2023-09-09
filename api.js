fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    const urlDeLaImagenConComillas = data.message;

    // Elimina las comillas utilizando el método replace()
    const urlDeLaImagenSinComillas = urlDeLaImagenConComillas.replace(/"/g, '');

    // Actualiza el atributo "src" del elemento <img> con la URL de la imagen sin comillas
    const imagenElemento = document.getElementById('imagen');

    imagenElemento.src = urlDeLaImagenSinComillas;
  })
  
  const botonActualizar = document.getElementById('botonActualizar');

    botonActualizar.addEventListener('click', () => {
          location.reload();
    });