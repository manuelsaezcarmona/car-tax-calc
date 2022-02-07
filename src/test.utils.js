/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';

// import { BrowserRouter as Router } from 'react-router-dom';
import {CarsContextProvider} from './context/cars.context'
import {VehicleContextProvider} from './context/vehicle.context'

function render(component) {

  function Wrapper({ children }) {
    return (

        <CarsContextProvider>
          <VehicleContextProvider >
             {children}
          </VehicleContextProvider>
        </CarsContextProvider>
 );
  }
  return rtlRender(component, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
