
import React, {useContext} from 'react';
import { Table } from 'react-bootstrap';
import { VehicleContext } from '../../context/vehicle.context'

export  function CarTaxValue() {

  const { vehicle } = useContext(VehicleContext);

  return (

  <div className='car-taxes-info'>
    {vehicle.amortable !== undefined

    ?

    <Table striped className='car-general-info__table table-bordered border-secondary'>
      <thead className='table-success'>
              <tr>
                <th className=" "colSpan="2">Valoración venal</th>
              </tr>
      </thead>
       <tbody>
          {vehicle.amortable.map( item => (

        <tr key={item.year+'_cuote'}>
                  <td  className='car-taxes-info__year'>Año {item.year} - {item.coeficiente}%</td>
                  <td  className='car-taxes-info__value'>{item.valueTaxYear}</td>
          </tr>

            ))}
       </tbody>

    </Table>
    : <p className='alert alert-warning text-center'>Elige un Coche para saber su amortizacion</p>
   }
  </div>
  );
}
