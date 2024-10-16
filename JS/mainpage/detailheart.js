let liked = false;  // 좋아요를 이미 눌렀는지 확인하는 변수
let likeCount = 255;  // 좋아요 수량

document.getElementById("likeButton").addEventListener("click", function() {
    if (!liked) {
        likeCount++;
        document.getElementById("likeCount").textContent = likeCount;
        liked = true;
    } else {
        alert("좋아요는 한번만 가능합니다.");
    }
});