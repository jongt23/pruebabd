const API_URL = "https://script.google.com/macros/s/AKfycbw3RZfRYzQv6Yz8SuzHeGSUIsufipD7_CAxm55Im6_KvQHICX0BT6LDByTu64me-Ogc/exec";

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
