import React from 'react';
import { Table } from 'react-bootstrap';

export function CarInfo() {
  return (
      <div className='car-general-info'>
          <Table className='car-general-info__table table-bordered border-secondary'>
            <thead className='table-secondary'>
              <tr>
              <th className=" "colSpan="2">Datos del Vehiculo</th>

              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className='car-general-info__label'>Marca</td>
                  <td className='car-general-info__data'>BMW</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Modelo</td>
                  <td className='car-general-info__data'>X1 sDrive16d</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Cilindrada</td>
                  <td className='car-general-info__data'>1496</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Cilindros</td>
                  <td className='car-general-info__data'>3</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Combustible</td>
                  <td className='car-general-info__data'>Diesel</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Potencia(Kw)</td>
                  <td className='car-general-info__data'>85</td>
                </tr>

                 <tr>
                  <td className='car-general-info__label'>Potencia Fiscal</td>
                  <td className='car-general-info__data'>9,97</td>
                </tr>
                <tr>
                  <td className='car-general-info__label'>Potencia(CV)</td>
                  <td className='car-general-info__data'>116</td>
                </tr>
            </tbody>
          </Table>
      </div>
      );
}
