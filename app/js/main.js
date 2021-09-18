let date = new Date("23 Septembers 2021 ");
function counts() {
  let now = new Date();
  gap = date - now;
  console.log(gap);

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
counts();

setInterval(counts, 1000);
