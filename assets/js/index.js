// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.
// Import classes.
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

// JSON data retrieval and formatting + Loading.
(async () => {
	const url = "animales.json";
	try {
		const res = await fetch(url);
		const data = await res.json();
		registerAnimalAndCreateInstance(data);
		getAnimalImagePreview(data);
	} catch (error) {
		console.log(error);
	} finally {
		// Add loading logic here.
	}
})();

// Retrieve preview image of the selected animal once it is selected from the drop down list.
const getAnimalImagePreview = (data) => {
	const animal = document.getElementById("animal");
	const preview = document.getElementById("preview");
	const { animales } = data;

	animal.addEventListener("change", (e) => {
		const findImage = animales.find((animal) => animal.name === e.target.value).imagen;
		document.getElementById("preview").setAttribute("class", "mx-auto mb-5");
		preview.innerHTML = `<img src="/assets/imgs/${findImage}" alt="${e.target.value}" class="animal_preview_image">`;
	});
};

// Register animal once "Agregar" button is clicked.
const registerAnimalAndCreateInstance = (data) => {
	const btnRegistrar = document.getElementById("btnRegistrar");

	let animalArray = [];
	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		const animalx = document.getElementById("animal");
		const edad = document.getElementById("edad");
		const comentarios = document.getElementById("comentarios");
		const preview = document.getElementById("preview");

		let newAnimal;
		const { animales } = data;
		try {
			const instanceImage = animales.find((animal) => animal.name === animalx.value).imagen;
			const instanceSound = animales.find((animal) => animal.name === animalx.value).sonido;
			if (animalx.value === "Leon") {
				newAnimal = new Leon(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`);
			} else if (animalx.value === "Lobo") {
				newAnimal = new Lobo(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`);
			} else if (animalx.value === "Oso") {
				newAnimal = new Oso(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`);
			} else if (animalx.value === "Serpiente") {
				newAnimal = new Serpiente(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`);
			} else if (animalx.value === "Aguila") {
				newAnimal = new Aguila(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`);
			}

			if (animalx.selectedIndex != 0 && edad.selectedIndex != 0 && comentarios.value && instanceImage) {
				animalArray.push(newAnimal);
				animalx.selectedIndex = 0;
				edad.selectedIndex = 0;
				comentarios.value = "";
				preview.innerHTML = `<img src="/assets/imgs/lion.svg" style="background-position: center top; background-size: contain; background-repeat: no-repeat;" height="200px">`;
				drawAnimal(animalArray);
			}
		} catch (error) {
			document.getElementById("error").classList.remove("d-none");
			setTimeout(() => {
				document.getElementById("error").classList.add("d-none");
			}, 3000);
		}
	});
};

const drawAnimal = (animalArray) => {
	const animalesTabla = document.getElementById("animalesTabla");
	const animalesTemplate = document.getElementById("animalesTemplate").content;
	const fragment = document.createDocumentFragment();
	animalesTabla.innerHTML = "";

	animalArray.map((animal, index) => {
		const clone = animalesTemplate.cloneNode(true);
		clone.querySelector(".card-img-top").setAttribute("src", `${animal._img}`);
		clone.querySelector(".card-img-top").setAttribute("alt", `${animal._nombre}`);
		clone.querySelector(".animal_card_audio").setAttribute("src", `${animal._sonido}`);
		clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal._nombre;
		clone.querySelector(".animal_sound_on_icon").setAttribute("onclick", `cardAudio('${index}')`);
		console.log(clone);
		fragment.appendChild(clone);
	});
	animalesTabla.appendChild(fragment);
	// cardAudio(animalArray);
};

// Animal card audio functions. - Semi functional.
const cardAudio = (animalArray) => {
	document.addEventListener("click", (e) => {
		const animal_card_audio = document.getElementById("animal_card_audio");

		for (let i = 0; i < animalArray.length; i++) {
			if (e.target.dataset != "" && e.target.title === "on") {
				animal_card_audio.play();
				document.querySelector(".animal_sound_off_icon").classList.remove("d-none");
				document.querySelector(".animal_sound_on_icon").classList.add("d-none");
			} else if (e.target.dataset != "" && e.target.title === "off") {
				animal_card_audio.pause();
				document.querySelector(".animal_sound_on_icon").classList.remove("d-none");
				document.querySelector(".animal_sound_off_icon").classList.add("d-none");
			}
		}
	});
};
