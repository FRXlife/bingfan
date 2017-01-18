$(function(){
		var i=0;
		var _timer=0;
		function delay(){
			$("#btn li").eq(i).css("background-color","#eee");
			$("#ban div").eq(i).css({
				"display":"none",
				"opacity":0.3
			});
			i++;
			if(i>=$("#ban div").size()){
				i=0;
			}
			$("#ban div").eq(i).css("display","block");
			$("#btn li").eq(i).css("background-color","#eb4300");
			player(true);
		}
		function player(_cmd){
			$("#btn li").eq(i).css("background-color","#eb4300");
			$("#ban div").eq(i).animate({
				"opacity":1,
			},300,function(){
				if(_cmd){
					window.clearTimeout(_timer);
					_timer=window.setTimeout(delay,4000);
				}else{
					$("#ban div").eq(i).stop();
					window.clearTimeout(_timer);
				}
			});
		}
		player(true);
		
		function eventHandle(_current){
			$("#ban div").eq(i).finish();
			$("#ban div").css({
				"display":"none",
				"opacity":0.3
			});
			$("#btn li").css({
				"background-color":"#eee"
			});
			$(_current).css({
				"background-color":"#eb4300"
			});
			i=$(_current).index();
			$("#ban div").eq(i).css({
				"display":"block"
			});
			window.clearTimeout(_timer);
			player(false);
		}
		$("#ban").mouseenter(function(){
			
			window.clearTimeout(_timer);
			$("#ban div").eq(i).stop();
			$("#b_left").css({
				"display":"block"
			});
			$("#b_right").css({
				"display":"block"
			});
		});
		$("#ban").mouseleave(function(){
			$("#b_left").css({
				"display":"none"
			});
			$("#b_right").css({
				"display":"none"
			});
			player(true);
			
		});
		$("#btn li").mouseenter(function(){
			eventHandle(this);
		});
		
		$("#b_left").click(function(){
			eventHandle($("#ban div").eq(--i)[0]);
		});
		$("#b_right").click(function(){
			eventHandle($("#ban div").eq(++i)[0]);
		});
		
	});