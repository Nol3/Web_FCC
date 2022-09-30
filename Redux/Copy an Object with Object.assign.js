/*
Los últimos desafíos trabajaron con arrays, pero hay formas de 
ayudar a reforzar la inmutabilidad del estado cuando éste es un 
objeto, también. Una herramienta útil para manejar objetos es la 
utilidad Object.assign(). Object.assign() toma un objeto de 
destino y objetos de origen y asigna las propiedades de los 
objetos de origen al objeto de destino. Todas las propiedades 
que coinciden son sobrescritas por las propiedades de los 
objetos fuente. Este comportamiento se utiliza comúnmente para 
hacer copias superficiales de objetos, pasando un objeto vacío 
como primer argumento seguido del objeto(s) que se desea copiar. 
He aquí un ejemplo:

const newObject = Object.assign({}, obj1, obj2);

Esto crea newObject como un nuevo objeto, que contiene las 
propiedades que existen actualmente en obj1 y obj2.

El estado y las acciones de Redux fueron modificados para 
manejar un objeto para el estado. Editar el código para 
devolver un nuevo objeto de estado para las acciones con el 
tipo ONLINE, que establece la propiedad de estado a la cadena 
en línea. Intenta utilizar Object.assign() para completar el reto.
 */

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        // Don't mutate state here or the tests will fail
        const object = Object.assign({}, state, { status: "online" });
        return object;
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);