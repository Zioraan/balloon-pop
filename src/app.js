import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const balloons = []
  const balloonContainer = document.querySelector("#balloon-container")
  
  const getRandomColorValue = () => {
    let chosenColor = "(";
    for (let i = 0; i < 3; i++) {
      let segment = Math.floor(Math.random() * 256);
      if (i === 2) {
        chosenColor += segment + ")";
      } else {
        chosenColor += segment + ", ";
      }
    }
    return chosenColor;
  }

  const updateBalloonArray = () => {
    for(let i = 0; i < 20; i++){
      balloons.push(`rgb${getRandomColorValue()}`)
    }
    console.log(balloons)
    for(let i = 0; i < balloons.length; i++){
      const newBalloon = document.createElement("div")
      const newBalloonContainer = document.createElement("div")
      newBalloonContainer.className = "col-3"
      newBalloonContainer.appendChild(newBalloon)
      newBalloon.className = "balloon my-3"
      newBalloon.style.backgroundColor = balloons[i]
      newBalloon.addEventListener("click", function() {
        balloons[i] = null
        newBalloon.style.backgroundColor = balloons[i]
        if (checkPoppedBalloons()) {
          setTimeout(() => {
            alert("Congratulations! You popped all the balloons!")
            location.reload()
          }, 100);
        }
      })
      balloonContainer.appendChild(newBalloonContainer)
    }
  }

  const checkPoppedBalloons = () => {
    if(balloons.every((balloon) => balloon === null)) {
      return true
    }
    return false
  }

  updateBalloonArray()

};
