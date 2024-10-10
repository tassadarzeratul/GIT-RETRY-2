// 화면 이동
const detail1ToGo = (url) => {
    window.open(url);
}
// 홈
$('#detail1ToHome').on('click', () => detail1ToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#detail1ToRegister').on('click', () => detail1ToGo('../../HTML/register/김건우_register.html'));
// 종료펀딩
$('#detail1ToEnd').on('click', () => detail1ToGo('../../HTML/register/end.html'));
// 작품구매
$('#detail1Topurchase_1').on('click', () => detail1ToGo('../../HTML/purchase/purchase1.html'));
// join
$('#detail1ToJoin').on('click', () => detail1ToGo('../../HTML/login-join/join.html'));
// Login
$('#detail1Tologin').on('click', () => detail1ToGo('../../HTML/login-join/login.html'));
// myPage
$('#detail1ToMyPagen').on('click', () => detail1ToGo('../../HTML/mypage/김건우_mypage.html'));
// 검색어입력 돋보기
$('#detail1SearchI').on('click', () => detail1ToGo('../../HTML/purchase/purchase1.html'));
