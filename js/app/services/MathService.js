function MathService() {
  this.sum = function(numArray) {
    return numArray.reduce(function(a,b){
      return a + b;
    });
  };
}

angular
  .module('app')
  .service('MathService', MathService);
