/*
Ahora que has terminado el componente React, necesitas mover 
la lógica que está realizando localmente en su estado a Redux. 
Este es el primer paso para conectar la simple aplicación 
React a Redux. La única funcionalidad que tiene tu app es 
añadir nuevos mensajes del usuario a una lista desordenada. 
El ejemplo es simple para demostrar cómo React y Redux 
trabajan juntos.

En primer lugar, define una acción de tipo ADD y establécela 
como const ADD. A continuación, define un creador de acción 
addMessage() que crea la acción para añadir un mensaje. 
Tendrás que pasar un mensaje a este creador de acciones e 
incluir el mensaje en la acción devuelta.

Luego crea un reductor llamado messageReducer() que maneja 
el estado de los mensajes. El estado inicial debe ser igual 
a un array vacío. Este reductor debe añadir un mensaje a la 
matriz de mensajes mantenida en el estado, o devolver el 
estado actual. Finalmente, crea tu tienda Redux y pásale el 
reductor.
*/