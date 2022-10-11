/* 
Ahora que entiendes cómo usar connect para conectar React a 
Redux, puedes aplicar lo que has aprendido a tu componente 
React que maneja mensajes.

En la última lección, el componente que conectaste a Redux 
se llamaba Presentational, y esto no era arbitrario. Este 
término generalmente se refiere a los componentes de React 
que no están conectados directamente a Redux. Simplemente 
son responsables de la presentación de la UI y lo hacen en 
función de los props que reciben. Por el contrario, los 
componentes contenedores están conectados a Redux. Estos 
son típicamente responsables de enviar acciones al almacén 
y a menudo pasan el estado del almacén a los componentes 
hijos como props.

El editor de código tiene todo el código que has escrito 
en esta sección hasta ahora. El único cambio es que el 
componente React es renombrado a Presentational. Crea un 
nuevo componente mantenido en una constante llamado 
Container que utiliza connect para conectar el componente 
Presentational a Redux. Luego, en el AppWrapper, renderiza 
el componente React Redux Provider. Pasa a Provider el 
almacén Redux como prop y renderiza Container como child. 
Una vez que todo está configurado, verás la aplicación de 
mensajes renderizada en la página de nuevo.
*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};