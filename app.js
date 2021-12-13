function countapi(response) {
    document.getElementById('visits').innerText = response.value;
}


(function($){
  
    $.fn.quickMenu = function(){
      return this.each(function(){
        var idx = 0;
        var h = [];
        var $wrap = $(this);
        var $menu = $wrap.find(".menu");
        var $btn = $menu.children("li").children("a");
        var $btnScrollTop = $wrap.find(".btn-scroll-top");
        var $section = $(".section");
        var wrapH = $wrap.outerHeight();
        var wrapT = $wrap.position().top;
        var nowScroll = 0;
        var scrolling = true;
  
        function btnActive(num){
          $btn.not($btn.eq(num)).removeClass("on");
          $btn.eq(num).addClass("on");
        }
  
        function moveScroll(num){
          if(scrolling){
            scrolling = false;
            $("html, body").animate({scrollTop : num}, function(){scrolling = true});
          }
        }
            
        btnActive(idx);
  
        $wrap.css({"margin-top": -(wrapH / 2)});
        
        $btn.on("click", function(e){
          e.preventDefault();
          idx = $(this).parent().index();
          var conT = $section.eq(idx).offset().top;
  
          moveScroll(conT);
        });
        
        $btnScrollTop.on("click", function(e){
          e.preventDefault();
          moveScroll(0);
          
          var xhr = new XMLHttpRequest();
		  xhr.open("GET", "https://api.countapi.xyz/hit/VLtest.com/awesomeclick");
		  xhr.responseType = "json";
		  xhr.onload = function() {
		    $("h1").html(document.getElementById('visits').innerText = this.response.value);
		    $("h1").append("명이 서포트 중 입니다.");
            $(btn).hide();
            $($btnScrollTop).hide();
		  }
		  xhr.send();
        });
        
        $(window).scroll(function(){
          
          nowScroll = $(this).scrollTop();
          
          $section.each(function(idx){
            h[idx] = $(this).offset().top
            
            if(nowScroll >= h[idx]){
              btnActive(idx);
            }
          });
        });
            
      });
    }
    
  })(jQuery);
  
  (function($){
  
    $.fn.quickMenu_eng = function(){
      return this.each(function(){
        var idx = 0;
        var h = [];
        var $wrap = $(this);
        var $menu = $wrap.find(".menu");
        var $btn = $menu.children("li").children("a");
        var $btnScrollTop = $wrap.find(".btn-scroll-top");
        var $section = $(".section");
        var wrapH = $wrap.outerHeight();
        var wrapT = $wrap.position().top;
        var nowScroll = 0;
        var scrolling = true;
  
        function btnActive(num){
          $btn.not($btn.eq(num)).removeClass("on");
          $btn.eq(num).addClass("on");
        }
  
        function moveScroll(num){
          if(scrolling){
            scrolling = false;
            $("html, body").animate({scrollTop : num}, function(){scrolling = true});
          }
        }
            
        btnActive(idx);
  
        $wrap.css({"margin-top": -(wrapH / 2)});
        
        $btn.on("click", function(e){
          e.preventDefault();
          idx = $(this).parent().index();
          var conT = $section.eq(idx).offset().top;
  
          moveScroll(conT);
        });
        
        $btnScrollTop.on("click", function(e){
          e.preventDefault();
          moveScroll(0);
          
          var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.countapi.xyz/hit/VLtest.com/awesomeclick");
      xhr.responseType = "json";
      xhr.onload = function() {
        $("h1").html(document.getElementById('visits').innerText = this.response.value);
        $("h1").append(" PEOPLE ARE SUPPORTING.");
            $(btn).hide();
            $($btnScrollTop).hide();
      }
      xhr.send();
        });
        
        $(window).scroll(function(){
          
          nowScroll = $(this).scrollTop();
          
          $section.each(function(idx){
            h[idx] = $(this).offset().top
            
            if(nowScroll >= h[idx]){
              btnActive(idx);
            }
          });
        });
            
      });
    }
    
  })(jQuery);

  $(function(){
    $(".box-shortcut").quickMenu();
  });

  $(function(){
    $(".box-shortcut_eng").quickMenu_eng();
  });