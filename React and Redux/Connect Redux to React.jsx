/* 
Ahora que has escrito las funciones mapStateToProps() y 
mapDispatchToProps(), puedes usarlas para mapear el estado 
y el envío a las props de uno de tus componentes React. El 
método connect de React Redux puede manejar esta tarea. 
Este método toma dos argumentos opcionales, 
mapStateToProps() y mapDispatchToProps(). Son 
opcionales porque puedes tener un componente que sólo 
necesita acceder al estado pero no necesita despachar 
ninguna acción, o viceversa.

Para utilizar este método, pasa las funciones como 
argumentos y llama inmediatamente al resultado con tu 
componente. Esta sintaxis es un poco inusual y tiene el 
siguiente aspecto


connect(mapStateToProps, mapDispatchToProps)(MyComponent)


Nota: Si quieres omitir uno de los argumentos del método 
connect, pasa null en su lugar.

El editor de código tiene las funciones mapStateToProps() 
y mapDispatchToProps() y un nuevo componente React llamado 
Presentational. Conecta este componente a Redux con el 
método connect del objeto global ReactRedux, y llámalo 
inmediatamente en el componente Presentational. Asigna el 
resultado a una nueva const llamada ConnectedComponent que 
representa el componente conectado. Eso es todo, 
¡ahora estás conectado a Redux! Prueba a cambiar cualquiera 
de los argumentos de connect a null y observa los 
resultados de la prueba.

*/

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // Change code below this line
  
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);