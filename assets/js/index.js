// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.

import Animal from "./animal.js";

document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});
const url = "animales.json";

const fetchData = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		getAnimalImagePreview(data);
	} catch (error) {
		console.log(error);
	} finally {
		// Add loading logic here.
	}
};

const animal = document.getElementById("animal");
const preview = document.getElementById("preview");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const getAnimalImagePreview = (data) => {
	const values = Object.values(data.animales);

	animal.addEventListener("change", (e) => {
		const animales = values.find((item) => item.name === e.target.value);
		if (animales.name === "Leon") {
			preview.innerHTML = `<img src="/assets/imgs/${animales.imagen}" alt="${animales.name}" class="animal_preview_image">`;
		}
		if (animales.name === "Lobo") {
			preview.innerHTML = `<img src="/assets/imgs/${animales.imagen}" alt="${animales.name}" class="animal_preview_image">`;
		}
		if (animales.name === "Oso") {
			preview.innerHTML = `<img src="/assets/imgs/${animales.imagen}" alt="${animales.name}" class="animal_preview_image">`;
		}
		if (animales.name === "Serpiente") {
			preview.innerHTML = `<img src="/assets/imgs/${animales.imagen}" alt="${animales.name}" class="animal_preview_image">`;
		}
		if (animales.name === "Aguila") {
			preview.innerHTML = `<img src="/assets/imgs/${animales.imagen}" alt="${animales.name}" class="animal_preview_image">`;
		}
	});
};

(() => {
	const btnRegistrar = document.getElementById("btnRegistrar");
	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		console.log(animal.value);
		console.log(preview.innerHTML);
		console.log(edad.value);
		console.log(comentarios.value);
	});
})();
