const projectName = 'technical-JS-docs-page';
localStorage.setItem('responsive_project', 'Technical JS Docs Page');

function scrollNav() {
    $('a').click(function(){  
      //Toggle Class
      $(".active").addClass("active"); 
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').removeClass('active');
      $(this).closest('li').addClass("active"); 
        
      
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 160
      }, 500);
      return false;
    }); 
  }
  scrollNav();
  
  
  jQuery(document).ready(function() {
  
     jQuery('a.scrolltop').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, 500);
          return false;
      })
  });