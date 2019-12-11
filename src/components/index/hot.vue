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
						<div>
							1
						</div>
						<div>
							<a href="#">
							
							</a>
						</div>
						<div>
							<a href="#">
								<img src="@/img/"/>
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
		justify-content: space-between;
	}
</style>