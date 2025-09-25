function updateClock() {
  let now = new Date();

  // Pobieramy godziny, minuty i sekundy
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Formatowanie godzin, minut i sekund do 2 cyfr
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  // Łączymy godziny, minuty i sekundy
  let timeString = hours + ':' + minutes + ':' + seconds;

  // Wyświetlamy zegar na stronie
  document.getElementById('clock').textContent = timeString;
}

// Uruchamiamy funkcję co 1000 ms (1 sekunda)
setInterval(updateClock, 1000);

// Wywołujemy raz, aby od razu pokazać czas
updateClock();