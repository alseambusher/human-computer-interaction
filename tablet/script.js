var all_effects=[];
var effects=[];
var image_library=['home_thumb.jpg','2_thumb.jpg','home_thumb.jpg','home_thumb.jpg','home_thumb.jpg','home_thumb.jpg','home_thumb.jpg','2_thumb.jpg','2_thumb.jpg','2_thumb.jpg'];
var current_image;
var _window='home';
window.onload=init;
function init(){
	switch_window('home',0);
	switch_window('image_library',500);
	make_image_library();
}
function switch_window(win,latency){
	$('.tablet').slideUp(latency);
	$('#'+win).slideDown(latency);
	_window=win;
}
function make_image_library(){
	for(var i in image_library){
        console.log(i);
		var img=document.createElement('img');
		img.src=image_library[i];
		img.onclick=function(){
			effects=[];
			current_image=this.src.split('_')[0]+'.jpg';
			switch_window('editor');
			document.getElementById('editor').style.background='url("'+current_image+'")';
		};
		img.style.cursor='pointer';
		document.getElementById('image_library').appendChild(img);
	}
}
