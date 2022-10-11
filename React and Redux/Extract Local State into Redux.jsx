/* 
¡Ya casi has terminado! Recuerda que escribiste todo el 
código de Redux para que éste pudiera controlar la gestión 
del estado de tu aplicación React messages. Ahora que Redux 
está conectado, necesitas extraer la gestión del estado 
fuera del componente Presentational y dentro de Redux. 
Actualmente, tienes Redux conectado, pero estás manejando 
el estado localmente dentro del componente Presentational.

En el componente Presentational, primero, elimina la 
propiedad messages en el estado local. Estos mensajes serán 
gestionados por Redux. A continuación, modifica el método 
submitMessage() para que envíe submitNewMessage() desde 
this.props, y pasa la entrada del mensaje actual del estado 
local como argumento. Como has eliminado los mensajes del 
estado local, elimina también la propiedad messages de la 
llamada a this.setState(). Por último, modifica el método 
render() para que mapee los mensajes recibidos de props en 
lugar de state.

Una vez realizados estos cambios, la aplicación seguirá 
funcionando igual, excepto que Redux gestiona el estado. 
Este ejemplo también ilustra cómo un componente puede tener 
estado local: su componente sigue registrando la entrada 
del usuario localmente en su propio estado. Puedes ver cómo 
Redux proporciona un útil marco de gestión de estado sobre 
React. Al principio conseguiste el mismo resultado 
utilizando sólo el estado local de React, y esto suele ser 
posible con aplicaciones sencillas. Sin embargo, a medida 
que tus aplicaciones se vuelven más grandes y complejas, 
también lo hace tu gestión de estado, y este es el problema 
que Redux resuelve.
*/