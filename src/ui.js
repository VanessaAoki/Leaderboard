/* eslint-disable import/prefer-default-export */
import { getScores, postScores } from './game-score';

getScores().then(() => {
  const buttonRefresh = document.getElementById('button-refresh');
  const buttonSubmit = document.getElementById('button-submit');

  const renderLeaderboard = async () => {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';
    const myLeaderboard = await getScores();
    myLeaderboard.forEach((score) => {
      const liScore = document.createElement('li');
      liScore.classList.add('score-li');
      liScore.innerHTML = `${score.user}: ${score.score}`;
      list.appendChild(liScore);
    });
  };

  buttonRefresh.addEventListener('click', () => {
    renderLeaderboard();
  });
  buttonSubmit.addEventListener('click', (...e) => {
    postScores(...e);
  });
  window.addEventListener('DOMContentLoaded', renderLeaderboard());
});

const mainUI = () => {
  const list = document.getElementById('root');
  list.innerHTML = `<div class="body-container">
    <h1>Leaderboard</h1>
    <div class="leaderboard-container">
      <section class="recent-scores">
        <div class="recent-scores-header">
          <h2>Recent scores</h2>
          <button id="button-refresh">Refresh</button>
        </div>
        <ul id="leaderboard-list"></ul>
      </section>
      <section class="add-score">
        <h2>Add your score</h2>
        <form action="submit" id="add-form">
          <input type="text" id="input-name" placeholder="Your name">
          <input type="text" id="input-score" placeholder="Your score">
          <input type="submit" value="Submit" id="button-submit">
        </form>
      </section>
    </div>
  </div>`;
};

// Exports
export { mainUI };