import React from 'react';
import Form from 'react-bootstrap/Form'
import { brands, fuel, sampleModels } from '../../services/data'
 // import {getCars} from '../../services/cars.services'

export function CarForm() {

  const handleChange = (evt) => console.log(typeof evt.target.value )

  return (
   <div className='CarForm-container'>

      <Form className='car-form'>
         <Form.Group className="car-form-item" >
           <Form.Label>Fecha de Primera Matriculación</Form.Label>
            <Form.Control
                className= "car-form-item"
                type="date"
                format="dd/MM/yyyy"
                placeholder='Fecha de primera matriculación'
                value="12/01/2022"
                onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="car-form-item" >
          <Form.Label>Marca</Form.Label>
            <Form.Select className= "car-form-item__select" >
              {brands.map((brand => (
                <option key={brand} value={brand}>{brand}</option>
              )))}
            </Form.Select>
      </Form.Group>

      <Form.Group className="car-form-item" >
          <Form.Label>Combustible</Form.Label>
            <Form.Select className= "car-form-item__select" >
                   {fuel.map((fuelitem) => (
                <option key={fuelitem.value} value={fuelitem.value}>{fuelitem.label}</option>
              ))}
            </Form.Select>
      </Form.Group>

       <Form.Group className="car-form-item" >
          <Form.Label>Modelo</Form.Label>
            <Form.Select className= "car-form-item__select" >
                {sampleModels.map((model => (
                <option key={model} value={model}>{model}</option>
              )))}
            </Form.Select>
      </Form.Group>

      </Form>
  </div>);
}
