$(document).ready(function(){
var url="http://192.168.1.153:3000/pi/sensors";
worker();
  $(".room-toggle").click(function(){
    $("#rooms").fadeIn();
    $("#sensors").fadeOut();
    $(".sensors-toggle").removeClass("atv");
    $(".room-toggle").addClass("atv");
  });


  $(".sensors-toggle").click(function(){
    $("#rooms").fadeOut();
    $("#sensors").fadeIn();
    $(".room-toggle").removeClass("atv");
    $(".sensors-toggle").addClass("atv");
  });

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '80');
  });

  $(".h1").fadeIn(3500, function() {
    $(".preloader").fadeOut(500);
  });

  $("#refresh").click(function(){
    $("#refreshing").fadeIn();
    $("#refresh").fadeOut();
    $("#refreshing").fadeOut(6000, function (){
      $("#refresh").fadeIn();
    });
  });



  function worker() {
    $.ajax({
      url: url,
      success: function(data) {
        if (data.pir.value)
        {
          $("#bedroom1").find("#icon-heat").css("background-color", "#F1B731");
          $("#bedroom1").find("#icon-heat").attr("uk-tooltip" ,"title: Light On");
          $("#bedroom1").find("#detection").html("Person Present");
          $("#pir").find("#temperature").html("Proximity Infrared Sensor<br><em>working</em>");
        }
        else {
          $("#bedroom1").find("#icon-heat").css("background-color", "gray");
          $("#bedroom1").find("#icon-heat").attr("uk-tooltip" ,"title: Light Off");
          $("#bedroom1").find("#detection").html("Room Empty");
          $("#pir").find("#temperature").html("Proximity Infrared Sensor<br><em>checking</em>");
        }

        if (data.temperature.value > 20)
        {
          $("#bedroom1").find("#icon-fan").css("background-color", "#085B92");
          $("#bedroom1").find("#icon-fan").attr("uk-tooltip" ,"title: Fan On");
          $("#bedroom1").find("#temperature").html(data.temperature.value+" C");
          $("#dht22").find("#temperature").html("Proximity Infrared Sensor<br><em>working</em>");
        }
        else {
          $("#bedroom1").find("#icon-fan").css("background-color", "gray");
          $("#bedroom1").find("#icon-fan").attr("uk-tooltip" ,"title: Fan Off");
          $("#bedroom1").find("#temperature").html("Temperatute and Humidity Sensor <br><em>working</em></span><br>");
          $("#dht22").find("#temperature").html("Proximity Infrared Sensor<br><em>checking</em>");
        }

      },
      complete: function() {
         setTimeout(worker, 10000);
       }
    });
  }

  $("#refresh").click(function(){
    worker();
  });

});
