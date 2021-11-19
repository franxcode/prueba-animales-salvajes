import Animal from "./animal.js";

class Leon extends Animal {
	static contadorLeon;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idLeon = ++Leon.contadorLeon;
	}
	Rugir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Lobo extends Animal {
	static contadorLobo;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idLobo = ++Lobo.contadorLobo;
	}
	Aullar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Oso extends Animal {
	static contadorOso;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idOso = ++Oso.contadorOso;
	}
	Grunir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Serpiente extends Animal {
	static contadorSerpiente;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idSerpiente = ++Serpiente.contadorSerpiente;
	}
	Sisear() {
		console.log(`La ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Aguila extends Animal {
	static contadorAguila;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idAguila = ++Aguila.contadorAguila;
	}
	Chillar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
