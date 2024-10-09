// main 화면으로 이동
// const mainToMain = () => {
//     window.open('../../HTML/mainpage/main.html', '_blank');
// }
// logo_picMain.addEventListener('click', mainToMain);

const mainToMain_1 = () => {
    window.open('../../HTML/mainpage/main.html', '_blank');
}
logo_picMainHome.addEventListener('click', mainToMain_1);

// Join 화면으로 이동
const mainToJoin = () => {
    window.open('../../HTML/login-join/join.html', '_blank');
}
joinBtn.addEventListener('click', mainToJoin);

// Login 화면으로 이동
const mainToLogin = () => {
    window.open('../../HTML/login-join/login.html');
}
loginBtn.addEventListener('click', mainToLogin);

// Mapage 화면으로 이동
const mainToMypage = () => {
    window.open('../../HTML/mypage/김건우_mypage.html');
}
myPageBtn.addEventListener('click', mainToMypage);

// 펀딩등록 화면으로 이동
const mainToRegister = () => {
    window.open('../../HTML/register/김건우_register.html');
}
register.addEventListener('click', mainToRegister);

// 종료펀딩 화면으로 이동
const mainToEnd = () => {
    window.open('../../HTML/register/end.html');
}
end.addEventListener('click', mainToEnd);

// 작품구매 화면으로 이동
const mainToPurchase_1 = () => {
    window.open('../../HTML/register/purchase_1.html');
}
purchase_1.addEventListener('click', mainToPurchase_1);




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

// main slider 동작구현 끝 =================================================================

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

// sub slider 동작구현 끝 =================================================================