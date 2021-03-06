
import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';

import {CarsContextProvider} from './context/cars.context'
import {VehicleContextProvider} from './context/vehicle.context'

function render(component) {


  function Wrapper({ children }) {
    const { getProvider: CarsProvider } = CarsContextProvider()
    const {getVehicleProvider: VehicleProvider }= VehicleContextProvider();

    return (

        <CarsProvider>
          <VehicleProvider >
             {children}
          </VehicleProvider>
        </CarsProvider>
 );
  }

  Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

  return rtlRender(component, { wrapper: Wrapper });

}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };



