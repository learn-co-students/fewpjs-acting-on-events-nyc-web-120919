let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let x = dodger.style.left.replace("px", "");
    let left = parseInt(x, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
     let x = dodger.style.left.replace("px", "");
     let right = parseInt(x, 10)

     if (right < 351) {
        dodger.style.left = `${right + 10}px`
     }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight()  
    }
  });