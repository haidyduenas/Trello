document.getElementById("add").addEventListener("click", botones);
 
 function botones(){
 	var divMayor = document.getElementById('cajas');
 	var myDiv = document.createElement('div');
		myDiv.setAttribute("class","btnDiv");
	var myBtn = document.createElement("button");
 		myBtn.setAttribute("class","myBtn");
 		myBtn.setAttribute('onclick', 'insertar()');
 		myBtn.innerHTML='Añadir';
 	var myBtn2 = document.createElement("button");
 		myBtn2.setAttribute("class","myBtn2");
 		myBtn2.innerHTML='X';
 		myDiv.appendChild(myBtn);
 		myDiv.appendChild(myBtn2);
 		divMayor.appendChild(myDiv);
   }

 function insertar(){
 	var section = document.getElementById('tareas');
 	var contenido = document.getElementById('add').value;
 	var newDiv = document.createElement('div');
 	newDiv.setAttribute('class','divTareas');
 	var parrafo = document.createElement('p');
 	var texto =document.createTextNode(contenido);
 	parrafo.appendChild(texto);
 	newDiv.appendChild(parrafo);
 	section.appendChild(newDiv);
 }

