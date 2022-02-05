import React, { useContext, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import { brands, fuels } from '../../services/data'
import {CarsContext} from '../../context/cars.context'


export function CarForm() {
  const {cars, updateCarts, models} = useContext(CarsContext);
  const [modelForm, setmodelForm] = useState('');
  const [formQuery, setformQuery] = useState( {
      brand:'' , enrollmentDate:'', fuel:''
  });

  const handleChangeModel = (evt) => {
    evt.preventDefault()
    setmodelForm(evt.target.value)
     const carArr = cars.filter( car => car.model === evt.target.value);

    console.log(carArr)
  }


  const handleChange = (evt) => {
    evt.preventDefault();
    setformQuery({...formQuery, [evt.target.name]: evt.target.value});
    console.log(evt.target.value)
  }

  useEffect( () => {
    // Comprobamos que todos los campos de consulta se encuentren llenos
    //para llamar a la API
    if(!Object.values(formQuery).some(value => value ==='')){
        const { brand, enrollmentDate, fuel} = formQuery;
        // Aqui ya tenemos que tirar de contexto en cuento lo implementemos.
        updateCarts(brand, enrollmentDate, fuel)
    }
  }, [formQuery]);


  return (

   <div className='CarForm-container'>

    {console.log(modelForm)}
        <Form.Group className="car-form-item" >
          <Form.Label>Marca</Form.Label>
            <Form.Select name="brand"
                onChange={handleChange}
                className= "car-form-item__select" >
              {brands.map((brand => (
                <option  key={brand} value={brand}>{brand}</option>
              )))}
            </Form.Select>
      </Form.Group>


     <Form className='car-form'>
         <Form.Group className="car-form-item" >
           <Form.Label>Fecha de Primera Matriculación</Form.Label>
            <Form.Control
                className= "car-form-item"
                name="enrollmentDate"
                type="date"
                placeholder='Fecha de primera matriculación'
                value={formQuery.enrollmentDate}
                onChange={handleChange}/>
        </Form.Group>

      <Form.Group className="car-form-item" >
          <Form.Label>Combustible</Form.Label>
            <Form.Select name="fuel" onChange={handleChange} className= "car-form-item__select" >
                   {fuels.map((fuelitem) => (
                <option key={fuelitem.value} value={fuelitem.value} >{fuelitem.label}</option>
              ))}
            </Form.Select>
      </Form.Group>

       <Form.Group className="car-form-item" >
          <Form.Label>Modelo</Form.Label>
            <Form.Select name="model" onChange={handleChangeModel} className= "car-form-item__select" >

              {models.length
                ? models.map((model => (<option key={model} value={model}>{model}</option>)))
                : <option key="model-empty" value="empty">Rellena los campos</option>
              }
            </Form.Select>
      </Form.Group>

      </Form>
  </div>);
}
