export default class Animal {
<<<<<<< HEAD
	static contadorAnimal = 0;
=======
	static contadorAnimales = 0;

>>>>>>> 4c40327536846020f309c44b3e1a8a48d8c1e70f
	constructor(nombre, edad, img, comentarios, sonido) {
		this._nombre = nombre;
		this._edad = edad;
		this._img = img;
		this._comentarios = comentarios;
		this._sonido = sonido;
<<<<<<< HEAD
		this._idAnimal = ++Animal.contadorAnimal;
=======
		this._idAnimal = ++Animal.contadorAnimales;
>>>>>>> 4c40327536846020f309c44b3e1a8a48d8c1e70f
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
	get idAnimal() {
		return this._idAnimal;
<<<<<<< HEAD
=======
	}
}

class Leon extends Animal {
	static contadorLeon = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idLeon = ++Leon.contadorLeon;
	}
	get idLeon() {
		return this._idLeon;
	}
	Rugir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Lobo extends Animal {
	static contadorLobo = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idLobo = ++Lobo.contadorLobo;
	}
	Aullar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Oso extends Animal {
	static contadorOso = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idOso = ++Oso.contadorOso;
	}
	Grunir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Serpiente extends Animal {
	static contadorSerpiente = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idSerpiente = ++Serpiente.contadorSerpiente;
	}
	Sisear() {
		console.log(`La ${this._nombre} hace este sonido ${this._sonido}`);
	}
}
class Aguila extends Animal {
	static contadorAguila = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idAguila = ++Aguila.contadorAguila;
	}
	Chillar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
>>>>>>> 4c40327536846020f309c44b3e1a8a48d8c1e70f
	}
}
