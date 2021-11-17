export default class Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		this._nombre = nombre;
		this._edad = edad;
		this._img = img;
		this._comentarios = comentarios;
		this._sonido = sonido;
	}
	get nombre() {
		return this._nombre;
	}
	get edad() {
		return this._edad;
	}
	get img() {
		return this._img;
	}
	set comentarios(comentarios) {
		this._comentarios = comentarios;
	}
	get sonido() {
		return this._sonido;
	}
}

export class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Rugir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
export class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Aullar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
export class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Grunir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
export class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sisear() {
		console.log(`La ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
export class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Chillar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
