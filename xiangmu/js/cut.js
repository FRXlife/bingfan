
function click(){
	var _ol=document.getElementById("con");
	var _li=_ol.getElementsByTagName("li");
	var _img=_ol.getElementsByTagName("img");
	for(var i=0;i<_img.length;i++){
		_img.children[i].onmouseover=function(){
			_img.children[i].style.zIndex="200";
		}
	}
}
function a(){
	var _cs=document.getElementById("cs");
	_cs.onmouseover=function(){
		_cs.style.zIndex="200";
	}
}


window.onload=function(){
	//click();
	a();
}
