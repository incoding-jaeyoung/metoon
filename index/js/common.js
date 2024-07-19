$(function(){


	$(window).scroll(function(){
	
		scroll = $(window).scrollTop();
		if(scroll > 0){
			$("#header").addClass("act");
		}else{
			$("#header").removeClass("act");
		}
	
	});



	btnmenu = 0;
	$(".btn_menu").click(function(){		
		if(btnmenu == 0){
			$("#header").addClass("all");
			$(this).stop().addClass("openmenu");		
			$(".allmenu").slideDown();
			btnmenu = 1;
		}else{
			$("#header").removeClass("all");
			$(this).stop().removeClass("openmenu");
			$(".allmenu").slideUp();
			btnmenu = 0;	
		}			
	});

	$(".pc_nav>li").mouseover(function(){
		liNum = $(".pc_nav>li").index($(this));
		$("#header").addClass("onsub");
		$(this).addClass("on").siblings().removeClass("on");		
		$(".submenu ul:eq("+liNum+")").show().siblings().hide();
		$(".submenu").slideDown();
	});
	$("#header").mouseleave(function(){
		$("#header").removeClass("onsub");
		$(".submenu").slideUp();
		$(".pc_nav>li").removeClass("on");		
	})

	$(".m_nav .sub").on("click",function(){		
		if($(this).attr("class") == "sub on"){			
			$(this).find("ul").slideUp();			
		}else{
			$(this).find("ul").slideDown();			
		}		
		$(this).toggleClass("on");
		$(this).siblings("li").removeClass("on");
		$(this).siblings("li").find("ul").slideUp();
	
	});

	langchk = 0;
	$(".lang").click(function(){
		if(langchk == 0){
			$(this).find("ul").slideDown();
			langchk = 1;
		}else{
			$(this).find("ul").slideUp();
			langchk = 0;
		}
	})

	famchk = 0;
	$(".family").click(function(){
		if(famchk == 0){
			$(this).find("ul").slideDown();
			famchk = 1;
		}else{
			$(this).find("ul").slideUp();
			famchk = 0;
		}
	})

	
	$(".btn_top").click(function(){
		$('body,html').animate({scrollTop: 0}, 400);
	});
	$(window).scroll(function(){
		
		scroll = $(window).scrollTop();
		wH = $(window).height() + ($(window).height() / 3);
		if(scroll > wH){
			$(".btn_top").addClass("on");
		}else{
			$(".btn_top").removeClass("on");
		}
	
	})



})