// main 화면으로 이동
const pagelistToGo = (url) => {
    window.open(url);
}
// 로고
$('#logo_picMain').on('click', () => pagelistToGo('../../HTML/mainpage/main.html'));
// 홈
$('#pagelistToHome').on('click', () => pagelistToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#pagelistToRegister').on('click', () => pagelistToGo('../../HTML/register/register.html'));
// 펀딩리스트
$('#pagelistToList').on('click', () => pagelistToGo('../../HTML/mainpage/pagelist.html'));
// 종료펀딩
$('#pagelistToend').on('click', () => pagelistToGo('../../HTML/register/end.html'));
// 작품구매
$('#pagelistTopurchase_1').on('click', () => pagelistToGo('../../HTML/purchase/purchase1.html'));
// join
$('#joinBtn').on('click', () => pagelistToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => pagelistToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageBtn').on('click', () => pagelistToGo('../../HTML/mypage/mypage.html'));
// 서브 사진
$('.pic_list').on('click', () => pagelistToGo('../../HTML/mainpage/detail.html'));
// 오른쪽 사진
$('.right .pic').on('click', () => pagelistToGo('../../HTML/mainpage/detail.html'));
// 아래쪽 사진
$('.otherRight img').on('click', () => pagelistToGo('../../HTML/mainpage/detail.html'));




