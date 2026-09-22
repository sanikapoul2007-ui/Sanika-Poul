function filterProjects(category) {

    const projects = document.querySelectorAll(".project-card");

    projects.forEach(function(project) {

        if (
            category === "all" ||
            project.classList.contains(category)
        ) {
            project.style.display = "block";
        } 
        else {
            project.style.display = "none";
        }

    });
}


function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

}