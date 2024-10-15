// 팝업창
function showPopup() { window.open("김건우_endpop.html", "a", "width=600, height=1800"); }



// main 화면으로 이동
const mainToGo = (url) => {
    window.open(url);
}
// 로고
$('#logo_picMain').on('click', () => mainToGo('../../HTML/mainpage/main.html'));
// 홈
$('#mainToHome').on('click', () => mainToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#mainToRegister').on('click', () => mainToGo('../../HTML/register/김건우_register.html'));
// 종료펀딩
$('#mainToend').on('click', () => mainToGo('../../HTML/register/end.html'));
// 작품구매
$('#allPic, #mainTopurchase_1').on('click', () => mainToGo('../../HTML/purchase/purchase1.html'));
// join
$('#joinBtn').on('click', () => mainToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => mainToGo('../../HTML/login-join/login.html'));
// myPage
$('#endToMyPage').on('click', () => mainToGo('../../HTML/mypage/mypage.html'));


// 슬라이드

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// 검색어를 입력 후 돋보기를 누르면 상세페이지 이동
document.getElementById("searchI").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `../../HTML/mainpage/detail.html`;
    } else {
        alert("검색어를 입력해주세요.");
    }
});



// 커뮤니티 댓글 기능

// DOM 요소 선택
const commentText = document.getElementById('commentText');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');

// 댓글 추가 함수
const addComment = () => {
    const text = commentText.value.trim(); // 댓글 내용 가져오기 및 공백 제거

    if (text === '') {
        alert('댓글을 입력해주세요.');
        return;
    }

    // 새로운 댓글을 담을 li 요소 생성
    const newComment = document.createElement('li');
    newComment.classList.add('comment-item');

    // 댓글의 작성자 및 내용 추가
    newComment.innerHTML = `
        <span class="author">익명 사용자</span>
        <p class="text">${text}</p>
    `;

    // 댓글 리스트에 새로운 댓글 추가
    commentList.appendChild(newComment);

    // 댓글 작성 후 입력창 초기화
    commentText.value = '';
};

// 댓글 작성 버튼 클릭 시 addComment 함수 호출
submitComment.addEventListener('click', addComment);

// Enter 키를 눌렀을 때도 댓글 작성
commentText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // 줄바꿈 방지
        addComment();
    }
});



// const commentBtn = document.querySelector("#commentFrm");
// const commentList = document.querySelector("#comment-list");
// // console.log(commentList);
// const total = document.querySelector("h4 > span");
// const list = [];

// // console.log(commentBtn);

// function Comment(content) {
//     this.userid = "cloudcoke";
//     this.content = content;
//     this.date = "2024-10-10";
// }



// function createRow(userid, content, date) {
//     const ul = document.createElement("ul");
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");

//     // console.log(ul);
//     // console.log(li1);
//     // console.log(li2);
//     // console.log(li3);

//     ul.append(li1);
//     ul.append(li2);
//     ul.append(li3);

//     ul.setAttribute("class", "comment-row");
//     ul1.setAttribute("class", "comment-id");
//     ul2.setAttribute("class", "comment-content");
//     ul3.setAttribute("class", "comment-date");

//     li1.innerHTML = userid;
//     li2.innerHTML = content;
//     li3.innerHTML = date;

//     return ul;

// }

// function drawing() {
//     commentList.innerHTML = "";
//     for (let i = list.length - 1; i >= 0; i--) {
//         const row = createRow(list[i].userid, list[i].content, list[i].date);
//         commentList.append(row);
//     }
// }

// function totalRecord() {
//     total.innerHTML = `(${list.length})`;
// }

// function commentBtnHandler(e) {
//     e.preventDefault();
//     //     console.dir(e.target);
//     //     console.log(e.target[0]);
//     //     console.log(e.target[0].value);
//     //     console.log(e.target.elements[0]);
//     //     console.log(e.target.elements[0].value);
//     //     console.log(e.target.elements.content);
//     //     console.log(e.target.elements.content.value);
//     //     console.log(e.target.content);
//     //     console.log(e.target.content.value);

//     // list.push(e.target.content.value);
//     // return console.log(list);

//     const input = e.target.content;
//     if (input.value === "") {
//         alert("내용을 입력 후 등록 버튼을 눌러주세요.")
//         return;
//     }

//     const commentObj = new Comment(input.value);
//     list.push(commentObj);
//     totalRecord();

//     drawing();
//     e.target.reset();
// }

// totalRecord();
// commentBtn.addEventListener("submit", commentBtnHandler);


// 파일 업로드 스크립트
function setThumbnail(event) {
    for (var image of event.target.files) {
        var reader = new FileReader();

        reader.onload = function (event) {
            var img = document.createElement("img");
            img.setAttribute("src", event.target.result);
            document.querySelector("div#image_container").appendChild(img);
        };
        console.log(image);
        reader.readAsDataURL(image);
    }
}
// 업로드 끝

// const textarea = useRef();

// const handleResizeHeight = () => {
//     textarea.current.style.height = 'auto'; //height 초기화
//     textarea.current.style.height = textarea.current.scrollHeight + 'px';
// };







