// const {getCars} = require('./cars.services')
import { getCars } from '../services/cars.services'



beforeEach(() => {
  fetch.resetMocks();
});

  test('Call to the api will response ', async () => {
    fetch.mockResponseOnce(JSON.stringify({ cars: [{ brand: "BMV" }] }));
    const result = await getCars('BMW', '2020%2F10%2F10', 'Elc');
     expect(result.cars).toHaveLength(1);
  });

  test('Call to the api will reject ', async () => {
    fetch.mockReject(() => "esto falla")
    const result = await getCars('BMW', '2020%2F10%2F10', 'Elc');

    expect (result).toBe('TypeError');
  })




