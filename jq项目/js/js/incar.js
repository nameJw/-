define(["jquery"],function(){
	$(function(){
		function carsert(){
			var that = this;
			this.n = location.href.split("?")[1];
			this.tbody = $("tbody");
			$.ajax({
				url: '../data/maindata.json',
				type: 'get',
				dataType: 'json',
				data: {},
				async:"ture",
				success:function(data){
					var data = data.mList;
					that.vanum(data);
				}
			})		
		}
		carsert.prototype.vanum = function(data){
			var str = '';
			
			var num = JSON.parse(localStorage.getItem("init"));
			console.log(num)
			$.each(data,function(i){
				$.each(num,function(j){
					
					if(j == data[i].id){
						str += `<tr class="con">
					<td>
						<input type="checkbox" checked="checked">
					</td>
					<td width=80px>
						<img src=${data[i].img} alt="">
						
					</td>
					<td class="long"><p>${data[i].title}</p>
						<p>尺寸:7寸及以下 内存:16G 颜色:银白色</p></td>
					<td>
						<span>${data[i].marketPrice}marketPrice</span>
					</td>
					<td><span>${data[i].thisPrice}</td>
					<td><span>${data[i].thisPrice}</span></td>
					<td>
						<div class="choosen clearfix">
							<a class="sub">-</a>
							<input type="text" value='1'>
							<a class="add">+</a>
						</div>
					</td>
					<td><span>￥1588.00</span></td>
					<td class="lasttd"><a></a></td>
				</tr>`
					}
				})
				$("tbody").html(str);
			})
		}
		new carsert;
	})
})