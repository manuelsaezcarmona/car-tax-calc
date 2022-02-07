# Calculadora de Valor Venal v 0.1

### Enunciado

Con la API y la documentación proporcionadas, cree una interfaz de usuario que permita a los usuarios comprobar la información de sus vehículos y su valor fiscal estándar, con la depreciación correspondiente en función de la fecha de matriculación. Por cada año transcurrido desde la fecha de matriculación, el vehículo recibe un 10% más de depreciación aplicada al valor estándar.

### Instalacion.

Ejecuta

### `npm start`

Ejecuta la aplicación en modo desarrollador
Open [http://localhost:3200](http://localhost:3200) para mirarlo en el navegador

Si quieres cambiar el puerto modifica el parametro PORT del fichero .env

### Keep in Mind

- La UI va a ser la expuesta.
- Uso la libreria react bootstrap para acelerar el proceso de diseño
- Uso contexto por simplicidad de no montar todo un redux

#### Proceso de recoleccion de informacion para mostrar el coche

- La marca se selecciona de un array de datos estaticos, si hay otra marca se añade al array.
- El fuel , proviene de otro array estatico.
- Se introduce mediante un input type=date la fecha de matriculacion
  Realizamos una peticion GET con los parametros query para que en el desplegable aparezcan los modelos filtrados.

Cuando se seleccione el modelo , realizara una segunda peticion para recoger la informacion del vehiculo

En el front se calcula el cuadro de valoracion venal del vehiculo.

#### Flujo

? Posible estado del formulario de entrada. Realizar una validacion de formulario.

1 - Se rellena la fecha - > Aqui puede haber un proceso de validacion y transformacion
de la fecha para adecuarla al formato de la queryString
2 - Se rellena el modelo que proviene de un array estatico en data
3 - Se rellena el combustible que proviene de un array estatico en data
4 - Cuando se rellenen estos tres datos , se debe de disparar una llamada a la API.
que recogerá todos los vehiculos en un array.

5 - Despues debe de rellenar el combo del modelo con la propiedad model del array del modelo
El evento OnChange se disparara cuando cambie el estado verificando que los tres campos
esten rellenados. (¿tambien podria usarse un useEffect)

6 - El form select de modelo no formara parte tendra otro handle que establecera otro estado
que será el vehiculo. que se pasará como prop (o en contexto o en redux) al componente CarInfo.
7 - Este vehiculo tendra una funcion helper que será la que hará calcular la valoracion venial
que será un array de objetos "amortizacion" con el año y con su valor

8 - En el componente Carform usamos el estado Cars, un array de los vehiculos
9 - En los componentes CarInfo y CartaxValue usamos el estado Vehicle, un objeto
con propiedades.

Cuando se eliga el modelo , debe de producirse un setState al vehicle para volver
a mostrar la nueva informacion, tambien que dispare el metodo de calcular el cuadro de amortizacion.

Hay tres datos importantes.

Va a formar parte del contexto
1 - El array de coches, que se obtenga a traves de la api o mediante la actualizcion del estado setCars
2? - El objeto coche. Sera necesario en el contexto porque lo va a usar el componente CarTaxValue para
calcular la amortizacion.
3 - La tabla de amortizacion, este es un objeto que se va a crear cuando se obtenga la informacion del coche

Datos:
Cars.- Array de objetos Vehicle
GetCars.- Cuando cambie algun parametro realizara un fetch al servidor y volvera
a realizar un update de Cars

Vehicle.- El vehiculo seleccionado por Modelo dentro del combo se asignara como estado.
El vehiculo sera una propiedad del contexto. Cuando cambie el modelo, cambiara el vehiculo.

El componente de amortizacion se calculara con un metodo.

Funciones.-
Update Cars.

### Notas.

Cuando pase la validacion que todo esta bien se pasaran los parametros a la query
para que devuelva los datos. de los coches

¿Hacer un state para model para que solo cambie los componentes CarInfo y CarTaxValue
El flujo es cuando cambie el valor del select modelo/vehicle  
haga un setState sobre vehiculo y renderice los componenntes CarInfo y

A) Cuando Haya rellenado los campos de consulta del CarForm tiene que hacer:

1. Hacer una peticion get para traerse los coches (getVehicles en contexto?)
   O puede hacer una peticion get y luego grabarlos en el contexto (setCars).
   Asi si se cambia de modelo no tiene que ir a ningun sitio a buscar. y solo
   se hace una peticion al servidor.
2. rellenar el select del CarForm con los modelos que se han traido de getCars.
   Seguramente primero habra que grabarlos en el contexto, (setmodels) y luego
   mediante un setState (o useEffect cuando cambie models) rellenar con las options del select.

B) Cuando se seleccione un modelo (coche) (setModel en el CarForm), tiene que:

1. Comprobar que en el contexto cars, no esta vacio
2. Guardar en el contexto el vehiculo seleccionado (setVehicle en contecxto con useState).

3. Guardar en el contexto el año (extraerlo mediante una funcion)
4. Renderizar el componente CarInfo (mediante los datos del contexto).
5. Renderizar el componente cuadro de amortizacion mediante un metodo setTaxValue.
   Cogiendo los datos de year y aplicando un porcentaje.

##### Calculo del valor venal

Sa va a tomar como año el valor de adquisicion.

### Testing

Uso React testing library

Para el contexto he modificado el test-utils.js para que
envuelva el contexto en todas las pruebas y no tener que estar
envolviendo cada componente

para testear el API que lo he realizado con fetch he usado la libreria jest-fetch-mock

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3200](http://localhost:3200) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
