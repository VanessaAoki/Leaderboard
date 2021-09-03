// API endpoint /games/:id/scores/
// URL parameters: id (unique identifier of the game)
// Allowed actions: POST, GET
// Mandatory parameters for POST: user (string), score (number)
// Mandatory parameters for GET: none
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GZuf5tkUFwlzMAjaXw1X/scores/';

// Get scores from our game
const getScores = () => fetch(scoresURL)
  .then((response) => response.json())
  .then((json) => json.result);

// Create a new score for our game
const postScores = (e) => {
  e.preventDefault();
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');
  return fetch(scoresURL, {
    method: 'POST',
    body: JSON.stringify({
      user: `${inputName.value}`,
      score: `${inputScore.value}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(() => {
      window.location.reload();
    });
};

export { getScores, postScores };