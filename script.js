let darkToggle;

if (window.localStorage.getItem('darkmode')) {
  darkToggle = window.localStorage.getItem('darkmode');
} else {
  darkToggle = "false";
}

    if(darkToggle==="true"){
        $("#right-container, #navbar-container, #whole-site-container, #darkbutton, #top-hr, #title-icon").toggleClass("darkmode");
    }

$(document).ready(function(){

    $("#mobile-title").addClass("animated slideInRight")
    $(".nav-link").addClass("animated fadeInLeft");

    setTimeout(function(){
        $("#email-address").addClass("animated rubberBand");
    }, 800);

    setTimeout(function(){
        $("#email-address").removeClass("animated rubberBand");
    }, 2400);

    setTimeout(function(){
        $(".nav-link").removeClass("animated fadeInLeft")
    },1000)
    

      $(".nav-link").mouseenter(function(){
            var x = $(this);
            x.addClass("animated pulse");
            setTimeout(function(){x.removeClass("animated pulse")},800);
      });

      

      $(".darkbutton").click(function(){

          if(darkToggle==='false'){
              window.localStorage.setItem("darkmode", "true");
          } else {
              window.localStorage.setItem("darkmode", "false");
          }

          darkToggle=window.localStorage.getItem("darkmode");
          
          $("#right-container, #navbar-container, #whole-site-container, #darkbutton, #top-hr, #title-icon").toggleClass("darkmode");
    
        
        
          
      });


  });




