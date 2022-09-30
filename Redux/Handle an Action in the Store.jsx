/*
Después de crear y enviar una acción, el almacén Redux
 necesita saber cómo responder a esa acción. Este es 
 el trabajo de una función reductora. Los reductores 
 en Redux son responsables de las modificaciones de 
 estado que tienen lugar en respuesta a las acciones. 
 Un reductor toma el estado y la acción como 
 argumentos, y siempre devuelve un nuevo estado. 
 Es importante ver que esta es la única función del 
 reductor. No tiene efectos secundarios - 
 nunca llama a un punto final de la API y nunca tiene 
 sorpresas ocultas. El reductor es simplemente una 
 función pura que toma el estado y la acción, y luego 
 devuelve el nuevo estado.

Otro principio clave en Redux es que el estado es de 
sólo lectura. En otras palabras, la función reductora 
siempre debe devolver una nueva copia del estado y 
nunca modificar el estado directamente. Redux no 
impone la inmutabilidad del estado, sin embargo, 
tú eres responsable de imponerla en el código de 
tus funciones reductoras. Practicarás esto en retos 
posteriores.

El editor de código tiene el ejemplo anterior así como 
el inicio de una función reductora para ti. Rellena el 
cuerpo de la función reductora de forma que si recibe 
una acción de tipo 'LOGIN' devuelva un objeto de estado 
con el login puesto a true. En caso contrario, devuelve 
el estado actual. Ten en cuenta que el estado actual y 
la acción enviada se pasan al reductor, por lo que puedes 
acceder al tipo de la acción directamente con action.type.
*/

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    if (action.type === "LOGIN") {
        return {
          login: true
        };
      } else {
        return state;
      }
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };