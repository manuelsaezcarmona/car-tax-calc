
import { Container } from 'react-bootstrap';
import './App.css';
import {TaxCalcPage} from './pages/TaxCalcPage'
import { CarsContextProvider } from './context/cars.context'
import { VehicleContextProvider } from './context/vehicle.context'

function App() {
  const { getProvider: CarsProvider } = CarsContextProvider()

  return (
    <CarsProvider>
      <VehicleContextProvider>
        <Container fluid>
          <header className="App-header">
            <h1>Calcula tu coche</h1>
            <p>
              Averigua tu cuadro de valor Venal
            </p>

          </header>
          <TaxCalcPage />
        </Container>
      </VehicleContextProvider>
    </CarsProvider>
  );
}

export default App;
