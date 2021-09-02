// API endpoint /games/:id/scores/
// URL parameters: id (unique identifier of the game)
// Allowed actions: POST, GET
// Mandatory parameters for POST: user (string), score (number)
// Mandatory parameters for GET: none

import { getGameID } from "./game-id";

const scoresURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getGameID}/scores/`;

// Get scores from our game
const getScores = () => {
  return fetch(scoresURL)
    .then((response) => response.json())
    .then((json) => json.result);
}

// Create a new score for our game
const postScores = () => {
  return fetch(scoresURL, {
    method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  })
    .then((response) => response.json())
    .then((json) => json.result);
}