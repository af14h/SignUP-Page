document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput =
      document.getElementById("confirm-password");
    const matchAlert = document.getElementById("match_alert");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !confirmPassword
      ) {
        matchAlert.textContent = "All fields are required.";
        matchAlert.style.display = "block"; // Show the error
        return;
      }
      if (!/^\d{10}$/.test(phone)) {
        matchAlert.textContent = "Phone number must be 10 digits.";
        matchAlert.style.display = "block";
        return;
      }
      if (password !== confirmPassword) {
        matchAlert.textContent = "Passwords do not match.";
        matchAlert.style.display = "block"; // Show error
        return;
      }
      matchAlert.textContent = "";
      matchAlert.style.display = "none";
      alert("Account created successfully!");
    });
  }); 