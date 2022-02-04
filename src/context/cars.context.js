import {createContext, useState} from 'react'
import PropTypes from 'prop-types';
import {getCars} from '../services/cars.services'



export const CarsContext = createContext({
  cars: [],
  updateCarts: () =>{}
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

  const updateCarts =  async (brand, enrollmentDate, fuel) => {
    const carsUpdated = await getCars(brand, enrollmentDate, fuel);
      setCars(carsUpdated);
  }

  const context = { cars, updateCarts }
  return (<CarsContext.Provider value={context}>{children}</CarsContext.Provider>);
}

CarsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
