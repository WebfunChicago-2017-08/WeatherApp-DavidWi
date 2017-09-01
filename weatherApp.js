$(document).ready(function(){
   $("button").click(function(){
       var url = "http://api.openweathermap.org/data/2.5/weather?q="
       url += $("input").val();
       url += "&APPID=adfae0270410accfd8c05093e2cfbf8e";
    $.get(url, function(data){
        $("#name h3").html(data.name);
        $("#temp").html((data.main.temp - 32) *5/9)
        console.log(data);
    }, "json")
    return false;
    })

});