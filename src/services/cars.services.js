


export async function getCars( brand, enrollmentDate, fuel) {
  try{
    const baseURL = "https://api-sandbox.swipoo.com/itp/cars"
    const queryString = `/?brand=${brand}&enrollmentDate=${enrollmentDate}&fuel=${fuel}`
    const result = await fetch(baseURL+queryString)
    const data = await result.json()
    console.log(data);
    return data;

  }catch(error){
    console.error(`error en getCards: ${error.name} : ${error.message}`)
  }

}




