/*
Esta serie de retos introduce cómo utilizar Redux con React. 
En primer lugar, aquí hay un repaso de algunos de los principios 
clave de cada tecnología. React es una librería de vistas a la 
que le proporcionas datos, y luego renderiza la vista de una 
manera eficiente y predecible. Redux es un marco de gestión de 
estado que puedes utilizar para simplificar la gestión del 
estado de tu aplicación. Normalmente, en una aplicación React 
Redux, se crea un único almacén Redux que gestiona el estado de 
toda la aplicación. Tus componentes React se suscriben sólo a 
las piezas de datos en el almacén que son relevantes para su 
función. A continuación, envías acciones directamente desde los 
componentes React, que desencadenan las actualizaciones del 
almacén.

Aunque los componentes React pueden gestionar su propio estado 
localmente, cuando tienes una aplicación compleja, generalmente 
es mejor mantener el estado de la aplicación en una sola 
ubicación con Redux. Hay excepciones cuando los componentes 
individuales pueden tener un estado local específico sólo para 
ellos. Por último, dado que Redux no está diseñado para trabajar 
con React fuera de la caja, es necesario utilizar el paquete 
react-redux. Proporciona una forma de pasar el estado de Redux y 
el envío a tus componentes de React como props.

A lo largo de los siguientes retos, primero crearás un 
componente React sencillo que te permita introducir nuevos 
mensajes de texto. Estos se añaden a un array que se muestra en 
la vista. Esto debería ser un buen repaso de lo aprendido en las 
lecciones de React. A continuación, crearás un almacén Redux y 
acciones que gestionen el estado del array de mensajes. 
Finalmente, usarás react-redux para conectar el almacén Redux 
con tu componente, extrayendo así el estado local al almacén 
Redux.

Comienza con un componente DisplayMessages. Añade un constructor 
a este componente e inícialo con un estado que tenga dos 
propiedades: input, que se establece como una cadena vacía, y 
messages, que se establece como un array vacío.
 */

class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
      super(props);
      this.state={
        input:'',
        messages:[]
      }
    }
    // Change code above this line
    render() {
      return <div />
    }
  };