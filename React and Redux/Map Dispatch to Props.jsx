/* 
La función mapDispatchToProps() se utiliza para proporcionar 
creadores de acciones específicas a tus componentes React 
para que puedan despachar acciones contra el almacén Redux. 
Su estructura es similar a la función mapStateToProps() 
que escribiste en el último reto. Devuelve un objeto que 
mapea acciones de envío a nombres de propiedades, que se 
convierten en props del componente. Sin embargo, en lugar 
de devolver un trozo de estado, cada propiedad devuelve una 
función que llama a dispatch con un creador de acción y 
cualquier dato de acción relevante. Tienes acceso a este 
envío porque se pasa a mapDispatchToProps() como un 
parámetro cuando defines la función, al igual que pasas el 
estado a mapStateToProps(). Entre bastidores, React Redux 
utiliza store.dispatch() de Redux para realizar estos 
envíos con mapDispatchToProps(). Esto es similar a cómo 
utiliza store.subscribe() para los componentes que son 
mapeados al estado.

Por ejemplo, tienes un creador de acción loginUser() que 
toma un nombre de usuario como carga útil de la acción. El 
objeto devuelto por mapDispatchToProps() para este creador 
de acciones sería algo así

{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}

El editor de código proporciona un creador de acciones 
llamado addMessage(). Escribe la función 
mapDispatchToProps() que toma dispatch como argumento y 
devuelve un objeto. El objeto debe tener una propiedad 
submitNewMessage establecida a la función dispatch, que 
toma un parámetro para el nuevo mensaje a añadir cuando 
despacha addMessage().
*/

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message)=>{
              dispatch(addMessage(message))
          }
    }
  }