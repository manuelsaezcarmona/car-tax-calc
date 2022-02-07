// const {getCars} = require('./cars.services')
import { getCars } from '../services/cars.services'


  test('should first', async () => {


    const result = await getCars('BMW', '2020%2F10%2F10', 'Elc');
    console.log("RESULTADO: "+ result.cars)

     expect(result.cars).toHaveLength(4);
  });




