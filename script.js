function saludar() {
    alert("¡Bienvenido a RedLine Garage!");
}

let botones = document.querySelectorAll("button");

botones.forEach(function(boton) {
    boton.addEventListener("mouseover", function() {
        boton.style.transform = "scale(1.05)";
    });

    boton.addEventListener("mouseout", function() {
        boton.style.transform = "scale(1)";
    });
});