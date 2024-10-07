// 회원가입 로직 시작
// const inputName = document.getElementById('userName');
// const inputPhone = document.getElementById('userPhone');
// const inputEmailId = document.getElementById('userEmail');
// const inputEmailPwd = document.getElementById('userPwd');
// const inputEmailPwdCh = document.getElementById('userPwdCh');
// const loginBtn = document.getElementById('btnLogin');

// // 로그인 버튼 활성화/비활성화 함수
// function color() {
//     // 이메일 형식과 비밀번호 길이 확인
//     if (inputEmailId.value.length > 0 && inputEmailPwd.value.length > 7
//         && inputName.value.length > 0 && inputPhone.value.length > 10
//         && inputEmailPwdCh.value === inputEmailPwd.value) {

//         loginBtn.disabled = false; // 버튼 활성화
//         loginBtn.style.backgroundColor = "#0095F6";

//         // 로그인 버튼 클릭 시 페이지 이동
//         loginBtn.addEventListener('click', moveToMain);

//     } else {
//         loginBtn.style.backgroundColor = 'red'; // 유효하지 않은 경우 버튼 색 변경
//         loginBtn.disabled = true; // 버튼 비활성화
//     }
// }

// // 페이지 이동 함수
// function moveToMain() {
//     location.replace('../../HTML/mainpage/main.html');
// }
// // 입력 필드 값이 변경될 때마다 color 함수 호출 (실시간으로 버튼 상태 업데이트)
// inputEmailId.addEventListener('input', color);
// inputEmailPwd.addEventListener('input', color);
// inputName.addEventListener('input', color);
// inputPhone.addEventListener('input', color);
// inputEmailPwdCh.addEventListener('input', color);

// 회원가입 로직 끝


// 회원가입 로직 시작
const inputName = document.getElementById('userName');
const inputPhone = document.getElementById('userPhone');
const inputEmailId = document.getElementById('userEmail');
const inputEmailPwd = document.getElementById('userPwd');
const inputEmailPwdCh = document.getElementById('userPwdCh');
const loginBtn = document.getElementById('btnLogin');
const emailCk = document.getElementById('userEmailCk');
const copyCk = document.getElementById('userCopy');

const nameWarning = document.getElementById('nameWarning');
const phoneWarning = document.getElementById('phoneWarning');
const emailWarning = document.getElementById('emailWarning');
const pwdWarning = document.getElementById('pwdWarning');
const pwdChWarning = document.getElementById('pwdChWarning');
const resultMessageId = document.getElementById('resultMessageId');
const resultMessageCopy = document.getElementById('resultMessageCopy');

const join_user = () => {
    let isValid = true; // 모든사항이 유효한지 확인 변수

    // 경고 메시지 초기화
    nameWarning.textContent = '';
    phoneWarning.textContent = '';
    emailWarning.textContent = '';
    pwdWarning.textContent = '';
    pwdChWarning.textContent = '';
    resultMessageId.textContent = '';
    resultMessageCopy.textContent = '';

    // 이름 검사 (2~10자)
    if (inputName.value.length < 2 || inputName.value.length > 10 || /\s/.test(inputName.value)) {
        nameWarning.textContent = '이름은 2~10자이며 공백을 포함할 수 없습니다.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    // 전화번호 검사 (11자)
    else if (inputPhone.value.length !== 11 || /\s/.test(inputPhone.value)) {
        phoneWarning.textContent = '전화번호는 11자리여야 하며 공백을 포함할 수 없습니다.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    // 이메일 검사 (@ 포함)
    else if (!inputEmailId.value.includes('@') || /\s/.test(inputEmailId.value)) {
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

    // 비밀번호 확인 검사 (일치 여부)
    else if (inputEmailPwd.value !== inputEmailPwdCh.value) {
        pwdChWarning.textContent = '비밀번호가 일치하지 않습니다.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    if (!emailCk.checked) {
        resultMessageId.textContent = '이메일 중복확인을 체크해 주세요';
        loginBtn.style.backgroundColor = 'red';
        loginBtn.disabled = true;
        isValid = false;
    }

    if (!copyCk.checked) {
        resultMessageCopy.textContent += (resultMessageCopy.textContent ? ' ' : '') + '약관에 동의해 주세요.';
        loginBtn.style.backgroundColor = 'red';
        loginBtn.disabled = true;
        isValid = false;
    }

    // 모든 조건을 통과했을 경우
    if (isValid) {
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
        resultMessageId.textContent = ''; // 통과 시 메세지 지우기
    }
}

// 페이지 이동
const moveToMain = () => {
    alert('가입을 환영합니다 !')
    location.replace('../../HTML/mainpage/main.html');
}

// 로그인 버튼 클릭
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작 방지
    join_user(); // 입력검사 호출
    if (!loginBtn.disabled) { // 버튼이 활성화된 경우에만 이동
        moveToMain();
    }
});

// 각 입력 필드에서 입력이 변경될 때마다 join_user 호출
inputName.addEventListener('input', join_user);
inputPhone.addEventListener('input', join_user);
inputEmailId.addEventListener('input', join_user);
inputEmailPwd.addEventListener('input', join_user);
inputEmailPwdCh.addEventListener('input', join_user);
emailCk.addEventListener('change', join_user);
copyCk.addEventListener('change', join_user);


// 회원가입 로직 끝