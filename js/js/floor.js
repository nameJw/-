define(["jquery"],function(){
	$(function(){
		var fixedbottom = {
			i:$(".bgfff>i"),
			kf:$(".kf"),
			weix:$(".weix"),
			shouji:$(".shouji"),
			gotop:$(".gotop"),
			gotopi:$(".gotop>i"),
			txt:$(".txt"),
			wcode:$(".wcode"),
			pcode:$(".pcode"),
			action:function(){
				this.one();
				this.two();
				this.three();
				this.four();
				this.xianshi();
				this.totop();
			},
			one:function(){
				var that = this;
				that.kf.mouseenter(function() {
					that.i.eq(0).css("display","none");
					that.txt.eq(0).css("display","block");
				});
				that.kf.mouseleave(function() {
					that.i.eq(0).css("display","block");
					that.txt.eq(0).css("display","none");
				});
			},
			two:function(){
				var that = this;
				that.weix.hover(function() {
					that.i.eq(1).css("display","none");
					that.txt.eq(1).css("display","block");
					that.wcode.stop().animate({left:-118,opacity:1},300);
				}, function() {
					that.i.eq(1).css("display","block");
					that.txt.eq(1).css("display","none");
					that.wcode.stop().animate({left:65,opacity:0},300);
				});
			},
			three:function(){
				var that = this;
				that.shouji.hover(function(){
					that.i.eq(2).css("display","none");
					that.txt.eq(2).css("display","block");
					that.pcode.stop().animate({left:-118,opacity:1},300);
				},function(){
					that.i.eq(2).css("display","block");
					that.txt.eq(2).css("display","none");
					that.pcode.stop().animate({left:65,opacity:0},300);
				})
			},
			four:function(){
				var that = this;
				that.gotop.hover(function(){
					that.i.eq(3).css("display","none");
					that.txt.eq(3).css("display","block");
				},function(){
					that.i.eq(3).css("display","block");
					that.txt.eq(3).css("display","none");
				})
			},
			xianshi:function(){
				var that = this;
				$(document).scroll(function(){
					var scroll = $(document).scrollTop();
					if(scroll>=200){
						that.gotopi.stop().animate({height:40},200);
					}else{
						that.gotopi.stop().animate({height:0},200)
					}
				})
			},
			totop:function(){
				var that = this;
				that.gotop.click(function(){
					$("body,html").animate({
						scrollTop:0
					},500)
				})
			}
		}
		fixedbottom.action();
	})
	
})