/*
es lo que se utiliza para enviar acciones al almacén 
de Redux. Llamar a store.dispatch() y pasar el valor 
devuelto por un creador de acciones envía una acción 
de vuelta al almacén.

Recuerda que los creadores de acciones devuelven un 
objeto con una propiedad de tipo que especifica la 
acción que se ha producido. Entonces el método envía 
un objeto de acción al almacén Redux. Basándonos en 
el ejemplo del reto anterior, las siguientes líneas 
son equivalentes, y ambas despachan la acción de 
tipo LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

*/

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  
  store.dispatch(loginAction());