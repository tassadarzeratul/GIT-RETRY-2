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
// join
$('#joinBtn').on('click', () => endToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => endToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageBtn').on('click', () => endToGo('../../HTML/mypage/mypage.html'));
// 검색어입력 돋보기
$('#endToSearch').on('click', () => endToGo('../../HTML/purchase/purchase1.html'));
// 작품 구매
$('.buying').on('click', () => endToGo('../../HTML/purchase/purchasepageclone.html'));
// 사진 클릭
$('.inner img').on('click', () => endToGo('../../HTML/register/endpageclone.html'));



// ============================================================================

// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `../../HTML/mainpage/detail.html`;
    } else {
        alert("검색어를 입력해주세요.");
    }
});


// 슬라이드 동작 구현
let currentSlide = 0;
const slides = document.querySelectorAll(".pic_list");
const totalSlides = slides.length;

document.querySelector(".nextBtn").addEventListener("click", function () {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlidePosition();
    } else {
        currentSlide = 0; // 마지막 슬라이드에서 처음으로
        updateSlidePosition();
    }
});

document.querySelector(".prevBtn").addEventListener("click", function () {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    } else {
        currentSlide = totalSlides - 1; // 첫 슬라이드에서 마지막으로
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    const slideWidth = document.querySelector(".pic_container").offsetWidth;
    document.querySelector(".pic_list").style.transform = `translateX(-${currentSlide * slideWidth
        }px)`;
}



