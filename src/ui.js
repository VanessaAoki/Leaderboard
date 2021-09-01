/* eslint-disable import/prefer-default-export */
import { myLeaderboard } from './leaderboard';

const mainUI = () => {
  const list = document.getElementById('root');
  list.innerHTML = `<div class="body-container">
    <h1>Leaderboard</h1>
    <div class="leaderboard-container">
      <section class="recent-scores">
        <div class="recent-scores-header">
          <h2>Recent scores</h2>
          <button>Refresh</button>
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
    </div>;
  </div>`;
  renderLeaderboard();
};

const renderLeaderboard = () => {
  const list = document.getElementById('leaderboard-list');
  list.innerHTML = '';
  myLeaderboard.forEach((score) => {
    const liScore = document.createElement('li');
    liScore.classList.add('score-li');
    liScore.innerHTML = `${score.name}: ${score.score}`;
    list.appendChild(liScore);
  });
};

export { mainUI };