// Initialize EmailJS
emailjs.init("SOIVUmRDK0JMw5wB7");

// FORM SUBMIT HANDLER
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const button = form.querySelector("button");

  button.disabled = true;
  button.innerHTML = "⏳ Sending...";

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,  // <-- FIXED
    message: document.getElementById("message").value
  };

  try {
    await emailjs.send("service_xglnvjp", "template_yejgcqi", formData);

    showPopup("🎉 Message Sent Successfully!");
    form.reset();
    status.textContent = "✅ Delivered successfully!";

    // Optional redirect after sending
    setTimeout(() => {
      window.location.href = "thank-you.html";
    }, 1500);

  } catch (error) {
    console.error(error);
    status.textContent = "❌ Something went wrong. Try again!";
  }

  button.disabled = false;
  button.innerHTML = "📩 Send Message";
});


// POPUP FUNCTION
function showPopup(text) {
  const box = document.createElement("div");
  box.className = "popup-alert";
  box.innerHTML = text;

  document.body.appendChild(box);

  setTimeout(() => {
    box.style.opacity = "0";
    setTimeout(() => box.remove(), 600);
  }, 1800);
}
