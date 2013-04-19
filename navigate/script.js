window.onload=init;
function init(){
	//start screen fix

    $("#message").slideUp(0);
    $("#end").fadeOut(0);
    $("#info_bar").fadeOut(0);
    document.getElementById("welcome").play();
    /*$('#rect').draggable();
    $('#rect').resizable();
	$('#rect').fadeOut(0);*/

	switch_window('home',0);
	//switch_window('image_library');

	//costruct image library
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
					document.getElementById("menu").innerHTML+='<div onclick="">'+menu[i]+'</div>';
				else
					document.getElementById("menu").innerHTML+='<div onclick="">'+menu[i]+'</div>';
			}
		}
		$('#menu').slideDown();
        _menu='active';

        $('#menu div').click(function(){
            $('#menu').slideUp();
            $('.mid_button').fadeIn(0);
            $this=$(this);
            switch($this.html()){
                case 'Crop':$('#rect').fadeIn();break;
                case 'Rotate':$('#dial_holder').fadeIn();break;
                case 'HSV':$('#hsv').fadeIn();break;
                case 'RGB':$('#rgb').fadeIn();break;
                case 'Zoom':$('#zoom').fadeIn();break;
                case 'Histogram':$('#hist').fadeIn();break;
                case 'Sepia':back();break;
                case 'Quick Fix':back();break;
                default:
                    $('#slider').fadeIn();
                    $('#slider a').html('<br>'+$this.html());
                    break;
            }
        });

	}
}
function back(){
	if(_menu!='inactive'){
        $('#menu').slideUp();
        $('#slider').fadeOut();
        $('#rect').fadeOut();
        $('.mid_button').fadeOut();
        $('#dial_holder').fadeOut();
        $('#hsv').fadeOut();
        $('#zoom').fadeOut();
        $('#hist').fadeOut();
        $('#rgb').fadeOut();
        _menu='inactive';
        //$('#menu').slideUp();
	}
	else if(_window=='image_library'){
		switch_window('home');
	}
	else if(_window!='home'){
		$('#menu').slideUp();
		$('#slider').fadeOut();
        $('#prompt').fadeIn();
	}
}

