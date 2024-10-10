// 화면 이동
const adminToGo = (url) => {
    window.open(url);
}
// 홈 화면 이동
$('#adminToHome').on('click', () => adminToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#adminToRegister').on('click', () => adminToGo('../../HTML/register/김건우_register.html'));
// 종료펀딩
$('#adminToend').on('click', () => adminToGo('../../HTML/register/end.html'));
// 작품구매
$('#adminTopurchase_1').on('click', () => adminToGo('../../HTML/purchase/purchase1.html'));
// join
$('#adminToJoin').on('click', () => adminToGo('../../HTML/login-join/join.html'));
// Login
$('#adminToLogin').on('click', () => adminToGo('../../HTML/login-join/login.html'));
// myPage
$('#adminToMyPage').on('click', () => adminToGo('../../HTML/mypage/김건우_mypage.html'));
// 검색어입력 돋보기
$('#adminToSearch').on('click', () => adminToGo('../../HTML/purchase/purchase1.html'));
