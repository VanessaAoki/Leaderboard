/* eslint-disable import/prefer-default-export */
// API endpoint /games/
// Allowed actions: POST
// Mandatory parameters for POST: name (string)

// Create a new game

const getGameID = async () => {
  const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const ID = await fetch(gameURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'More games',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result);
  const regexp = /(Game with ID: )|( added.)/g;
  const gameID = localStorage.gameID || ID.replace(regexp, '');
  if (!localStorage.gameID) localStorage.gameID = gameID;
  return gameID;
};

// Exports
export const gameID = getGameID();