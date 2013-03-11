var mails=[{'from':'Suresh Alse','from_email':'alseambusher@gmail.com','subject':'Hackathon ahead 2013 india','body':'I wanna hack'},{'from':'Prajwal','from_email':'prp@gmail.com','subject':'Hack2 behind 2012 USA','body':'I wanna hack2'}];
var tags=['inbox','draft','sent'];
var windows=['home','inbox','message','compose'];
var BUTTON_ID;
var LINK_ID;
var LINK_ID2;
var MAIL;
window.onload=init;
function init(){
    for(var i=0;i<windows.length;i++)
        $("#"+windows[i]+"_container").fadeOut(0);
    $("#inbox_container").fadeIn(0);
    set_clicks();
	populate_inbox();
}
function switch_window(_window){
    for(var i=0;i<windows.length;i++)
        $("#"+windows[i]+"_container").fadeOut(500);
    $("#"+_window+"_container").fadeIn(500);
}
function show_inbox(){
    populate_inbox();
    switch_window('inbox');
}
function populate_inbox(){
    var inbox=document.getElementById("inbox");
    inbox.innerHTML="";
    for(var i=0;i<mails.length;i++){
        inbox.innerHTML+='<li class="active" ><input type="checkbox" /><a href="#" id="'+i+'"> '+mails[i].from+'<br />'+mails[i].subject+'</a></li>';
    }
    for(var i=0;i<mails.length;i++){
        inbox.innerHTML+='<li class="active" ><input type="checkbox" /><a href="#" id="'+i+'"> '+mails[i].from+'<br />'+mails[i].subject+'</a></li>';
    }
    for(var i=0;i<mails.length;i++){
        inbox.innerHTML+='<li class="active" ><input type="checkbox" /><a href="#" id="'+i+'"> '+mails[i].from+'<br />'+mails[i].subject+'</a></li>';
    }
    for(var i=0;i<mails.length;i++){
        inbox.innerHTML+='<li class="active" ><input type="checkbox" /><a href="#" id="'+i+'"> '+mails[i].from+'<br />'+mails[i].subject+'</a></li>';
    }

    $("#inbox").find("li a").click(function(){
        show_inbox_message(mails[parseInt(this.id)]);
    });
    set_clicks();
}
function show_inbox_message(mail){
    MAIL=mail;
    $('.message_inbox').html("<h2>"+mail.subject+"</h2><em>"+mail.from+": "+mail.from_email+"</em><br /><br /><br /><p>"+mail.body+"</p>");
    switch_window('message');
}

function new_compose(){
    $("#compose_subject").val("");
    $("#compose_body").html("");
    $("#compose_to").val("");
    switch_window('compose');
}
function forward(){
    console.log(MAIL);
    $("#compose_subject").val(MAIL.subject);
    $("#compose_body").html(MAIL.body);
    $("#compose_to").val("");
    switch_window('compose');
}
function reply(){
    $("#compose_subject").val("Re:"+MAIL.subject);
    $("#compose_body").html("");
    $("#compose_to").val(MAIL.from_email);
    switch_window('compose');
}
function set_clicks(){
    $('button').mouseover(function(){
        BUTTON_ID=this;
        var local_button=this;
        setTimeout(function(){
            if(local_button==BUTTON_ID){
                console.log("clicked");
                $(local_button).trigger('click');
                BUTTON_ID="";
            }
        },2000);
    });
    $('button').mouseout(function(){
        BUTTON_ID="";
    });
    /*$('.nav li').mouseover(function(){
        console.log(this);
        LINK_ID=this;
        var local_button=this;
        setTimeout(function(){
            if(local_button==LINK_ID){
                console.log("clicked");
                $(local_button).trigger('click');
                LINK_ID="";
            }
        },2000);
    });
    $('.nav li').mouseout(function(){
        LINK_ID="";
    });*/
    $('.active a').mouseover(function(){
        console.log(this);
        LINK_ID2=this;
        var local_button=this;
        setTimeout(function(){
            if(local_button==LINK_ID2){
                console.log("clicked");
                $(local_button).trigger('click');
                LINK_ID2="";
            }
        },2000);
    });
    $('.active a').mouseout(function(){
        LINK_ID2="";
    });

    $(':checkbox').mouseover(function(){
        console.log(this);
        LINK_ID=this;
        var local_button=this;
        setTimeout(function(){
            if(local_button==LINK_ID){
                console.log("clicked");
                $(local_button).trigger('click');
                LINK_ID="";
            }
        },2000);
    });
    $(':checkbox').mouseout(function(){
        LINK_ID="";
    });


}
function clicker(id){
    ID=id;
    setTimeout(function(){
        if(ID==id){
            $("#"+id).trigger('click');
            ID="";
        }
    },2000);
}
