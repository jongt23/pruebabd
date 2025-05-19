const API_URL = "https://script.google.com/macros/s/AKfycbxpq6VEuoRcYkNRqwEBcfeJbHBVA38YnxqK2jrqsCtqRccZ7qMtYngCSsSoWktlIpCr/exec";

const params = new URLSearchParams(window.location.search);
document.getElementById("id").value = params.get("id");
document.getElementById("nombre").value = params.get("nombre");

document.getElementById("form-editar").addEventListener("submit", function(e) {
  e.preventDefault();
  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;

  fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify({ ID: id, Nombre: nombre }),
    headers: { "Content-Type": "application/json" }
  })
  .then(() => {
    alert("Usuario actualizado");
    window.location.href = "index.html";
  });
});
