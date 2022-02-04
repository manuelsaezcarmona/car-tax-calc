import {createContext} from 'react'



export const CarsContext = createContext({
  cars: [],
  vehicle: {}
})



export default function CarsContextProvider() {
  return <div></div>;
}
