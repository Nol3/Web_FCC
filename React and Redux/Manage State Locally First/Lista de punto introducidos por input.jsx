/*
Aquí terminarás de crear el componente DisplayMessages.

Primero, en el método render(), haz que el componente renderice 
un elemento de entrada, un elemento de botón y un elemento ul. 
Cuando el elemento input cambie, debería activar un método 
handleChange(). Además, el elemento input debe renderizar el 
valor del input que está en el estado del componente. El 
elemento botón debe activar un método submitMessage() cuando 
se haga clic en él.

En segundo lugar, escribe estos dos métodos. El método 
handleChange() debe actualizar la entrada con lo que el usuario 
está escribiendo. El método submitMessage() debe concatenar el 
mensaje actual (almacenado en el input) con el array de mensajes 
en el estado local, y borrar el valor del input.

Finalmente, usa el ul para mapear el array de mensajes y 
renderizarlo en la pantalla como una lista de elementos li.
*/

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
      handleChange(event){
      this.setState({
        input: event.target.value,
        messages: this.state.messages
      })
    }
  
    submitMessage(){
      this.setState({
        input: '',
        messages: [...this.state.messages, this.state.input]
      })
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>Submit</button>
          <ul>
            {this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}
          </ul>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };