const spans = document.querySelectorAll("span");
const array = [1000*60*60*24, 1000*60*60, 1000*60, 1000];
const targetDate = new Date("23 Dec 2020");
var permDiff = Math.abs(new Date() - targetDate);
const pElem = document.querySelector('p');
setInterval(()=>{
   pElem.style.backgroundColor="green";
  setTimeout(()=>{ pElem.style.backgroundColor="grey";},500);
  var currentDate = new Date();
  var timeDiff = Math.abs(currentDate-targetDate);
  for(var i=0; i<spans.length;i++){
    spans[i].innerText = (Math.round(timeDiff/array[i])).toString(2);
	spans[i].title=Math.round(timeDiff/array[i]);
  } 
  //console.log(((permDiff-timeDiff/20)/permDiff)*100);
  pElem.style.width=''+100*(permDiff-timeDiff/20)/permDiff+'%';
  pElem.innerText = "Loading... "+100*(permDiff-timeDiff/20)/permDiff+'%';
},1000)