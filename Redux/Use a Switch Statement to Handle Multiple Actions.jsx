/*
Puedes decirle a la tienda Redux cómo manejar múltiples tipos de 
acción. Digamos que estás gestionando la autenticación de usuarios 
en tu tienda Redux. Quieres tener una representación de estado 
para cuando los usuarios están conectados y cuando están 
desconectados. Representas esto con un único objeto de estado con 
la propiedad authenticated. También necesitas creadores de acciones 
que creen acciones correspondientes al inicio y al cierre de sesión
 de los usuarios, junto con los propios objetos de acción.

El editor de código tiene un almacén, acciones y creadores de 
acciones configurados para ti. Rellena la función reductora para 
manejar múltiples acciones de autenticación. Utiliza una 
declaración de conmutación de JavaScript en el reductor para 
responder a diferentes eventos de acción. Este es un patrón 
estándar para escribir reductores Redux. La sentencia switch 
debería cambiar sobre action.type y devolver el estado de 
autenticación apropiado.

Nota: En este punto, no te preocupes por la inmutabilidad del 
estado, ya que es pequeño y simple en este ejemplo. Para cada 
acción, puedes devolver un nuevo objeto - por ejemplo, 
{autenticado: true}. Además, no olvides escribir un caso por 
defecto en tu sentencia switch que devuelva el estado actual. 
Esto es importante porque una vez que tu aplicación tiene 
múltiples reductores, todos ellos se ejecutan cada vez que se 
realiza un envío de acción, incluso cuando la acción no está 
relacionada con ese reductor. En este caso, debes asegurarte de 
que devuelves el estado actual.
*/

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };
  
      case "LOGOUT":
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };