import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
// import { Children, useContext } from 'react';
import { getCars } from '../services/cars.services';
import {CarsContextProvider} from './cars.context'


// Mockeo de funcion. 1 Mockeo todas las funciones del archivo
// con la desectructuracion copiamos todo, y con requireActual
// nos traemos todas las funciones del archivo que tenga el export.
// CON EL FUNCIONAMIENTO NORMAL
// como es un objeto podemos llamar a la funcion que nos interese
// para sobreescribir el comportamiento que nos henos traido con el require.
// como tiene el comportamiento normal . lo mockeamos con jest.fn()
const mockDispatch = jest.fn();

jest
  .mock('../services/cars.services', () => ({
    ...jest.requireActual('../services/cars.services'),
    getCars: jest.fn()
  }))
  .mock('react', () => ({
    ...jest.requireActual('react'),
    useState: () => [{}, mockDispatch]
  }))





describe ('given the Cars Context', () => {



  test('debe realizar la accion de actulizar la lista coches', async () => {
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

    const { updateCarts } = CarsContextProvider()

    await updateCarts("audi", "2008-10-30", "G")
  // el metodo waitFor sirvce para cuando tenemos una funcion asincrona
  // Se espere a que se termine de ejecutar esta funcion , en este caso getCars
  // await waitFor(()=> expect(getCars).toBeCalledTimes(1))
    expect(getCars).toBeCalledTimes(1)
    expect(getCars).toBeCalledWith("audi", "2008-10-30", "G")

    expect(mockDispatch).toBeCalledTimes(2)
    // console.log(mockDispatch.mock.calls[0][0][0]);
    expect(mockDispatch.mock.calls[0][0][0]).toStrictEqual({
        brand: 'Audi',
        model: 'Allroad Quattro 2.7 TDI Tiptronic DPF',
        period: '2008-',
        cc: '2698',
        cylinders: '6',
        fuel: 'D',
        kw: '140',
        cvf: '18,75',
        cv: '190',
        value: '45000'
      })
      expect(mockDispatch.mock.calls[0][0].length).toBe(1)
      // console.log(mockDispatch.mock.calls[1][0][0]);
      expect(mockDispatch.mock.calls[1][0][0]).toBe('Allroad Quattro 2.7 TDI Tiptronic DPF')
  })

  // test( 'El contexto presenta valores iniciales', () => {

  // })


/* https://falecci.dev/es/unit-testing-react-hooks/ */


  // test( 'Debde llamar a Update Cars en el context set cars Models', () => {
  //     const data = {cars:[
  //      {
  //     "brand": "Audi",
  //     "model": "Allroad Quattro 2.7 TDI Tiptronic DPF",
  //     "period": "2008-",
  //     "cc": "2698",
  //     "cylinders": "6",
  //     "fuel": "D",
  //     "kw": "140",
  //     "cvf": "18,75",
  //     "cv": "190",
  //     "value": "45000"
  //   }
  //   ]}


  //   console.log(CarsContextProvider.propTypes.children);

  // })

})
