define(["jquery"],function(){






	$(function(){
		
		var move = {
			dr:$(".drBox"),
			dri:$(".drBox>i"),
			jdr:$(".jiaotadengru"),
			gwcBox:$(".gwcBox"),
			xiaoxi:$(".xiaoxi"),
			xx:$(".xx"),
			xxBox:$(".xxBox"),
			xxBoxi:$(".xxBox>i"),
			shouc:$(".shouc"),
			shoucBox:$(".shoucbox"),
			shouci:$(".shoucbox>i"),
			sc:$(".sc"),
			zuji:$(".zuji"),
			zjbox:$(".zjbox"),
			zujii:$(".zjbox>i"),
			zj:$(".zj"),
			storage:function(){
				this.modu1();
				this.modu2();
				this.modu3();	
				this.modu4();	
				this.modu5();
			},
			modu1:function(){
				var that = this;
				that.dr.mouseenter(function(){
					that.jdr.stop().animate({ left:-202,opacity:1},200);
					that.dri.addClass('xyz');
					that.dr.css("background","#e34545");
				})
				that.dr.mouseleave(function() {
					that.jdr.stop().animate({left:35,opacity: 0},200);
					that.dri.removeClass('xyz');
					that.dr.css("background","none");
				});
			},
			modu2:function(){
				var that = this;
				that.gwcBox.mouseenter(function(){
					that.gwcBox.css("background","#ee0a3b");
				})
				that.gwcBox.mouseleave(function(){
					that.gwcBox.css("background","none");
				})
			},
			modu3:function(){
				var that = this;
				that.xiaoxi.mouseenter(function() {
					that.xx.stop().animate({left:-50},200);
					that.xxBoxi.addClass('xxxyz');
					that.xiaoxi.css("background","#ee0a3b");
				});
				that.xiaoxi.mouseleave(function() {
					that.xx.stop().animate({left:35},200);
					that.xxBoxi.removeClass('xxyz');
					that.xiaoxi.css("background","none");
				});
			},
			modu4:function(){
				var that = this;
				that.shouc.mouseenter(function(){
					that.sc.stop().animate({left:-50},200);
					that.shouci.addClass('shouci');
					that.shoucBox.css("background","#ee0a3b");
				});
				that.shouc.mouseleave(function(){
					that.sc.stop().animate({left:35},200);
					that.shouci.removeClass('shouci');
					that.shoucBox.css("background","none");
				});
			},
			modu5:function(){
				var that = this;
				that.zuji.mouseenter(function() {
					that.zj.stop().animate({left:-50},200);
					that.zujii.addClass('czxyz');
					that.zjbox.css("background","#ee0a3b");
				});
				that.zuji.mouseleave(function() {
					that.zj.stop().animate({left:35},200);
					that.zujii.removeClass('czxyz');
					that.zjbox.css("background","none");
				});
			}

		}
		move.storage();
		
	})












})