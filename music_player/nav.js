function up(){
    if(history[history.length-1]!='player'){
    	if(position>0){
        	position-=1;
        	update_options();
    	}
    }
    else{
    	volume_control('increase');
    }
}
function down(){
    if(history[history.length-1]!='player'){
    	if(position<elements.length-1){
        	position+=1;
        	update_options();
    	}
    }
    else{
    	volume_control('decrease');
    }
}
function mid(){
    if(history[history.length-1]!='player'){
		if(history.length==0){
            history.push('data.'+elements[position]);
			update_elements();
			position=0;
			update_options();
		}
        else if(!is_leaf(eval(history[history.length-1]))){
            history.push(history[history.length-1]+'.'+elements[position]);
	        update_elements();
			position=0;
			update_options();
        }
        else if(history[history.length-1]!='data.Help'){
	console.log(history);
            history.push('player');
            $('#playing_song').html(elements[position]);
            player_toggle();
            play();
        }
	}
	else{
		play();
	}
}
function left(){
    if(history[history.length-1]!='player'){
    }
    else{
        update_play_bar('reverse');
    }
}
function right(){
    if(history[history.length-1]!='player'){
    }
    else{
        update_play_bar('forward');
    }
}
function back(){
    if(history[history.length-1]=='player'){
        player_toggle();
        play();
		document.getElementById('bar').style.width='0%';
    }

	if(history.length!=0){
        console.log(history);
        history.pop();
	    update_elements();
	    position=0;
	    update_options();
    }
}


