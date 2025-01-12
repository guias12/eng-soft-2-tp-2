const CarRentalService = require("./carRentalService");

describe("CarRentalService", () => {
  let service;

  beforeEach(() => {
    service = new CarRentalService();
  });

  test("should add a car to the fleet", () => {
    service.addCar("Model S", "Tesla", 2023);
    const cars = service.getCars();
    expect(cars.length).toBe(1);
    expect(cars[0].model).toBe("Model S");
    expect(cars[0].make).toBe("Tesla");
    expect(cars[0].year).toBe(2023);
    expect(cars[0].rented).toBe(false);
  });

  test("should throw error if car details are missing", () => {
    expect(() => {
      service.addCar("", "Tesla", 2023);
    }).toThrow("Model, make and year are required.");
    expect(() => {
      service.addCar("Model S", "", 2023);
    }).toThrow("Model, make and year are required.");
    expect(() => {
      service.addCar("Model S", "Tesla", null);
    }).toThrow("Model, make and year are required.");
  });

  test("should rent a car", () => {
    service.addCar("Model S", "Tesla", 2023);
    const car = service.rentCar("Model S");
    expect(car.rented).toBe(true);
  });

  test("should throw error if car is already rented", () => {
    service.addCar("Model S", "Tesla", 2023);
    service.rentCar("Model S");
    expect(() => {
      service.rentCar("Model S");
    }).toThrow("Car 'Model S' is already rented.");
  });

  test("should return a rented car", () => {
    service.addCar("Model S", "Tesla", 2023);
    service.rentCar("Model S");
    const car = service.returnCar("Model S");
    expect(car.rented).toBe(false);
  });

  test("should throw error if car was not rented", () => {
    service.addCar("Model S", "Tesla", 2023);
    expect(() => {
      service.returnCar("Model S");
    }).toThrow("Car 'Model S' was not rented.");
  });

  test("should get all cars in the fleet", () => {
    service.addCar("Model S", "Tesla", 2023);
    service.addCar("Mustang", "Ford", 2022);
    const cars = service.getCars();
    expect(cars.length).toBe(2);
    expect(cars[0].model).toBe("Model S");
    expect(cars[1].model).toBe("Mustang");
  });
});
