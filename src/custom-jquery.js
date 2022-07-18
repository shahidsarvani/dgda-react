import $ from "jquery";

//$(document).Ready(function () {

    // Added features section for desktop
    $(".navbar-nav a.nav-link-en1").onClick(function () {
      if ($(".navbar-nav a.nav-link-en1").hasClass("active")) {
        $(".navbar-nav a.nav-link-en1").removeClass("active");
      } else {
        $(".navbar-nav a.nav-link-en1").addClass("active");
        $(".navbar-nav a.nav-link-en2").removeClass("active");
      }
    });
    $(".navbar-nav a.nav-link-en2").onClick(function () {
      if ($(".navbar-nav a.nav-link-en2").hasClass("active")) {
        $(".navbar-nav a.nav-link-en2").removeClass("active");
      } else {
        $(".navbar-nav a.nav-link-en2").addClass("active");
        $(".navbar-nav a.nav-link-en1").removeClass("active");
      }
    });
  
  
    $(".navbar-nav a.nav-link-ar1").onClick(function () {
      if ($(".navbar-nav a.nav-link-ar1").hasClass("active")) {
        $(".navbar-nav a.nav-link-ar1").removeClass("active");
      } else {
        $(".navbar-nav a.nav-link-ar1").addClass("active");
        $(".navbar-nav a.nav-link-ar2").removeClass("active");
      }
    });
    $(".navbar-nav a.nav-link-ar2").onClick(function () {
      if ($(".navbar-nav a.nav-link-ar2").hasClass("active")) {
        $(".navbar-nav a.nav-link-ar2").removeClass("active");
      } else {
        $(".navbar-nav a.nav-link-ar2").addClass("active");
        $(".navbar-nav a.nav-link-ar1").removeClass("active");
      }
    });
  
    
    $(".main_video_btn").onClick(function (e) {
      e.preventDefault();
      $(this).css('pointer-events', 'none');
    });
  
    $("#diriyah-room").onClick(function (e) {
      e.preventDefault();
      $(".navbar-nav .nav-item:first-child").addClass('active');
    });
  
    $("#main_video_btn").onClick(function (e) {
      e.preventDefault();
      $("#main_video_btn").prop( "disabled", true );
    });
  
    $(".dg_ft_nav_link_en a").onClick(function (e) {
      e.preventDefault();
      // $("#ar_version").show();
      // $("#en_version").hide();
      $("html").attr("lang", "ar");
    });
    $(".dg_ft_nav_link_ar a").onClick(function (e) {
      e.preventDefault();
      // $("#en_version").show();
      // $("#ar_version").hide();
      $("html").attr("lang", "en");
    });
  
    // $("#main_video_btn").onClick(function (e) {
    //   e.preventDefault();
    //   $(".dg_vw_screen").fadeOut();
    //   $("#main_video").fadeOut();
    //   $('.load_log_col .logo_diriyah').addClass('startanim');
    //   $('.dg_rs_row').addClass('firstsecanim');
    //   $('.load_log_col').addClass('logowrapanim');
    //   // $(".dg_vw_screen").fadeOut("slow");
    //   // $(".dg_vw_screen").fadeOut(3000);
    //   // $("#main_video").fadeOut("slow");
    //   // $("#main_video").fadeOut(3000);
    //   $("#dg_rs_screen").fadeIn();
    //   $("#dg_rs_screen").fadeIn("slow");
    //   $("#dg_rs_screen").fadeIn(5000);
    // });
  
    $("#diriyah-room").onClick(function (e) {
      e.preventDefault();
      $('#dg_rs_screen').addClass('firstsecanimOut');
      $('#dg_afrs_screen').addClass('firstsec');
      $("#header").fadeIn();
      $("#header").fadeIn("slow");
    });
  
    // Added features section for desktop
    $(".ml_dg_anchor1_wrap").onClick(function () {
      if ($(".ml_dg_anchor1_wrap").hasClass("active")) {
        console.log("same tab");
        $(".ml_dg_anchor1_wrap").removeClass("active");
        $(".ml_dg_antag1_wrap").removeClass("active");
        $(".ml_content_container1").removeClass("active");
      } else {
        $(".ml_dg_anchor1_wrap").addClass("active");
        $(".ml_dg_antag1_wrap").addClass("active");
        $(".ml_content_container1").addClass("active");
        $(".ml_dg_anchor2_wrap").removeClass("active");
        $(".ml_dg_antag2_wrap").removeClass("active");
        $(".ml_content_container2").removeClass("active");
        $(".ml_dg_anchor3_wrap").removeClass("active");
        $(".ml_dg_antag3_wrap").removeClass("active");
        $(".ml_content_container3").removeClass("active");
      }
    });
  
    $(".ml_dg_anchor2_wrap").onClick(function () {
      if ($(".ml_dg_anchor2_wrap").hasClass("active")) {
        console.log("same tab");
        $(".ml_dg_anchor2_wrap").removeClass("active");
        $(".ml_dg_antag2_wrap").removeClass("active");
        $(".ml_content_container2").removeClass("active");
      } else {
        $(".ml_dg_anchor2_wrap").addClass("active");
        $(".ml_dg_antag2_wrap").addClass("active");
        $(".ml_content_container2").addClass("active");
        $(".ml_dg_anchor1_wrap").removeClass("active");
        $(".ml_dg_antag1_wrap").removeClass("active");
        $(".ml_content_container1").removeClass("active");
        $(".ml_dg_anchor3_wrap").removeClass("active");
        $(".ml_dg_antag3_wrap").removeClass("active");
        $(".ml_content_container3").removeClass("active");
      }
    });
  
    $(".ml_dg_anchor3_wrap").onClick(function () {
      if ($(".ml_dg_anchor3_wrap").hasClass("active")) {
        console.log("same tab");
        $(".ml_dg_anchor3_wrap").removeClass("active");
        $(".ml_dg_antag3_wrap").removeClass("active");
        $(".ml_content_container3").removeClass("active");
      } else {
        $(".ml_dg_anchor3_wrap").addClass("active");
        $(".ml_dg_antag3_wrap").addClass("active");
        $(".ml_content_container3").addClass("active");
        $(".ml_dg_anchor1_wrap").removeClass("active");
        $(".ml_dg_antag1_wrap").removeClass("active");
        $(".ml_content_container1").removeClass("active");
        $(".ml_dg_anchor2_wrap").removeClass("active");
        $(".ml_dg_antag2_wrap").removeClass("active");
        $(".ml_content_container2").removeClass("active");
      }
    });
  
    $(".dg_ft_nav_item1 a").onClick(function () {
      if ($(".dg_ft_nav_item1").hasClass("active")) {
        $(".dg_ft_nav_item1").removeClass("active");
      } else {
        $(".dg_ft_nav_item1").addClass("active");
        $(".dg_ft_nav_item2").removeClass("active");
        $(".dg_ft_nav_item3").removeClass("active");
        $(".dg_ft_nav_item4").removeClass("active");
      }
    });
    $(".dg_ft_nav_item2 a").onClick(function () {
      if ($(".dg_ft_nav_item2").hasClass("active")) {
        $(".dg_ft_nav_item2").removeClass("active");
      } else {
        $(".dg_ft_nav_item2").addClass("active");
        $(".dg_ft_nav_item1").removeClass("active");
        $(".dg_ft_nav_item3").removeClass("active");
        $(".dg_ft_nav_item4").removeClass("active");
      }
    });
    $(".dg_ft_nav_item3 a").onClick(function () {
      if ($(".dg_ft_nav_item3").hasClass("active")) {
        $(".dg_ft_nav_item3").removeClass("active");
      } else {
        $(".dg_ft_nav_item3").addClass("active");
        $(".dg_ft_nav_item1").removeClass("active");
        $(".dg_ft_nav_item2").removeClass("active");
        $(".dg_ft_nav_item4").removeClass("active");
      }
    });
    $(".dg_ft_nav_item4 a").onClick(function () {
      if ($(".dg_ft_nav_item4").hasClass("active")) {
        $(".dg_ft_nav_item4").removeClass("active");
      } else {
        $(".dg_ft_nav_item4").addClass("active");
        $(".dg_ft_nav_item1").removeClass("active");
        $(".dg_ft_nav_item2").removeClass("active");
        $(".dg_ft_nav_item3").removeClass("active");
      }
    });
  
//  })