const commentBtn = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
// console.log(commentList);
const total = document.querySelector("h4 > span");
const list = [];

// console.log(commentBtn);

function Comment(content) {
    this.userid = "cloudcoke";
    this.content = content;
    this.date = "2024-10-10";
}



function createRow(userid, content, date) {
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    // console.log(ul);
    // console.log(li1);
    // console.log(li2);
    // console.log(li3);

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);

    ul.setAttribute("class", "comment-row");
    ul1.setAttribute("class", "comment-id");
    ul2.setAttribute("class", "comment-content");
    ul3.setAttribute("class", "comment-date");

    li1.innerHTML = userid;
    li2.innerHTML = content;
    li3.innerHTML = date;

    return ul;
    
}

function drawing() {
    commentList.innerHTML = "a";
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
//     console.dir(e.target);
//     console.log(e.target[0]);
//     console.log(e.target[0].value);
//     console.log(e.target.elements[0]);
//     console.log(e.target.elements[0].value);
//     console.log(e.target.elements.content);
//     console.log(e.target.elements.content.value);
//     console.log(e.target.content);
//     console.log(e.target.content.value);

    // list.push(e.target.content.value);
    // return console.log(list);

    const input=e.target.content;
    if (input.value === "") {
        alert("내용을 입력 후 등록 버튼을 눌러주세요.")
        return;
    }

    const commentObj = new Comment(input.value);
    list.push(commentObj);
    totalRecord();

    drawing();
    e.target.reset();
}

totalRecord();
commentBtn.addEventListener("submit", commentBtnHandler);
