import React, {useContext} from 'react';
import { Table } from 'react-bootstrap';
import { VehicleContext } from '../../context/vehicle.context'


export function CarInfo() {

 const { vehicle } = useContext(VehicleContext);

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
                  <td className='car-general-info__data'>{vehicle.brand}</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Modelo</td>
                  <td className='car-general-info__data'>{vehicle.model}</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Cilindrada</td>
                  <td className='car-general-info__data'>{vehicle.cc}</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Cilindros</td>
                  <td className='car-general-info__data'>{vehicle.cylinders}</td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Combustible</td>
                  <td className='car-general-info__data'>{vehicle.labelfuel}
                  </td>
                </tr>
                  <tr>
                  <td className='car-general-info__label'>Potencia(Kw)</td>
                  <td className='car-general-info__data'>{vehicle.kw}</td>
                </tr>

                 <tr>
                  <td className='car-general-info__label'>Potencia Fiscal</td>
                  <td className='car-general-info__data'>{vehicle.cvf}</td>
                </tr>
                <tr>
                  <td className='car-general-info__label'>Potencia(CV)</td>
                  <td className='car-general-info__data'>{vehicle.cv}</td>
                </tr>
            </tbody>
          </Table>
      </div>
      );
}
