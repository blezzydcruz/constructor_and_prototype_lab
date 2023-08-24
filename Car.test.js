const Car = require("./Car");

describe("Car", () => {
    let car;

    beforeEach(() => {
        car = new Car("Toyota", 30000, "Gasoline");
    });

    test("can access Car properties", () => {
        expect(car.manufacturer).toBe("Toyota");
        expect(car.price).toBe(30000);
        expect(car.engineType).toBe("Gasoline");
    });
});



