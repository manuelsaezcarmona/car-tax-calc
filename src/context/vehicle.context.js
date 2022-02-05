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
      assessmentTable: [{year: 2019, value: 28.500 €}]
      yearTax:
  }
  */


  export function VehicleContextProvider({children}){
   const [vehicle, setvehicle] = useState({});

   const setCar = (cars, modelo) => {
      const car = cars.filter( car => car.model === modelo)[0];
      setvehicle(car)
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

