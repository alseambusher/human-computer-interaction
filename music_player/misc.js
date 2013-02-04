function volume_control(type){
	volume+=(type=='increase')?1:-1;
	if(volume<0) volume=0;
	if(volume>6) volume=6;
	$('#volume').html('');
	for(var i=0;i<volume;i++)
		$('#volume').html($('#volume').html()+'<strong class="volume">_</strong> ');
}
function nxt_song(){
    document.getElementById('bar').style.width='0%';
    position=(position+1)%8;
    $('#playing_song').html(elements[position]);

}
function update_play_bar(type){
	if((type=='normal')&&playing){
        var old_width=parseInt(document.getElementById('bar').style.width.split('%')[0]);
        if(old_width<100)
		    document.getElementById('bar').style.width=(old_width+1)+'%';
        else
            nxt_song();
		setTimeout('update_play_bar("normal");',1000);
	}
    else if(type=="forward"){
        $(".icon-forward").attr('class','icon-fast-forward');
        var old_width=parseInt(document.getElementById('bar').style.width.split('%')[0]);
        if(old_width<=95){
		    document.getElementById('bar').style.width=(old_width+5)+'%';
        }
        else{
            nxt_song();
		    //document.getElementById('bar').style.width='100%';
		    }
        setTimeout("$('.icon-fast-forward').attr('class','icon-forward');",100);
    }
    else if(type=="reverse"){
        $(".icon-backward").attr('class','icon-fast-backward');
        var old_width=parseInt(document.getElementById('bar').style.width.split('%')[0]);
        if(old_width>=5){
		    document.getElementById('bar').style.width=(old_width-5)+'%';
        }
        else
		    document.getElementById('bar').style.width='0%';
        setTimeout("$('.icon-fast-backward').attr('class','icon-backward');",100);
    }

}
/* MISC */
function update_timer(){
	var cur_time=document.getElementById("timer").innerHTML.split(":");
	var _final;
	var cur_hour=parseInt(parseFloat(cur_time[0]));
	var cur_min=parseInt(parseFloat(cur_time[1]));
	var cur_sec=parseInt(parseFloat(cur_time[2]));
    if(cur_sec>=59){
        cur_sec=0;
        if(cur_min>=59){
            cur_min=0;
            cur_hour+=1;
        }
        else{
            cur_min+=1;
        }
    }
    else{
        cur_sec+=1;
    }
    cur_sec=(cur_sec<10)?'0'+cur_sec:''+cur_sec;
    cur_min=(cur_min<10)?'0'+cur_min:''+cur_min;
    cur_hour=(cur_hour<10)?'0'+cur_hour:''+cur_hour;
	document.getElementById("timer").innerHTML=cur_hour+':'+cur_min+':'+cur_sec;
	setTimeout("update_timer();",1000);
}
function is_leaf(node){
    if(typeof node[0]=='string')
        return true;
    else
        return false;
}
