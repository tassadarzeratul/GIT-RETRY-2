// 회원가입 로직 시작
const inputName = document.getElementById('userid');
const inputPhone = document.getElementById('userPhone');
const inputEmailId = document.getElementById('userEmail');
const inputEmailPwd = document.getElementById('userPwd');
const inputEmailPwdCh = document.getElementById('userPwdCh');
const loginBtn = document.getElementById('btnLogin');

// 로그인 버튼 활성화/비활성화 함수
function color() {
    // 이메일 형식과 비밀번호 길이 확인
    if (inputEmailId.value.length > 0 && inputEmailPwd.value.length > 7
        && inputName.value.length > 0 && inputPhone.value.length > 10
        && inputEmailPwdCh.value === inputEmailPwd.value) {

        loginBtn.disabled = false; // 버튼 활성화
        loginBtn.style.backgroundColor = "#0095F6";

        // 로그인 버튼 클릭 시 페이지 이동
        loginBtn.addEventListener('click', moveToMain);

    } else {
        loginBtn.style.backgroundColor = 'red'; // 유효하지 않은 경우 버튼 색 변경
        loginBtn.disabled = true; // 버튼 비활성화
    }
}

// 페이지 이동 함수
function moveToMain() {
    location.replace('../../HTML/mainpage/main.html');
}
// 입력 필드 값이 변경될 때마다 color 함수 호출 (실시간으로 버튼 상태 업데이트)
inputEmailId.addEventListener('input', color);
inputEmailPwd.addEventListener('input', color);
inputName.addEventListener('input', color);
inputPhone.addEventListener('input', color);
inputEmailPwdCh.addEventListener('input', color);

// 회원가입 로직 끝


