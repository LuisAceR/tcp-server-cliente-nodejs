const net = require('net');

const client = net.createConnection({ port: 8000 }, () => {
    console.log('Conectado al servidor');
    // Envia mensaje al servidor
    client.write('Hola servidor, yo soy el cliente');
});

// Cliente recibe datos del servidor
client.on('data', (data) => {
    console.log('Mensaje recibido del servidor: ' + data.toString());
    // Cerrar conexión
    client.end();
});

// Cliente se desconecta
client.on('end', () => {
    console.log('Desconectado del servidor');
});

// Manejo de errores
client.on('error', (err) => {
    console.log('Error: ' + err.message);
});
