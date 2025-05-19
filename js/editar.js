const API_URL = "https://script.google.com/macros/s/AKfycbxpq6VEuoRcYkNRqwEBcfeJbHBVA38YnxqK2jrqsCtqRccZ7qMtYngCSsSoWktlIpCr/exec";
document.getElementById("id").value = localStorage.getItem("editarID");
document.getElementById("nombre").value = localStorage.getItem("editarNombre");

document.getElementById("form-editar").addEventListener("submit", e => {
  e.preventDefault();
  fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify({
      ID: document.getElementById("id").value,
      Nombre: document.getElementById("nombre").value
    }),
    headers: { "Content-Type": "application/json" }
  }).then(() => {
    alert("Usuario actualizado");
    window.location.href = "index.html";
  });
});
