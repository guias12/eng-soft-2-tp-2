class CarRentalService {
  constructor() {
    this.cars = [];
  }

  // Adiciona um carro à frota
  addCar(model, make, year) {
    if (!model || !make || !year) {
      throw new Error("Model, make and year are required.");
    }
    const car = { model, make, year, rented: false };
    this.cars.push(car);
  }

  // Retorna todos os carros da frota
  getCars() {
    return this.cars;
  }

  // Aluga um carro
  rentCar(model) {
    const car = this.cars.find((car) => car.model === model);
    if (!car) {
      throw new Error(`Car '${model}' not found.`);
    }
    if (car.rented) {
      throw new Error(`Car '${model}' is already rented.`);
    }
    car.rented = true;
    return car;
  }

  // Devolve um carro alugado
  returnCar(model) {
    const car = this.cars.find((car) => car.model === model);
    if (!car) {
      throw new Error(`Car '${model}' not found.`);
    }
    if (!car.rented) {
      throw new Error(`Car '${model}' was not rented.`);
    }
    car.rented = false;
    return car;
  }
}

module.exports = CarRentalService;
