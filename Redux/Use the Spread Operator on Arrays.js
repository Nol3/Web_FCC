/*
Una solución de ES6 para ayudar a reforzar la inmutabilidad del 
estado en Redux es el operador de propagación: .... El operador 
spread tiene una variedad de aplicaciones, una de las cuales es 
muy adecuada para el desafío anterior de producir un nuevo array 
a partir de un array existente. Esta es una sintaxis 
relativamente nueva, pero de uso común. Por ejemplo, si tienes 
un array miArray y escribes

let nuevoArray = [...miArray];

newArray es ahora un clon de myArray. Ambas matrices siguen 
existiendo por separado en la memoria. Si realizas una mutación 
como newArray.push(5), miArray no cambia. La mutación ... 
efectivamente distribuye los valores de miMatriz en una nueva 
matriz. Para clonar un array pero añadir valores adicionales en 
el nuevo array, podrías escribir [...miArray, 'nuevo valor'].
Esto devolvería un nuevo array compuesto por los valores de 
miMatriz y la cadena nuevo valor como último valor. La sintaxis 
de propagación se puede utilizar varias veces en la composición 
de matrices como esta, pero es importante tener en cuenta que 
sólo hace una copia superficial de la matriz. Es decir, sólo 
proporciona operaciones de array inmutables para arrays 
unidimensionales.

Utiliza el operador spread para devolver una nueva copia del 
estado cuando se añade una tarea.
 */

const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        let arr = [...state, action.todo];
        return arr
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);