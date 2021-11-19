import Animal from "./animal.js";

class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Rugir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
		// return this._sonido.Play();
	}
}
class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Aullar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Grunir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sisear() {
		console.log(`La ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Chillar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
