function createHeart() {
  const heart = document.createElement('span');
  heart.innerHTML = '💖';
  heart.classList.add('heart');

  const x = Math.random() * window.innerWidth;
  heart.style.left = `${x}px`;

  return heart;
}

function showHearts() {
  const heartContainer = document.getElementById('heart-container');

  for (let i = 0; i < 10; i++) {
    const heart = createHeart();
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
