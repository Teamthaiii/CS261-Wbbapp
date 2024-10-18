// ตรวจสอบว่ามีข้อมูลใน localStorage หรือไม่
const userData = localStorage.getItem('userData');
        
if (!userData) {
    // ถ้าไม่มีข้อมูล ให้เปลี่ยนเส้นทางกลับไปยัง index.html
    window.location.href = 'index.html';
} else {
    // แสดงข้อมูลผู้ใช้
    const data = JSON.parse(userData);
    document.getElementById('Mmessage').innerText = 'Here is your information!!';
    document.getElementById('message').innerHTML = `
        <p><span id="p-info">Student ID : </span>${data.username}</p>
        <p><span id="p-info">Email : </span>${data.email}</p>
        <p><span id="p-info">Name : </span>${data.displayname_en}</p>
        <p><span id="p-info">Faculty : </span>${data.faculty}</p>
    `;
}

// เมื่อผู้ใช้กด Logout ให้ลบข้อมูล userData และเปลี่ยนเส้นทางกลับไปหน้า index.html
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('userData');
    window.location.href = 'index.html';
});

// ตรวจจับการออกจากหน้าเพจ (เช่นกด Back หรือปิด)
window.addEventListener('popstate', function() {
    localStorage.removeItem('userData');
    window.location.href = 'index.html';  // ถ้ากลับมา ให้รีไดเรกต์ไปที่หน้า index.html
});

// ป้องกันการแคชของหน้าโดยตั้งค่า no-cache headers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('ServiceWorker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
    });
}