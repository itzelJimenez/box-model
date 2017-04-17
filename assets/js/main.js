//alert("washo banda!")
var imagene0= document.getElementsByClassName("box-work")[0];
var imagene1= document.getElementsByClassName("box-work")[1];
var imagene2= document.getElementsByClassName("box-work")[2];
var imagene3= document.getElementsByClassName("box-work")[3];
var imagene4= document.getElementsByClassName("box-work")[4];
var imagene5= document.getElementsByClassName("box-work")[5];
var imagene6= document.getElementsByClassName("box-work")[6];
var imagene7= document.getElementsByClassName("box-work")[7];
var imagene8= document.getElementsByClassName("box-work")[8];
var imagene9= document.getElementsByClassName("box-work")[9];
var contenedor=document.getElementBy
function prueba(){	
	imagen = this;
	imagen.setAttribute("class", "vistaPrevia");
	var botonsito=document.createElement('input');
	imagen.appendChild(botonsito);
	botonsito.type="button";
	botonsito.value="x";
	botonsito.id="borrar";
	botonsito.onclick=function(e){
		e.stopPropagation()
		imagen.setAttribute("class", "box-work");
		imagen.removeChild(borrar);
	}
}

imagene0.addEventListener("click", prueba)
imagene1.addEventListener("click", prueba);
imagene2.addEventListener("click", prueba);
imagene3.addEventListener("click", prueba)
imagene4.addEventListener("click", prueba)
imagene5.addEventListener("click", prueba)
imagene6.addEventListener("click", prueba)
imagene7.addEventListener("click", prueba)
imagene8.addEventListener("click", prueba)
imagene9.addEventListener("click", prueba)