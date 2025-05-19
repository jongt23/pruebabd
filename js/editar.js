const API_URL = "https://script.google.com/macros/s/AKfycbw3RZfRYzQv6Yz8SuzHeGSUIsufipD7_CAxm55Im6_KvQHICX0BT6LDByTu64me-Ogc/exec";

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
