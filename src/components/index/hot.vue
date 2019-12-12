<template>
    <div>
        <div>
					<div class="hotNav">
						<div class="hotNav_items">
							<a href="#" class="hotNav_item active">全站</a>
							<a href="#" class="hotNav_item">科学</a>
							<a href="#" class="hotNav_item">数码</a>
							<a href="#" class="hotNav_item">体育</a>
							<a href="#" class="hotNav_item">时尚</a>
							<a href="#" class="hotNav_item">影视</a>
						</div>
						<button class="expandButton">展开</button>
					</div>	
				</div>
				<div class="hotList">
					<div class="hotList_floor">
						<div class="hotList_index">
							1
						</div>
						<div class="hotList_content">
							<a href="#">
								<div class="hotList_title">如何评价动画《哪吒与变形金刚》的预告片与海报？</div>
								<div class="hotList_intro">中美两岸开花</div>
							</a>
							<div class="hotList_btn">
									<span>
										<span class="iconfont icon-renqi"></span>
										407 万热度
									</span>
									<span>
										<span class="iconfont icon-fenxiang"></span>
										分享
									</span>
								</div>
						</div>
						<div>
							<a href="#" class="hot_img">
								<img src="@/img/intro/hot1.jpg"/>
							</a>
						</div>
					</div>
				</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
	.hotNav{
		padding:10px 20px;
		border-bottom:1px solid #ddd;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.hotNav_item{
		color: #646464;
		background-color: #f6f6f6;
		padding:5px 20px;
		font-size:14px;
		margin-right:5px;
	}
	.hotNav_item.active{
		color: #0084ff;
    background-color: rgba(0,132,255,.1);
	}
	.expandButton{
		color: #8590a6;
		background:#fff;
		border:1px solid #8590a6;
		width:50px;
		height:26px;
		border-radius:13px;
		line-height:26px;
		cursor:pointer;
	}
	.hotList_floor{
		padding:10px 20px;
		border-bottom:1px solid #ddd;
		display:flex;
		flex-direction: row;
	}
	.hotList_index{
		font-size:20px;
		font-weight:bold;
		color: #ff9607;
		width:27px;
	}
	.hot_img{
		display:block;
		height:105px;
		width:190px;
		padding-left:20px;
	}
	.hot_img>img{
		width:100%;
		height:100%;
		
	}
	.hotList_content{
		height:105px;
		flex:auto;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.hotList_title{
		font-weight:bold;
		font-size:18px;
	}
	.hotList_intro{
		color:#444;
		font-size:16px;
		margin-top:5px;
	}
	.hotList_btn{
		color:#8590a6;
		font-size:14px;
	}
	.hotList_btn>span{
		margin-right:20px;
	}
</style>