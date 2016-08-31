(function(){
	//Clousere o entorno donde estamos desarrollando
	//funcion recursiva, se habla a si misma
	var gem = { 
		name: 'Azurite', 
		price: 2.95, 
		description:'Lorem ipsum dolor sit amet',
		canPurchase: false,
		soldOut: true
	};

	var gems = [
		{name: 'Azurite', 
		price: 2.95,
		images:[
		{id:0, url: 'img/gem-01.gif'}, //url estamos agregando el objeto de imagen
		{id:1, url: 'img/gem-02.gif'},
		{id:2, url: 'img/gem-03.gif'}
		]
		},
		{name: 'Bloodstone', 
		price: 5.95,
		images:[
		{id:0 ,url: 'img/gem-04.gif'}, 
		{id:1 ,url: 'img/gem-05.gif'},
		{id:2, url: 'img/gem-06.gif'}
		]
		},
		{name: 'Zircon', 
		price: 3.95,
		images:[
		{id:0, url: 'img/gem-07.gif'}, 
		{id:1, url: 'img/gem-08.gif'},
		{id:2, url: 'img/gem-09.gif'}
		]
		},
	]; //arreglo de objetos
	var app = angular.module('gemStore', []); //modulo

	app.controller('StoreController', function(){ //controlador del modulo
		this.products = gems;
	});
})();

//examen
//directives- HTML que hacen anotaciones en js
//modules
//controllers
//expressions