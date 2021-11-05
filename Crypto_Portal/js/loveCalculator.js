let button = document.getElementById("btn-love");
//function events(){

function loveScores() {
    
    let loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore);

    let randomResponse = "";
    if (loveScore >= 90) {
    
        randomResponse = "Your LovePendium Score is " + loveScore + "%" + " Soulmates to the Moon!!";
    }
    else if (loveScore >= 70 && loveScore < 90) {

        randomResponse = "Your LovePendium Score is " + loveScore + "%" + " Great Match!";
    }
    else if (loveScore >= 50 && loveScore < 70) {

        randomResponse =  "Your LovePendium Score is " + loveScore +  "%" + " We See This as a Short Term Hodl";
    }
    else if (loveScore >= 30 && loveScore < 50) {

        randomResponse = "Your LovePendium Score is " + loveScore + "%" + " If You Buy, Prepare for a Bumpy Ride";
    }
    else if (loveScore < 30) {

        randomResponse =  "Your LovePendium Score is " + loveScore +  "%" + " Run Far Away!";
    }
    document.getElementById("love-output").innerHTML = randomResponse;
}

function animateExplosion() {
  document.getElementById("heart1").classList.remove("display-none")
    document.getElementById("heart1").classList.add("move-left")

    document.getElementById("heart2").classList.remove("display-none")
    document.getElementById("heart2").classList.add("move-right")

    document.getElementById("heart3").classList.remove("display-none")
    document.getElementById("heart3").classList.add("move-up")

    document.getElementById("heart4").classList.remove("display-none")
    document.getElementById("heart4").classList.add("move-down")

    document.getElementById("heart5").classList.remove("display-none")
    document.getElementById("heart5").classList.add("move-diagonal-right-up")

    document.getElementById("heart6").classList.remove("display-none")
    document.getElementById("heart6").classList.add("move-diagonal-left-down")

    document.getElementById("heart7").classList.remove("display-none")
    document.getElementById("heart7").classList.add("move-diagonal-right-down")

    document.getElementById("heart8").classList.remove("display-none")
    document.getElementById("heart8").classList.add("move-diagonal-left-up")

    

    setTimeout(()=> {
    document.getElementById("heart1").classList.add("display-none") 
     document.getElementById("heart2").classList.add("display-none") 
      document.getElementById("heart3").classList.add("display-none") 
      document.getElementById("heart4").classList.add("display-none") 
      document.getElementById("heart5").classList.add("display-none") 
     document.getElementById("heart6").classList.add("display-none") 
     document.getElementById("heart7").classList.add("display-none")
     document.getElementById("heart8").classList.add("display-none")
    }, 3000);
    
}

function validateForm() {
  let x = document.getElementById("loveInput1").value;
  let y = document.getElementById("loveInput2").value;
  if (x == "" || y == "") {
   /* alert("Input box must not be empty");*/
   let p = document.createElement("p");
    p.setAttribute("id", "message");
    p.innerText = "Input is required.";
    document.getElementById("loveDiv").appendChild(p);
    return false;
  }
  let button = document.getElementById("btn-love");
  button.setAttribute("disabled", true);
  

  loveScores();
    animateExplosion();
    
}

function onInputChange() {
    let button = document.getElementById("btn-love");
    button.removeAttribute("disabled");

    let p = document.getElementById("message");
    if (p) {
        p.parentNode.removeChild(p);
    }
}

button.addEventListener("click", validateForm);

 




