
(function ($) {
  "use strict";





  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $(".rs2-wrap-input100").on('change',function(){
    $(".rs2-wrap-input100").removeClass("failed");
  });

  $(".rs1-wrap-input100").on('change',function(){
    $(".rs1-wrap-input100").removeClass("failed");
  });

  $('.login100-form-btn').on('click',function(){
    var check = true;
    $(".rs2-wrap-input100").removeClass("failed");
    $(".rs1-wrap-input100").removeClass("failed");
    for(var i=0; i<input.length; i++) {
      if(validate(input[i]) == false){
        showValidate(input[i]);
        check=false;
      }
    }
    if (check && $("#password").val()=="pass" && $("#first-name").val()=="marygold")
    window.location.href = "../index.html";
    else if (check && $("#password").val()!="pass" && $("#first-name").val()=="marygold")
    {
      $(".rs2-wrap-input100").addClass("failed");
    }
    else if (check && $("#password").val()=="pass" && $("#first-name").val()!="marygold")
    {
      $(".rs1-wrap-input100").addClass("failed");
    }
    else
    {
      $(".rs2-wrap-input100").addClass("failed");
      $(".rs1-wrap-input100").addClass("failed");
    }
    return check;
  });


  $('.validate-form .input100').each(function(){
    $(this).focus(function(){
      hideValidate(this);
    });
  });

  function validate (input) {
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    }
    else {
      if($(input).val().trim() == ''){
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }


})(jQuery);
