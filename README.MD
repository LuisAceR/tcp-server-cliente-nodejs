# Servidor y cliente TCP en Node.js
Implementación sencilla de un servidor y un cliente TCP con Node.js. El servidor escucha las conexiones y responde a los mensajes enviados por el cliente. Este proyecto demuestra los conceptos básicos de la comunicación TCP.

# Comenzando
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. Este es un trabajo de programacion de plataformas emergentes de la UACH.

# Pre-requisitos

* [Node.js](https://nodejs.org/en) instalado en su máquina.

# Instalación
1. Clonar el repositorio:

    ```
    git clone https://github.com/LuisAceR/tcp-server-cliente-nodejs.git
    ```

2. Ir al directorio del proyecto:

    ```
    cd tcp-server-cliente-nodejs

    ```

3. No se requieren dependencias adicionales ya que se utiliza -net el módulo integrado de Node.js.

# Ejecutando el servidor
1. Para iniciar el servidor TCP, ejecutar el siguiente comando en su terminal:

    ```
    node tcp_server.js
    ```

2. El servidor se inicia y escuchará las conexiones entrantes en el puerto 8000. Se deberia ver el siguiente mensaje:

    ```
    Servidor TCP escuchando en el puerto 8000
    ```

# Ejecutar el cliente
1. Para iniciar el cliente TCP, abrir otra ventana de terminal y ejecutar el siguiente comando:

    ```
    node tcp_client.js
    ```

2. El cliente se conectará al servidor, enviará un mensaje y esperará la respuesta del servidor. Se deberia ver la siguiente salida en la terminal del cliente:

    ```
    Conectado al servidor
    Mensaje recibido del servidor: Recibí tu mensaje: Hola servidor, yo soy el cliente
    Desconectado del servidor
    ```

3. En la terminal del servidor deberías ver:

    ```
    Cliente conectado
    Mensaje recibido del cliente: Hola servidor, yo soy el cliente
    Cliente desconectado
    ```

# Ejecutando las pruebas
Este proyecto no incluye pruebas automatizadas.

# Construido con
[Node.js](https://nodejs.org/en) Entorno de ejecución para JavaScript.

# Contribuyendo
Las solicitudes de pull son bienvenidas.

# Versionado
Se utilizo Github para el versionado.

# Autores 
Luis Acevedo 360777 - Trabajo inicial - [LuisAceR](https://github.com/LuisAceR)

# Licencia
Codigo abierto

# Agradecimientos
* Al profesor Oscar Daniel por la documentacion proporcionada.
* A [PurpleBooth](https://gist.github.com/PurpleBooth) por la plantilla de README.