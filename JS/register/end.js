// 화면 이동
const endToGo = (url) => {
    window.open(url);
}

// 로고
$('#logo_picMain').on('click', () => endToGo('../../HTML/mainpage/main.html'));
// 홈 화면 이동
$('#endToHome').on('click', () => endToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#endToRegister').on('click', () => endToGo('../../HTML/register/register.html'));
// 펀딩리스트
$('#pagelistToList').on('click', () => endToGo('../../HTML/mainpage/pagelist.html'));
// 종료펀딩
$('#endToend').on('click', () => endToGo('../../HTML/register/end.html'));
// 작품구매
$('#endTopurchase_1').on('click', () => endToGo('../../HTML/purchase/purchase1.html'));
// 작품등록
$('endTopurchaseregister_1').on('click', () => endToGo('../../register/productregister.html'));
// join
$('#joinBtn').on('click', () => endToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => endToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageBtn').on('click', () => endToGo('../../HTML/mypage/mypage.html'));
// 검색어입력 돋보기
$('#endToSearch').on('click', () => endToGo('../../HTML/purchase/purchase1.html'));
// 작품 구매
$('.buying').on('click', () => endToGo('../../HTML/purchase/purchasepage.html'));
// 사진 클릭
$('.inner img').on('click', () => endToGo('../../HTML/register/endpage.html'));



// ============================================================================



