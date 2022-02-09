import { render } from '@testing-library/react';
import { Children, useContext } from 'react';
import { getCars } from '../services/cars.services';
import {APIcars, CarsContextProvider} from './cars.context'


// Mockeo de funcion. 1 Mockeo todas las funciones del archivo
// con la desectructuracion copiamos todo, y con requireActual
// nos traemos todas las funciones del archivo que tenga el export.
// CON EL FUNCIONAMIENTO NORMAL
// como es un objeto podemos llamar a la funcion que nos interese
// para sobreescribir el comportamiento que nos henos traido con el require.
// como tiene el comportamiento normal . lo mockeamos con jest.fn()
const mockDispatch = jest.fn();

jest.mock('../services/cars.services', () => ({
  ...jest.requireActual('../services/cars.services'),
  getCars: jest.fn()
}))
   .mock('react', () => ({
     ...jest.requireActual('react'),
     useState: () => [{}, mockDispatch]
   }))


// Para testear el contexto debemos de mockear el state


// getCars = jest.fn(); // Mockeada la funcion

describe ('given the Cars Context', () => {


  test ('Llamar a APICARS', async () => {

    getCars.mockReturnValue({cars:[
       {
      "brand": "Audi",
      "model": "Allroad Quattro 2.7 TDI Tiptronic DPF",
      "period": "2008-",
      "cc": "2698",
      "cylinders": "6",
      "fuel": "D",
      "kw": "140",
      "cvf": "18,75",
      "cv": "190",
      "value": "45000"
    }
    ]})

    const {carsUpdated, modelsUpdated } = await APIcars("audi", "2008-10-30", "G");
    expect(carsUpdated.cars.length).toBe(1);
    expect(carsUpdated.cars).toEqual([ {
      "brand": "Audi",
      "model": "Allroad Quattro 2.7 TDI Tiptronic DPF",
      "period": "2008-",
      "cc": "2698",
      "cylinders": "6",
      "fuel": "D",
      "kw": "140",
      "cvf": "18,75",
      "cv": "190",
      "value": "45000"
    }])
    expect(modelsUpdated).toEqual(['Allroad Quattro 2.7 TDI Tiptronic DPF']);
  })


  test( 'Debde llamar a set cars Models', () => {

  })

})
