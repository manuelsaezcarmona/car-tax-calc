import React from 'react';
import { render, screen, fireEvent } from '../../test.utils';
import {CarForm } from './CarForm'


describe('Given the CarForm component', () =>{
  describe('When the Marca Group is Render', () => {

    test('then may change to another Brand', () => {
      render(<CarForm />);

      const option = screen.getByRole('option', {name: 'Alfa Romeo'});
      fireEvent.change(option, { target: { value: 'BMW' } })

//      console.log(option.value)
      expect(option.value).toBe('BMW');

    });

  })
})

