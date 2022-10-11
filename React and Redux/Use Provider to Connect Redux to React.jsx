/* 
En el último reto, creaste un almacén Redux para manejar 
el array de mensajes y creaste una acción para añadir 
nuevos mensajes. El siguiente paso es proporcionar a 
React acceso al almacén Redux y a las acciones que 
necesita para enviar actualizaciones. React Redux 
proporciona su paquete react-redux para ayudar a realizar 
estas tareas.

React Redux proporciona una pequeña API con dos 
características clave: Provider y connect. Otro reto 
cubre connect. El Proveedor es un componente envolvente 
de React Redux que envuelve tu aplicación React. Esta 
envoltura te permite acceder al almacén Redux y enviar 
funciones a través de tu árbol de componentes. Provider 
toma dos props, el almacén Redux y los componentes hijos 
de tu app. Definir el Provider para un componente de la 
App podría tener el siguiente aspecto:

<Provider store={store}>
  <App/>
</Provider>

El editor de código ahora muestra todo su código Redux y 
React de los últimos desafíos. Incluye el almacén Redux, 
las acciones y el componente DisplayMessages. La única 
pieza nueva es el componente AppWrapper en la parte 
inferior. Utiliza este componente de nivel superior para 
renderizar el Provider de ReactRedux, y pasa el almacén 
Redux como prop. Luego renderiza el componente 
DisplayMessages como hijo. Una vez que hayas terminado, 
deberías ver tu componente React renderizado en la página.

Nota: React Redux está disponible como una variable 
global aquí, así que puedes acceder al proveedor con la 
notación de puntos. El código en el editor se aprovecha 
de esto y lo establece como un Provider constante para 
que lo uses en el método de renderizado de AppWrapper.
*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
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

class DisplayMessages extends React.Component {
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return(
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    )
  }
};