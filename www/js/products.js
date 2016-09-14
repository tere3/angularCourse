(function(){
	var app = angular.module('store-products', []);

	app.directive('productTitle', function(){ //creamos directiva
		return{
			 restrict: 'E', //se crea un elemento dentro de la directiva
			//restrict: 'A', //se crea un atributo
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){ //creamos directiva
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){ //asiganmos valor ala variable que inicializamos
					this.tab = setTab;
				}

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		};
	});

	app.directive('reviewsSubmit', function(){ //creamos directiva
		return{
			restrict: 'E',
			templateUrl: 'reviews-submit.html',
			controller: function(){
				this.review={};

				this.addReview = function(product){
					product.reviews.push(this.review); //esto se llena con la funcion de mi controlador
					this.review ={};
				}
			},
			controllerAs: 'reviewCtrl'
		};
	});

})();