// JavaScript Document
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function () {
  $(window).on("scroll", function () {
    var sliderHeight = $(".top").height();
    if (sliderHeight - 120 < $(this).scrollTop()) {
      $("#index-header").addClass("is-show");
    } else {
      $("#index-header").removeClass("is-show");
    }
  });
});

$(function(){
	$("#menu1-dummy").on('mouseover', function(){
		$("#menu1").addClass("is-active");
	});
	$("#menu1-dummy").on('mouseout', function(){
		$("#menu1").removeClass("is-active");
	});
	$("#menu2-dummy").on('mouseover', function(){
		$("#menu2").addClass("is-active");
	});
	$("#menu2-dummy").on('mouseout', function(){
		$("#menu2").removeClass("is-active");
	});
	$("#menu3-dummy").on('mouseover', function(){
		$("#menu3").addClass("is-active");
	});
	$("#menu3-dummy").on('mouseout', function(){
		$("#menu3").removeClass("is-active");
	});
	$("#menu4-dummy").on('mouseover', function(){
		$("#menu4").addClass("is-active");
	});
	$("#menu4-dummy").on('mouseout', function(){
		$("#menu4").removeClass("is-active");
	});
	
	$("#rhombus1-dummy").on('mouseover', function(){
		$("#rhombus1").addClass("is-active");
	});
	$("#rhombus1-dummy").on('mouseout', function(){
		$("#rhombus1").removeClass("is-active");
	});
	$("#rhombus2-dummy").on('mouseover', function(){
		$("#rhombus2").addClass("is-active");
	});
	$("#rhombus2-dummy").on('mouseout', function(){
		$("#rhombus2").removeClass("is-active");
	});
	$("#rhombus3-dummy").on('mouseover', function(){
		$("#rhombus3").addClass("is-active");
	});
	$("#rhombus3-dummy").on('mouseout', function(){
		$("#rhombus3").removeClass("is-active");
	});
	$("#rhombus4-dummy").on('mouseover', function(){
		$("#rhombus4").addClass("is-active");
	});
	$("#rhombus4-dummy").on('mouseout', function(){
		$("#rhombus4").removeClass("is-active");
	});
	
	$(".work").on('mouseover', function(){
		$(this).find(".work-name").addClass("inv");
		$(this).find(".purple").addClass("exp");
	});
	$(".work").on('mouseout', function(){
		$(this).find(".work-name").removeClass("inv");
		$(this).find(".purple").removeClass("exp");
	});
	
})


$(function(){
	$("header").click(function(){
		$("header").toggleClass("expand");
		$("#closebtn").toggleClass("displaynone");
		$("#headermenu").toggleClass("shown");
		$(".hmenu-txt").toggleClass("displaynone");
		$(".rhombus-dummy").toggleClass("displaynone");
	});
});

