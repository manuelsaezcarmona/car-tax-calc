import React from 'react';
import { render, screen } from '../../test.utils';
import {CarForm } from './CarForm'

describe('Given the CarForm component', () =>{
  describe('When the Marca Group is Render', () => {

    test('then componente render', () => {
      render(<CarForm />);

      const element = screen.getByTestId('marca');
      console.log(element)
      expect(element).toBeInTheDocument();

    });

  })
})
