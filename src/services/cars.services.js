


export async function getCars( brand, enrollmentDate, fuel) {
  try{
    const baseURL = "https://api-sandbox.swipoo.com/itp/cars"
    const formatDate = enrollmentDate.replace(/-/g, '%2F')
    const queryString = `/?brand=${brand}&enrollmentDate=${formatDate}&fuel=${fuel}`
    const result = await fetch(baseURL+queryString)
    const data = await result.json()
   // console.log(data);
    return data;

  }catch(error){
    console.log(`error en getCards: error.name ${error.name} : error.message  ${error.message}`)
    return error.name;
  }

}




/* error en getCards: 2020%2F10%2F10
        error.name SyntaxError
        error.message  Unexpected token < in JSON at position 0
        El text devuelve SyntaxError */


/* RESULT en para test
    {
      "cars": [{
            "brand": "BMW",
            "cc": null,
            "cv": "286",
            "cvf": null,
            "cylinders": null,
            "fuel": "Elc",
            "kw": "210",
            "model": "iX3 80 kWh",
            "period": "2020-",
            "value": "60000"
          }, {
            "brand": "BMW",
            "cc": null,
            "cv": "170",
            "cvf": null,
            "cylinders": null,
            "fuel": "Elc",
            "kw": "125",
            "model": "i3 120 Ah (I01)",
            "period": "2019-",
            "value": "32500"
          }, {
            "brand": "BMW",
            "cc": null,
            "cv": "184",
            "cvf": null,
            "cylinders": null,
            "fuel": "Elc",
            "kw": "135",
            "model": "i3
            s 120 Ah(I01)
            ", "
            period ": "
            2019 - ", "
            value ": "
            35500 "}]} */
