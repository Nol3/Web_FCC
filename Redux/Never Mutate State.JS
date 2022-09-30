/*
Estos desafíos finales describen varios métodos para hacer 
cumplir el principio clave de la inmutabilidad del estado en 
Redux. Estado inmutable significa que nunca se modifica el 
estado directamente, en su lugar, se devuelve una nueva copia 
del estado.

Si se toma una instantánea del estado de una aplicación Redux a 
lo largo del tiempo, se vería algo como estado 1, estado 2, 
estado 3, estado 4, ... y así sucesivamente, donde cada estado 
puede ser similar al anterior, pero cada uno es una pieza 
distinta de datos. Esta inmutabilidad, de hecho, es lo que 
proporciona características tales como la depuración de viajes 
en el tiempo que usted puede haber oído hablar.

Redux no impone activamente la inmutabilidad del estado en su 
almacén o reductores, esa responsabilidad recae en el programador. 
Afortunadamente, JavaScript (especialmente ES6) proporciona 
varias herramientas útiles que puedes utilizar para reforzar 
la inmutabilidad de tu estado, ya sea una cadena, un número, 
una matriz o un objeto. Tenga en cuenta que las cadenas y los 
números son valores primitivos y son inmutables por naturaleza. 
En otras palabras, 3 es siempre 3. No puedes cambiar el valor 
del número 3. Un array o un objeto, sin embargo, son mutables. 
En la práctica, tu estado probablemente consistirá en un array o 
un objeto, ya que son estructuras de datos útiles para 
representar muchos tipos de información.

Hay un almacén y un reductor en el editor de código para 
gestionar los elementos de las tareas pendientes. Termina de 
escribir el caso ADD_TO_DO en el reductor para añadir una nueva 
tarea al estado. Hay algunas maneras de lograr esto con 
JavaScript estándar o ES6. Mira si puedes encontrar una forma de 
devolver un nuevo array con el elemento de action.todo añadido 
al final.
 */

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      //.push() .concat() .slice() [...array]
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);