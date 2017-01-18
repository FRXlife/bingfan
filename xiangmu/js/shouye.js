
//头部广告
function advertise(){
	var _close=document.getElementById("a_close");
	var _top=document.getElementById("a_top");
	_close.onclick=function(){
		var _timer=0;
		var _opacity=1;
		(function start(){
			window.clearTimeout(_timer);
			if(_opacity>0){
			_opacity-=0.1;
			_top.style.opacity=_opacity;
			_timer=window.setTimeout(start,30);
			}else{
				_top.style.opacity=0;
			   _top.style.display="none";
			}
		})();
	}
}
//列表
function list(){
	var _list=document.getElementById("nav_s");
	for(var i=0;i<_list.children.length;i++){
		if(i%2){
			_list.children[i].style.backgroundColor="#000";
		}else{
			_list.children[i].style.backgroundColor="#202020";
		}
	}
}
//二级列表
function li1(){
	var _li1=document.getElementById("li1");
	var _fashion=document.getElementById("fashion");
	var	_pic1=document.getElementById("tu")
	var _a=_li1.getElementsByTagName("a");
	var _x=document.getElementById("x");
	var _y=document.getElementById("y");
	var _a=document.getElementById("a");
	var _e=document.getElementById("e");
	_li1.onmousemove=function(){
		_li1.style.borderLeft="1px solid #000";
		_li1.style.borderTop="1px solid #000";
		_fashion.style.display="block";
		_x.style.color="#000";
		_y.style.color="#000";
		_a.style.color="#000";
		_e.style.color="#000";
		_li1.style.backgroundColor="#fff";
		_pic1.style.backgroundImage="url(images/li1_03.png)";
	}
	_fashion.onmousemove=function(){
		_fashion.style.display="block";
		_x.style.color="#000";
		_y.style.color="#000";
		_a.style.color="#000";
		_e.style.color="#000";
		_li1.style.backgroundColor="#fff";
		_pic1.style.backgroundImage="url(images/li1_03.png)";
	}
	_li1.onmouseout=function(){
		_x.style.color="#fff";
		_y.style.color="#fff";
		_a.style.color="#fff";
		_e.style.color="#fff";
		_fashion.style.display="none";
		_li1.style.backgroundColor="#202020";
		_pic1.style.backgroundImage="url(images/lie2_03.png)";
	}
	_fashion.onmouseout=function(){
		_x.style.color="#fff";
		_y.style.color="#fff";
		_a.style.color="#fff";
		_e.style.color="#fff";
		_fashion.style.display="none";
		_li1.style.backgroundColor="#202020";
		_pic1.style.backgroundImage="url(images/lie2_03.png)";
	}
}
function li2(){
	var _li2=document.getElementById("li2");
	var _mei=document.getElementById("mei");
	var	_pic2=document.getElementById("tu1")
	
	var _x1=document.getElementById("x1");
	var _y1=document.getElementById("y1");
	var _a1=document.getElementById("a1");
	var _e1=document.getElementById("e1");
	var _o1=document.getElementById("o1");
	_li2.onmousemove=function(){
		_li2.style.borderLeft="1px solid #000";
		_li2.style.borderTop="1px solid #000";
		_mei.style.display="block";
		_x1.style.color="#000";
		_y1.style.color="#000";
		_a1.style.color="#000";
		_e1.style.color="#000";
		_o1.style.color="#000";
		_li2.style.backgroundColor="#fff";
		_pic2.style.backgroundImage="url(images/li2_03.png)";
	}
	_mei.onmousemove=function(){
		_mei.style.display="block";
		_x1.style.color="#000";
		_y1.style.color="#000";
		_a1.style.color="#000";
		_e1.style.color="#000";
		_o1.style.color="#000";
		_li2.style.backgroundColor="#fff";
		_pic2.style.backgroundImage="url(images/li2_03.png)";
	}
	_li2.onmouseout=function(){
		_x1.style.color="#fff";
		_y1.style.color="#fff";
		_a1.style.color="#fff";
		_e1.style.color="#fff";
		_o1.style.color="#fff";
		_mei.style.display="none";
		_li2.style.backgroundColor="#000";
		_pic2.style.backgroundImage="url(images/lie1_07.png)";
	}
	_mei.onmouseout=function(){
		_x1.style.color="#fff";
		_y1.style.color="#fff";
		_a1.style.color="#fff";
		_e1.style.color="#fff";
		_o1.style.color="#fff";
		_mei.style.display="none";
		_li2.style.backgroundColor="#000";
		_pic2.style.backgroundImage="url(images/lie1_07.png)";
	}
}	
function li3(){
	var _li3=document.getElementById("li3");
	var _shi=document.getElementById("shi");
	var	_pic3=document.getElementById("tu2")
	
	var _x2=document.getElementById("x2");
	var _y2=document.getElementById("y2");
	var _a2=document.getElementById("a2");
	var _e2=document.getElementById("e2");
	_li3.onmousemove=function(){
		_li3.style.borderLeft="1px solid #000";
		_li3.style.borderTop="1px solid #000";
		_shi.style.display="block";
		_x2.style.color="#000";
		_y2.style.color="#000";
		_a2.style.color="#000";
		_e2.style.color="#000";
		_li3.style.backgroundColor="#fff";
		_pic3.style.backgroundImage="url(images/li3_03.png)";
	}
	_shi.onmousemove=function(){
		_shi.style.display="block";
		_x2.style.color="#000";
		_y2.style.color="#000";
		_a2.style.color="#000";
		_e2.style.color="#000";
		_li3.style.backgroundColor="#fff";
		_pic3.style.backgroundImage="url(images/li3_03.png)";
	}
	_li3.onmouseout=function(){
		_x2.style.color="#fff";
		_y2.style.color="#fff";
		_a2.style.color="#fff";
		_e2.style.color="#fff";
		_shi.style.display="none";
		_li3.style.backgroundColor="#202020";
		_pic3.style.backgroundImage="url(images/lie3_03.png)";
	}
	_shi.onmouseout=function(){
		_x2.style.color="#fff";
		_y2.style.color="#fff";
		_a2.style.color="#fff";
		_e2.style.color="#fff";
		_shi.style.display="none";
		_li3.style.backgroundColor="#202020";
		_pic3.style.backgroundImage="url(images/lie3_03.png)";
	}
}
function li4(){
	var _li4=document.getElementById("li4")
	var _mu=document.getElementById("mu");
	var	_pic4=document.getElementById("tu3")
	
	var _x3=document.getElementById("x3");
	var _y3=document.getElementById("y3");
	var _a3=document.getElementById("a3");
	var _e3=document.getElementById("e3");
	_li4.onmousemove=function(){
		_li4.style.borderLeft="1px solid #000";
		_li4.style.borderTop="1px solid #000";
		_mu.style.display="block";
		_x3.style.color="#000";
		_y3.style.color="#000";
		_a3.style.color="#000";
		_e3.style.color="#000";
		_li4.style.backgroundColor="#fff";
		_pic4.style.backgroundImage="url(images/li4_03.png)";
	}
	_mu.onmousemove=function(){
		_mu.style.display="block";
		_x3.style.color="#000";
		_y3.style.color="#000";
		_a3.style.color="#000";
		_e3.style.color="#000";
		_li4.style.backgroundColor="#fff";
		_pic4.style.backgroundImage="url(images/li4_03.png)";
	}
	_li4.onmouseout=function(){
		_x3.style.color="#fff";
		_y3.style.color="#fff";
		_a3.style.color="#fff";
		_e3.style.color="#fff";
		_mu.style.display="none";
		_li4.style.backgroundColor="#000";
		_pic4.style.backgroundImage="url(images/lie4_03.png)";
	}
	_mu.onmouseout=function(){
		_x3.style.color="#fff";
		_y3.style.color="#fff";
		_a3.style.color="#fff";
		_e3.style.color="#fff";
		_mu.style.display="none";
		_li4.style.backgroundColor="#000";
		_pic4.style.backgroundImage="url(images/lie4_03.png)";
	}
}
function li5(){
	var _li5=document.getElementById("li5")
	var _life=document.getElementById("life");
	var	_pic5=document.getElementById("tu4")
	
	var _x4=document.getElementById("x4");
	var _y4=document.getElementById("y4");
	var _a4=document.getElementById("a4");
	var _e4=document.getElementById("e4");
	_li5.onmousemove=function(){
		_li5.style.borderLeft="1px solid #000";
		_li5.style.borderTop="1px solid #000";
		_life.style.display="block";
		_x4.style.color="#000";
		_y4.style.color="#000";
		_a4.style.color="#000";
		_e4.style.color="#000";
		_li5.style.backgroundColor="#fff";
		_pic5.style.backgroundImage="url(images/li5_03.png)";
	}
	_life.onmousemove=function(){
		_life.style.display="block";
		_x4.style.color="#000";
		_y4.style.color="#000";
		_a4.style.color="#000";
		_e4.style.color="#000";
		_li5.style.backgroundColor="#fff";
		_pic5.style.backgroundImage="url(images/li5_03.png)";
	}
	_li5.onmouseout=function(){
		_x4.style.color="#fff";
		_y4.style.color="#fff";
		_a4.style.color="#fff";
		_e4.style.color="#fff";
		_life.style.display="none";
		_li5.style.backgroundColor="#202020";
		_pic5.style.backgroundImage="url(images/lie5_03.png)";
	}
	_life.onmouseout=function(){
		_x4.style.color="#fff";
		_y4.style.color="#fff";
		_a4.style.color="#fff";
		_e4.style.color="#fff";
		_life.style.display="none";
		_li5.style.backgroundColor="#202020";
		_pic5.style.backgroundImage="url(images/lie5_03.png)";
	}
}	
function li6(){
	var _li6=document.getElementById("li6")
	var _sport=document.getElementById("sport");
	var	_pic6=document.getElementById("tu5")
	
	var _x5=document.getElementById("x5");
	var _y5=document.getElementById("y5");
	var _a5=document.getElementById("a5");
	
	_li6.onmousemove=function(){
		_li6.style.borderLeft="1px solid #000";
		_li6.style.borderTop="1px solid #000";
		_sport.style.display="block";
		_x5.style.color="#000";
		_y5.style.color="#000";
		_a5.style.color="#000";
		
		_li6.style.backgroundColor="#fff";
		_pic6.style.backgroundImage="url(images/li6_03.png)";
	}
	_sport.onmousemove=function(){
		_sport.style.display="block";
		_x5.style.color="#000";
		_y5.style.color="#000";
		_a5.style.color="#000";
		
		_li6.style.backgroundColor="#fff";
		_pic6.style.backgroundImage="url(images/li6_03.png)";
	}
	_li6.onmouseout=function(){
		_x5.style.color="#fff";
		_y5.style.color="#fff";
		_a5.style.color="#fff";
		
		_sport.style.display="none";
		_li6.style.backgroundColor="#000";
		_pic6.style.backgroundImage="url(images/lie6_03.png)";
	}
	_sport.onmouseout=function(){
		_x5.style.color="#fff";
		_y5.style.color="#fff";
		_a5.style.color="#fff";
		
		_sport.style.display="none";
		_li6.style.backgroundColor="#000";
		_pic6.style.backgroundImage="url(images/lie6_03.png)";
	}
}	
function li7(){
	var _li7=document.getElementById("li7")
	var _jing=document.getElementById("jing");
	var	_pic7=document.getElementById("tu6")
	
	var _x6=document.getElementById("x6");
	var _y6=document.getElementById("y6");
	var _a6=document.getElementById("a6");
	
	_li7.onmousemove=function(){
		_li7.style.borderLeft="1px solid #000";
		_li7.style.borderTop="1px solid #000";
		_jing.style.display="block";
		_x6.style.color="#000";
		_y6.style.color="#000";
		_a6.style.color="#000";
		
		_li7.style.backgroundColor="#fff";
		_pic7.style.backgroundImage="url(images/li7_03.png)";
	}
	_jing.onmousemove=function(){
		_jing.style.display="block";
		_x6.style.color="#000";
		_y6.style.color="#000";
		_a6.style.color="#000";
		
		_li7.style.backgroundColor="#fff";
		_pic7.style.backgroundImage="url(images/li7_03.png)";
	}
	_li7.onmouseout=function(){
		_x6.style.color="#fff";
		_y6.style.color="#fff";
		_a6.style.color="#fff";
		
		_jing.style.display="none";
		_li7.style.backgroundColor="#202020";
		_pic7.style.backgroundImage="url(images/lie7_03.png)";
	}
	_jing.onmouseout=function(){
		_x6.style.color="#fff";
		_y6.style.color="#fff";
		_a6.style.color="#fff";
		
		_jing.style.display="none";
		_li7.style.backgroundColor="#202020";
		_pic7.style.backgroundImage="url(images/lie7_03.png)";
	}
}	
function li8(){
	var _li8=document.getElementById("li8")
	var _dian=document.getElementById("dian");
	var	_pic8=document.getElementById("tu7")
	
	var _x7=document.getElementById("x7");
	var _y7=document.getElementById("y7");
	var _a7=document.getElementById("a7");
	var _e7=document.getElementById("e7");
	_li8.onmousemove=function(){
		_li8.style.borderLeft="1px solid #000";
		_li8.style.borderTop="1px solid #000";
		_li8.style.borderBottom="1px solid #000";
		_dian.style.display="block";
		_x7.style.color="#000";
		_y7.style.color="#000";
		_a7.style.color="#000";
		_e7.style.color="#000";
		_li8.style.backgroundColor="#fff";
		_pic8.style.backgroundImage="url(images/li8_03.png)";
	}
	_dian.onmousemove=function(){
		_dian.style.display="block";
		_x7.style.color="#000";
		_y7.style.color="#000";
		_a7.style.color="#000";
		_e7.style.color="#000";
		_li8.style.backgroundColor="#fff";
		_pic8.style.backgroundImage="url(images/li8_03.png)";
	}
	_li8.onmouseout=function(){
		_x7.style.color="#fff";
		_y7.style.color="#fff";
		_a7.style.color="#fff";
		_e7.style.color="#fff";
		_dian.style.display="none";
		_li8.style.backgroundColor="#000";
		_pic8.style.backgroundImage="url(images/li8_03.png)";
	}
	_dian.onmouseout=function(){
		_x7.style.color="#fff";
		_y7.style.color="#fff";
		_a7.style.color="#fff";
		_e7.style.color="#fff";
		_dian.style.display="none";
		_li8.style.backgroundColor="#202020";
		_pic8.style.backgroundImage="url(images/lie8_03.png)";
	}
}			
	
	
	
	

function list_two(){
	li1();
	li2();
	li3();
	li4();
	li5();
	li6();
	li7();
	li8();
}

function scoll(){
	
	window.onscroll=function(){
		var _fix=document.getElementById("fix");
		var _s=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(_s);
		var _a_top=document.getElementById("a_top");
		var i=0;
		if(_a_top.display="block"){
			i=98;
		}else{
			i=30;
		}
		if(_s>=i){
			_fix.style.display="block";
		}else{
			_fix.style.display="none";
		}
	}
}

function click(){
	var _ol=document.getElementById("con");
	var _li=_ol.getElementsByTagName("li");
	var _img=_ol.getElementsByTagName("img");
	//console.log(_img.children[1]);
	//console.log(_ol);
	for(var i=0;i<=_img.length;i++){
		_img[i].onmouseover=function(){
			
			this.style.zIndex="200";
		}
		
	}
	for(var i=0;i<=_img.length;i++){
		_img[i].onmouseleave=function(){
			this.style.zIndex="500";
		}
		
	}
}


window.onload=function(){
	advertise();
	list();
	list_two();
	scoll();
	//click();
	
}
