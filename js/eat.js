var data=['江西瓦罐', '烤肉拌饭', '尖椒肉丝', '拌饭', '炸酱面', '焖鸡煲', '麻辣拌', '麻辣香锅', '普通炒菜', '西苑炒菜', '包子', '砂锅米线', '石锅拌饭', '黄焖鸡', '铁板面', '芝士肉丸饭', '重庆小面','麻汁拌面'],
    timer=null,
    flag=0;

window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

   // 键盘事件
   document.onkeyup=function(event){
      event = event || window.event;
      if(event.keyCode==13){
         if(flag==0){
           playFun();
           flag=1;
         }else{
           stopFun();
           flag=0;
         }
      }
   }
}

function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);
	   title.innerHTML=data[random];
	},50);
    play.style.background='#999';
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}