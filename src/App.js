
import { Container } from 'react-bootstrap';
import './App.css';
import {TaxCalcPage} from './pages/TaxCalcPage'

function App() {
  return (
    <Container fluid>
      <header className="App-header">
        <h1>Calcula tu coche</h1>
        <p>
          Que todo <code>rula como tiene</code> que rular.
        </p>

      </header>
      <TaxCalcPage />
    </Container>
  );
}

export default App;
