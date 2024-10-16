// 템플릿
function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(async (el) => {
        const file = el.getAttribute('data-include');
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            el.innerHTML = text;

            // 동적으로 불러온 HTML에서 <script> 태그를 찾아 실행
            const scripts = el.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            });
        } else {
            el.innerHTML = 'Content not found!';
        }
    });
}
document.addEventListener('DOMContentLoaded', includeHTML);


// ==================================================================================

// 로그인 정보
document.addEventListener('DOMContentLoaded', () => {
    const joinBtn = document.getElementById('joinBtn');
    const loginBtn = document.getElementById('loginBtn');
    const mypageBtn = document.getElementById('mypageBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // 로그인 상태에 따른 버튼 표시/숨김 처리
    if (isLoggedIn === 'true') {
        if (joinBtn) joinBtn.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (mypageBtn) mypageBtn.style.display = 'block';

    } else {
        if (joinBtn) joinBtn.style.display = 'block';
        if (loginBtn) loginBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (mypageBtn) mypageBtn.style.display = 'none';
    }
});

// 로그아웃 버튼 클릭 시 로그아웃 처리
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false');
    location.reload();
});



