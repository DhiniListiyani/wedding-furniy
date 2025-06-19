// script.js

document.addEventListener("DOMContentLoaded", function () {
  // FullPage.js setup
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['home', 'acara', 'rsvp'],
    navigationTooltips: ['Beranda', 'Acara', 'RSVP'],
    showActiveTooltip: true,
    scrollingSpeed: 1000,
  });

  // Countdown timer
  const countdown = document.getElementById("countdown");
  const targetDate = new Date("2025-12-27T08:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
      <div><span>${days}</span><br><small>Hari</small></div>
      <div><span>${hours}</span><br><small>Jam</small></div>
      <div><span>${minutes}</span><br><small>Menit</small></div>
      <div><span>${seconds}</span><br><small>Detik</small></div>
    `;

    if (distance < 0) {
      clearInterval(timer);
      countdown.innerHTML = "Acara telah berlangsung";
    }
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
});
