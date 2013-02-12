var all_effects=[];
var effects=[];
var image_library=['home_thumb.jpg','2_thumb.jpg','home_thumb.jpg','home_thumb.jpg','home_thumb.jpg','home_thumb.jpg','home_thumb.jpg','2_thumb.jpg','2_thumb.jpg','2_thumb.jpg'];
var _window='';
var current_image;
var menu=['Brightness','Contrast','Crop','Rotate','Sepia','Grayscale','emboss']
var _menu='inactive';//can be level1 and level2
window.onload=init;
function init(){
	//start screen fix
	var offset = $('#home').offset();
	$('#home').click(function(e){
		var x=(e.clientX - offset.left);
		var y=(e.clientY - offset.top);
		if(x>320&&x<420&&y<-580&&y>-665){
			switch_window('image_library',500);
		}
    	});
	$('#menu').slideUp(0);
	$('#slider').fadeOut(0);	
	$('#rect').fadeOut(0);	
	$('.undo').fadeOut(0);	
	switch_window('home',0);

	//costruct image library
	make_image_library();
}
function switch_window(win,latency){
	$('.tablet').slideUp(latency);
	$('#'+win).slideDown(latency);
	_window=win;
}
function switch_menu(menu,more){//can be inactive,level1,level2
	if(menu=='inactive'){
		$('#menu_level1').slideUp(0);
	}
	else if(menu=='level1'){
		//if(more.
	}
	else{
	}
}
function add_effect(object_id,effect,options){
	effects.push([effect,options]);
	$('#edit_img').pixastic("blurfast",{amount:0.2});
	//$('#'+object_id).pixastic(effect,options);
	/*for(effect in effects){
		$('#'+object_id).pixastic(effects[effect][0],effect[effect][1]);
	}*/
}
function remove_effect(){
}
function make_image_library(){
	for(var i in image_library){
        console.log(i);
		var img=document.createElement('img');
		img.src=image_library[i];
		img.onclick=function(){
			document.getElementById('editor').innerHTML="";
			effects=[];
			current_image=this.src.split('_')[0]+'.jpg';
			switch_window('editor');
			var _img=document.createElement('img');
			_img.src=current_image;
			_img.id='edit_img';
			document.getElementById('editor').appendChild(_img);
			$('.undo').fadeIn(100);	
		};
		img.style.cursor='pointer';
		document.getElementById('image_library').appendChild(img);
	}
}
function menu_action(){
	if(_window=='editor'){
		document.getElementById("menu").innerHTML="";
		if(_menu=='inactive'){
			for(var i in menu){
				if(menu[i]=='Crop')
					document.getElementById("menu").innerHTML+='<a onclick="$(\'#rect\').fadeIn(500);">'+menu[i]+'</a> <br><hr /> ';
				else
					document.getElementById("menu").innerHTML+='<a onclick="$(\'#slider\').fadeIn(500);">'+menu[i]+'</a> <br><hr /> ';
			}
		}
		$('#menu').slideDown(500);
	}
}
function back(){
	if(_menu!='inactive'){
		if(_menu=='level1'){
		}
		if(_menu=='level2'){
		}
	}
	else if(_window=='image_library'){
		switch_window('home',500);
	}
	else if(_window!='home'){
		$('#menu').slideUp(500);
		$('#slider').fadeOut(500);	
		$('.undo').fadeOut(100);	
		switch_window('image_library',500);
	}
}

