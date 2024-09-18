// وظيفة لإضافة منتج إلى السلة
function addToCart() {
    const notification = document.getElementById('cart-notification');
    notification.classList.remove('hidden');
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// إغلاق إشعار السلة
function closeNotification() {
    const notification = document.getElementById('cart-notification');
    notification.style.display = 'none';
}
