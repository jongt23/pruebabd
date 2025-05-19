const API_URL = "https://script.google.com/macros/s/AKfycbxpq6VEuoRcYkNRqwEBcfeJbHBVA38YnxqK2jrqsCtqRccZ7qMtYngCSsSoWktlIpCr/exec";

document.getElementById("form-agregar").addEventListener("submit", function(e) {
  e.preventDefault();
  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ ID: id, Nombre: nombre }),
    headers: { "Content-Type": "application/json" }
  })
  .then(() => {
    alert("Usuario agregado");
    window.location.href = "index.html";
  });
});
