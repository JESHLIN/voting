// app.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/webtoons')
      .then(response => response.json())
      .then(data => {
          const carousel = document.getElementById('carousel');
          data.forEach(webtoon => {
              const card = document.createElement('div');
              card.classList.add('webtoon-card');
              card.innerHTML = `
                  <img src="${webtoon.image}" alt="${webtoon.title}">
                  <h2>${webtoon.title}</h2>
                  <p>${webtoon.description}</p>
              `;
              carousel.appendChild(card);
          });
      });
});
