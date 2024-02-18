"use strict";
//Q45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, modelName, ...options) {
    let car = {
        manufacturer,
        modelName,
    };
    for (let option of options) {
        Object.assign(car, option);
    }
    return car;
}
let carInfo = storeCarInfo('Toyota', 'Camry', { color: 'Blue', hasSunroof: true });
console.log(carInfo);
