const Dealership = require("./Dealership");
const Car = require("./Car");

describe("Dealership", () => {
    let dealership;

    beforeEach(() => {
        dealership = new Dealership("SuperWheels", 50);
    });

    //      COUNT NUMBER OF CARS IN STOCK 
    test("can count number of cars in stock", () => {
        expect(dealership.countStock()).toBe(0);

        
    });

    //      ADD CAR TO STOCK
    test("can add car to stock", () => {
        const car = new Car("Toyota", 30000, "Gasoline");
        dealership.addCarToStock(car);
        expect(dealership.countStock()).toBe(1);
    });

    //      RETURN AN ARRAY OF CAR'S MANUFACTURER
    test("can return an array of car's manufacturer", () => {
        const car1 = new Car("Toyota", 30000, "Gasoline");
        const car2 = new Car("Ford", 22000, "Hybrid");

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);

        expect(dealership.getManufacturer()).toEqual(["Toyota", "Ford"]);

    //      SHOW CARES FROM GIVEN MANUFACTURER
        const toyotaCars = dealership.findCarsByManufacturer("Toyota");
        expect(toyotaCars.length).toBe(1);
        expect(toyotaCars[0].manufacturer).toBe("Toyota")
    });

    //      TOTAL VALUE OF CARS IN STOCK
    test("can get the total value of cars in stock", () => {
        const car1 = new Car("Toyota", 30000, "Gasoline");
        const car2 = new Car("Ford", 22000, "Hybrid");

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);
        
        expect(dealership.totalValue()).toBe(52000);
    });
        
});

