
document.querySelector('#tabs-1').addEventListener('click', traerDatos());


function traerDatos(){

	console.log('dentro de la funcion');

	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'data-1.json', true);

	xhttp.send();

	xhttp.onreadystatechange = function() {
		 if (this.readyState === 4 && this.status == "200") {

		 	let datos = JSON.parse(this.responseText);
		// 	console.log(datos);
			let res = document.querySelector ('#tabs-1');
			res.innerHTML = '';

		 	for(let item of datos){

		 		res.innerHTML += `
		 			<img src="img/home.jpg" alt="home">
		 			${item.Direccion}
		 			${item.Ciudad}
		 			${item.Telefono}
		 			${item.Codigo_Postal}
		 			${item.Precio}
		 		`
		 	}
		 }
	}

}