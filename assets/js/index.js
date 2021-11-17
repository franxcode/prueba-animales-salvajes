import Animal from "./animal.js";

const btnRegistrar = document.getElementById("btnRegistrar");

const animales = document.getElementById("animales");
btnRegistrar.addEventListener("click", () => {
	const animal = document.getElementById("animal").value;
	const edad = document.getElementById("edad").value;
	const comentarios = document.getElementById("comentarios").value;
	const preview = document.getElementById("preview");
	const player = document.getElementById("player");
	const animalModal = document.getElementById("animalModal");
	// console.log(animales);
	console.log(animal);
	console.log(edad);
	console.log(comentarios);
	console.log(preview);
	console.log(player);
	console.log(animalModal);
});

// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.

const url = "animales.json";
(async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		const values = Object.values(data);
		values.forEach((element) => {
			element.map((item) => {
				console.log(`${item.name} ${item.imagen} ${item.sonido}`);
			});
		});
	} catch (error) {
		console.log(error);
	}
})();
