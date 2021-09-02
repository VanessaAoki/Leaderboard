// API endpoint /games/ 
// Allowed actions: POST 
// Mandatory parameters for POST: name (string)
const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// Create a new game or get an existing one at localStorage
const getGameID = () => {
  if (localStorage === undefined) {
    const gameID = await fetch( gameURL, {
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
      return gameID;
  } else {
    const gameID = localStorage.gameID;
    return gameID;
  };
};

// Exports
export { getGameID };