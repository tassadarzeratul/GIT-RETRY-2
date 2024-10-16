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
$('#allPic, #mainTopurchase_1').on('click', () => mainToGo('../../HTML/purchase/purchase1.html'));
// join
$('#joinBtn').on('click', () => mainToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => mainToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageBtn').on('click', () => mainToGo('../../HTML/mypage/mypage.html'));
// 서브 사진
$('.pic_list').on('click', () => mainToGo('../../HTML/mainpage/detail.html'));
// 오른쪽 사진
$('.right .pic').on('click', () => mainToGo('../../HTML/mainpage/detail.html'));
// 아래쪽 사진
$('.otherRight img').on('click', () => mainToGo('../../HTML/mainpage/detail.html'));



// main slider 동작구현 =================================================================

let currentIndex = 0;
// 현재 표시되고 있는 이미지의 인덱스 초기값 0

function slideImages() {
    const slider = document.querySelector('.pic_slider');
    // pic-slider 요소를 선택
    const totalImages = document.querySelectorAll('.pic_slider li').length;
    // pic-slider li의 요소 개수를 세어 totalImages에 저장
    currentIndex++;
    // 인덱스를 1씩 증가시킴

    if (currentIndex >= totalImages) {
        currentIndex = 0;
        // 현재 인덱스가 이미지의 총 개수보다 크거나 같다면 0으로 초기호ㅘ
    }
    slider.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`;
    // 슬라이더를 얼마나 왼쪽으로 이동해야 하는지를 계산
    // 3개의 이미지가 있을 때 첫번째는 0%, 두번째는 33.33% 세번째는 66.67% 이동 위치
}

setInterval(slideImages, 3000);


// sub slider 동작구현 =================================================================
document.querySelectorAll('sub .pic_container').forEach(container => {
    // 각 슬라이드 영역의 클래스명 pic_container
    const picList = container.querySelector('.pic_list');
    const images = picList.querySelectorAll('li img');
    const liIndex = container.querySelectorAll("li"); // class명 list인 li태그         
    let currentIndex = 0;

    container.querySelector('.prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        // 이전 이미지로 이동        
        for (let i = 0; i < liIndex.length; i++) { // li태그 전체 숨김 처리
            liIndex[i].style.display = "none";
        }
        liIndex[currentIndex].style.display = "block";

    });

    container.querySelector('.nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        // 다음 이미지로 이동 (0)        
        for (let i = 0; i < liIndex.length; i++) { // li태그 전체 숨김 처리
            liIndex[i].style.display = "none";
        }
        liIndex[currentIndex].style.display = "block";
    });
});


// 현재날짜,시간 표시 =================================================================
function displayTime() {
    let now = new Date();
    document.getElementById("timeDisplay").innerText = now.toLocaleString();
}
setInterval(displayTime, 1000); // 1초마다 갱신


// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `../../HTML/mainpage/detailclone.html`;
    } else {
        alert("검색어를 입력해주세요.");
    }
});

// 로그인 정보 =================================================================

// document.addEventListener('DOMContentLoaded', () => {
//     const joinBtn = document.getElementById('joinBtn');
//     const loginBtn = document.getElementById('loginBtn');
//     const logoutBtn = document.getElementById('logoutBtn');
//     const mypageBtn = document.getElementById('myPageBtn');

//     // 로그인 상태 확인
//     const isLoggedIn = localStorage.getItem('isLoggedIn');

//     // 로그인되어 있으면 Join과 Login 버튼 숨기기
//     if (isLoggedIn === 'true') {
//         joinBtn.style.display = 'none';
//         loginBtn.style.display = 'none';
//         logoutBtn.style.display = 'block';
//         mypageBtn.style.display = 'block';
//     } else {
//         joinBtn.style.display = 'block';
//         loginBtn.style.display = 'block';
//         logoutBtn.style.display = 'none';
//         mypageBtn.style.display = 'none';
//     }
// });

// document.getElementById('logoutBtn').addEventListener('click', () => {
//     localStorage.setItem('isLoggedIn', 'false'); // 로그인 상태 해제
//     location.reload(); // 페이지 새로고침
// });


