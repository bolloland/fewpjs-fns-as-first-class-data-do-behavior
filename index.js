/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hoursMinutes = timeString.split(':');
  const hour = parseInt(hoursMinutes[0]);
  if (hour < 12) return "Good Morning";
  else if (hour > 17) return "Good Evening";
 else return "Good Afternoon";
  }

/* Write your implementation of displayMessage() */
function displayMessage(goodMessage) {
  document.getElementById("greeting").innerText = goodMessage;
}

