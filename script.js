function saludar() {
    let nombre = document.getElementById("nombreInput").value;
    document.getElementById("saludo").innerText = "Bienvenida, " + nombre + " 💖";
}

function mostrarInfo() {
    let info = document.getElementById("infoExtra");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function modoOscuro() {
    document.body.classList.toggle("dark");
}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        alert("Por favor completá los campos");
        return false;
    }
    return true;
}
function validarFormulario() {

    let nombre = document.getElementById("nombre").value;

    let email = document.getElementById("email").value;

    if (nombre === "" || email === "") {

        alert("Por favor completá los campos");

        return false;
    }

    alert("¡Formulario enviado correctamente! 💖");

    return false;
}