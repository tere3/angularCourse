(function(){
	//funcion recursiva, se habla a si misma
	var gem = { 
		name: 'Azurite', 
		price: 2.95, 
		description:'Lorem ipsum dolor sit amet'};
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});
})();

