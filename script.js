  alert("Welcome!");
  const API_BASE_URL = "https://portfolio-in-flask.onrender.com";
  function showAlert() {
        const alertBox = document.getElementById("customAlert");
        alertBox.style.display = "block";
        alertBox.style.opacity = "0";
        setTimeout(() => {
          alertBox.style.opacity = "1";
        }, 10);
      }

      function closeAlert() {
        const alertBox = document.getElementById("customAlert");
        alertBox.style.opacity = "0";
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 300);
      }

/* =====================
    CONTACT FORM
===================== */

document.getElementById("contact-form")
.addEventListener("submit", async (e) => {
e.preventDefault();

const form = e.target;
const status = document.getElementById("form-status");

const data = {
name: form.name.value,
email: form.email.value,
message: form.message.value
};

try {
const res = await fetch(`${API_BASE_URL}/api/messages`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
});

if (!res.ok) throw new Error("Failed");

status.textContent = "Thanks! I’ll get back to you soon.";
form.reset();

} catch {
status.textContent = "Something went wrong. Please try again later.";
}
});