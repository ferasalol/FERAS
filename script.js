let points = 0; // المتغير لحفظ عدد النقاط
let leaderboard = {}; // كائن لحفظ نقاط المتصدرين

// دالة لزيادة النقاط
function increasePoints() {
    points++; // زيادة النقاط بمقدار 1
    document.getElementById('points').innerText = `النقاط: ${points}`; // تحديث عرض النقاط

    // تحديث قائمة المتصدرين
    updateLeaderboard("المستخدم", points);
}

// دالة لتحديث قائمة المتصدرين
function updateLeaderboard(username, points) {
    leaderboard[username] = points; // تحديث نقاط المستخدم

    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = ''; // مسح القائمة الحالية

    // ترتيب المتصدرين حسب النقاط
    const sortedLeaderboard = Object.entries(leaderboard).sort((a, b) => b[1] - a[1]);

    // إضافة العناصر المحدثة للقائمة
    sortedLeaderboard.forEach(([user, points]) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${user}: ${points} نقاط`;
        leaderboardList.appendChild(listItem);
    });
}
