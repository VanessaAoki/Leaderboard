/* eslint-disable import/prefer-default-export */
import { myLeaderboard } from './leaderboard';

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

export { renderLeaderboard };