import React from 'react';
import { CarForm } from '../components/CarForm/CarForm';
import { CarInfo } from '../components/CarInfo/CarInfo';
import { CarTaxValue } from '../components/CarTaxValue/CarTaxValue';




export function TaxCalcPage() {
  return (

      <>
        <CarForm />
        <CarInfo />
        <CarTaxValue />
      </>





    );
}


