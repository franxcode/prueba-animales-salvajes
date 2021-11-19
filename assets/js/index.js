// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.
// Import classes.
import Animal, { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

// JSON data retrieval and formatting + Loading.
(async () => {
	const url = "animales.json";
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
const addAnimalToRegister = (data) => {
	const animalx = document.getElementById("animal");
	const comentarios = document.getElementById("comentarios");
	const edad = document.getElementById("edad");
	const animalesTabla = document.getElementById("animalesTabla");
	const btnRegistrar = document.getElementById("btnRegistrar");
	const animalesTemplate = document.getElementById("animalesTemplate").content;
	const fragment = document.createDocumentFragment();

	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		let arrayAnimal = [];
		const { animales } = data;
		const instanceImage = animales.find((animal) => animal.name === animalx.value).imagen;
		const instanceSound = animales.find((animal) => animal.name === animalx.value).sonido;

		switch (animalx.value) {
			case "Leon":
				arrayAnimal.push(new Leon(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`));

				arrayAnimal.map((animal) => {
					const clone = animalesTemplate.cloneNode(true);
					clone.querySelector(".card-img-top").setAttribute("src", `${animal._img}`);
					clone.querySelector(".card-img-top").setAttribute("alt", `${animal._nombre}`);
					clone.querySelector(".animal_card_audio").setAttribute("src", `${animal._sonido}`);
					clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal._nombre;
					fragment.appendChild(clone);
					animalesTabla.appendChild(fragment);
					audio(e);
				});
				break;
			case "Lobo":
				arrayAnimal.push(new Lobo(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`));

				arrayAnimal.map((animal) => {
					const clone = animalesTemplate.cloneNode(true);
					clone.querySelector(".card-img-top").setAttribute("src", `${animal._img}`);
					clone.querySelector(".card-img-top").setAttribute("alt", `${animal._nombre}`);
					clone.querySelector(".animal_card_audio").setAttribute("src", `${animal._sonido}`);
					clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal._nombre;
					fragment.appendChild(clone);
					animalesTabla.appendChild(fragment);
					audio(e);
				});
				break;
			case "Oso":
				arrayAnimal.push(new Oso(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`));

				arrayAnimal.map((animal) => {
					const clone = animalesTemplate.cloneNode(true);
					clone.querySelector(".card-img-top").setAttribute("src", `${animal._img}`);
					clone.querySelector(".card-img-top").setAttribute("alt", `${animal._nombre}`);
					clone.querySelector(".animal_card_audio").setAttribute("src", `${animal._sonido}`);
					clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal._nombre;
					fragment.appendChild(clone);
					animalesTabla.appendChild(fragment);
					audio(e);
				});
				break;
			case "Serpiente":
				arrayAnimal.push(new Serpiente(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`));

				arrayAnimal.map((animal) => {
					const clone = animalesTemplate.cloneNode(true);
					clone.querySelector(".card-img-top").setAttribute("src", `${animal._img}`);
					clone.querySelector(".card-img-top").setAttribute("alt", `${animal._nombre}`);
					clone.querySelector(".animal_card_audio").setAttribute("src", `${animal._sonido}`);
					clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal._nombre;
					fragment.appendChild(clone);
					animalesTabla.appendChild(fragment);
					audio(e);
				});
				break;
			case "Aguila":
				arrayAnimal.push(new Aguila(`${animalx.value}`, `${edad.value}`, `/assets/imgs/${instanceImage}`, `${comentarios.value}`, `/assets/sounds/${instanceSound}`));

				arrayAnimal.map((animal) => {
					const clone = animalesTemplate.cloneNode(true);
					clone.querySelector(".card-img-top").setAttribute("src", `${animal._img}`);
					clone.querySelector(".card-img-top").setAttribute("alt", `${animal._nombre}`);
					clone.querySelector(".animal_card_audio").setAttribute("src", `${animal._sonido}`);
					clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal._nombre;
					fragment.appendChild(clone);
					animalesTabla.appendChild(fragment);
					audio(e);
				});
				break;

			default:
				break;
		}
		
document.addEventListener("click", (e) => {
	console.log(e.target.dataset);
});

const animal_card_audio = document.getElementById("animal_card_audio");

const audioOn = document.querySelector(".animal_sound_div .animal_sound_on_icon");
const audioOff = document.querySelector(".animal_sound_div .animal_sound_off_icon");
// Card Audio Functions.
// audioOff.addEventListener("click", audio);
// audioOn.addEventListener("click", audio);

// Working audio function before using template.
function audio(e) {
	if (e.target.title === "on") {
		console.log(e.target.title);
		animal_card_audio.play();
		document.querySelector(".animal_sound_off_icon").classList.remove("d-none");
		document.querySelector(".animal_sound_on_icon").classList.add("d-none");
	} else if (e.target.title === "off") {
		animal_card_audio.pause();
		document.querySelector(".animal_sound_on_icon").classList.remove("d-none");
		document.querySelector(".animal_sound_off_icon").classList.add("d-none");
	}
}
