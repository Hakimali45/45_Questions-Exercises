/*
Write a function that stores information about a car in an Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function carDetails (manufacturer: string, modelName: string, ...additionalInformation){

    const car = {manufacturer, modelName, ...Object.fromEntries(additionalInformation)};
    return car;
};

const myCarDetails = carDetails("Tesla", "Model X", ['color', 'Black'], ['year', 2015]);

console.log(myCarDetails);