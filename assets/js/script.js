document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();
            const responseMessage = document.getElementById("response-message");

            if (!name || !email || !message) {
                responseMessage.innerHTML = "<span style='color: red;'>Please fill in all required fields.</span>";
                return;
            }

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("subject", subject);
            formData.append("message", message);

            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbznIWNLF1vG294RaH_MTPHJmq4RORndlm8QDCubrCxWPfyMk2GHw2p29j1UoYVL3AEhnQ/exec", {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    responseMessage.innerHTML = "<span style='color: green;'>Message sent successfully!</span>";
                    form.reset();
                } else {
                    responseMessage.innerHTML = "<span style='color: red;'>Something went wrong. Please try again later.</span>";
                }
            } catch (error) {
                console.error("Error:", error);
                responseMessage.innerHTML = "<span style='color: red;'>Network error. Please try again.</span>";
            }
        });
    }
});



    // Back-to-Top Button
    const topButton = document.createElement("button");
    topButton.innerHTML = "▲";
    topButton.id = "back-to-top";
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.backgroundColor = "#555";
    topButton.style.color = "#fff";
    topButton.style.border = "none";
    topButton.style.padding = "10px 15px";
    topButton.style.borderRadius = "5px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.fontSize = "20px";
    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Fade-in Animation using Intersection Observer (Better Performance)
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); // Ensures animation replays
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the element is visible

fadeElements.forEach(el => observer.observe(el));


    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Apply previously saved dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
