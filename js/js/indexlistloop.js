define(["jquery"],function(){

	function Sert(){
		this.floorHotBox = $(".floorHotBox");
		this.floorHotList = $(".floorHotList");
		this.floorHotListH = $(".floorHotList").height();
		var li = $(".floorHotList").eq(0).clone();
		this.floorHotBox.append(li);
		this.cont = 0;
		this.timer = null;
		var that = this;
		$.ajax({
			url:'../data/maindata.json',
			type:'get',
			dataType:'json',
			async:'ture',
			success:function(data){
				that.insert(12,20,that.floorHotBox.eq(0),data);
				that.insert(21,27,that.floorHotBox.eq(1),data);
				that.num2();
			}
		});
	}
	Sert.prototype.insert = function(star,en,posi,data){
		var str = '';
		var data = data.mList;
		$.each(data,function(i){
			if(i>=star&&i<=en){
				str += `<div class="floorHotList" data-id="${data[i].id}">
						<a href="javascript:;">
							<div class="floorLoopPic">
								<img src="${data[i].img}" alt="">
							</div>
							<div class="floorLoopCont">
								<div style="font-size:14px;" class="LoopContName ellipsis">${data[i].title}</div>
								<div class="LoopContPrice ellipsis">￥${data[i].thisPrice}</div>
							</div>
						</a>
					</div>`;
			}
		});
		posi.html(str);
	}
	Sert.prototype.num2 = function(){
		$(".floorRight").on("click",".floorHotList",function(){
			var n = $(this).attr("data-id");
			window.location.href = "dateils.html?"+n;
		})
	}
	new Sert();
})