/*
A estas alturas ya has aprendido a enviar acciones al 
almacén de Redux, pero hasta ahora estas acciones no 
contenían más información que un tipo. También puedes 
enviar datos específicos junto con tus acciones. De hecho, 
esto es muy común porque las acciones normalmente se 
originan de alguna interacción del usuario y tienden a 
llevar algunos datos con ellas. El almacén Redux a menudo 
necesita conocer estos datos.

Hay un creador de acciones básicas notesReducer() y 
addNoteText() definidas en el editor de código. Termina 
el cuerpo de la función addNoteText() para que devuelva 
un objeto de acción. El objeto debe incluir una propiedad 
de tipo con un valor de ADD_NOTE, y también una propiedad 
de texto establecida a los datos de la nota que se pasa 
al creador de la acción. Cuando llames al creador de la 
acción, pasarás la información específica de la nota a la 
que puedes acceder para el objeto.

A continuación, termina de escribir la sentencia switch 
en el notesReducer(). Necesitas añadir un caso que maneje 
las acciones addNoteText(). Este caso debe ser disparado 
siempre que haya una acción de tipo ADD_NOTE y debe 
devolver la propiedad text en la acción entrante como el 
nuevo estado.

La acción se despacha al final del código. Una vez que 
hayas terminado, ejecuta el código y observa la consola. 
Eso es todo lo que se necesita para enviar datos 
específicos de la acción a la tienda y utilizarlos cuando 
se actualiza el estado de la tienda.
*/

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
  case ADD_NOTE:
    return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
return {
    type: ADD_NOTE,
    text: note
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());