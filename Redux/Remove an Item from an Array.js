/*
Es hora de practicar la eliminación de elementos de un array. 
Aquí también se puede utilizar el operador spread. Otros métodos 
útiles de JavaScript son slice() y concat().

El reductor y el creador de la acción fueron modificados para 
remover un ítem de un arreglo basado en el índice del ítem. 
Termina de escribir el reductor para que se devuelva un nuevo 
array de estado con el elemento en el índice específico eliminado.
 */

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here or the tests will fail
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1, state.length)
        ];
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);