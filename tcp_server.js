const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Cliente envía datos
    socket.on('data', (data) => {
        console.log('Mensaje recibido del cliente: ' + data.toString());
        // Respondemos al cliente
        socket.write('Recibí tu mensaje: ' + data);
    });

    // Cliente se desconecta
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    // Manejo de errores
    socket.on('error', (err) => {
        console.log('Error: ' + err.message);
    });
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});
