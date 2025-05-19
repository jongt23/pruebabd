const API_URL = "https://script.google.com/macros/s/AKfycbxpq6VEuoRcYkNRqwEBcfeJbHBVA38YnxqK2jrqsCtqRccZ7qMtYngCSsSoWktlIpCr/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const tabla = document.getElementById("tabla-usuarios");
    tabla.innerHTML = "";
    data.forEach(user => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${user.ID}</td>
        <td>${user.Nombre}</td>
        <td>
          <button onclick="editar('${user.ID}', '${user.Nombre}')">Editar</button>
          <button onclick="eliminar('${user.ID}')">Eliminar</button>
        </td>
      `;
      tabla.appendChild(fila);
    });
  });

function eliminar(id) {
  if (confirm("¿Eliminar usuario?")) {
    fetch(`${API_URL}?ID=${id}`, { method: "DELETE" })
      .then(() => location.reload());
  }
}

function editar(id, nombre) {
  localStorage.setItem("editarID", id);
  localStorage.setItem("editarNombre", nombre);
  window.location.href = "editar.html";
}
