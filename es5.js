//ES5 Implementation

const Vehicle = function (engine, speed) {
    this.engine = engine;
    this.speed = speed;
};

Vehicle.prototype.info = function () {
    console.log(`Engine info: ${this.engine}`);
    console.log(`Speed info: ${this.speed}`);
};

Vehicle.prototype.isTesla = function (car) {
    return car.brake === true;
};



const Car = function(engine, speed, wheels, brake) {
    Vehicle.call(this, engine, speed);
    this.wheels = wheels;
    this.brake = brake;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
    console.log('Honk!');
};

Car.prototype.info = function () {
    Vehicle.prototype.info.call(this);
    console.log(`Wheels info: ${this.wheels}`);
    console.log(`Brake info: ${this.brake}`);
};

const car3 = new Car('mercedes', '320kmph', '4', true);
const car4 = new Car('renault', '300kmph', '4', false);

//test
car3.info();
car3.honk();
car4.info();
car4.honk();
console.log("Car 3 is Tesla: " + Vehicle.prototype.isTesla(car3));
console.log("Car 4 is Tesla: " + Vehicle.prototype.isTesla(car4));