const techIconsContainer = document.querySelector(".tech-icons-container");
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

icons.forEach((iconClass, index) => {
	const div = document.createElement("div");
	div.className = "tech-icon";
	div.innerHTML = `<i class="${iconClass}"></i>`;
	techIconsContainer.appendChild(div);
});
