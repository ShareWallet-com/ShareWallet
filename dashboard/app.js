document.addEventListener("DOMContentLoaded", () => {
    const navIcons = document.querySelectorAll("#nav i");
    const sections = document.querySelectorAll(".section");

    navIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const sectionToShow = icon.getAttribute("data-section");

            // Hide all sections
            sections.forEach(section => section.classList.remove("active"));

            // Show the clicked section
            document.getElementById(sectionToShow).classList.add("active");
        });
    });
});