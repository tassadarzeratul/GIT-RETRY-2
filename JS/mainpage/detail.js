// 화면 이동
const detail1ToGo = (url) => {
    window.open(url);
}
// 로고
$('#logo_picMain').on('click', () => detail1ToGo('../../HTML/mainpage/main.html'));
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


// join창에서 약관보기 클릭 시 저작권으로 이동
const urlParams = new URLSearchParams(window.location.search);
const scrollTo = urlParams.get('scrollTo');

if (scrollTo) {
    const targetElement = document.getElementById(scrollTo);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
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

// 스크롤
document.querySelectorAll(".scroll_move").forEach(function(button) {
    button.addEventListener("click", function() {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
