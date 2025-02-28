const countdownDate = new Date("February 27, 2025 23:59:59").getTime();

let previousDays = "00";
let previousHours = "00";
let previousMinutes = "00";
let previousSeconds = "00";

const flip = (elementFront, elementBack, newValue, flipCardInner) => {
  if (elementFront.textContent !== newValue) {
    flipCardInner.classList.add("flip");
    setTimeout(() => {
      elementFront.textContent = newValue;
      elementBack.textContent = newValue;
      flipCardInner.classList.remove("flip");
    }, 300); // Half of the flip duration
  }
};

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  // Update the countdown with flipping effect only if the value changes
  if (days !== previousDays) {
    flip(
      document.getElementById("days-front"),
      document.getElementById("days-back"),
      days,
      document.getElementById("days-front").parentElement
    );
    previousDays = days;
  }

  if (hours !== previousHours) {
    flip(
      document.getElementById("hours-front"),
      document.getElementById("hours-back"),
      hours,
      document.getElementById("hours-front").parentElement
    );
    previousHours = hours;
  }

  if (minutes !== previousMinutes) {
    flip(
      document.getElementById("minutes-front"),
      document.getElementById("minutes-back"),
      minutes,
      document.getElementById("minutes-front").parentElement
    );
    previousMinutes = minutes;
  }

  if (seconds !== previousSeconds) {
    flip(
      document.getElementById("seconds-front"),
      document.getElementById("seconds-back"),
      seconds,
      document.getElementById("seconds-front").parentElement
    );
    previousSeconds = seconds;
  }

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".countdown").innerHTML =
      "<strong>ভর্তির সময় শেষ!</strong>";
  }
}, 1000);