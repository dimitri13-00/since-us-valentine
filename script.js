const startDate = new Date('2018-06-13T00:00:00');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('days').innerText = `${days} Days`;
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(
    2,
    '0',
  );
  document.getElementById('seconds').innerText = String(seconds).padStart(
    2,
    '0',
  );
}

setInterval(updateTimer, 1000);
updateTimer();

/* ===== Heart Animation ===== */
const heartsContainer = document.getElementById('hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  heart.style.width = 10 + Math.random() * 10 + 'px';
  heart.style.height = heart.style.width;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
