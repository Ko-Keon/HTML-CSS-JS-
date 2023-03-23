// 스크롤 이벤트 작성
// 스크롤 할 때 마다 실행되는 함수도 함께 작성

// 네비게이션 바
const nav = document.querySelector("#nav")

// 스크롤 이벤트로 조건을 걸 때 사용할 수 있는 속성
// 스크롤의 Y위치 : scrollY
// 전체 스크롤 길이 : 
// 화면의 길이 : innerHeight


window.addEventListener("scroll",function() {
    // scrollY가 200 이상 스크롤되면 scrollon 클래스 추가
    if(scrollY>=200) {
        nav.classList.add("scrollon")
    }
    // scrollY가 200 미만이면 scrollon 제거
    else {
        nav.classList.remove("scrollon")
    }

    
})