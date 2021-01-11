function _load() {
  let redColor = document.getElementById("red").value;
  console.log(redColor);

  let blueColor = document.querySelector("#blue").value;
  console.log(blueColor);

  let greenColor = document.querySelector("#green").value;

  console.log(greenColor);

  /* console.log(
    (document.body.style.background = `rgba(${redColor}, ${blueColor}, ${greenColor}`)
  );

  if (redColor === 0 || redColor === 256) {
    document.querySelector("#red").style.borderColor = "red";
  }

  if (blueColor === 0 || blueColor === 256) {
    document.querySelector("#blue").style.borderColor = "blue";
    alert("Not a valid value");
  }

  if (greenColor === 0 || greenColor === 256) {
    document.querySelector("#green").style.borderColor = "red";
  }

  document.querySelector("#submit").addEventListener("click", function () {
    console.log(redColor);
  });
  */
}

function getInputs() {
  let inputs = document.querySelectorAll("input[type='number']");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", changeColor);
  }
}
function changeColor() {
  document.body.style.background = `rgba(${redColor}, ${blueColor}, ${greenColor}`;
}

window.addEventListener("load", _load);
