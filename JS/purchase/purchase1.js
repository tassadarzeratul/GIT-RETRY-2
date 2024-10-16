// main 화면으로 이동
const mainToGo = (url) => {
  window.open(url);
}
// 로고
$('#logo_picMain').on('click', () => mainToGo('../../HTML/mainpage/main.html'));
// 홈
$('#mainToHome').on('click', () => mainToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#mainToRegister').on('click', () => mainToGo('../../HTML/register/register.html'));
// 펀딩리스트
$('#mainToList').on('click', () => mainToGo('../../HTML/mainpage/pagelist.html'));
// 종료펀딩
$('#mainToend').on('click', () => mainToGo('../../HTML/register/end.html'));
// 작품구매
$('#mainTopurchase_1').on('click', () => mainToGo('../../HTML/purchase/purchase1.html'));
// join
$('#joinBtn').on('click', () => mainToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => mainToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageBtn').on('click', () => mainToGo('../../HTML/mypage/mypage.html'));
// 서브 사진
$('.pic_list').on('click', () => mainToGo('../../HTML/mainpage/detail.html'));
// 전체보기
$('#allPic').on('click', () => mainToGo('../../HTML/mainpage/pagelist.html'));
// 오른쪽 사진
$('.right .pic').on('click', () => mainToGo('../../HTML/mainpage/detail.html'));
// 아래쪽 사진
$('.otherRight img').on('click', () => mainToGo('../../HTML/mainpage/detail.html'));









//슬라이드
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function() {
  const query = document.getElementById("searchBox").value;
  if (query) {
      window.location.href = `../../HTML/mainpage/detail.html`;
  } else {
      alert("검색어를 입력해주세요.");
  }
});