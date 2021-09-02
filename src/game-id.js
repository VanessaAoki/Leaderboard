// API endpoint /games/ 
// Allowed actions: POST 
// Mandatory parameters for POST: name (string)

// Create a new game or get an existing one at localStorage

const getGameID = async () => {
  const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const ID = await fetch(gameURL, {
    method: 'POST',
    body: JSON.stringify({
      name: "Vanessa's game",
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result);
  return ID;
};


// Exports
export const gameID = getGameID();