const socketController = (socket) => {
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });

  /* The code `socket.on('enviar-mensaje', (data) => { ... })` is setting up a listener on the server
side for the event 'enviar-mensaje' emitted by a client. !Custom function */
  // ! socket.on es escucha al cliente
  socket.on('enviar-mensaje', (data, callback) => {
    /* `socket.broadcast.emit('enviar-mensaje', data);` is broadcasting the 'enviar-mensaje' event to
    all connected clients except the client that triggered the event. It sends the `data` object as
    the payload of the event. */
    socket.broadcast.emit('enviar-mensaje', data);

    callback(43959);
  });
};

module.exports = {
  socketController,
};
