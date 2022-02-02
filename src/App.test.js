import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';


describe ('Given the App component', () => {
  test('render the App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calcula tu coche/i);
  expect(linkElement).toBeInTheDocument();
});
})

