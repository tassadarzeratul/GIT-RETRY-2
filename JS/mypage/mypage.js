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


// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function() {
    const query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `../../HTML/mainpage/detail.html`;
    } else {
        alert("검색어를 입력해주세요.");
    }
});