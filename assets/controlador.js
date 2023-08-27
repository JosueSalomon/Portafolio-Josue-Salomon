
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalTechnologies = document.getElementById("modalTechnologies");
    const urlGithub = document.getElementById('RepositorioProyectos');

    const projects = document.querySelectorAll(".projects-row-detail img");

    let gestionGasolineta = "Una gestion de gasolinera, con interfaz grafica"
    let arbolesAlgoritmo = "Un algoritmo que permite crear arboles, hacer recoridos sobre el arbol"
    let Readigo = "Una pagina web de entregas condistintos niveles de acceso, administrador, motorista y cliente"

    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            const projectImages = ["portfolio-gasolinera.jpg", "arbolesAlgoritmo.png", "Readigo.jpeg"]; // Nombres de las imágenes de proyectos
            const projectDescriptions = [gestionGasolineta, arbolesAlgoritmo,Readigo]; // Descripciones de los proyectos
            const url =["https://github.com/JosueSalomon/Gestion-gasolinera","https://github.com/JosueSalomon/Proyecto-arboles","https://github.com/JosueSalomon/Proyecto-POO-Erick-y-Josue-IIPAC-2023"]
            const projectTechnologies = [
                ["java.png"],
                ["java.png"],
                ["html.png", "js.png", "css.png", "ts.png", "mongodb.png","nodejs.png"]
            ]; // Imágenes de las tecnologías por proyecto

            modalImage.src = `assets/img/${projectImages[index]}`;
            modalDescription.textContent = projectDescriptions[index];
            urlGithub.href = url[index]

            modalTechnologies.innerHTML = projectTechnologies[index]
                .map(tech => `<img src="assets/img/${tech}" alt="${tech.replace('.png', '')}">`)
                .join("");

            modal.style.display = "block";
        });
    });

    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
