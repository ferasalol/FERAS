let leaderboard = {}; // كائن لحفظ نقاط المتصدرين

// دالة لزيادة النقاط
function increasePoints() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim(); // الحصول على اسم المستخدم وإزالة المسافات الزائدة

    if (username === "") {
        alert("يرجى إدخال اسم المستخدم!");
        return;
    }

    // تحديث النقاط للمستخدم
    if (!leaderboard[username]) {
        leaderboard[username] = 0; // إذا لم يكن المستخدم موجودًا، إنشاء مستخدم جديد في القائمة
    }
    leaderboard[username]++; // زيادة النقاط للمستخدم

    // تحديث عرض النقاط
    document.getElementById('points').innerText = `النقاط: ${leaderboard[username]}`;

    // تحديث قائمة المتصدرين
    updateLeaderboard();
}

// دالة لتحديث قائمة المتصدرين
function updateLeaderboard() {
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
