/*Cuando el estado de tu aplicación comienza a ser más 
complejo, puede ser tentador dividir el estado en 
múltiples piezas. En su lugar, recuerda el primer 
principio de Redux: todo el estado de la app se mantiene
en un único objeto de estado en el almacén. Por lo tanto, 
Redux proporciona la composición de reductores como una 
solución para un modelo de estado complejo. Se definen 
múltiples reductores para manejar diferentes partes del 
estado de la aplicación, y luego se componen estos 
reductores juntos en un reductor raíz. El reductor raíz 
se pasa al método Redux createStore().

Para permitirnos combinar múltiples reductores juntos, 
Redux proporciona el método combineReducers(). Este método
 acepta un objeto como argumento en el que se definen 
 propiedades que asocian claves a funciones específicas 
 de los reductores. El nombre que le des a las claves 
 será utilizado por Redux como el nombre de la pieza de 
 estado asociada.

Normalmente, es una buena práctica crear un reductor 
para cada pieza de estado de la aplicación cuando son 
distintas o únicas de alguna manera. Por ejemplo, en una 
aplicación de toma de notas con autenticación del usuario, 
un reductor podría manejar la autenticación mientras que 
otro maneja el texto y las notas que el usuario está 
enviando. Para una aplicación de este tipo, podríamos 
escribir el método combineReducers() así

const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});

Ahora, la clave notas contendrá todo el estado asociado 
a nuestras notas y manejado por nuestro notesReducer. 
Así es como se pueden componer múltiples reductores para 
gestionar un estado de aplicación más complejo. En este 
ejemplo, el estado mantenido en el almacén Redux sería 
entonces un único objeto que contiene las propiedades
 auth y notes.

Hay funciones counterReducer() y authReducer() proporcionadas en el editor de código, junto con un almacén Redux. Termina de escribir la función rootReducer() usando el método Redux.combineReducers(). Asigna counterReducer a una clave llamada count y authReducer a una clave llamada auth.
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

// Define the root reducer here
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})



const store = Redux.createStore(rootReducer);