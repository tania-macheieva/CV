document.addEventListener('DOMContentLoaded', () => {
    const techIconsContainer = document.querySelector(".tech-icons-container"); 
    
    if (techIconsContainer) {
        const icons = [
            "devicon-csharp-plain",
            "devicon-ruby-plain",
            "fab fa-docker",
            "devicon-dotnetcore-plain",
            "devicon-rails-plain",
            "fab fa-github",
            "fa-solid fa-database",
            "fab fa-react",
            "fab fa-node-js",
            "fab fa-git-alt",
        ];

        icons.forEach((iconClass) => {
            const div = document.createElement("div");
            div.className = "tech-icon";
            const i = document.createElement("i");
            i.className = iconClass;
            div.appendChild(i);
            techIconsContainer.appendChild(div);
        });
    }
});