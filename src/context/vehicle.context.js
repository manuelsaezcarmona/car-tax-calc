import { createContext,useState } from "react";
import PropTypes from 'prop-types';

export const VehicleContext = createContext({
      vehicle: {},
      setCar: () =>{}

  });


  export function VehicleContextProvider({children}){
   const [vehicle, setvehicle] = useState({});

   const setCar = (cars, modelo) => {
      const car = cars.filter( car => car.model === modelo)[0];
      console.log(car);
      const tempCar = {...car,
        yearTax: +car.period.slice(0, 4),
        labelfuel: setFuelLabel(car.fuel)
      }
      console.log(tempCar);
      const table = createAmortizationTable(tempCar);
      const finalCar = {...tempCar, amortable: table};
      setvehicle(finalCar)
   }

    const context = {
      vehicle,
      setCar
    }
    return (<VehicleContext.Provider value={context}>{children}</VehicleContext.Provider>);
  }

  VehicleContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};


/** helpers functions for the Vehicle context */

function createAmortizationTable(car){
  const amortizationTable = [];
  let amortyear = car.yearTax;
  let value = +car.value;
  for (let i=100; i >= 10; i -= 10){
    let yearvalue = currency(Math.round(value * i / 100));
    const year = {
        year: amortyear,
        valueTaxYear:  yearvalue,
        coeficiente: i
    }
    amortizationTable.push(year);
    amortyear++;

  }
  return amortizationTable;
}


function currency(number){
    return new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'EUR', minimumFractionDigits: 2}).format(number);
}

function setFuelLabel(fuel){
  switch (fuel) {
    case 'D':
      return 'Diesel'
    case 'Elc':
      return 'Electrico'
    case 'G':
      return 'Gasolina'
    case 'S':
      return 'Super'
    case 'DyE':
      return 'Hibrido Diesel'
    case 'GyE':
      return 'Hibrido Gasolina'
    default:
      break;
  }
}
