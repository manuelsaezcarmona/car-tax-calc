const { getCars } = require('./cars.services');

// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ cars: { CAD: 1.42 } })
  })
);


describe ('given de getCars function', () => {
 beforeEach( () =>{
  fetch.mockClear();

 })
  test('should first', async () => {

    // const base = "https://api-sandbox.swipoo.com/itp/cars"
    const result = await getCars('marca', 'fecha', 'fuel');
    console.log("RESULTADO: "+ result)

    expect(result).toBeTruthy;
  });


})
