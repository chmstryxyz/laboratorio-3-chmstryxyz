document.addEventListener("DOMContentLoaded", () => {
    const habilidadesBtn = document.getElementById("toggle-habilidades");
    const educacionBtn = document.getElementById("toggle-educacion");
    const listaHabilidades = document.getElementById("lista-habilidades");
    const listaEducacion = document.getElementById("lista-educacion");

    // Inicialmente ocultamos las listas
    listaHabilidades.style.maxHeight = "0";
    listaHabilidades.style.overflow = "hidden";
    listaHabilidades.style.transition = "max-height 0.6s ease";

    listaEducacion.style.maxHeight = "0";
    listaEducacion.style.overflow = "hidden";
    listaEducacion.style.transition = "max-height 0.6s ease";

    let habilidadesAbierto = false;
    let educacionAbierto = false;

    habilidadesBtn.addEventListener("click", () => {
        habilidadesAbierto = !habilidadesAbierto;
        if (habilidadesAbierto) {
            listaHabilidades.style.maxHeight = listaHabilidades.scrollHeight + "px";
            habilidadesBtn.textContent = "Ocultar habilidades ▲";
        } else {
            listaHabilidades.style.maxHeight = "0";
            habilidadesBtn.textContent = "Mostrar habilidades ▼";
        }
    });

    educacionBtn.addEventListener("click", () => {
        educacionAbierto = !educacionAbierto;
        if (educacionAbierto) {
            listaEducacion.style.maxHeight = listaEducacion.scrollHeight + "px";
            educacionBtn.textContent = "Ocultar educación ▲";
        } else {
            listaEducacion.style.maxHeight = "0";
            educacionBtn.textContent = "Mostrar educación ▼";
        }
    });
});