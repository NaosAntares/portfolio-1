const currentTime = () => {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + midday; /* adding time to the div */
      let t = setTimeout(currentTime, 1000); /* setting timer */
    
    return hour
    }
  
function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
} 

function setQuote() {
  let date = new Date();
  let time = date.getHours();
  if (time >= 9 & time < 14) {
    document.getElementById("clock-quote").innerText = "What's in for lunch? — ";
  } else if (time >= 14 & time < 17) {
    document.getElementById("clock-quote").innerText = "Time for a coffe break? — ";
  } else if (time < 9 || time >= 17 ) {
    document.getElementById("clock-quote").innerText = "Working late? — ";
}
}

currentTime();
setQuote();
