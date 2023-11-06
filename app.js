window.addEventListener(("scroll"),()=>{
    document.querySelector("#r-cloud").style.marginLeft = `${window.scrollY}px`
    document.querySelector("#c-cloud").style.marginBottom = `${window.scrollY * 2}px`
    document.querySelector("#l-cloud").style.marginRight = `${window.scrollY}px`
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1}px`
    document.querySelector("#tree").style.marginBottom = `${50 - window.scrollY}px`

     // Create a JavaScript object with properties
     const myObject = {
        name: "John",
        age: 30,
        email: "john@example.com"
      };
  
      // Select elements using DOM selectors
      const box = document.getElementById("box");
      const animateButton = document.getElementById("animateButton");
      const playSoundButton = document.getElementById("playSoundButton");
  
      // Event listener for the "click" event
      animateButton.addEventListener("click", () => {
        // Create a simple animation by changing the position of the box
        box.style.left = "300px";
      });
  
      // Event listener for the "mouseover" event
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
      });
  
      // Event listener for the "keypress" event
      document.addEventListener("keypress", (event) => {
        if (event.key === "a") {
          alert("You pressed 'a' key.");
        }
      });
  
      // Function to play a sound
      function playSound() {
        const audio = new Audio("stocks/sound.mp3"); // Replace "sound.mp3" with your sound file
        audio.play();
      }
  
      // Event listener to play a sound when the "Play Sound" button is clicked
      playSoundButton.addEventListener("click", playSound);
})