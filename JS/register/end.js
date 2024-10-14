// 화면 이동
const endToGo = (url) => {
    window.open(url);
}
// 홈 화면 이동
$('#endToHome').on('click', () => endToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#endToRegister').on('click', () => endToGo('../../HTML/register/김건우_register.html'));
// 종료펀딩
$('#endToend').on('click', () => endToGo('../../HTML/register/end.html'));
// 작품구매
$('#endTopurchase_1').on('click', () => endToGo('../../HTML/purchase/purchase1.html'));
// join
$('#endToJoin').on('click', () => endToGo('../../HTML/login-join/join.html'));
// Login
$('#endToLogin').on('click', () => endToGo('../../HTML/login-join/login.html'));
// myPage
$('#endToMyPage').on('click', () => endToGo('../../HTML/mypage/김건우_mypage.html'));
// 검색어입력 돋보기
$('#endToSearch').on('click', () => endToGo('../../HTML/purchase/purchase1.html'));
// 사진 클릭
$('.inner').on('click', () => endToGo('../../HTML/purchase/purchase1.html'));
// ============================================================================
