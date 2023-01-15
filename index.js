const cssString = `/*  
  你好👋，这里是 Zkeq。
  这里是一段自我介绍
  那么，首先，我们来点背景颜色吧？
*/

.container{
  background-color: #f0f2f5;
}

/*  
  什么？你说为什么我要用代码块跟你说话？
  好吧好吧，给你一个盒子。  
*/
.card_wrap{
  display: block;
}

/*  
  那么，看着盒子听我给你讲吧 🧐
*/
.section-0{
  visibility: visible;
  opacity: 1;
}

.section-1{
  visibility: visible;
  opacity: 1;
}

.section-2{
  visibility: visible;
  opacity: 1;
}

.section-3{
  visibility: visible;
  opacity: 1;
}

.section-4{
  visibility: visible;
  opacity: 1;
}

.section-5{
  visibility: visible;
  opacity: 1;
}

.section-6{
  visibility: visible;
  opacity: 1;
}

.section-6_1{
  visibility: visible;
  opacity: 1;
}

.section-6_2{
  visibility: visible;
  opacity: 1;
}

.section-6_3{
  visibility: visible;
  opacity: 1;
}

.section-6_4{
  visibility: visible;
  opacity: 1;
}

.section-6_5{
  visibility: visible;
  opacity: 1;
}

.section-6_6{
  visibility: visible;
  opacity: 1;
}


`;

let codeString = '';

const textDom = document.querySelector('.text');
const styleDom = document.querySelector('.introduction-style');
const cardDom = document.querySelector('.card_wrap');
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const progressBar = document.querySelector('.progress-bar');


let music_init = false;

    
let section_0 = false;
let section_1 = false;
let section_2 = false;
let section_3 = false;
let section_4 = false;
let section_5 = false;
let section_6 = false;
let section_6_1 = false;
let section_6_2 = false;
let section_6_3 = false;
let section_6_4 = false;
let section_6_5 = false;
let section_6_6 = false;


let textStartIndex = 0;
let range = 1;
let timer = null;

const { width: finalWidth } = document.querySelector('body').getBoundingClientRect();
const updateProgress = (progress) => {
  progressBar.style.width = `${finalWidth * progress}px`;
};
let init = 0;
const len = cssString.length;
const play = () => {
  if (init === 0) {
    launchFullScreen(document.querySelector(".si_body"));
    init = 1;
    control_music();
  }
  if (textStartIndex >= len) {
    textStartIndex = 0;
  }
  if (timer) return;

  timer = setInterval(() => {
    textStartIndex += range;
    if (textStartIndex > len) {
      playButton.innerHTML = '重放'
      textDom.innerHTML =  cssString.substring(0, len);
      styleDom.innerHTML = cssString.substring(0, len);
      updateProgress(1);
      // textDom.scrollTop = textDom.scrollHeight;
      hljs.highlightAll();
      window.clearInterval(timer);
      timer = null;
    } else {
      // if (cssString[textStartIndex] === "\n") {
      //   codeString += "<br>";
      // } else if (cssString[textStartIndex] === " ") {
      //   codeString += "&nbsp;";
      // } else {
      //   codeString += cssString[textStartIndex];
      // }
        playButton.innerHTML = '播放'
        textDom.innerHTML =  cssString.substring(0, textStartIndex);
        styleDom.innerHTML = cssString.substring(0, textStartIndex);
        updateProgress(textStartIndex / len);
        textDom.scrollTop = textDom.scrollHeight;
      hljs.highlightAll();
    }
    
    
    if (textStartIndex > 893 && !section_6_6){
      document.querySelector(".section-6_6").scrollIntoView(true);
      section_6_6 = true;
      textStartIndex = 9999;

      section_0 = false;
      section_1 = false;
      section_2 = false;
      section_3 = false;
      section_4 = false;
      section_5 = false;
      section_6 = false;
      section_6_1 = false;
      section_6_2 = false;
      section_6_3 = false;
      section_6_4 = false;
      section_6_5 = false;
      section_6_6 = false;

      stop();
    }else if (textStartIndex > 839 && !section_6_5){
      document.querySelector(".section-6_5").scrollIntoView(true);
      section_6_5 = true;
      stop();
    }else if (textStartIndex > 785 && !section_6_4){
      document.querySelector(".section-6_4").scrollIntoView(true);
      section_6_4 = true;
      stop();
    }else if (textStartIndex > 731 && !section_6_3){
      document.querySelector(".section-6_3").scrollIntoView(true);
      section_6_3 = true;
      stop();
    }else if (textStartIndex > 677 && !section_6_2){
      document.querySelector(".section-6_2").scrollIntoView(true);
      section_6_2 = true;
      stop();
    }else if (textStartIndex > 623 && !section_6_1){
      document.querySelector(".section-6_1").scrollIntoView(true);
      section_6_1 = true;
      stop();
    }else if (textStartIndex > 569 && !section_6){
      document.querySelector(".section-6").scrollIntoView(true);
      section_6 = true;
      stop();
    }else if (textStartIndex > 517 && !section_5){
      document.querySelector(".section-5").scrollIntoView(true);
      section_5 = true;
      stop();
    }else if (textStartIndex > 465 && !section_4){
      document.querySelector(".section-4").scrollIntoView(true);
      section_4 = true;
      stop();
    }else if (textStartIndex > 414 && !section_3){
      document.querySelector(".section-3").scrollIntoView(true);
      section_3 = true;
      stop();
    }else if (textStartIndex > 361 && !section_2){
      document.querySelector(".section-2").scrollIntoView(true);
      section_2 = true;
      stop();
    }else if (textStartIndex > 309 && !section_1){
      document.querySelector(".section-1").scrollIntoView(true);
      section_1 = true;
      stop();
    }else if (textStartIndex > 258 && !section_0){
      setTimeout(function(){
        document.querySelector(".card_wrap").scrollTop = 0;
      }, 0);
      section_0 = true;
    }

  }, 50);
};


function control_music(){
  if (!music_init){
    auio = "https://media.onmicrosoft.cn/Hey_You.mp3";
    auio = new Audio(auio);
    auio.loop = true;
    auio.volume = 1;
    music_init = true;
    auio.play();
  }else if(auio.paused){
    auio.play();
  }else{
    auio.pause();
  }
  
}

const stop = () => {
  window.clearInterval(timer);
  timer = null;
};

playButton.onclick = play;
stopButton.onclick = stop;


function change_range(e) {
  range = Number(e);
}

function launchFullScreen(element) {
  if(isFullScreen()){
    exitScreen();
    return;
  }

  if (element.requestFullscreen) {
 
    element.requestFullscreen();
 
  } else if (element.mozRequestFullScreen) {
 
    element.mozRequestFullScreen();
 
  } else if (element.webkitRequestFullscreen) {
 
    element.webkitRequestFullscreen();
 
  } else if (element.msRequestFullscreen) {
 
    element.msRequestFullscreen();
 
  }
 
 }

function exitScreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  }
  else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
  }
  else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
  }
  else if (document.msExitFullscreen) {
      document.msExitFullscreen();
  }
  if (typeof cfs != "undefined" && cfs) {
      cfs.call(el);
  }
}

function isFullScreen() {
  return  !! (
      document.fullscreen || 
      document.mozFullScreen ||                         
      document.webkitIsFullScreen ||       
      document.webkitFullScreen || 
      document.msFullScreen 
  );
}