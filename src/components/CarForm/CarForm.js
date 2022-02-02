import React from 'react';
import Form from 'react-bootstrap/Form'

export function CarForm() {
  return (
  <div className='CarForm-container'>
      <Form className='car-form'>
         <Form.Group className="car-form-item" >
           <Form.Label>Fecha de Primera Matriculación</Form.Label>
            <Form.Control className= "car-form-item" type="date" placeholder='Fecha de primera matriculación'/>
        </Form.Group>
        <Form.Group className="car-form-item" >
          <Form.Label>Marca</Form.Label>
            <Form.Select className= "car-form-item__select" >
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Dacia">Dacia</option>
                <option value="Hyundai">Hyundai</option>
            </Form.Select>
      </Form.Group>
      <Form.Group className="car-form-item" >
          <Form.Label>Marca</Form.Label>
            <Form.Select className= "car-form-item__select" >
                <option value="D">Diesel</option>
                <option value="Elc">Electrico</option>
                <option value="G">Gasolina</option>
                <option value="S">Super</option>
                <option value="DyE">Hibrido Diesel</option>
                <option value="GyE">Hibrido Gasolina</option>
            </Form.Select>
      </Form.Group>
       <Form.Group className="car-form-item" >
          <Form.Label>Modelo</Form.Label>
            <Form.Select className= "car-form-item__select" >
                <option value="D">GIULIA 2.2 Diesel Aut. 8V 150l</option>
                <option value="Elc">GIULIA 2.2 Diesel Super 6V 180</option>
                <option value="G">GIULIA 2.2 Diesel Veloce Q4 Aut. 8V 210</option>
                <option value="S">GIULIETTA 1.6 JTD Super / JTDm SS 6V 120</option>
                <option value="DyE">Giuliietta 1.6 JTD 120CV B-TECH</option>
                <option value="GyE">Giuliietta 1.6 JTD 120CV SPORT</option>
            </Form.Select>
      </Form.Group>

      </Form>
  </div>);
}
