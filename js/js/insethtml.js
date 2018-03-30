define(["jquery"],function(){

	function Insert(){
		this.floorGoods = $(".floorGoodsList");
		this.A = $("a");
		var _this = this;
		$.ajax({
			url: '../data/maindata.json',
			type: 'get',
			dataType: 'json',
			async:"ture",
			success:function(data){
				_this.sert(0,5,_this.floorGoods.eq(0),data);
				_this.sert(6,11,_this.floorGoods.eq(1),data);
				_this.num1();
				_this.num2();
			}
		});
	}
	
	Insert.prototype.sert = function(star,en,posi,data){
		var str = "";
		var data = data.mList;
		$.each(data,function(i){
			if(i>=star&&i<=en){
				str+=`<a href="##" data-id="${data[i].id}">
					<div class="goodsTitle ellipsis">${data[i].title}</div>
					<div class="goodsPrice ellipsis">￥${data[i].thisPrice}</div>
					<div class="goodsPic">
						<img src=${data[i].img} alt="">
					</div>
				</a>`
			}
		});
		posi.html(str);
	}
	Insert.prototype.num1 = function(){
		$(".floorGoodsList").on("click","a",function(){
			var n = $(this).attr("data-id");
			window.location.href = "dateils.html?"+n;
		})
	}
	new Insert();

})