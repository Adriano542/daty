function updateClock() {
      let now = new Date();

      // Pobieramy godziny, minuty i sekundy
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');

      // Łączymy godziny, minuty i sekundy
      let timeString = `${hours}:${minutes}:${seconds}`;

      // Wyświetlamy zegar na stronie
      document.getElementById('clock').textContent = timeString;
    }

    // Uruchamiamy funkcję co 1000 ms (1 sekunda)
    setInterval(updateClock, 1000);

    // Wywołujemy raz, aby od razu pokazać czas
    updateClock();