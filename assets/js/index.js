// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.
import Animal from "./animal.js";
import Leon from "./animal.js";
import Lobo from "./animal.js";
import Oso from "./animal.js";
import Serpiente from "./animal.js";
import Aguila from "./animal.js";

document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});
const url = "animales.json";

const fetchData = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		addAnimalToRegister(data);
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

const addAnimalToRegister = (data) => {
	const btnRegistrar = document.getElementById("btnRegistrar");
	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		const values = Object.values(data.animales);
		const animales = values.find((item) => item.name === animal.value);

		if (animal.value === "Leon") {
			const lionRegister = new Leon(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			console.log(lionRegister);
		}
		if (animal.value === "Lobo") {
			const wolfRegister = new Lobo(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			console.log(wolfRegister);
		}
		if (animal.value === "Oso") {
			const bearRegister = new Oso(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			console.log(bearRegister);
		}
		if (animal.value === "Serpiente") {
			const snakeRegister = new Serpiente(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			console.log(snakeRegister);
		}
		if (animal.value === "Aguila") {
			const eagleRegister = new Aguila(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			console.log(eagleRegister);
		}
	});
};
