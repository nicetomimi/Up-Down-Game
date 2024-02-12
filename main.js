// 1~50범위 랜덤번호 지정
// 유저가 번호를 입력, go 버튼 클릭
// [go 이벤트1] 유저번호 = 랜덤번호, 성공메세지
// [go 이벤트2] 유저번호 > 랜덤번호, Down
// [go 이벤트3] 유저번호 < 랜덤번호, up
// reset 버튼 누르면, 게임 리셋
// 5번의 기회, 다쓰면 게임 끝, 버튼 disable
// [유효성검사1] 1~50범위 밖의 숫자를 입력하면, 알려준다. 기회는 그대로
// [유효성검사2] 이미 입력했던 숫자를 또 입력하면, 알려준다. 기회는 그대로

let computerNum = 0;
let playButton = document.getElementById("play-Button") // html에 있는 요소(id) 가져오기
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-Button")
let chancesArea = document.getElementById("chances-area")

let chances = 5; // 남은 기회 수정
let gameOver = false;
let history = []

playButton.addEventListener("click",play) // 이벤트 (어떤 이벤트 줄지,이벤트 실행시 어떤 함수 실행할지)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function() {userInput.value=""})


function play_button_click() {
  let audio = new Audio('./play.mp3');
  audio.play();
}
play_button_click()

function go_button_click() {
  let audio2 = new Audio('./go.mp3');
  audio2.play();
}
go_button_click()

function reset_button_click() {
  let audio3 = new Audio('./reset.mp3');
  audio3.play();
}
reset_button_click()

function PickRandomNum(){
    computerNum = Math.floor(Math.random()*50)+1; 
    //Math.radom 0~1까지 난수 랜덤 생성
    //Math.floor 소수점 버림 정수 변환
console.log ("정답",computerNum)
}

function play(){
  let userValue = userInput.value ;
 
  if (userValue <1 || userValue >50) {
    resultArea.textContent = "1~50사이의 숫자를 입력해줘!"
    let audio5 = new Audio('./error.mp3');
    audio5.play();
    return
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력했던 숫자야! 다른 숫자를 입력해줘!"
    let audio5 = new Audio('./error.mp3');
    audio5.play();
    return
  }

  if (userValue < computerNum) {
    resultArea.textContent ="Up!!"
  } else if (userValue > computerNum) {
    resultArea.textContent ="Down!!"
  } else {
    resultArea.textContent ="WOW😍 정답!!"
    gameOver = true; 
    let audio4 = new Audio('./sucess.mp3');
    audio4.play();
  }

  history.push(userValue);
  console.log(history);

  chances -- ;
  chancesArea.textContent = `남은 기회: ${chances}번` // 동적인 값에는 ` 요거사용, 큰 따옴표는 정적인 값에만 사용
  
  if (history[4] == computerNum) {
    resultArea.textContent ="WOW😍 정답!!"
    let audio4 = new Audio('./sucess.mp3');
    audio4.play(); 
    playButton.disabled = true;
    return
  }

  if (chances < 1) {
    gameOver = true;
    resultArea.textContent =`Game Over😥 정답은 ${computerNum}`
    let audio5 = new Audio('./over.mp3');
    audio5.play();
  } 

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset(){
  userInput.value = ""
  history = []
  PickRandomNum();
  gameOver = false;
  playButton.disabled = false;
  chances =5;
  resultArea.textContent ="좋아! 다시 시작해볼까?"
  chancesArea.textContent = "남은 기회: 5번"
  chancesArea.textContent = `남은 기회: ${chances}번` 
}

PickRandomNum()

