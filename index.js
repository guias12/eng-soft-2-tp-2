const CarRentalService = require("./src/carRentalService");

const service = new CarRentalService();

console.log("Adicionando carros iniciais a frota...");
service.addCar("Model S", "Tesla", 2023);
service.addCar("Mustang", "Ford", 2022);

console.log("Frota atual:\n", service.getCars());

console.log("\nAlugando o carro Model S...");
const rentedCar = service.rentCar("Model S");
console.log("Carro alugado:", rentedCar);

console.log("\nTentando alugar o Model S de novo...");
try {
  service.rentCar("Model S");
} catch (e) {
  console.log("Erro:", e.message);
}

console.log("\nDevolvendo o Model S...");
const returnedCar = service.returnCar("Model S");
console.log("Carro devolvido:", returnedCar);

console.log("\nFrota final:", service.getCars());
