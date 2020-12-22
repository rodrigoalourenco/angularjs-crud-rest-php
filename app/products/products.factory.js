app.factory("productsFactory", function($http){

    var urlBase = 'http://localhost/angularjs-crud-rest-php/api/product/'
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: urlBase + 'read.php'
        });
    };
     
    // createProduct will be here
    // create product
    factory.createProduct = function($scope){
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: urlBase + 'create.php'
        });
    };
     
    // readOneProduct will be here
    // read one product
    factory.readOneProduct = function(id){
        return $http({
            method: 'GET',
            url: urlBase + 'read_one.php?id=' + id
        });
    };
     
    // updateProduct will be here
    // update product
    factory.updateProduct = function($scope){
     
        return $http({
            method: 'POST',
            data: {
                'id' : $scope.id,
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: urlBase + 'update.php'
        });
    };
     
    // deleteProduct will be here
    // delete product
    factory.deleteProduct = function(id){
        return $http({
            method: 'POST',
            data: { 'id' : id },
            url: urlBase +'delete.php'
        });
    };
     
    // searchProducts will be here
    // search all products
    factory.searchProducts = function(keywords){
        return $http({
            method: 'GET',
            url: urlBase + 'search.php?s=' + keywords
        });
    };
     
    return factory;
});
