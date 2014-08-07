(function($){
  var methods = {
     init : function( ) {

     },     
     likeButton : function( ) { 
            var self = this,
                clickHandler = $(this).closest('div').find('.twoclick-img'),
                html = $(this),
                cookie = html.data('cookie')
                clickImg = html.data('click-img'),
                href = html.data('href'),
                action = html.data('action'),
                clickImg = html.data('click-img'),
                header = html.data('header'),
                faces = html.data('show-faces'),
                layout = html.data('layout'),
                share = html.data('share');


            var iframeLike = function() {
                iFrame = $('<iframe>', {
                   src: "https://www.facebook.com/plugins/like.php?" +
                    "href=" + href + "&" +
                    "layout="+ layout +"&" +
                    "action="+ action + "&" +
                    "height="+ height +"&" +
                    "show_faces="+ faces +"&s" +
                    "share="+ border +"",
                    show_faces: faces,
                    stream:stream,
                    show_border:border,
                    frameborder:border,
                    style:"border:none; overflow:hidden; width:"+'' + width +''+"; height:"+'' + height +''+"",
                    overflow:'hidden'
                   });

                  return iFrame;
               }

            function getCookie(cname){
                  var name = cname + "=";
                  var ca = document.cookie.split(';');
                  for(var i=0; i<ca.length; i++) 
                    {
                    var c = ca[i].trim();
                    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
                    }
                  return "";
            }

            var checkCookie = function() {
                  var likebutton = getCookie("likebutton");
                  if (likebutton === "yes") {
                     var frameLike = iframeLike(),
                          cookieYes = 'yes',
                          divLike = $('html').find("[data-cookie='" + cookieYes + "']");
                     divLike.append(frameLike)
                     divLike.find('img').hide()
                  }   
            }
            var setCookie = function() {
                  if(cookie === "yes") {
                    document.cookie = "likebutton=yes";
                  }
            }
            clickImg = $('<img>', {
                  src: clickImg,
                    class: 'likeclick-img',
                    frameborder:border
                 });

            $(this).closest('div').append(clickImg)
                $('.likeclick-img').click(function() {
                  setCookie();

                  alert(document.cookie )
                  $(this).hide();
                  $(this).closest('div').find('.likeclick-img').hide();
                  var test = iframeLike();
                  $(this).closest('div').append(test);
                   
               }); 
                checkCookie();
     },

     likeBoxClick : function( ) {
             var self = this,
                 clickHandler = $(this).closest('div').find('.twoclick-img'),
                 html = $(this),
                 buttonText = html.data('button-text')
                 clickImg = html.data('click-img'),
                 height = html.data('height'),
                 width = html.data('width'),
                 href = html.data('href'),
                 stream = html.data('stream'),
                 header = html.data('header'),
                 faces = html.data('show-faces'),
                 border = html.data('show-border');
                 

           
                  if (buttonText != "") {
                   button = $('<button>', {
                       src: clickImg,
                       text: buttonText,
                       class: 'active-button',
                   });
                   $(this).closest('div').append(button)
                  }

                
                 clickImg = $('<img>', {
                     src: clickImg,
                     class: 'twoclick-img',
                     frameborder:border
                 });
                var iframe = function() {
                  iFrame = $('<iframe>', {
                       src: "https://www.facebook.com/plugins/likebox.php?" +
                           "href=" + href + "&" +
                           "width="+ width +"&" +
                           "height="+ height +"&" +
                           "colorscheme=light&" +
                           "show_faces="+ faces + "&" +
                           "header="+ header +"&" +
                           "stream="+ stream +"&s" +
                           "how_border="+ border +"",
                       show_faces: faces,
                       stream:stream,
                       show_border:border,
                       frameborder:border,
                       style:"border:none; overflow:hidden; width:"+'' + width +''+"; height:"+'' + height +''+"",
                       overflow:'hidden'
                   });

                  return iFrame;
               }   

               $(this).closest('div').append(clickImg)
               $('.twoclick-img, .active-button').click(function() {
                  $(this).hide();
                  $(this).closest('div').find('.twoclick-img, .active-button').hide();
                  var test = iframe();
                  $(this).closest('div').append(test);
                  console.log(iframe());

               }); 
          
           
     }
  };

  $.fn.twoclick= function( method ) {    
    if ( methods[method] ) {
      return methods[method].apply( 
       this, Array.prototype.slice.call( arguments, 1 )
       );
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist' );
    }      
  };
})(jQuery);