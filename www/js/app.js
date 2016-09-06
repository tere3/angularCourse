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
		],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cum magni est ratione nemo sed voluptatem, incidunt, quisquam repellat quas magnam aliquid animi facere cupiditate, molestiae! Facilis quasi alias eos.',
		reviews:[
		{stars: 4, body: 'I love this product', author:'teremendezr@hotmail.com'},
		{stars: 2, body:'This product sucks', author: 'teremendezr@hotmail.com'}
		]
		},
		{name: 'Bloodstone', 
		price: 5.95,
		images:[
		{id:0 ,url: 'img/gem-04.gif'}, 
		{id:1 ,url: 'img/gem-05.gif'},
		{id:2, url: 'img/gem-06.gif'}
		],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus porro omnis aliquid, atque magnam non voluptates facilis officiis nam delectus beatae quod, illum ullam, unde quae. Quae et, vero corrupti!',
		reviews:[ 
		{stars: 4, body: 'I love this product', author:'teremendezr@hotmail.com'},
		{stars: 2, body:'This product sucks', author: 'teremendezr@hotmail.com'}
			]
		},
		{name: 'Zircon', 
		price: 3.95,
		images:[
		{id:0, url: 'img/gem-07.gif'}, 
		{id:1, url: 'img/gem-08.gif'},
		{id:2, url: 'img/gem-09.gif'}
		],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis id eligendi assumenda, cumque optio veniam eos perferendis molestias explicabo odit. Libero, suscipit. Quae praesentium tempore minima quod tempora odio cumque.',
		reviews:[
		{stars: 4, body: 'I love this product', author:'teremendezr@hotmail.com'},
		{stars: 2, body:'This product sucks', author: 'teremendezr@hotmail.com'}
			]
		},
	]; //arreglo de objetos
	var app = angular.module('gemStore', []); //modulo

	app.controller('StoreController', function(){ //controlador del modulo
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){ //asiganmos valor ala variable que inicializamos
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	//controlador que maneja la parte del formulario del review
	app.controller('ReviewsController', function(){
		this.review={};

		this.addReview = function(product){
			product.reviews.push(this.review); //esto se llena con la funcion de mi controlador
			this.review ={};
		}
	});
})();

//examen
//directives- HTML que hacen anotaciones en js
//modules
//controllers
//expressions