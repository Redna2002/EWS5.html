function checkPassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    if (password === "contraseña") { 
        window.location.href = "pagina-protegida.html"; // Reemplaza con la URL de la página a la que quieres redirigir
    } else {
        errorElement.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}
