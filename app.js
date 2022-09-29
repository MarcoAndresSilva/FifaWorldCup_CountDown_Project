const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const tournament = document.querySelector('.tournament');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 10, 20, 19, 30, 0); // si quiero la fecha actual le saco los aprametros
console.log(futureDate);

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

tournament.textContent = `World Cup begins on ${weekday} ${date} ${month} ${year} at ${hours}:${minutes}pm`;

//la fecha a la que voy a allegar en ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);

  // 1seg = 1000ms
  // 1min = 60seg
  // 1hr = 60min
  // 1d = 24hr

  // valores en ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  console.log(oneDay, oneHour, oneMinute);

  //calculando todos los valores
  let days = t / oneDay;
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(`faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`);

  // definir arreglo de valores
  const values = [days, hours, minutes, seconds];

  function format(item) { // si el numero en el deadline es menor a 10 se le agrega un cero delante para formatear la fecha
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">The tournament start Today</h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()