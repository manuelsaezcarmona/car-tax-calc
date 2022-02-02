import React from 'react';
import { Table } from 'react-bootstrap';

export  function CarTaxValue() {
  return (

  <div className='car-taxes-info'>
    <Table striped className='car-general-info__table table-bordered border-secondary'>
      <thead className='table-success'>
              <tr>
                <th className=" "colSpan="2">Valoración venal</th>
              </tr>
      </thead>
       <tbody>
           <tr>
                  <td className='car-taxes-info__year'>Valoracion BOE - 2019</td>
                  <td className='car-taxes-info__value'>28.500 €</td>
          </tr>
           <tr>
                  <td className='car-taxes-info__year'>Año 2020</td>
                  <td className='car-taxes-info__value'>26.650 €</td>
          </tr>
          <tr>
                  <td className='car-taxes-info__year'>Año 2021</td>
                  <td className='car-taxes-info__value'>22.800 €</td>
          </tr>
          <tr>
                  <td className='car-taxes-info__year'>Año 2022</td>
                  <td className='car-taxes-info__value'>19.950 €</td>
          </tr>
          <tr>
                  <td className='car-taxes-info__year'>Año 2023</td>
                  <td className='car-taxes-info__value'>17.100 €</td>
          </tr>
          <tr>
                  <td className='car-taxes-info__year'>Año 2024</td>
                  <td className='car-taxes-info__value'>14.250 €</td>
          </tr>
       </tbody>
    </Table>

  </div>
  );
}
