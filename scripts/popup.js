//1. Que se abra el formulario cuando damos click en el botón de editar.
//1.1 Obtener referencia del botón editar en JS.
//1.2 A la referencia de botón añadirle un evento de click.
//1.3 Obtener referencia del popup en JS.
//1.4 En el evento click del botón editar, modificar el estilo del popup para que tenga un display block.
//2. Que aparezca la información actual que tiene en el perfil.
//2.1 Obtener las referencias de los campos del formulario.
//2.2 Obtener las referencias de la información de perfil.
//2.3 Añadir la información del perfil como el valor de los campos del formulario.
//3. Actualizar la información de perfil y que se cierre en formulario.
//3.1 Obtener la referencia del formulario.
//3.2 Añadir el evento submit al formulario. Que se actualicen los datos en la ui.
//3.3 Cerrar el formulario.
//4. Cuando se da click en el botón de cerrar que desaparezca el formulario.
//4.1 Obtener la referencia de cerrar
//4.2 Añadir el evento click.
//4.3 Al evento click añadir la lógica para modificar el estilo del popup.
//4.4 Que se ejecute el estilo display:none

//Referencias al elemento del DOM
let editButton = document.querySelector(".profile__pencil");
let popupElement = document.querySelector(".popup");
let bodyElement = document.querySelector("body");
let saveButton = document.querySelector(".popup__form-button");
let inputName = document.getElementById("name");
let inputJob = document.getElementById("job");
let profileName = document.querySelector(".profile__name");
let profileDescripcion = document.querySelector(".profile__descripcion");
let closeButton = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".popup__form"); //Variales que se le pueden asignar cualquier valor.
const initialName = profileName.textContent; //Variables definidas como constantes, referencias constantes.
const initialDescripcion = profileDescripcion.textContent;


editButton.addEventListener("click", (event) => {//Se agrega el evento click para el botón de editar
  saveButton.setAttribute("disabled", true);
  popupElement.style.display = "block"; //Estilo a el elemento nombrado, el atributo va entre comillas.
  bodyElement.style.overflow = "hidden";
  inputName.value = profileName.textContent;
  inputJob.value = profileDescripcion.textContent; //textContent, el valor que tiene el texto. El contenido de texto de cada elemento. 
});

closeButton.addEventListener("click", (event) => { //Lo que opcurre cuando se hace click de cierre. 
  popupElement.style.display = "none";
  bodyElement.style.overflow = "auto";
});


//Listado de eventos que se ejecutan cada que hay un cambio en un input, cuando se escribe algo. 
inputName.addEventListener("input", (event) => {//Para que escuche el evento o los cambios que se hagan
  event.preventDefault();
  let saveButton = document.querySelector(".popup__form-button");
  if (initialName !== event.target.value || initialDescripcion !== inputJob.value) { //Si es diferente el valor inicial al que se esta escribiendo, se habilita el botón. 
    saveButton.removeAttribute("disabled"); //Para habilitar el botón de guardar.
  } else { //Cuando el valor es igual que el inicial, o sea no sufrió modificaciones. 
    saveButton.setAttribute("disabled", ""); //Para deshabilitar el botón de guardar.
  }
});

inputJob.addEventListener("input", (event) => {//Para que escuche el evento o los cambios que se hagan
  event.preventDefault();  //evento. Previene el comportamiento default del comportamiento. 
  let saveButton = document.querySelector(".popup__form-button");
  if (initialDescripcion !== event.target.value || initialName !== inputName.value) {
    saveButton.removeAttribute("disabled"); //Para habilitar el botón de guardar.
  } else {
    saveButton.setAttribute("disabled", ""); //Para deshabilitar el botón de guardar.
  }
});

formElement.addEventListener("submit", handleProfileFormSubmit); //Elemento del submit, que se ejecuta al darle guardar. 
function handleProfileFormSubmit(evt) { //Función
  evt.preventDefault(); //evento. Previene el comportamiento default del comportamiento. 
  let formData = new FormData(evt.target); //Valores del formulario
  let formValues = Object.fromEntries(formData); //Para modificar el valor del ui
  profileName.textContent = formValues.name; //Valor del formulario 
  profileDescripcion.textContent = formValues.job; //Valor del formulario 
  popupElement.style.display = "none"; //Hace que se oculte el formulario.
}
