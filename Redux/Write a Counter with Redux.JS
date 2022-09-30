/* 
Ahora has aprendido todos los principios básicos 
de Redux. Has visto cómo crear acciones y 
creadores de acciones, crear un almacén Redux, 
despachar tus acciones contra el almacén, y 
diseñar actualizaciones de estado con reductores 
puros. Incluso has visto cómo gestionar estados 
complejos con la composición de reductores y 
manejar acciones asíncronas. Estos ejemplos son 
simplistas, pero estos conceptos son los 
principios básicos de Redux. Si los entiendes 
bien, estás listo para empezar a construir tu 
propia aplicación Redux. Los próximos desafíos 
cubren algunos de los detalles relacionados con 
la inmutabilidad del estado, pero primero, aquí 
hay un repaso de todo lo que has aprendido hasta 
ahora.

En esta lección, implementarás un simple contador 
con Redux desde cero. Los fundamentos se proporcionan 
en el editor de código, pero tendrás que completar los 
detalles. Utiliza los nombres que se proporcionan y 
define los creadores de acción incAction y decAction, 
el contadorReducer(), los tipos de acción INCREMENT y DECREMENT, 
y finalmente el almacén Redux. Una vez que hayas terminado 
deberías ser capaz de enviar acciones INCREMENT o DECREMENT 
para incrementar o decrementar el estado mantenido en el almacén. 
¡Buena suerte construyendo tu primera aplicación Redux!*/

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

// define an action creator for incrementing
const incAction = () => {
  return {
    type: INCREMENT
  };
};


// define an action creator for decrementing
const decAction = () => {
  return {
    type: DECREMENT
  };
};

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);