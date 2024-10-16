// 화면 이동
const detail1ToGo = (url) => {
    window.open(url);
}
// 로고
$('#logo_picMain').on('click', () => detail1ToGo('../../HTML/mainpage/main.html'));
// 홈
$('#detail1ToHome').on('click', () => detail1ToGo('../../HTML/mainpage/main.html'));
// 펀딩등록
$('#detail1ToRegister').on('click', () => detail1ToGo('../../HTML/register/register.html'));
// 펀딩 리스트
$('#detail1ToList').on('click', () => detail1ToGo('../../HTML/mainpage/pagelist.html'));
// 종료펀딩
$('#detail1ToEnd').on('click', () => detail1ToGo('../../HTML/register/end.html'));
// 작품구매
$('#detail1Topurchase_1').on('click', () => detail1ToGo('../../HTML/purchase/purchase1.html'));
// join
$('#joinBtn').on('click', () => detail1ToGo('../../HTML/login-join/join.html'));
// Login
$('#loginBtn').on('click', () => detail1ToGo('../../HTML/login-join/login.html'));
// myPage
$('#mypageBtn').on('click', () => detail1ToGo('../../HTML/mypage/mypage.html'));
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
document.getElementById("searchI").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `../../HTML/mainpage/detail.html`;
    } else {
        alert("검색어를 입력해주세요.");
    }
});

// 스크롤
document.querySelectorAll(".scroll_move").forEach(function (button) {
    button.addEventListener("click", function () {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// 커뮤니티 댓글 기능

const commentBtn = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const total = document.querySelector("h4 > span");
const list = [];

class Comment {
    constructor(content) {
        this.userid = "jibakguri";
        this.content = content;
        this.date = "2024-10-16";
    }
}

function createRow(userid, content, date) {
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);

    ul.setAttribute("class", "comment-row");
    li1.setAttribute("class", "comment-id");
    li2.setAttribute("class", "comment-content");
    li3.setAttribute("class", "comment-date");

    li1.innerHTML = userid;
    li2.innerHTML = content;
    li3.innerHTML = date;

    return ul;
}

function drawing() {
    commentList.innerHTML = "";
    for (let i = list.length - 1; i >= 0; i--) {
        const row = createRow(list[i].userid, list[i].content, list[i].date);
        commentList.append(row);
    }
}

function totalRecord() {
    total.innerHTML = `(${list.length})`;
}

function commentBtnHandler(e) {
    e.preventDefault();

    const input = e.target.content;
    if (input.value ==="") {
        alert("내용을 넣고 등록 버튼을 눌러주세요.");
        return;
    }

    const commentObj = new Comment(input.value);
    list.push(commentObj);
    totalRecord();

    drawing();
    e.target.reset();

}

commentBtn.addEventListener("submit", commentBtnHandler);