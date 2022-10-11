/* 
El componente Provider te permite proporcionar estado y 
envío a tus componentes React, pero debes especificar 
exactamente qué estado y acciones quieres. De esta manera, 
te aseguras de que cada componente sólo tiene acceso al 
estado que necesita. Esto se consigue creando dos 
funciones: mapStateToProps() y mapDispatchToProps().

En estas funciones, declaras a qué partes del estado 
quieres tener acceso y qué creadores de acciones necesitas 
poder despachar. Una vez que estas funciones están en su 
lugar, verás cómo utilizar el método React Redux connect 
para conectarlos a tus componentes en otro desafío.

Nota: Entre bastidores, React Redux utiliza el método 
store.subscribe() para implementar mapStateToProps().

Crea una función mapStateToProps(). Esta función debe 
tomar "state" como argumento, y luego devolver un objeto 
que mapea ese estado a nombres de propiedades específicas. 
Estas propiedades serán accesibles a tu componente a través 
de props. Dado que este ejemplo mantiene todo el estado de 
la aplicación en un único array, puedes pasar todo ese 
estado a tu componente. Crea un mensaje de propiedad en 
el objeto que se devuelve, y establécelo como estado.

*/

const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}
