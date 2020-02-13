let Vehicle ={
    CarName: 'RAV4',
    CarBrand: 'Toyota',
    CarColor: 'White',

   CarDescription:  function() { return (Vehicle.CarName + ' is of brand '+ Vehicle.CarBrand + ' and has color ' + Vehicle.CarColor) } 
}

console.log(Vehicle.CarDescription());
    