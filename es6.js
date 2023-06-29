// //ES6 Implementation
class Vehicle {
    constructor(engine, speed) {
        this.engine = engine;
        this.speed = speed;
    }

    info() {
        console.log(`Engine info: ${this.engine}`);
        console.log(`Speed info: ${this.speed}`);
    }

    static isTesla(car) {
        return car.brake === true;
    }
}

class Car extends Vehicle {
    constructor(engine, speed, wheels, brake) {
        super(engine, speed);
        this.wheels = wheels;
        this.brake = brake;
    }

    honk() {
        console.log('Honk!');
    }

    info(){
        super.info();
        console.log(`Wheels info: ${this.wheels}`);
        console.log(`Brake info: ${this.brake}`);
    }

}

const car1 = new Car('honda', '315kmph', '4', true);
const car2 = new Car('ferrari', '290kmph', '4', false);

//test
car1.info();
car1.honk();
car2.info();
car2.honk();
console.log("Car 1 is Tesla: " + Vehicle.isTesla(car1));
console.log("Car 2 is Tesla: " + Vehicle.isTesla(car2));

