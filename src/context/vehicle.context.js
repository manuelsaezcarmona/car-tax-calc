import { createContext } from "react";
import PropTypes from 'prop-types';

export const VehicleContext = createContext();


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
  },
  year: null,
  assessmentTable: null,
  setVehicle: () => {} */

  export function VehicleContextProvider({children}){


    const context = {}
    return (<VehicleContext.Provider value={context}>{children}</VehicleContext.Provider>);
  }

  VehicleContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
