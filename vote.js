// vote.js
document.addEventListener('DOMContentLoaded', () => {
  const voteButtons = document.querySelectorAll('.voting-section button');

  voteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          const version = e.target.dataset.version;

          fetch('/api/vote', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ id, version })
          })
              .then(response => response.json())
              .then(data => {
                  console.log('Vote recorded', data);
              });
      });
  });
});
