// 화면 이동
const myPageToGo = (url) => {
    window.open(url);
}
// 홈
$('#myPageToHome').on('click', () => myPageToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#myPageToRegister').on('click', () => myPageToGo('../../HTML/register/김건우_register.html'));
// 종료펀딩
$('#myPageToend').on('click', () => myPageToGo('../../HTML/register/end.html'));
// 작품구매
$('#myPageTopurchase_1').on('click', () => myPageToGo('../../HTML/purchase/purchase1.html'));
// join
$('#mypageTojoin').on('click', () => myPageToGo('../../HTML/login-join/join.html'));
// Login
$('#mypageTologin').on('click', () => myPageToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageTomyPage').on('click', () => myPageToGo('../../HTML/mypage/김건우_mypage.html'));
