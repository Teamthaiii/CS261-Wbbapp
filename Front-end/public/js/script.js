function submitLogin() {
    // ดึงค่า username และ password จาก input elements
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ส่งคำขอไปยัง API สำหรับตรวจสอบการล็อกอิน
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TUca60e0320e4efe88cba90a0f45c070c25be27bbda08c1e0581aeed94a060ac6e9814e1ecbc03415609b693cdc78d4de4'
        },
        body: JSON.stringify({
            UserName: username,
            PassWord: password
        })
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('message');
        if (data.status === true) {
            // ถ้าล็อกอินสำเร็จ ให้เก็บข้อมูลที่ดึงมาใน localStorage
            localStorage.setItem('userData', JSON.stringify(data));

            // เปิดแท็บใหม่ไปยัง home.html
            window.location.href = 'home.html';

            // แสดงข้อความสำเร็จในแท็บปัจจุบัน
            messageElement.innerText = 'Login successful!';
        } else {
            // ถ้าล็อกอินไม่สำเร็จ แสดงข้อความผิดพลาด
            messageElement.innerText = 'Login failed. ' + data.message;
        }
    })
    .catch(error => {
        // จัดการข้อผิดพลาดในการเชื่อมต่อ
        document.getElementById('message').innerText = 'Error: ' + error;
    });
}
