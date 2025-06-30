const ADMIN_PASSWORD = "letmein"; // Change this to your secret password

let projects = [
  {
    title: "Portfolio Website",
    description: "A personal website built with HTML, CSS, and JavaScript.",
    link: "https://yourportfolio.com"
  },
  {
    title: "Weather App",
    description: "A weather forecast app using the OpenWeatherMap API.",
    link: "https://github.com/yourusername/weather-app"
  }
];

// Render projects
function renderProjects() {
  const container = document.getElementById("projects");
  container.innerHTML = "";
  projects.forEach(proj => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h2>${proj.title}</h2>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank">View Project</a>`;
    container.appendChild(div);
  });
}

// Show/hide add form
document.getElementById("showAddForm").onclick = () => {
  document.getElementById("addFormContainer").classList.remove("hidden");
};
document.getElementById("cancelAdd").onclick = () => {
  document.getElementById("addFormContainer").classList.add("hidden");
  document.getElementById("addError").textContent = "";
  document.getElementById("addProjectForm").reset();
};

// Handle add project
document.getElementById("addProjectForm").onsubmit = function(e) {
  e.preventDefault();
  const pw = document.getElementById("adminPassword").value;
  if (pw !== ADMIN_PASSWORD) {
    document.getElementById("addError").textContent = "Incorrect password.";
    return;
  }
  projects.push({
    title: document.getElementById("projectTitle").value,
    description: document.getElementById("projectDesc").value,
    link: document.getElementById("projectLink").value
  });
  renderProjects();
  document.getElementById("addFormContainer").classList.add("hidden");
  document.getElementById("addError").textContent = "";
  this.reset();
};

renderProjects();