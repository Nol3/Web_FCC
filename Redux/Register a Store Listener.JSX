/*
Otro método al que tienes acceso en el objeto Redux store es 
store.subscribe(). Esto te permite suscribir funciones de 
escucha al almacén, que son llamadas cada vez que una acción 
es enviada contra el almacén. Un uso sencillo de este método 
es suscribir una función a tu almacén que simplemente registre 
un mensaje cada vez que se reciba una acción y se actualice el 
almacén.

Escribe una función de devolución de llamada que incremente la 
cuenta de la variable global cada vez que el almacén reciba una 
acción, y pasa esta función al método store.subscribe(). Verás 
que store.dispatch() es llamado tres veces seguidas, cada vez 
pasando directamente un objeto de acción. Observa la salida de 
la consola entre los envíos de acciones para ver cómo se producen 
las actualizaciones.
*/
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const addOne = () => (count += 1);
store.subscribe(addOne);

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);