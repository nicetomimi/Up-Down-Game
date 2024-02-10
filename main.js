// 랜덤번호 지정
// 유저가 번호를 입력, go 버튼 클릭
// (go 버튼 눌렀을 때 이벤트)
// go 이벤트1. 유저번호 = 랜덤번호, 성공메세지
// go 이벤트2. 유저번호 > 랜덤번호, Down
// go 이벤트3. 유저번호 < 랜덤번호, up
// reset 버튼 누르면, 게임 리셋
// 5번의 기회, 다쓰면 게임 끝, 버튼 disable
// 1~100범위 밖의 숫자를 입력하면, 알려준다. 기회는 그대로
// 이미 입력했던 숫자를 또 입력하면, 알려준다. 기회는 그대로

let computerNum = 0
let playButton = document.getElementById("play-Button") // html에 있는 요소(id) 가져오기
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-Button")
playButton.addEventListener("click",play) // 이벤트 ("어떤 이벤트 줄지",이벤트 실행시 어떤 함수 실행할지)
resetButton.addEventListener("click",reset)

function PickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    //Math.radom 0~1까지 난수 랜덤 생성
    //Math.floor 소수점 버림 정수 변환
console.log ("정답",computerNum)
}

function play(){
  let userValue = userInput.value ;
  if (userValue < computerNum) {
    resultArea.textContent ="Up!!"
  } else if (userValue > computerNum) {
    resultArea.textContent ="Down!!"
  } else {
    resultArea.textContent ="맞췄어요!!"
  }
}

function reset(){
  userInput.value = ""
  PickRandomNum();
  resultArea.textContent ="다시 시작!"
}

PickRandomNum()