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
$('#pagelistToJoin').on('click', () => pagelistToGo('../../HTML/login-join/join.html'));
// Login
$('#pagelistToLogin').on('click', () => pagelistToGo('../../HTML/login-join/login.html'));
// myPage
$('#pagelistToMyPage').on('click', () => pagelistToGo('../../HTML/mypage/mypage.html'));
// 서브 사진
$('.pic_list').on('click', () => pagelistToGo('../../HTML/mainpage/detail.html'));
// 오른쪽 사진
$('.right .pic').on('click', () => pagelistToGo('../../HTML/mainpage/detail.html'));
// 아래쪽 사진
$('.otherRight img').on('click', () => pagelistToGo('../../HTML/mainpage/detail.html'));


// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `../../HTML/mainpage/detailclone.html`;
    } else {
        alert("검색어를 입력해주세요.");
    }
});


let currentSlide = 0;
const slidesToShow = 4;  // 한 번에 보여줄 슬라이드 수
const totalSlides = document.querySelectorAll('.pic_list .inner').length;
const slideWidth = document.querySelector('.pic_container').offsetWidth;
const sliderWrapper = document.querySelector('.pic_list');

// 오른쪽 버튼 클릭 시 슬라이드를 다음으로 이동
document.querySelector('.nextBtn').addEventListener('click', function () {
    if (currentSlide < totalSlides / slidesToShow - 1) {
        currentSlide++;
        updateSliderPosition();
    }
});

// 왼쪽 버튼 클릭 시 슬라이드를 이전으로 이동
document.querySelector('.prevBtn').addEventListener('click', function () {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
});

// 슬라이드 위치 업데이트
function updateSliderPosition() {
    const slideMove = currentSlide * slideWidth;
    sliderWrapper.style.transform = `translateX(-${slideMove}px)`;
}

