/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
// no event.preventDefault()?


function greet(t) {
    // let hour = t.split(":")[0]
    let hour = t.replace(":", "")
    if (hour < 1200) {
      return "Good Morning"
    } else if (hour > 1700) {
      return "Good Evening"
    } else{
      return "Good Afternoon"
    }
}

let displayMessage = (g) => {
  document.getElementById("greeting").innerText = g
}