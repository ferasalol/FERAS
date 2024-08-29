// عرض الأقسام المختلفة بناءً على الزر الذي يتم الضغط عليه
function showSection(sectionId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

// بدء اللعب والانتقال إلى قسم اللعبة
function startGame() {
    showSection('game');
}

// زيادة النقاط
function increasePoints() {
    let scoreElement = document.getElementById('score');
    let currentScore = parseInt(scoreElement.textContent.split(": ")[1]);
    scoreElement.textContent = 'النقاط: ' + (currentScore + 1);
}
