const Car = require("./Car");

const Dealership = function(name, maximumStock) {
    this.name = name;
    this.maximumStock = maximumStock;
    this.currentStock = [];
};

//      COUNT NUMBER OF CARS IN STOCK
Dealership.prototype.countStock = function() {
    return this.currentStock.length;
};

//      ADD CAR TO STOCK
Dealership.prototype.addCarToStock = function(car) {
    if(this.currentStock.length < this.maximumStock)
    this.currentStock.push(car);
};

//     RETURN AN ARRAY OF CAR'S MANUFACTURER
Dealership.prototype.getManufacturer = function() {
    return this.currentStock.map(car => car.manufacturer); 
};

//       SHOW CARS FROM GIVEN MANUFACTURER
Dealership.prototype.findCarsByManufacturer = function(manufacturer) {
    return this.currentStock.filter(car => car.manufacturer == manufacturer); 
};

//      TOTAL VALUE OF CARS IN STOCK
Dealership.prototype.totalValue = function() {
    return this.currentStock.reduce((reducer, car) => reducer + car.price, 0);
};

module.exports = Dealership;