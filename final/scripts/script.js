
// Mobile Nav Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");

    // Toggle between hamburger and close icon
    const isOpen = navLinks.classList.contains("show");
    hamburger.textContent = isOpen ? "✖" : "☰";
    });

    // Auto-collapse on link click
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach((link) => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                hamburger.textContent = "☰";
            }
        });
    });
}


// Dynamic Lesson Cards
const lessons = [
    {
      title: "Beginner Piano",
      description: "Start with basic techniques and songs.",
    },
    {
      title: "Intermediate Guitar",
      description: "Move beyond chords to improvisation.",
    },
    {
      title: "Voice Control",
      description: "Master pitch, tone, and projection.",
    }
];
  
function populateLessons() {
    const container = document.getElementById("lesson-list");
    if (!container) return;
  
    lessons.forEach((lesson) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
        `;
        container.appendChild(card);
    });
}
  

// Form Submission & localStorage
const form = document.getElementById("contactForm");
  
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const response = document.getElementById("formResponse");
  
        if (!name || !email || !message) {
            response.textContent = "Please complete all fields.";
            return;
        }
  
        const submission = {
            name,
            email,
            message,
            submittedAt: new Date().toISOString()
        };
    
        // Get existing submissions from localStorage or initialize an array
        const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    
        // Add the new submission
        submissions.push(submission);

        // Save updated array to localStorage
        localStorage.setItem("submissions", JSON.stringify(submissions));

        // Clear the form and show a confirmation
        form.reset();
        response.textContent = `Thanks, ${name}, your message has been sent!`;
    });
}
  

  // Initialize Lesson Cards
  populateLessons();
  