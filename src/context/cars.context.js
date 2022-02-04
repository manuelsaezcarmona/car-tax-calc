import {createContext, useState} from 'react'
import PropTypes from 'prop-types';



export const CarsContext = createContext({
  cars: []
})
/*
cars: [],
  vehicle: null,
  models: [],
  year: null,
  assessmentTable: null,
  cogeCars: () => {},
  setVehicle: () => {} */

export function CarsContextProvider({children}) {
  // eslint-disable-next-line no-unused-vars
  const [cars, setCars] = useState([]);
  const context = { cars }
  return (<CarsContext.Provider value={context}>{children}</CarsContext.Provider>);
}

CarsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
