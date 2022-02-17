import {VehicleContextProvider, setFuelLabel, createAmortizationTable} from './vehicle.context';
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
  describe('Given the helpers functions context', () => {
    test('the setFuelLabel return Fuel Name', () => {
      // const name = setFuelLabel('D');
      expect(setFuelLabel('D')).toBe('Diesel');
      expect(setFuelLabel('Elc')).toBe('Electrico');
      expect(setFuelLabel('G')).toBe('Gasolina');
      expect(setFuelLabel('S')).toBe('Super');
      expect(setFuelLabel('DyE')).toBe('Hibrido Diesel');
      expect(setFuelLabel('GyE')).toBe('Hibrido Gasolina');
    })
    test('the CreateMortizationTable Create a table', () =>{
      const sampleCar = {
          brand: "BMW",
          model: "i3 120 Ah (I01)",
          period: "2019-",
          cc: null,
          cylinders: null,
          fuel: "Elc",
          kw: "125",
          cvf: null,
          cv: "170",
          value: "32500",
          yearTax: 2019,
          labelfuel: "Electrico"
    }
    const table = createAmortizationTable(sampleCar)

    expect(table.length).toBe(10);

  })
  })
})
