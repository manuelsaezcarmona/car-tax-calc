import { createContext,useState } from "react";
import PropTypes from 'prop-types';

export const VehicleContext = createContext({
      vehicle: {},
      setCar: () =>{}

  });


/*
  vehicle: {
      brand: "Marca",
      model: "Modelo",
      period: "2015-2020",
      cc: "Cilindrada",
      cylinders: "Cilindros",
      fuel: "Combustivle",
      kw: "Potencia (kW)",
      cvf: "Potencia Fiscal",
      cv: "Potencia (CV)",
      value: "Valor"
      amortTable: [{year: 2019, value: 28.500 €}]
      yearTax:
  }
  */


  export function VehicleContextProvider({children}){
   const [vehicle, setvehicle] = useState({});

   const setCar = (cars, modelo) => {
      const car = cars.filter( car => car.model === modelo)[0];
      const tempCar = {...car, yearTax: +car.period.slice(0, 4)}
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
    let yearvalue = Math.round(value * i / 100);
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
