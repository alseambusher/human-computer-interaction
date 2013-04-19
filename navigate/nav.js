ROUTE=0
MAX_ROUTES=13
MESSAGE_TIME=5000
ROUTE_INTERVAL=3500
MAIN_MESSAGE="Navigation from Mangalore to Bangalore"
var routes={'1':['346Km','60kmph','7hr 3min','0hr 0min','-1'],'2':['302Km','58kmph','6hr 12min','1hr 5min','-1'],'3':['271Km','60kmph','5hr 12min','2hr 5min','1'],'4':['230Km','50kmph','4hr 3min','2hr 53min','1'],'5':['190Km','62kmph','4hr 31min','3hr 15min','3'],'6':['173Km','60kmph','4hr 0min','4hr 0min','1'],'7':['150Km','75kmph','3hr 37min','4hr 25min','-1'],'8':['132Km','60kmph','3hr 3min','5hr 0min','-1'],'9':['111Km','51kmph','2hr 22min','5hr 45min','2'],'10':['99Km','60kmph','2hr 3min','6hr 5min','-1'],'11':['54Km','60kmph','1hr 3min','6hr 35min','-1'],'12':['22Km','71kmph','0hr 33min','7hr 5min','-1'],'13':['0Km','60kmph','0hr 0min','7hr 25min','-1']}
var message={'1':'Route has been changed considering traffic conditions','2':'Mysore has been reached','3':'Hassan has been reached'}
function start(){
    $("#map").wheelzoom({zoom:0.05});
    $("#prompt").fadeOut(100);
    $("#help").fadeOut(100);
    $("#info_bar").fadeIn(100);
    $("#message").html(MAIN_MESSAGE);
    $("#message").slideDown(300);
    next_route();
}
function show_message(message){
    $("#message").slideUp(300,function(){
        $("#message").html(message);
    });
    $("#message").slideDown(300,function(){
        setTimeout(function(){
            $("#message").slideUp(300,function(){
                $("#message").html(MAIN_MESSAGE);
                $("#message").slideDown(300);
                setTimeout("next_route();",ROUTE_INTERVAL);
            });
        },MESSAGE_TIME);
    });
}
function next_route(){
    ROUTE+=1
    if(ROUTE>MAX_ROUTES){
        $("#end").fadeIn(300);
        document.getElementById("dest").play();
        return;
    }
    $("#map").css("background-image","url(http://localhost/hci/navigate/"+ROUTE+".png)")
    $("#distance").html(routes[ROUTE][0]);
    $("#speed").html(routes[ROUTE][1]);
    $("#time_elapsed").html(routes[ROUTE][2]);
    $("#time_remaining").html(routes[ROUTE][3]);
    if(parseInt(routes[ROUTE][4])>0){
        show_message(message[routes[ROUTE][4]]);
        if(parseInt(routes[ROUTE][4])==1)
            document.getElementById("route").play();
    }
    else
        setTimeout("next_route();",ROUTE_INTERVAL);
}
