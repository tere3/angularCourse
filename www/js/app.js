(function(){
	//Clousere o entorno donde estamos desarrollando
	//funcion recursiva, se habla a si misma
	//var gem = { 
	//	name: 'Azurite', 
	//	price: 2.95, 
	//	description:'Lorem ipsum dolor sit amet',
	//	canPurchase: false,
	//	soldOut: true
	//};
	var app = angular.module('gemStore', ['store-products']); //modulo

	app.controller('StoreController', ['$htpp', '$log' ,function($htpp, $log){ //controlador del modulo
		var store =this;

		store.products = []; //inicializamos la variable

		$http.get('/products.json').success(function(data){//regresa una promesa
			store.products = data; //guarda los datos
		}) 
	}]);

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