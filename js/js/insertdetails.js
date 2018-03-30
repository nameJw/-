define(["jquery"],function(){
	$(function(){


		function storage(){
			this.w1224 = $(".w1224");
			var that = this;
			this.n = location.href.split("?")[1];
			$(".shopNum").html(localStorage.getItem(this.n));
				$(".gwc>span").html(localStorage.getItem(this.n));
			$.ajax({
				url: '../data/maindata.json',
				type: 'get',
				dataType: 'json',
				data: {},
				async:"ture",
				success:function(data){
					var data = data.mList;
					that.insert(data);
					that.sertimg(data);
					that.follow();
					that.clickbtn();
					that.tocar();
				}
			});		
		}
		storage.prototype.insert = function(data){
			var str = '';
			var that = this;
			if(data[that.n-1].dateils[0].size){
				str = `<div class="dateilsimg">
					<div class="imgBBox">
						<img src="${data[that.n-1].img}" class="middle">
						<div class="filter"></div>
					</div>
					<div class="bigpic"><img src="${data[that.n-1].img}" class="maxPic"></div>
					<div class="imgSBox clearfix">
							<img src='${data[that.n-1].img}'>
					</div>
				</div>
				<form action="" class="form">
					<div class="dateilsInformation">
						<h1>${data[that.n-1].title}</h1>
						<div class="pricecux clearfix">
							<div class="priceleft">
								<ul class="clearfix">
									<li><span>商城价：</span></li>
									<li><span><em>￥</em>${data[that.n-1].thisPrice}</span></li>
								</ul>
								<ul class="clearfix">
									<li><span>市场价：</span></li>
									<li><span><em>${data[that.n-1].dateils[0].marketPrice}</em></span></li>
								</ul>
							</div>
							<div class="shopcu clearfix">
								<div class="pingjia">
									<p>累计评价</p><span>${data[that.n-1].dateils[0].evaluation}</span>
								</div>
								<div class="xiaol">
									<p>累计销量</p><span>${data[that.n-1].dateils[0].sales}</span>
								</div>
							</div>
						</div>
						<div class="peisong clearfix">
							<div class="ps"><span>配&nbsp;&nbsp;&nbsp;&nbsp;送：</span></div>
							<div class="selectarea">
								<span>可配送</span>
								<select>
									<option>申通物流 ￥ 165</option>
									<option>顺丰物流 ￥ 26</option>
									<option>中通快递 ￥ 26</option>
								</select>
							</div>
						</div>
						<div class="fuwu clearfix">
							<div class="fuwu1">
								服&nbsp;&nbsp;&nbsp;&nbsp;务：
							</div>
							<p>由<span>重庆马泽福电子商务有限公司</span>发货并提供售后服务</p>
						</div>
						<div class="size clearfix">
							<div class="sizet">
								尺&nbsp;&nbsp;&nbsp;&nbsp;寸：
							</div>
							<div class="sizeBox">
								<span>${data[that.n-1].dateils[0].size[0]}</span>
								<span>${data[that.n-1].dateils[0].size[1]}</span>
							</div>
						</div>
						<div class="chooseNumber clearfix">
							<div class="num">数&nbsp;&nbsp;&nbsp;&nbsp;量：</div>
							<div class="selecNum clearfix">
								<span class="sub">-</span>
								<input type="text" value="1" class="count">
								<span class="add">+</span>
							</div>
							<p>库存:${data[that.n-1].dateils[0].stock}</p>
						</div>
						<div class="btn clearfix">
							<div class="buy">
								<a href="javascript:;" class="goubuyc"><span>立即购买</span></a>
							</div>
							<div class="gocar">
								<a href="javascript:;" class="goubuyc"><i></i>
								<em>加入购物车</em></a>
							</div>
						</div>
					</div>
				</form>`;
			}else{
				str = `<div class="dateilsimg">
					<div class="imgBBox">
						<img src="${data[that.n-1].img}" class="middle">
						<div class="filter"></div>
					</div>
					<div class="bigpic"><img src="${data[that.n-1].img}" class="maxPic"></div>
					<div class="imgSBox clearfix">
							<img src='${data[that.n-1].img}'>
					</div>
				</div>
				<form action="" class="form">
					<div class="dateilsInformation">
						<h1>${data[that.n-1].title}</h1>
						<div class="pricecux clearfix">
							<div class="priceleft">
								<ul class="clearfix">
									<li><span>商城价：</span></li>
									<li><span><em>￥</em>${data[that.n-1].thisPrice}</span></li>
								</ul>
								<ul class="clearfix">
									<li><span>市场价：</span></li>
									<li><span><em>${data[that.n-1].dateils[0].marketPrice}</em></span></li>
								</ul>
							</div>
							<div class="shopcu clearfix">
								<div class="pingjia">
									<p>累计评价</p><span>${data[that.n-1].dateils[0].evaluation}</span>
								</div>
								<div class="xiaol">
									<p>累计销量</p><span>${data[that.n-1].dateils[0].sales}</span>
								</div>
							</div>
						</div>
						<div class="peisong clearfix">
							<div class="ps"><span>配&nbsp;&nbsp;&nbsp;&nbsp;送：</span></div>
							<div class="selectarea">
								<span>可配送</span>
								<select>
									<option>申通物流 ￥ 165</option>
									<option>顺丰物流 ￥ 26</option>
									<option>中通快递 ￥ 26</option>
								</select>
							</div>
						</div>
						<div class="fuwu clearfix">
							<div class="fuwu1">
								服&nbsp;&nbsp;&nbsp;&nbsp;务：
							</div>
							<p>由<span>重庆马泽福电子商务有限公司</span>发货并提供售后服务</p>
						</div>
						<div class="size clearfix">
						</div>
						<div class="chooseNumber clearfix">
							<div class="num">数&nbsp;&nbsp;&nbsp;&nbsp;量：</div>
							<div class="selecNum clearfix">
								<span class="sub">-</span>
								<input type="text" value="1" class="count">
								<span class="add">+</span>
							</div>
							<p>库存:${data[that.n-1].dateils[0].stock}</p>
						</div>
						<div class="btn clearfix">
							<div class="buy">
								<a href="javascript:;" class="goubuyc"><span>立即购买</span></a>
							</div>
							<div class="gocar">
								<a href="javascript:;" class="goubuyc"><i></i>
								<em>加入购物车</em></a>
							</div>
						</div>
					</div>
				</form>`;
			}
			
			$(".w1224").html(str);
			$(".path").append("<a href='javascript:;'>"+data[that.n-1].title+"</a>");
		}
		storage.prototype.sertimg = function(data){
			var str = '';
			var that = this;
			var imgSBox = $(".imgSBox");
			$.each(data,function(i){
				if(data[i].id == that.n){
					$.each(data[i].dateils[0].smallimg,function(j) {
						str += `<a href="javascript:;">
								<img src=${data[i].dateils[0].smallimg[j]} class="small" data-url=${data[i].dateils[0].smallimg[j]}>
							</a>`
					});
					imgSBox.html(str);
				}			
			})
		}
		storage.prototype.follow = function(){
			this.middle = $(".middle");
			this.maxPic = $(".maxPic");
			this.filter = $(".filter");
			this.small = $(".small");
			this.bigpic = $(".bigpic");
			this.imgBBox = $(".imgBBox");
			var that = this;
			$.each(that.small,function(i,val){
				that.small.eq(i).mouseover(function(){
					var src = that.small.eq(i).attr("data-url");
					that.middle.attr("src",src);
					that.maxPic.attr("src",src);
				})
			})
			this.imgBBox.hover(function() {
				that.filter.show();
				that.bigpic.show();
			}, function() {
				that.filter.hide();
				that.bigpic.hide();
			});
			this.imgBBox.mousemove(function(e){
				var e = e || event;
				var l = e.pageX - that.imgBBox.offset().left - that.filter.width()/2;
				var t = e.pageY - that.imgBBox.offset().top - that.filter.height()/2;
				l = l > that.imgBBox.width() - that.filter.width()?that.imgBBox.width() - that.filter.width():(l<0?0:l);
				t = t > that.imgBBox.height() - that.filter.height()?that.imgBBox.height() - that.filter.height():(t<0?0:t);
				that.filter.css({left:l,top:t});
				that.maxPic.css({left:-l*2,top:-t*2});
			});
		}
		storage.prototype.clickbtn = function(){
			this.sub = $(".sub");
			this.add = $(".add");
			this.count = $(".count").val();
			var that = this;
			var n = this.count;
			this.add.click(function(){
				n++;
				$(".count").val(n)
			});
			this.sub.click(function(){
				n <= 0?0:n--;
				$(".count").val(n);
			});
		}
		storage.prototype.tocar = function(){
			if(loclStorage.getItem("init")){
				var obj = JSON.parse(localStorage.getItem("init"))
			}else{
				var obj = {};
			}
			
		}
		
			new storage();
	});
				

});







