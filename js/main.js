function services(){
    $('#services-btn').click(function(){
        $(".services-wrapper").toggleClass("servicesClass");
    });
}
function work(){
    $('#work-btn').click(function(){
        $(".work-wrapper").toggleClass("servicesClass");
    });
}
services();
work();