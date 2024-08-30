let score = 0;
let leaderboard = [];

function startGame() {
    showSection('game');
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function increasePoints() {
    const playerName = document.getElementById('playerName').value;
    score++;
    document.getElementById('score').innerText = `النقاط: ${score}`;

    if (playerName) {
        updateLeaderboard(playerName, score);
    }
}

function updateLeaderboard(playerName, score) {
    const playerIndex = leaderboard.findIndex(player => player.name === playerName);
    if (playerIndex !== -1) {
        leaderboard[playerIndex].score = score;
    } else {
        leaderboard.push({ name: playerName, score: score });
    }

    renderLeaderboard();
}

function renderLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';

    leaderboard.sort((a, b) => b.score - a.score).forEach(player => {
        const listItem = document.createElement('li');
        listItem.innerText = `${player.name}: ${player.score} نقاط`;
        leaderboardList.appendChild(listItem);
    });
}
