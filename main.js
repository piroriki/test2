/*HTMLで表示させるストップウォッチや各種ボタンの変数を取得させる*/
let Timer=document.getElementById("timer");
let Start=document.getElementById("start");
let Stop =document.getElementById("stop");
let Reset=document.getElementById("reset");

/*開始時刻*/
let startTime;
/*停止時刻*/
let stopTime=0;
/*ストップウォッチ用変数*/
let timeoutID;

/*関数を用いて時間を表示させる*/
function displayTime(){
 let currentTime=new Date(Date.now() - startTime + stopTime);
 let h =String(currentTime.getHours()-9).padStart(2,"0");
 let m =String(currentTime.getMinutes()).padStart(2,"0");
 let s =String(currentTime.getSeconds()).padStart(2,"0");
 let ms=String(currentTime.getMilliseconds()).padStart(3,"0");

 Timer.textContent=`${h}:${m}:${s}:${ms}`;
 timeoutID=setTimeout(displayTime(),10);}

/*startボタンの機能を追加する*/
Start.addEventListener("click",() =>{
 Start.disabled=true;
 Stop.disabled=false;
 Reset.disabled=false;
 startTime=Date.now();
 displayTime();
});

/*stopボタンの機能を追加する*/
Stop.addEventListener("click",function() {
 Start.disabled=false;
 Stop.disabled=true;
 Reset.disabled=false;
 clearTimeout(timeoutID);
 stopTime +=(Date.now()-startTime);
});

/*resetボタンの機能を追加する*/
Reset.addEventListener("click",function(){
 Start.disabled=false;
 Stop.disabled=true;
 Reset.disabled=true;
 Timer.textContent="00:00:00:000";
 stopTime=0;
});