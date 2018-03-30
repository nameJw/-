define(["jquery"],function(){
	$(function(){
		var uploop = {
			cont:0,
			fn:function(){
				var li = $(".floorHotList").eq(0).clone();
				var li3 =$(".floorHotList").eq(2).clone();
				var li5 = $(".floorHotList").eq(3).clone();
				var li7 = $(".floorHotList").eq(4).clone();
				$(".floorHotBox").eq(0).append(li);
				$(".floorHotBox").eq(0).append(li3);
				$(".floorHotBox").eq(0).append(li5);
				$(".floorHotBox").eq(0).append(li7);
				var li1 = $(".floorHotList").eq(10).clone();
				var li4 = $(".floorHotList").eq(11).clone();
				var li2 = $(".floorHotList").eq(12).clone();
				var li6 = $(".floorHotList").eq(13).clone();
				$(".floorHotBox").eq(1).append(li1);
				$(".floorHotBox").eq(1).append(li4);
				$(".floorHotBox").eq(1).append(li2);
				$(".floorHotBox").eq(1).append(li6);
				this.toImg();
				this.autoUp();
			},
			autoUp:function(){
				var that = this;
				that.timer = setInterval(function(){
					if(that.cont == $(".floorHotList").length-1 - 11){
						that.cont = 0;
						$(".floorHotBox").css("top",55);
					}else{
						that.cont ++;
					}
					that.toImg(that.cont);
				},3000);
			},
			toImg:function(cont){
				$(".floorHotBox").stop().animate({"top":-$(".floorHotList").height()*this.cont-55});
			}
		}
		uploop.fn();
	})
})