// 현재 시간을 1초마다 다시 화면에 출력
// 현재 시간 : Date() - 시간을 가져오는 객체
// 현재 시간을 들고와도 자동으로 값이 바뀌지 않는다 (고정)
// 그 값을 새로 들고오면 바뀜 > new Date()값을 새로 할당
// 1초마다 new Date()의 값을 할당
// 타이머 함수인 interval 사용

// 시간을 출력할 태그 가져옴
const clock = document.querySelector("#clock")

// 타이머 함수의 콜백 함수로 사용하기 위해 함수로 작성
function getClock() {
// 숫자를 Date()를 통해 값 수정
let date = new Date() // 현재 시간을 가져옴
let hour = String(date.getHours()).padStart(2,'0');
let minute = String(date.getMinutes()).padStart(2,'0');
let seconds = String(date.getSeconds()).padStart(2,'0');

// clock에 현재 시간 출력
// clock.innerHTML = `${hour}:${minute}:${seconds}`
// return을 통해 시간을 문자열로 돌려줄 수 있다.
// return 값을 이용해서 clock.innerHTML = getCLock();
return `${hour}:${minute}:${seconds}`
}

// 타이머 함수를 통해 1초마다 시간을 받아오게 작성
setInterval(function() {
    clock.innerHTML = getClock()
},1000)
// 타이머는 1초 뒤에 실행하기에, 화면에 바로 출력하기 위해 함소 호출
clock.innerHTML = getClock()
