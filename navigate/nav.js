ROUTE=0
MAX_ROUTES=1
MESSAGE_TIME=5000
ROUTE_INTERVAL=5000
MAIN_MESSAGE="Navigation from Mangalore to Bangalore"
var routes={'1':['598Km','60kmph','7hr 3min','2hr 5min','1']}
var message={'1':'route must be changed'}
function start(){
    $("#map").wheelzoom({zoom:0.05});
    $("#prompt").fadeOut(100);
    $("#message").html(MAIN_MESSAGE);
    $("#message").slideDown(300);
    setTimeout("next_route();",ROUTE_INTERVAL);
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
        return;
    }
    $("#map").css("background-image","url(http://localhost/hci/navigate/"+ROUTE+".png)");
    $("#distance").html(routes[ROUTE][0]);
    $("#speed").html(routes[ROUTE][1]);
    $("#time_elapsed").html(routes[ROUTE][2]);
    $("#time_remaining").html(routes[ROUTE][3]);
    if(parseInt(routes[ROUTE][4])>0){
        show_message(message[routes[ROUTE][4]]);
    }
    else
        setTimeout("next_route();",ROUTE_INTERVAL);
}
