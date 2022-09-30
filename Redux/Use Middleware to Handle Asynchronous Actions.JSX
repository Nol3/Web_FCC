/*
Hasta ahora estos retos han evitado discutir las acciones 
asíncronas, pero son una parte inevitable del desarrollo 
web. En algún momento necesitarás llamar a endpoints 
asíncronos en tu aplicación Redux, así que ¿cómo manejar 
este tipo de peticiones? Redux proporciona un middleware 
diseñado específicamente para este propósito, llamado 
Redux Thunk middleware. Aquí hay una breve descripción de 
cómo usarlo con Redux.

Para incluir el middleware Redux Thunk, lo pasas como 
argumento a Redux.applyMiddleware(). Esta declaración se 
proporciona entonces como un segundo parámetro opcional a 
la función createStore(). Echa un vistazo al código en la 
parte inferior del editor para ver esto. Entonces, para 
crear una acción asíncrona, devuelves una función en el 
creador de la acción que toma dispatch como argumento. 
Dentro de esta función, puedes despachar acciones y 
realizar peticiones asíncronas.

En este ejemplo, se simula una petición asíncrona con una 
llamada a setTimeout(). Es común despachar una acción 
antes de iniciar cualquier comportamiento asíncrono para 
que el estado de tu aplicación sepa que se están 
solicitando algunos datos (este estado podría mostrar un 
icono de carga, por ejemplo). Luego, una vez que recibes 
los datos, envías otra acción que lleva los datos como 
carga útil junto con la información de que la acción se 
ha completado.

Recuerda que estás pasando el envío como un parámetro a 
este creador de acción especial. Esto es lo que usarás 
para despachar tus acciones, simplemente pasas la acción 
directamente a dispatch y el middleware se encarga del 
resto.

Escribe ambos despachos en el creador de acciones 
handleAsync(). Despacha requestingData() antes de 
setTimeout() (la llamada simulada a la API). Luego, 
después de recibir los datos (simulados), despacha la 
acción receivedData(), pasando estos datos. Ahora ya 
sabes cómo manejar las acciones asíncronas en Redux. Todo 
lo demás sigue comportándose como antes.
*/

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
    dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);