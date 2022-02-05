import {createContext, useState} from 'react'
import PropTypes from 'prop-types';
import {getCars} from '../services/cars.services'



export const CarsContext = createContext({
  cars: [],
  updateCarts: () =>{},
  models: []
})

export function CarsContextProvider({children}) {

  const [cars, setCars] = useState([]);

  const [models, setModels] = useState([]);

  const updateCarts =  async (brand, enrollmentDate, fuel) => {
    const carsUpdated = await getCars(brand, enrollmentDate, fuel);
    const modelsUpdated = carsUpdated.cars.map(car => car.model)
      setCars(carsUpdated.cars);
      setModels(modelsUpdated);
  }

  const context = { cars, updateCarts, models }
  return (<CarsContext.Provider value={context}>{children}</CarsContext.Provider>);
}

CarsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
