// 화면 이동 
// 로고
const loginToLogo = () => {
    window.location.replace('../../HTML/mainpage/main.html');
}
loginPic.addEventListener('click', loginToLogo);

// =============================================================================

// 입력창 유효성 검사 

const inputEmailId = document.getElementById('userEmail');
const inputEmailPwd = document.getElementById('userPwd');
const loginBtn = document.getElementById('btnlogin');

const emailWarning = document.getElementById('emailWarning');
const pwdWarning = document.getElementById('pwdWarning');

const login_user = () => {
    let isValid = true; // 모든사항이 유효한지 확인 변수

    // 경고 메시지 초기화
    emailWarning.textContent = '';
    pwdWarning.textContent = '';

    // 이메일 검사 (@ 포함)
    if (!inputEmailId.value.includes('@') || /\s/.test(inputEmailId.value)) {
        emailWarning.textContent = '이메일에는 @가 포함되어야 하며 공백을 포함할 수 없습니다.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    // 비밀번호 검사 (8~16자)
    else if (inputEmailPwd.value.length < 8 || inputEmailPwd.value.length > 16 || /\s/.test(inputEmailPwd.value)) {
        pwdWarning.textContent = '비밀번호는 8~16자여야 하며 공백을 포함할 수 없습니다.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    // 모든 조건을 통과했을 경우
    if (isValid) {
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
    }
}

// 페이지 이동
const loginToMain = () => {
    alert(`환영합니다 !`);
    location.replace('../../HTML/mainpage/main.html');
}

// 로그인 버튼 클릭
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작 방지
    login_user(); // 입력검사 호출
    if (!loginBtn.disabled) { // 버튼이 활성화된 경우에만 이동
        loginToMain();
    }
});

// 각 입력 필드에서 입력이 변경될 때마다 join_user 호출
inputEmailId.addEventListener('input', login_user);
inputEmailPwd.addEventListener('input', login_user);

