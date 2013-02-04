var position=0;
var volume=0;
var playing=false;
var shfl=0;
//data
var all_songs=['New Divide','Thousand Suns','Apologize','Drive By','Low','The Reason','Magnificent','Fireflies'];
var playlists={'alse':['Drive By','Magnificent'],'prajwal':['The Reason','Apologize']};
var artists={'LinkinPark':['New Divide','Fireflies'],'Hoobastank':['The reason','Low']};
var albums={'AllTimeGreats':['Drive By','Low'],'Applause':['Thousand Suns','Low']};
var help=[ '              OPTIONS','Left Button for selection, play or pause','Right Button for going back','  ^ and v for scrolling list or changing volume','   < and > for rewind and fast forward respectively','  4 and 6 for previous and next song respectively','0 for toggling shuffle option','* for mute'];
var data={'All':all_songs,'Playlists':playlists,'Artists':artists,'Albums':albums,'Help':help};
var elements=[];
var history=[];
/*
 * possible windows
 * home, playlists, playlists_, artists,artists_,albums,albums_
 */

//init function
$(function(){
	$("#numbers a").addClass("btn btn-inverse numbers");
	$("#button_controls a").addClass("btn btn-inverse button_controls");
    $('#hang').removeClass("btn-inverse");
    $('#hang').addClass("btn-danger");
    $('#recieve').removeClass("btn-inverse");
    $('#recieve').addClass("btn-success");
    $('#bottom_bar a').removeClass('hover');

    $("#nav_buttons a").removeClass("btn-inverse");
    
  // $('#volume').html('<i class="icon-volume-up icon-white" style="float:left"></i>');
    today=new Date();
    $('#timer').html(today.getHours()+':'+today.getMinutes()+':'+today.getSeconds());
    volume_control('increase');
    volume_control('increase');
    update_timer();
    update_elements();
	$('#options').toggle(0);
    player_toggle();
});

/* WINDOW NAVIGATION */

function update_options(){
    $("#options li a").html('');
    for(var i in [0,1,2,3,4]){
        $("#elt"+i+' a').html(elements[parseInt(position/5)*5+parseInt(i)]);
    }
	if(elements.length>5)
	$("#pto").html('Page '+(parseInt(position/5)+1)+' of '+(parseInt(elements.length/5)+1));
	else
	$("#pto").html('');
    $("#options li").removeClass('active');
    $("#elt"+(position%5)).addClass('active');
}
/* WINDOW FUNCTIONS */
function update_elements(){
    elements=[];
		type='string';
	if(history.length==0){
        position=0;
        history=[];
        for(var key in data)
            elements.push(key);
        update_options();
	}
    else{
		for(var i in eval(history[history.length-1]))
			type=typeof eval(history[history.length-1])[i];
		if(type=='object'){
			for(var i in eval(history[history.length-1]))
				elements.push(i);
		}
		else{
            elements=eval(history[history.length-1]);
		}
    }
}
/* WINDOW DISPLAY */
function player_toggle(){
	$('#options').toggle(0);
	$('#player').toggle(0);
}
function play(){
	if($('#play').attr('class')=='icon-play'){
		$('#play').attr('class','icon-pause');
		playing=true;
		update_play_bar('normal');
	}
	else{
		$('#play').attr('class','icon-play');
		playing=false;
	}
}
