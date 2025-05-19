const API_URL = "https://script.google.com/macros/s/AKfycbxpq6VEuoRcYkNRqwEBcfeJbHBVA38YnxqK2jrqsCtqRccZ7qMtYngCSsSoWktlIpCr/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('lista');
    data.forEach(usuario => {
      const li = document.createElement('li');
      li.innerHTML = `${usuario.ID} - ${usuario.Nombre} 
        <button onclick="editar('${usuario.ID}', '${usuario.Nombre}')">Editar</button> 
        <button onclick="eliminar('${usuario.ID}')">Eliminar</button>`;
      lista.appendChild(li);
    });
  });

function editar(id, nombre) {
  window.location.href = `editar.html?id=${encodeURIComponent(id)}&nombre=${encodeURIComponent(nombre)}`;
}

function eliminar(id) {
  fetch(`${API_URL}?ID=${id}`, { method: "DELETE" })
    .then(res => res.text())
    .then(() => location.reload());
}
