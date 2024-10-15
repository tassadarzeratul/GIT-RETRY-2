// 화면 이동 

// 로고
const joinToLogin_1 = () => {
    window.location.replace('../../HTML/mainpage/main.html');
}
joinPic.addEventListener('click', joinToLogin_1);

// 회원가입
const joinToLogin = () => {
    window.open('../../HTML/login-join/login.html');
}
joinToJoin.addEventListener('click', joinToLogin);

// // 회원가입
// const joinTocopyRight = () => {
//     window.open('../../HTML/login-join/login.html');
// }
// joinToJoin.addEventListener('click', joinTocopyRight);


// =============================================================================
// 입력창 유효성 검사 

const inputName = document.getElementById('userName');
const inputPhone = document.getElementById('userPhone');
const inputEmailId = document.getElementById('userEmail');
const inputEmailPwd = document.getElementById('userPwd');
const inputEmailPwdCk = document.getElementById('userPwdCk');
const loginBtn = document.getElementById('btnjoin');
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
    else if (inputEmailPwd.value !== inputEmailPwdCk.value) {
        pwdChWarning.textContent = '비밀번호가 일치하지 않습니다.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    if (!emailCk.checked) {
        resultMessageId.textContent = '이메일 중복확인을 체크해 주세요';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
        loginBtn.disabled = true;
        isValid = false;
    }

    if (!copyCk.checked) {
        resultMessageCopy.textContent += (resultMessageCopy.textContent ? ' ' : '') + '약관에 동의해 주세요.';
        loginBtn.style.backgroundColor = 'rgb(252, 146, 146)';
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
const joinToMain = () => {
    alert('가입을 환영합니다 !')
    location.replace('../../HTML/mainpage/main.html');
}

// 로그인 버튼 클릭
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작 방지
    join_user(); // 입력검사 호출
    if (!loginBtn.disabled) { // 버튼이 활성화된 경우에만 이동
        joinToMain();
    }
});

// 각 입력 필드에서 입력이 변경될 때마다 join_user 호출
inputName.addEventListener('input', join_user);
inputPhone.addEventListener('input', join_user);
inputEmailId.addEventListener('input', join_user);
inputEmailPwd.addEventListener('input', join_user);
inputEmailPwdCk.addEventListener('input', join_user);
emailCk.addEventListener('change', join_user);
copyCk.addEventListener('change', join_user);


// =============================================================================

// 입력창 label 기능

// $(document).ready(function () {
//     $('.inputBox input').focus(function () {
//         $(this).sibligns('label').addClass('active');
//     });

//     $('.inputBox input').on('input', function () {
//         if ($(this).val().length > 0) {
//             $(this).siblings('label').addClass('active');
//         } else {
//             $(this).siblings('label').removeClass('active');
//         }
//     });
//     $('.inputBox input').blur(function () {
//         if ($(this).val().lenght === 0) {
//             $(this).siblings('label').removeClass('active');
//         }
//     });
// });


// =============================================================================