import {VehicleContextProvider} from './vehicle.context';
import {sampleCars, sampleVehicle} from '../services/data'

const mockDispatch = jest.fn();


jest
  .mock('react', () =>({
  ...jest.requireActual('react'),
  useState: () => [{}, mockDispatch]
  }))



describe(' Given the Vehicle context file', () => {
  describe('Given the VehicleContext Provider', () => {

    test('Llamando al metodo setCar', () => {

      const testCarsdata = sampleCars.cars;
      const modelo = 'i3 120 Ah (I01)';
      const {setCar} = VehicleContextProvider();
      setCar(testCarsdata, modelo);
     // console.log(setCar);
      expect(mockDispatch).toBeCalledTimes(1)

    })
  })

})
