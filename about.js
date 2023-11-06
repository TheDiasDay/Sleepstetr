const changeColorButton = document.getElementById("changeColorButton");
    const box = document.getElementById("box");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    changeColorButton.addEventListener("click", () => {
      const nameInput = document.getElementById("name").value;
      const emailInput = document.getElementById("email").value;
      const phoneInput = document.getElementById("phone").value;

      if (!nameInput || !emailInput || !phoneInput || !emailInput.includes('@') || !phoneInput.match(/^\d+$/)) {
        errorMessage.textContent = "Please fill in all fields correctly.";
        successMessage.textContent = "";
      } else {
        box.style.backgroundColor = "green";
        changeColorButton.classList.remove("white-button");
        changeColorButton.classList.add("green-button");
        successMessage.textContent = "Information successfully confirmed!";
        errorMessage.textContent = "";
      }
    });