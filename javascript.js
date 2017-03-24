// JavaScript Documentvar 
 var area = document.getElementById('moocBox');
 var iliHeight = 24;//单行滚动的高度
 var speed = 50;//滚动的速度
 var time;
 var delay= 2000;
 var flog;
 area.scrollTop=0;
 area.innerHTML=area.innerHTML+area.innerHTML;//克隆一份一样的内容
 function startScroll(){
	 time=setInterval("scrollUp()",speed);
	 area.scrollTop++;
	 }
 function scrollUp(){
	 if(area.scrollTop % iliHeight==0){
		 clearInterval(time);
		 setTimeout(startScroll,delay);
		 }else{
			 area.scrollTop++;
			 if(area.scrollTop >= area.scrollHeight/2){
				 area.scrollTop =0;
				 }
			 }
	 }
area.onmouseover=function(){
	 clearInterval(time);
 }
 area.onmouseout=function(){
	time=setInterval("scrollUp()",speed);
 }
 setTimeout(startScroll(),delay);
	 