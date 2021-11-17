// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.
// Import classes.
import Animal from "./animal.js";
import Leon from "./animal.js";
import Lobo from "./animal.js";
import Oso from "./animal.js";
import Serpiente from "./animal.js";
import Aguila from "./animal.js";

// Wait until document is ready.
document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});
const url = "animales.json";
// JSON data retrieval and formatting + Loading.
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
const animalesTemplate = document.getElementById("animalesTemplate").content;
const fragment = document.createDocumentFragment();

// Retrieve preview image once animal is selected from list.
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

// Animal Register.
const addAnimalToRegister = (data) => {
	const btnRegistrar = document.getElementById("btnRegistrar");
	const animalesTabla = document.getElementById("animalesTabla");
	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		const values = Object.values(data.animales);
		const animales = values.find((item) => item.name === animal.value);

		if (animal.value === "Leon") {
			const lionRegister = new Leon(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			const clone = animalesTemplate.cloneNode(true);
			clone.querySelector(".card-img-top").setAttribute("src", `${lionRegister._img}`);
			clone.querySelector(".card-img-top").setAttribute("alt", `${lionRegister._nombre}`);
			clone.querySelector(".animal_card_audio").setAttribute("src", `${lionRegister._sonido}`);
			fragment.appendChild(clone);
		}
		if (animal.value === "Lobo") {
			const wolfRegister = new Lobo(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			const clone = animalesTemplate.cloneNode(true);
			clone.querySelector(".card-img-top").setAttribute("src", `${wolfRegister._img}`);
			clone.querySelector(".card-img-top").setAttribute("alt", `${wolfRegister._nombre}`);
			clone.querySelector(".animal_card_audio").setAttribute("src", `${wolfRegister._sonido}`);
			fragment.appendChild(clone);
		}
		if (animal.value === "Oso") {
			const bearRegister = new Oso(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			const clone = animalesTemplate.cloneNode(true);
			clone.querySelector(".card-img-top").setAttribute("src", `${bearRegister._img}`);
			clone.querySelector(".card-img-top").setAttribute("alt", `${bearRegister._nombre}`);
			clone.querySelector(".animal_card_audio").setAttribute("src", `${bearRegister._sonido}`);
			fragment.appendChild(clone);
		}
		if (animal.value === "Serpiente") {
			const snakeRegister = new Serpiente(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			const clone = animalesTemplate.cloneNode(true);
			clone.querySelector(".card-img-top").setAttribute("src", `${snakeRegister._img}`);
			clone.querySelector(".card-img-top").setAttribute("alt", `${snakeRegister._nombre}`);
			clone.querySelector(".animal_card_audio").setAttribute("src", `${snakeRegister._sonido}`);
			fragment.appendChild(clone);
		}
		if (animal.value === "Aguila") {
			const eagleRegister = new Aguila(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`);
			const clone = animalesTemplate.cloneNode(true);
			clone.querySelector(".card-img-top").setAttribute("src", `${eagleRegister._img}`);
			clone.querySelector(".card-img-top").setAttribute("alt", `${eagleRegister._nombre}`);
			clone.querySelector(".animal_card_audio").setAttribute("src", `${eagleRegister._sonido}`);
			fragment.appendChild(clone);
		}
		animalesTabla.appendChild(fragment);
	});
};

const animal_card_audio = document.getElementById("animal_card_audio");
const audioOn = document.querySelector(".animal_sound_div .animal_sound_on_icon");
const audioOff = document.querySelector(".animal_sound_div .animal_sound_off_icon");
const allPage = document.getElementById("allPage");

audioOn.addEventListener("click", audio);
audioOff.addEventListener("click", audio);
allPage.addEventListener("click", () => {
	// Card Audio Functions.
});

function audio(e) {
	console.log(e.target.title);
	if (e.target.title === "on") {
		animal_card_audio.play();
		document.querySelector(".animal_sound_off_icon").classList.remove("d-none");
		document.querySelector(".animal_sound_on_icon").classList.add("d-none");
	} else if (e.target.title === "off") {
		animal_card_audio.pause();
		document.querySelector(".animal_sound_on_icon").classList.remove("d-none");
		document.querySelector(".animal_sound_off_icon").classList.add("d-none");
	}
}
