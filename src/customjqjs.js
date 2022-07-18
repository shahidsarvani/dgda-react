import $ from "jquery";

$("#diriyah_room_link").on(function () {
      $(".diriyah_room_page").show();
      $(".wadi_e_safar_room_page").hide();
  });

  $("#wadisafar_room_link").on(function () {
    $(".wadi_e_safar_room_page").show();
    $(".diriyah_room_page").hide();
});


  $("#dg_rs_screen a #diriyah-room").on(function () {
    if ($(".ft_model").hasClass("active")) {
      $(".ft_model").removeClass("active");
    } else {
      $(".ft_model").addClass("active");
      $(".ft_videowalls").removeClass("active");
      $(".ft_lights").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });
  $(".ft_model").on(function () {
    if ($(".ft_model").hasClass("active")) {
      $(".ft_model").removeClass("active");
    } else {
      $(".ft_model").addClass("active");
      $(".ft_videowalls").removeClass("active");
      $(".ft_lights").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });
  
  $(".ft_videowalls").on(function () {
    if ($(".ft_videowalls").hasClass("active")) {
      $(".ft_videowalls").removeClass("active");
    } else {
      $(".ft_videowalls").addClass("active");
      $(".ft_model").removeClass("active");
      $(".ft_lights").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });
  $(".ft_lights").on(function () {
    if ($(".ft_lights").hasClass("active")) {
      $(".ft_lights").removeClass("active");
    } else {
      $(".ft_lights").addClass("active");
      $(".ft_videowalls").removeClass("active");
      $(".ft_model").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });

  $(".dg_scen_optnon_item").on(function () {
    if ($(".dg_scen_optnon_item").hasClass("active")) {
      $(".dg_scen_optnon_item").removeClass("active");
    } else {
      $(".dg_scen_optnon_item").addClass("active");
      $(".dg_scen_optnoff_item").removeClass("active");
    }
  });
  $(".dg_scen_optnoff_item").on(function () {
    if ($(".dg_scen_optnoff_item").hasClass("active")) {
      $(".dg_scen_optnoff_item").removeClass("active");
    } else {
      $(".dg_scen_optnoff_item").addClass("active");
      $(".dg_scen_optnon_item").removeClass("active");
    }
  });

  $(".dg_scar_optnon_item").on(function () {
    if ($(".dg_scar_optnon_item").hasClass("active")) {
      $(".dg_scar_optnon_item").removeClass("active");
    } else {
      $(".dg_scar_optnon_item").addClass("active");
      $(".dg_scar_optnoff_item").removeClass("active");
    }
  });
  $(".dg_scar_optnoff_item").on(function () {
    if ($(".dg_scar_optnoff_item").hasClass("active")) {
      $(".dg_scar_optnoff_item").removeClass("active");
    } else {
      $(".dg_scar_optnoff_item").addClass("active");
      $(".dg_scar_optnon_item").removeClass("active");
    }
  });

  $(".dg_ss_optnon_item").on(function () {
    if ($(".dg_ss_optnon_item").hasClass("active")) {
      $(".dg_ss_optnon_item").removeClass("active");
    } else {
      $(".dg_ss_optnon_item").addClass("active");
      $(".dg_ss_optnoff_item").removeClass("active");
    }
  });
  $(".dg_ss_optnoff_item").on(function () {
    if ($(".dg_ss_optnoff_item").hasClass("active")) {
      $(".dg_ss_optnoff_item").removeClass("active");
    } else {
      $(".dg_ss_optnoff_item").addClass("active");
      $(".dg_ss_optnon_item").removeClass("active");
    }
  });

  // Added features section for desktop
  $(".navbar-nav a.nav-link-en1").on(function () {
    if ($(".navbar-nav a.nav-link-en1").hasClass("active")) {
      $(".navbar-nav a.nav-link-en1").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-en1").addClass("active");
      $(".navbar-nav a.nav-link-en2").removeClass("active");
    }
  });
  $(".navbar-nav a.nav-link-en2").on(function () {
    if ($(".navbar-nav a.nav-link-en2").hasClass("active")) {
      $(".navbar-nav a.nav-link-en2").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-en2").addClass("active");
      $(".navbar-nav a.nav-link-en1").removeClass("active");
    }
  });


  $(".navbar-nav a.nav-link-ar1").on(function () {
    if ($(".navbar-nav a.nav-link-ar1").hasClass("active")) {
      $(".navbar-nav a.nav-link-ar1").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-ar1").addClass("active");
      $(".navbar-nav a.nav-link-ar2").removeClass("active");
    }
  });
  $(".navbar-nav a.nav-link-ar2").on(function () {
    if ($(".navbar-nav a.nav-link-ar2").hasClass("active")) {
      $(".navbar-nav a.nav-link-ar2").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-ar2").addClass("active");
      $(".navbar-nav a.nav-link-ar1").removeClass("active");
    }
  });

  
  $(".main_video_btn").on(function (e) {
    e.preventDefault();
    $(this).css('pointer-events', 'none');
  });

  $("#diriyah-room").on(function (e) {
    e.preventDefault();
    $(".navbar-nav .nav-item:first-child").addClass('active');
  });

  $("#main_video_btn").on(function (e) {
    e.preventDefault();
    $("#main_video_btn").prop( "disabled", true );
  });


  $(document).ready(function() {
    $(".dg_ft_nav_link_en a").on(function (e) {
      e.preventDefault();
      $("html").attr("lang", "ar");
    });
    $(".lang-switcher a.lang_ar_item").on(function (e) {
      e.preventDefault();
      $("html").attr("lang", "ar");
    });
    $(".lang-switcher a.lang_en_item").on(function (e) {
      e.preventDefault();
      $("html").attr("lang", "en");
    });
  });

  
  $(".dg_ft_nav_link_ar a").on(function (e) {
    e.preventDefault();
    $("html").attr("lang", "en");
  });

  

  $("#diriyah-room").on(function (e) {
    e.preventDefault();
    $('#dg_rs_screen').addClass('firstsecanimOut');
    $('#dg_afrs_screen').addClass('firstsec');
    $("#header").fadeIn();
    $("#header").fadeIn("slow");
  });

  $(".dg_ft_nav_item1 a").on(function () {
    if ($(".dg_ft_nav_item1").hasClass("active")) {
      $(".dg_ft_nav_item1").removeClass("active");
    } else {
      $(".dg_ft_nav_item1").addClass("active");
      $(".dg_ft_nav_item2").removeClass("active");
      $(".dg_ft_nav_item3").removeClass("active");
      $(".dg_ft_nav_item4").removeClass("active");
    }
  });
  $(".dg_ft_nav_item2 a").on(function () {
    if ($(".dg_ft_nav_item2").hasClass("active")) {
      $(".dg_ft_nav_item2").removeClass("active");
    } else {
      $(".dg_ft_nav_item2").addClass("active");
      $(".dg_ft_nav_item1").removeClass("active");
      $(".dg_ft_nav_item3").removeClass("active");
      $(".dg_ft_nav_item4").removeClass("active");
    }
  });
  $(".dg_ft_nav_item3 a").on(function () {
    if ($(".dg_ft_nav_item3").hasClass("active")) {
      $(".dg_ft_nav_item3").removeClass("active");
    } else {
      $(".dg_ft_nav_item3").addClass("active");
      $(".dg_ft_nav_item1").removeClass("active");
      $(".dg_ft_nav_item2").removeClass("active");
      $(".dg_ft_nav_item4").removeClass("active");
    }
  });
  $(".dg_ft_nav_item4 a").on(function () {
    if ($(".dg_ft_nav_item4").hasClass("active")) {
      $(".dg_ft_nav_item4").removeClass("active");
    } else {
      $(".dg_ft_nav_item4").addClass("active");
      $(".dg_ft_nav_item1").removeClass("active");
      $(".dg_ft_nav_item2").removeClass("active");
      $(".dg_ft_nav_item3").removeClass("active");
    }
  });



  
  $('.home_en .lang-switcher').on(function(){
    $('body').addClass('body_ar');
    $('body').removeClass('body_en');
  });
  $('.home_ar .lang-switcher').on(function(){
    $('body').addClass('body_en');
    $('body').removeClass('body_ar');
  });

  $('#diriyah-room3').on(function(){
    $('section').removeClass('current_view');
    $('.dg_afrs_screen.arabic').addClass('current_view');
  });
  $('.dg_vw_screen').on(function(){
    $('section').removeClass('current_view');
    $('#dg_rs_screen').addClass('current_view');
  });


  $('#diriyah-room').on(function(){
    $('section').removeClass('current_view');
    $('.dg_afrs_screen.english').addClass('current_view');
  });

  $('#start_icon_afrs1').on(function() {
    $('section').removeClass('current_view');
    $('.dg_sc_screen.arabic').addClass('current_view');
  });

  $('#model_district_icon1').on(function() {
    $('section').removeClass('current_view');
    $('.ml_lights_screen.english').addClass('current_view');
  });



  $('#wadisafar_room_link').on(function(){
    $('section').removeClass('current_view');
    $('.dg_afrs_screen.english').addClass('current_view');
  });
  $('#basement_floors_icon1').on(function() {
    $('section').removeClass('current_view');
    $('.dg_bf_screen.english').addClass('current_view');
  });
  $('#diriyah-room2').on(function() {
    $('section').removeClass('current_view');
    $('.dg_afrs_screen.english').addClass('current_view');
  });

  $('#lang_switch_ar').on(function(){
    $('section').removeClass('current_view');
    $('.dg_afrs_screen.arabic').addClass('current_view');
  });

  $('#link_home_back').on(function(){
    $('section').removeClass('current_view');
    $('section').removeClass('activate_prev');
    $('#dg_rs_screen').addClass('current_view');
  });


  $('#optn_on').on(function(){
    $('section').removeClass('current_view');
    $('#dg_sm_screen_ar').addClass('current_view');
  });


  $('#optn_on_to_ar').on(function(){
    $('section').removeClass('current_view');
    $('#dg_sm_screen_ar').addClass('current_view');
  });

  $('#model_show').on(function(){
    $('section').removeClass('current_view');
    $('#dg_sc_screen').addClass('current_view');
  });


  $('#walls_video_eng').on(function(){
    $('section').removeClass('current_view');
    $('#dg_vwalls_screen').addClass('current_view');
  });
 
  $('#lignts_clv').on(function(){
    $('section').removeClass('current_view');
    $('#dg_lights_screen').addClass('current_view');
  });


  $('#lignts_clv').on(function(){
    $('section').removeClass('current_view');
    $('#dg_sm_screen_ar').addClass('current_view');
  });
  
  $('#lang_switch_ar').on(function(){
    $('.home_ar').css({"display": "block"});
    $('.home_en').css({"display": "none"});
    $('#footer_en').css({"display": "none"});
    $('#footer_ar').css({"display": "block"});
    $('.eng_logo').css({"display": "none"});
  });
  $('.lang_en_item').on(function(){
    $('.home_ar').css({"display": "none"});
    $('.home_en').css({"display": "block"});
    $('#footer_ar').css({"display": "none"});
    $('#footer_en').css({"display": "block"});
    $('.eng_logo').css({"display": "block"});
    $('#dg_afrs_screen').addClass('current_view');

  });

  $('#new_eng_channel').on(function(){
    $('section').removeClass('current_view');
    $('#dg_sm_screen').addClass('current_view');
  });
  $('#new_eng_channel_ar').on(function(){
    $('section').removeClass('current_view');
    $('#dg_sm_screen').addClass('current_view');
  });


  $('#on_ar_alzia').on(function(){
    $('section').removeClass('current_view');
    $('#dg_lights_screen_ar').addClass('current_view');
  });
  
  $('#dg_ft_shahaat').on(function(){
    $('section').removeClass('current_view');
    $('#dg_vwalls_screen_ar').addClass('current_view');
  });


  $('#main_home_ar_to').on(function(){
    $('section').removeClass('current_view');
    $('section').removeClass('activate_prev');
    $('#dg_rs_screen_ar').addClass('current_view');
    $('#ar_version .eng_logo').css({"display": "block"});
    
  });
  
  $('#modelzone_link').on(function(){
    $('section').removeClass('current_view');
    $('#ml_lights_screen').addClass('current_view');
  });

  $('#basement_floor_to').on(function(){
    $('section').removeClass('current_view');
    $('#dg_bf_screen').addClass('current_view');
  });




  let arry = [];



  $('#bring_it_back').on(function(){
    $(this).data('oned', 'yes');
    // console.log(arry);
    arry.pop();
    var total_cache = arry.length;
    // console.log(total_cache);
    var item_back = arry[total_cache-1];

 

    // console.log(item_back);
    $('section').removeClass('current_view');
    $('section').css({"visibility": "hidden", "opacity": "0"});
    $('#' + item_back).css({"visibility": "visible", "opacity": "1", "transform": "translate(0px)"});
    $('#' + item_back).addClass('current_view');

  

    if(item_back == 'dg_rs_screen' || item_back == 'dg_rs_screen_ar') {
      $('#footer_en').css({"opacity": "0"});
      arry = [];
    }else {
      $('#footer_en').css({"opacity": "1"});
    }

    $(this).data('oned', 'no');
  });
  

  // arabic ar 
  $('#bring_it_back_ar').on(function(){
    $(this).data('oned', 'yes');
    // console.log(arry);
    arry.pop();
    var total_cache = arry.length;
    // console.log(total_cache);
    var item_back = arry[total_cache-1];

 

    // console.log(item_back);
    $('section').removeClass('current_view');
    $('section').css({"visibility": "hidden", "opacity": "0"});
    $('#' + item_back).css({"visibility": "visible", "opacity": "1", "transform": "translate(0px)"});
    $('#' + item_back).addClass('current_view');


    if(item_back == 'dg_rs_screen_ar') {
      $('#footer_ar').css({"opacity": "0", "visibility": "hidden"});
      arry = ['dg_rs_screen', 'dg_rs_screen'];
      
    }else {
      $('#footer_ar').css({"opacity": "1", "visibility": "visible"});
    }


 
    $(this).data('oned', 'no');
  });

  // end bring back ar








  $('#bring_it_back').data('oned', 'no');
  $(document).on(function(){




    var isoned = $('#bring_it_back').data('oned');
    if( isoned == 'no') {
      if($('section').hasClass('current_view')){
        var selection = $('.current_view').attr('id');
       
        if(arry.includes(selection) === false){
          arry.push(selection);
          console.log(arry)
        }
      }
     }

     var total_cache = arry.length;
     console.log(total_cache);
     console.log(arry);
     $('section').removeClass('activate_prev');
     if(total_cache >= 2) {
       var item_back_prev = arry[total_cache-2];
       $('section').removeClass('activate_prev');
       $('#' + item_back_prev).addClass('activate_prev');



     } 


    });




    $('.dg_ft_nav_item').on(function(){
      $('.dg_ft_nav_item').removeClass('active');
      $(this).addClass('active');
    });


    $('#lang_switch_ar').on(function(){
      arry.push('dg_rs_screen_ar');
    });

    $('.lang_en_item').on(function(){
      arry = [];
      arry.push('dg_rs_screen', 'dg_rs_screen');
    });


  




    $(document).on(function(){
      if($('.current_view').hasClass('arabic')){
        console.log('check');
        $('#footer_ar').addClass('arabic_footer');
        $('#footer_ar').css({"opacity": "1 !important", "visibility": "visible !important", "bottom": "0"});
        $('#footer_en').css({"opacity": "0", "visibility": "hidden"});
    
      }

      if($('.current_view').attr('id') == 'dg_rs_screen_ar') {
        $('#footer_ar').removeClass('arabic_footer');
      }

      if($('.current_view').attr('id') == 'dg_rs_screen'){
        $('.logo_diriyah').css({"transform": "translate(0px)", "width": "100%", "top": "0", "padding": "118px 0px 0px 120px", "left": "36%"});
        $('.logo_diriyah .ar_logo').css({"opacity": "1", "visibility": "visible", "display": "block"});
        $('.header-menu-elements').css({"opacity": "0", "visibility": "hidden", "display": "none"});
        $('.lang-switcher.english').css({"opacity": "0", "visibility": "hidden", "display": "none"});
        
      }else {
        $('.lang-switcher.english').css({"opacity": "1", "visibility": "visible", "display": "block"});
        $('.header-menu-elements').css({"opacity": "1", "visibility": "visible", "transform": "translate(0px)", "display": "flex"});
      }
    });

    $(document).on(function(){
      if($('.current_view').attr('id') == 'dg_bf_screen') {
        $('.page_title').css({"display": "none"});
        $('.page_title.title_basement_floors').css({"display": "block", "visibility": "visible", "opacity": "1"});
      }
      else if($('.current_view').attr('id') == 'ml_lights_screen'){
        $('.page_title').css({"display": "none"});
        $('.page_title.title_night_scene').css({"display": "block", "visibility": "visible", "opacity": "1"});
      } 
      else {
        $('.page_title').css({"display": "none"});
      }
    });

    $(document).on(function(){
      if($('.current_view').attr('id') == 'dg_bf_screen') {
        $('.page_title').css({"display": "none"});
        $('.page_title.title_basement_floors').css({"display": "block", "visibility": "visible", "opacity": "1"});
      }
      else if($('.current_view').attr('id') == 'ml_lights_screen'){
        $('.page_title').css({"display": "none"});
        $('.page_title.title_night_scene').css({"display": "block", "visibility": "visible", "opacity": "1"});
      } 
      else {
        $('.page_title').css({"display": "none"});
      }
    });


    $(document).on(function(){
      if($('#dg_rs_screen_ar').hasClass('current_view')){
        $('#footer_ar').css({"visibility": "hidden", "display": "none"})
      }else if($('#ar_version section').hasClass('current_view') && $('#dg_rs_screen_ar').hasClass('current_view') == false ) {
        $('#footer_ar').css({"visibility": "visible", "display": "block", "opacity": "1", "bottom": "0"})
      }
    });
    $(document).on(function(){
      if($('#dg_afrs_screen').hasClass('current_view') || $('#dg_afrs_screen_ar').hasClass('current_view') ){
        $('.dg_ft_nav_item').removeClass('active');
        $('.new_home_model').addClass('active');
        $('.new_home_ar').addClass('active');
        
      }
    });