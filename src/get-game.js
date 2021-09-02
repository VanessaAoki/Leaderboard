// /games/ endpoint
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// create a new game or get an existing one at localStorage
const getGameID = () => {
  if (localStorage === undefined) {
    const gameID = await fetch( baseURL, {
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
  };
};

// Exports
export { getGameID };