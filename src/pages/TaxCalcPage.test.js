import React from 'react';
import { render, screen } from '../test.utils';
import { TaxCalcPage } from './TaxCalcPage'

describe('Given the TaxtCalpage' , () => {
  describe('when the page is rendered', () =>{
    render(<TaxCalcPage />)
    test('then render CarFormComponent ', () => {
        expect(screen.getByText(/Fecha de Primera Matriculación/i)).toBeInTheDocument()
    })

  });
});

