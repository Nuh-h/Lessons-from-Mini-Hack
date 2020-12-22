const spans = document.querySelectorAll("span");
const array = [1000*60*60*24, 1000*60*60, 1000*60, 1000];
const targetDate = new Date("23 Dec 2020");
var permDiff = Math.abs(new Date() - targetDate);
const pElem = document.querySelector('p');
setInterval(()=>{
  var currentDate = new Date();
  var timeDiff = Math.abs(currentDate-targetDate);
  for(var i=0; i<spans.length;i++){
    spans[i].innerText = Math.round(timeDiff/array[i]);
    pElem.style.width=''+Math.round((permDiff-timeDiff)/permDiff)+'%';
  }
},1000)
