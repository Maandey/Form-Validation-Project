const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('phoneError').textContent = "";
  document.getElementById('passwordError').textContent = "";
  document.getElementById('confirmError').textContent = "";

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let isValid = true;

  if (name.length < 5) {
    document.getElementById('nameError').textContent = "Name must be at least 5 characters";
    isValid = false;
  }

  if (!email.includes('@')) {
    document.getElementById('emailError').textContent = "Enter a valid email address";
    isValid = false;
  }

  if (phone.length !== 10 || phone === "1234567890") {
    document.getElementById('phoneError').textContent = "Enter a valid 10-digit phone number";
    isValid = false;
  }

  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
    document.getElementById('passwordError').textContent = "Password is not strong";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmError').textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});