const API_URL = "https://script.google.com/macros/s/AKfycbxpq6VEuoRcYkNRqwEBcfeJbHBVA38YnxqK2jrqsCtqRccZ7qMtYngCSsSoWktlIpCr/exec";

document.getElementById("form-agregar").addEventListener("submit", e => {
  e.preventDefault();
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      ID: document.getElementById("id").value,
      Nombre: document.getElementById("nombre").value
    }),
    headers: { "Content-Type": "application/json" }
  }).then(() => {
    alert("Usuario agregado");
    window.location.href = "index.html";
  });
});
