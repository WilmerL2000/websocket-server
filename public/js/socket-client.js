const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

/* The line `const socket = io();` is creating a new socket connection using the `io()` function. The
`io()` function is typically provided by a library like Socket.io and is used to establish a
connection between the client and the server. The `socket` variable is then assigned the newly
created socket connection, which can be used to send and receive data between the client and the
server. */
const socket = io();

socket.on('connect', () => {
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (data) => {
  console.log(data);
});

btnEnviar.addEventListener('click', () => {
  const msg = txtMensaje.value;

  socket.emit('enviar-mensaje', msg, (id) => {
    console.log('Desde el server', id);
  });
});
