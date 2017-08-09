var tareas = new Array()

function add() {
  var etiquetali = document.createElement("li");  //Creamos una etiqueta li
  var nuevaTarea = document.getElementById("newTarea").value; 
  var contenidoEtiqueta = document.createTextNode(nuevaTarea); 
  etiquetali.appendChild(contenidoEtiqueta);
  document.getElementById("list").appendChild(etiquetali);
  document.getElementById("newTarea").value = "";
  var pushArray = {
  title: nuevaTarea,
  completed :false,
  }
  listaTareas.push(pushArray);
  }