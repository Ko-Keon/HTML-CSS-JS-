// todoList 만들기
// 추가) 할 일 값을 받아와서 ul의 li로 출력하기
// 완료) 할 일을 완료(체크)를 했을 떄, 완료 표시
// 삭제) 할 일을 삭제

// 할 일 입력창에 값을 입력하고 submit을 했을 때(이벤트)
// 작성한 할 일을 ul에 li로 추가(실행 할 함수)
const todoForm = document.querySelector("#todo-form")
todoForm.addEventListener("submit", todoAdd);

// todoAdd 함수 작성
function todoAdd(e) {
    e.preventDefault();

    // input 태그의 값을 가져와서 ul의 list로 추가하기
    // todoForm.firstElementChild는 input type = text 
    const todoVlaue = todoForm.firstElementChild.value;
    
    // li태그 생성 후 ul 찾아서 추가
    const li = document.createElement("li")
    
    // li 태그에 추가 할 내용 : 체크박스, 텍스트노드, 버튼
    // 태그 생성
    const check = document.createElement("input")
    check.type = "checkbox"
    const text = document.createTextNode(todoVlaue)
    const button = document.createElement("button")
    button.innerHTML = "X"
    // 시간을 추가하기 위한 span태그
    const time = document.createElement("span")
    // 다른 JS에서 작성한 함수를 가져와 쓸 수 있다.
    time.innerHTML = getClock();

    // li 태그에 생성한 태그 추가
    li.appendChild(check)
    li.appendChild(text)
    li.appendChild(time) // 시간 추가
    li.appendChild(button)

    // 아래 내용은 ul 태그를 가져옴
    document.querySelector("#todolist").appendChild(li);

    // input의 value값을 ""으로 바꿈
    todoForm.firstElementChild.value = ""

    // check에 클릭 이벤트 추가
    check.addEventListener("click",todoCheck)
    // button에 클릭 이벤트 추가
    button.addEventListener("click",todoDelete)
}

// check에 들어가는 todoCheck 함수 작성
function todoCheck(e) {
    // 이벤트 객체를 통해서 이벤트가 실행 된 태그 찾아 값 사용
    const check = e.target
    const li = check.parentNode
    if (check.checked) {
        li.style.color = "lightgray"
    }
    else {
        li.style.color = ""
    }
}

// 버튼에 클릭 이벤트를 추가해서
// 선택된 li가 삭제되는 함수
function todoDelete(e) {
    const button = e.target
    const li = button.parentNode
    li.remove()
}

