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
