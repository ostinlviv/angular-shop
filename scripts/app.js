var shopApp = angular.module('shopApp', ["ngRoute"]);
shopApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      controller: 'HomeController',
      templateUrl: 'Partials/Home.html'
    })
    .when('/add',
    {
      controller: 'HomeController',
      templateUrl: 'Partials/Add.html'
    })
    .when('/product/:id/:name',
    {
      controller: 'HomeController',
      templateUrl: 'Partials/ProductPage.html'
    })
    .when('/cart',
    {
      controller: 'HomeController',
      templateUrl: 'Partials/MyOrders.html'
    })
    .otherwise({ redirectTo: '/'});
});
shopApp.factory('shopFactory', function() {

  var products = [
    { id: 0, name: 'Label1', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 1, name: 'Label2', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 2, name: 'Label3', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 3, name: 'Label4', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 4, name: 'Label5', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 5, name: 'Label6', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 6, name: 'Label7', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 7, name: 'Label8', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 8, name: 'Label9', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' },
    { id: 9, name: 'Label10', image: 'https://placeimg.com/180/180/any', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue finibus mauris, faucibus condimentum augue cursus eu. Vivamus eget arcu vel orci sollicitudin molestie vel nec urna. Aenean dolor libero, aliquet ut tempor at, lobortis sit amet est. Aliquam erat volutpat. Suspendisse ut quam imperdiet, fringilla dui vel, fermentum augue. Vivamus feugiat rutrum placerat. Donec eu scelerisque augue.' }
  ];
  var soldProducts = [];
  var selectedProduct = {};
  var factory = {};

  factory.getProducts = function() {
    return products;
  };
  factory.getSoldProducts = function() {
    return soldProducts;
  };
  factory.getSelectedProduct = function() {
    return selectedProduct;
  };
  factory.addProduct = function(name, image, description) {
    products.push(
      {
        id: products.length,
        name: name,
        image: image,
        description: description
      }
    );
  };
  factory.buyProduct = function (id) {
      for (var i = 0; i < products.length; i++) {
          if (products[i].id === id) {
              soldProducts.push(products[i]);
          }
      }
      return null;
  };
  factory.getProduct = function (id) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                return products[i];
            }
        }
        return null;
  };
  factory.removeProduct = function (id) {
      for (var i = soldProducts.length - 1; i >= 0; i--) {
          if (soldProducts[i].id === id) {
              soldProducts.splice(i, 1);
              break;
          }
      }
  };
  return factory;
});
shopApp.controller('HomeController', function ($scope, $routeParams, $location, shopFactory) {
  $scope.name = $routeParams.name;
  $scope.id = $routeParams.id;
  $scope.image = $routeParams.image;
  $scope.description = $routeParams.description;
  $scope.products = [];
  $scope.soldProducts = [];
  $scope.selectedProduct = {};

    init();
  function init() {
    $scope.products = shopFactory.getProducts();
    $scope.soldProducts = shopFactory.getSoldProducts();
    var productID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    if (productID >= 0) {
        $scope.selectedProduct = shopFactory.getProduct(productID);
    }
  }
  $scope.addProduct = function () {
    shopFactory.addProduct($scope.newProduct.name, $scope.newProduct.image, $scope.newProduct.description);
    alert('Your product has been successfully added');
    $location.path('/');
  };
  $scope.buyProduct = function () {
      var productID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
      if (productID >= 0) {
          $scope.buyProduct = shopFactory.buyProduct(productID);
      }
      alert('You have succesfully bought this product!');
      $location.path('/');
  };
  $scope.removeProduct = function (id) {
      shopFactory.removeProduct(id);
  };
});