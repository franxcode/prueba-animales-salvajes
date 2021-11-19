// Selecciono Animal.
// Agarro foto preview y la despliego en pantalla.
// Ingreso manualmente los anos del animal y los comentarios.
// Luego empujo esos valores a la pantalla de animales en investigacion.
// Se quedan alineadas las imagenes en la pantalla de animales en investigacion y cuando les hago click despliegan un modal.
// Import classes.
import Animal, { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

const url = "animales.json";
// JSON data retrieval and formatting + Loading.
(async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		addAnimalToRegister(data);
		getAnimalImagePreview(data);
		// addAnimal(data);
	} catch (error) {
		console.log(error);
	} finally {
		// Add loading logic here.
	}
})();

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
		document.getElementById("preview").setAttribute("class", "mx-auto mb-5");

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
		addAnimalToRegister(animales);
	});
};

// Animal Register.
const addAnimalToRegister = (animales) => {
	const btnRegistrar = document.getElementById("btnRegistrar");
	const animalesTabla = document.getElementById("animalesTabla");
	const animal = document.getElementById("animal");
	const arrayAnimales = [];
	// (nombre, edad, img, comentarios, sonido)
	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		if (animales.name === "Leon") {
			arrayAnimales.push(new Leon(`${animales.name}`, 20, "hola", "hola", "hola"));
			clearSelect();
			console.log(arrayAnimales);
		}
		if (animales.name === "Lobo") {
			arrayAnimales.push(new Lobo(`${animales.name}`, 15, "lobo", "lobo", "lobo"));
			console.log(arrayAnimales);
		}
	});
};

// function addAnimal(data) {
// 	const animalArray = [];
// 	const values = Object.values(data.animales);
// 	const animales = values.find((item) => item.name === animal.value);

// 	animalArray.push(new Leon(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`));
// 	const clone = animalesTemplate.cloneNode(true);
// 	clone.querySelector(".card-img-top").setAttribute("src", `/assets/imgs/${animales.imagen}`);
// 	clone.querySelector(".card-img-top").setAttribute("alt", `${animal.value}`);
// 	clone.querySelector(".animal_card_audio").setAttribute("src", `/assets/sounds/${animales.sonido}`);
// 	clone.querySelector(".animal_sound_on_icon").dataset.nombre = animal.value;
// 	fragment.appendChild(clone);
// 	arr(animalArray);
// 	animalesTabla.appendChild(fragment);

// 	if (animal.value === "Lobo") {
// 		animalArray.push(new Lobo(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`));
// 		const clone = animalesTemplate.cloneNode(true);
// 		clone.querySelector(".card-img-top").setAttribute("src", `/assets/imgs/${animales.imagen}`);
// 		clone.querySelector(".card-img-top").setAttribute("alt", `${animal.value}`);
// 		clone.querySelector(".animal_card_audio").setAttribute("src", `/assets/sounds/${animales.sonido}`);
// 		clone.querySelector(".animal_card_audio").dataset.nombre = animal.value;
// 		fragment.appendChild(clone);
// 		console.log(animalArray);
// 	}
// 	if (animal.value === "Oso") {
// 		animalArray.push(new Oso(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`));
// 		const clone = animalesTemplate.cloneNode(true);
// 		clone.querySelector(".card-img-top").setAttribute("src", `/assets/imgs/${animales.imagen}`);
// 		clone.querySelector(".card-img-top").setAttribute("alt", `${animal.value}`);
// 		clone.querySelector(".animal_card_audio").setAttribute("src", `/assets/sounds/${animales.sonido}`);
// 		clone.querySelector(".animal_card_audio").dataset.nombre = animal.value;
// 		fragment.appendChild(clone);
// 	}
// 	if (animal.value === "Serpiente") {
// 		animalArray.push(new Serpiente(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`));
// 		const clone = animalesTemplate.cloneNode(true);
// 		clone.querySelector(".card-img-top").setAttribute("src", `/assets/imgs/${animales.imagen}`);
// 		clone.querySelector(".card-img-top").setAttribute("alt", `${animal.value}`);
// 		clone.querySelector(".animal_card_audio").setAttribute("src", `/assets/sounds/${animales.sonido}`);
// 		clone.querySelector(".animal_card_audio").dataset.nombre = animal.value;
// 		fragment.appendChild(clone);
// 	}
// 	if (animal.value === "Aguila") {
// 		animalArray.push(new Aguila(`${animal.value}`, `${edad.value}`, `/assets/imgs/${animales.imagen}`, `${comentarios.value}`, `/assets/sounds/${animales.sonido}`));
// 		const clone = animalesTemplate.cloneNode(true);
// 		clone.querySelector(".card-img-top").setAttribute("src", `/assets/imgs/${animales.imagen}`);
// 		clone.querySelector(".card-img-top").setAttribute("alt", `${animal.value}`);
// 		clone.querySelector(".animal_card_audio").setAttribute("src", `/assets/sounds/${animales.sonido}`);
// 		clone.querySelector(".animal_card_audio").dataset.nombre = animal.value;
// 		fragment.appendChild(clone);
// 	}
// });
// }
document.addEventListener("click", (e) => {
	console.log(e.target);
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
