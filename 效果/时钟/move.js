function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}
function move(obj,json,complete){//传个json进来  传个json（complete）进来
	clearInterval(obj.timer);
	complete = complete || {};	
		complete.Time=complete.Time||1000;//如果complete.Time没有 （假）    那么那他就等于3000
		complete.easeing=complete.easeing||'linear';//如果complete.easeing没有（假）    那么那他就等于sase-in
	var dis={};
	var start={};	
	for(var name in json){//循环json
				start[name]=parseFloat(getStyle(obj,name));
  //设置每个新的start[name}=相应name的初始值---初始距离
				dis[name]=json[name]-start[name];
  //设置每个新的dis[name}=相应name的初始值--总距离	
	}											
	var count=parseInt(complete.Time/30);		
	var n=0;							
	obj.timer=setInterval(function(){
		n++;		
		for(var name in json){	
			switch(complete.easeing){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*a;//匀速：a=（0.1++） a比例固定的
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*a*a*a;//加速：a（比例）=（0.1*0.1++）a比例由大变小
					break;
				case 'ease-out':
				    var a=1-n/count;//如果a=n/count; 速度一步就达到了满总距离 所以得1-n/count;
				    var cur=start[name]+dis[name]*(1-a*a*a);//减速a（比例）=（1-0.1*0.1++）比例由小变大
				    break;
			};			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			complete.fn&&complete.fn();
		}
							
	},30);					
}