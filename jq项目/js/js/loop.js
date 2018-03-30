define(["jquery"],function(){
			var list = {
				iNow:0,
				banner:$("#banner"),
				oUl:$(".bUl"),
				iw:$(document).width(),
				aA:$(".anNiu>a"),
				span:$(".lf>span"),
				timer:null,
				init:function(){
					var li = $("#banner li").eq(0).clone();
					this.oUl.append(li);
					$("#banner li").css("width",$(document).width());
					this.oUl.css("width",$("#banner li").length*this.iw);
					this.autoPlay();
					this.goPlay();
					this.stopPlay();
					this.aClick();
					this.preClick();
					this.nextClick();
				},
				nextClick:function(){
					var _this = this;
					$(".lf>span").eq(1).stop().click(function() {
						if(_this.iNow == $("#banner li").length-1){
							_this.iNow = 1;
							_this.oUl.css("left",0);
						}else {
							_this.iNow ++;
						}
						_this.toImg(_this.iNow);
					});
				},
				preClick:function(){
					var _this = this;
					$(".lf>span").eq(0).click(function(){
						if(_this.iNow == 0){
							_this.iNow = $("#banner li").length-2;
							_this.oUl.css("left",-($("#banner li").length-1)*_this.iw);
						}else{
							_this.iNow--;
							
						}
						_this.toImg(_this.iNow);
					});
				},
				aClick:function(){
					var _this = this;
					var aA = $(".anNiu>a");
					aA.mouseenter(function(){
						$(this).addClass("active").siblings().removeClass("active");
						_this.iNow = $(this).index();
						_this.toImg(_this.iNow);
					})

				},
				goPlay:function(){
					var _this = this;
					$("#banner").mouseenter(function(){
						clearInterval(_this.timer);
					});
				},
				stopPlay:function(){
					var _this = this;
					$("#banner").mouseleave(function(){
						_this.autoPlay();
					});
				},
				autoPlay:function(){
					var _this = this;
					_this.timer = setInterval(function(){
						if(_this.iNow == $("#banner li").length-1){
							_this.iNow = 1;
							_this.oUl.css("left",0);
						}else{
							_this.iNow++;
						}
						_this.toImg(_this.iNow);
					},3000);
				},
				toImg:function(iNow){
					this.oUl.stop().animate({
						"left":this.iw*-this.iNow,
					},300);
					if(iNow == $(".anNiu>a").length){
						iNow = 0;
					}
					$(".anNiu>a").eq(iNow).addClass("active").siblings().removeClass("active");
				}
			}
			list.init();
			// return {
			// 	init:list
			// }
})
