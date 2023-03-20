// 버튼을 눌렀을 때 환영 인사 출력
// form의 submit을 눌렀을 때 input의 값이 h1태그에 할당

// id를 통해서 직접 접근
// submit을 눌렀을 때(이벤트 - submit : form)
// input의 값이 h1태그에 할당(실행 할 함수)
const loginForm = document.querySelector("#login-form")
loginForm.addEventListener("submit", onLogin)

// onLogin 함수 작성
function onLogin(e) {
    // submit 이벤트는 새로고침이 들어가있다
    e.preventDefault();   
    // 값을 들고올 input태그 가져옴 - value
    const loginId = document.querySelector("#login-id")
    // 값을 넣어줄 h1태그 가져옴 - innerHTML
    const greeting = document.querySelector("#greeting")
    
    greeting.innerHTML = `" 환영합니다 ${loginId.value}님 "`

    // 화면에 글자를 보여주기 위해 class 제거
    greeting.classList.remove("hidden")
    document.querySelector("#todo-form").classList.remove("hidden")
    document.querySelector("#todolist").classList.remove("hidden")
    // 로그인 창을 보이지않게 하기 위해 class 추가
    loginForm.classList.add("hidden");
}



