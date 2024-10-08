// main 화면으로 이동
const adminToMainBtn = document.getElementById('adminToMainBtn');

const adminToMain = () => {
    location.replace('../../HTML/mainpage/main.html');
}
adminToMainBtn.addEventListener('click', adminToMain);

