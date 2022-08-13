/*HTMLで表示させるストップウォッチや各種ボタンの変数を取得させる*/
const Timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

/*開始時刻*/
let startTime;
/*停止時刻*/
let stopTime = 0;
/*ストップウォッチ用変数*/
let timeoutID;

/*関数を用いて時間を表示させる*/
function displayTime(){
 const currentTime = new Date(Date.now() - startTime + stopTime);
 const h = String(currentTime.getHours() - 9).padStart(1,"0");
 const m = String(currentTime.getMinutes()).padStart(1,"0");
 const s = String(currentTime.getSeconds()).padStart(1,"0");
 const ms = String(currentTime.getMilliseconds()).padStart(1,"0");

 Timer.textContent = `${h}:${m}:${s}:${ms}`;
 timeoutID = setTimeout(displayTime,1);}

/*startボタンの機能を追加する*/
startButton.addEventListener("click",() => {
 startButton.disabled = true;
 stopButton.disabled = false;
 resetButton.disabled = false;
 startTime = Date.now();
 displayTime();
});

/*stopボタンの機能を追加する*/
stopButton.addEventListener("click",function() {
 startButton.disabled = false;
 stopButton.disabled = true;
 resetButton.disabled = false;
 clearTimeout(timeoutID);
 stopTime += (Date.now() - startTime);
});

/*resetボタンの機能を追加する*/
resetButton.addEventListener("click",function(){
 startButton.disabled =false;
 stopButton.disabled = true;
 resetButton.disabled = true;
 Timer.textContent = "0:0:0:0";
 stopTime = 0;
});