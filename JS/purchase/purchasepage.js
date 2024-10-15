// main 화면으로 이동
const purchasepageToGo = (url) => {
  window.open(url);
}
// 로고
$('#logo_picMain').on('click', () => purchasepageToGo('../../HTML/mainpage/main.html'));
// 홈
$('#purchasepageToHome').on('click', () => purchasepageToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#purchasepageToRegister').on('click', () => purchasepageToGo('../../HTML/register/김건우_register.html'));
// 종료펀딩
$('#purchasepageToEnd').on('click', () => purchasepageToGo('../../HTML/register/end.html'));
// 작품구매
$('#purchasepageTopurchase_1').on('click', () => purchasepageToGo('../../HTML/purchase/purchase1.html'));
// join
$('#purchasepageToJoin').on('click', () => purchasepageToGo('../../HTML/login-join/join.html'));
// Login
$('#purchasepageTologin').on('click', () => purchasepageToGo('../../HTML/login-join/login.html'));
// myPage
$('#purchasepageToMyPagen').on('click', () => purchasepageToGo('../../HTML/mypage/김건우_mypage.html'));


// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function() {
  const query = document.getElementById("searchBox").value;
  if (query) {
      window.location.href = `../../HTML/mainpage/detail.html`;
  } else {
      alert("검색어를 입력해주세요.");
  }
});
