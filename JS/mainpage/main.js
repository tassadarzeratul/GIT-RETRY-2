// Join 화면으로 이동
const moveToJoin = () => {
    location.replace('../../HTML/login-join/join.html');
}
joinBtn.addEventListener('click', moveToJoin);


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

// document.querySelectorAll('sub .pic_container').forEach(container => {
//     const picList = container.querySelector('.pic_list');
//     const images = picList.querySelectorAll('li img');
//     let currentIndex = 0;

//     container.querySelector('.btn1').addEventListener('click', () => {
//         console.log('.list');
//         currentIndex = (currentIndex - 1 + images.length) % images.length; // 이전 이미지로 이동        
//         container.querySelector(".list").style.display = "none";
//         container.querySelector("#list" + currentIndex).style.display = "block"; // display : block;
//     });

//     container.querySelector('.btn2').addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 이동 (0)
//         container.querySelector(".list").style.display = "none";
//         container.querySelector("#list" + currentIndex).style.display = "block"; // display : block;
//     });
// });


// document.querySelectorAll('sub .pic_container').forEach(container => {
//     const picList = container.querySelector('.pic_list');
//     const images = picList.querySelectorAll('li img');
//     const allLists = container.querySelectorAll('.list'); // 모든 list 요소들 가져오기
//     let currentIndex = 0;

//     const updateDisplay = () => {
//         allLists.forEach(list => list.style.display = "none"); // 모든 리스트 숨기기
//         allLists[currentIndex].style.display = "block"; // 현재 인덱스 리스트 표시
//     };

//     // updateDisplay(); // 첫 번째 이미지 표시

//     container.querySelector('.btn1').addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + images.length) % images.length; // 이전 이미지로 이동        
//         updateDisplay(); // 화면 업데이트
//     });

//     container.querySelector('.btn2').addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 이동
//         updateDisplay(); // 화면 업데이트
//     });
// });

document.querySelectorAll('sub .pic_container').forEach(container => {
    const picList = container.querySelector('.pic_list');
    const images = picList.querySelectorAll('li img');
    const liIndex = container.querySelectorAll(".list"); // class명 list인 li태그         
    let currentIndex = 0;

    container.querySelector('.btn1').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // 이전 이미지로 이동        
        // picList.style.transform = 'translate(0vw)'; // 슬라이드 이동
        for (let i = 0; i < liIndex.length; i++) { // li태그 전체 숨김 처리
            liIndex[i].style.display = "none";
        }
        container.querySelector("#list" + currentIndex).style.display = "block"; // display : block; 
    });

    container.querySelector('.btn2').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 이동 (0)        
        for (let i = 0; i < liIndex.length; i++) { // li태그 전체 숨김 처리
            liIndex[i].style.display = "none";
        }
        container.querySelector("#list" + currentIndex).style.display = "block"; // 하나의 li만 보이기
    });
});
