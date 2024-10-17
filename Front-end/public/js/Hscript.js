// ตรวจสอบว่ามีข้อมูลใน localStorage หรือไม่
const userData = localStorage.getItem('userData');
        
if (userData) {
    // แปลงข้อมูล JSON ที่ดึงมาเพื่อใช้งาน
    const data = JSON.parse(userData);
    document.getElementById('Mmessage').innerText = 'Here is your information!!';
    document.getElementById('message').innerHTML = `
        <p><span id="p-info">Student ID : </span>${data.username}</p>
        <p><span id="p-info">Email : </span>${data.email}</p>
        <p><span id="p-info">Name : </span>${data.displayname_en}</p>
        <p><span id="p-info">Faculty : </span>${data.faculty}</p>
    `;
} else {
    // ถ้าไม่มีข้อมูล ให้แสดงข้อความ
    document.getElementById('Mmessage').innerText = 'No user data found.';
}

