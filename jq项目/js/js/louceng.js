define(["jquery"],function(){
	$(function(){

		var floor = {
			lcbtn:$("#lcbtn"),
			flli:$("#lcbtn>li"),
			fl:$(".flooritem"),
			iH:$(window).height(),
			fn:function(){
				this.move();
				this.on();
			},
			move:function(){
				var that = this;
				$(document).scroll(function() {
					var scroll = $(document).scrollTop();
					var top = that.fl.eq(0).offset().top;
					if(scroll>top - that.iH/2){
						that.lcbtn.fadeIn();
					}else{
						that.lcbtn.fadeOut();
					}
					that.fl.each(function(i){
						var t = that.fl.eq(i).offset().top;
						var h = that.fl.eq(i).height();
						if((scroll+that.iH/2>t)&&(scroll+that.iH/2<t+h)){
							that.flli.eq(i).addClass("actioncolor").siblings().removeClass()
						}
					})
				});
				this.on();
			},
			on:function(){
				var that = this;
				this.flli.click(function(){
					var index = $(this).index();
					var t = that.fl.eq(index).offset().top - that.iH/2+10;
					$("html").stop(true).animate({
						scrollTop:t
					})
				})
			}
		}
		floor.fn();
	})
})