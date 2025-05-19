document.getElementById("form-agregar").addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;

  fetch("https://script.google.com/macros/s/AKfycbxlZM-HpznlxGM-LPzcF9F3oIzuqtaCpbV-SIBauNIQUf3QvO2bkc92G4AphW_gY6mb/exec", {
    method: "POST",
    body: JSON.stringify({
      ID: id,
      Nombre: nombre
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(msg => {
    alert("Usuario agregado correctamente");
    window.location.href = "index.html"; // vuelve a la lista
  })
  .catch(err => {
    console.error("Error:", err);
    alert("Error al agregar usuario");
  });
});
