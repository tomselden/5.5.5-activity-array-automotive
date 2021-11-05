import { Vehicle } from "./vehicleBaseClass.js";

const VehicleModule = require("./vehicleBaseClass")

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    // if passenger less than maximumPassengers availableRoom == true
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
            } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

    // if fuel is greater than 0, then start == true
    start() {
        if (this.fuel > 0) {            
            console.log("Your engine has started.");

        } else {
            console.log("Your fuel tank is empty.");
            return this.started = false;

        }
    }

    // if mileage is greater than 30000, time for maintenance == true
    scheduleService(mileage) {
        if (this.mileage > 30000) {            
            this.scheduleService == true
            console.log("Your vehicle needs maintenance.")
            return this.scheduleService;                       
        }
    }

}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)