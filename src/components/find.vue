<template>
    <div class="find">
			<div class="find_section">
				<div class="special">
					<p class="find_title">
						<span class="iconfont icon-huida find_icon"></span>
						<span>最新专题</span>
					</p>
					<div>
						
					</div>
					<p class="find_btn">
						<a href="#">
							查看更多专题
							<span class="iconfont icon-xiangyou"></span>
						</a>
					</p>
				</div>
				<div class="roundtable">
					<p class="find_title">
						<span class="iconfont icon-hua find_icon"></span>
						<span>圆桌讨论</span>
					</p>
					<div>
					
					</div>
					<p class="find_btn">
						<a href="#">
							查看更多圆桌
							<span class="iconfont icon-xiangyou"></span>
						</a>
					</p>
				</div>
				<div class="collection">
					<p class="find_title">
						<span class="iconfont icon-xingxing find_icon"></span>
						<span>热门收藏夹</span>
					</p>
					<div>
					
					</div>
					<p class="find_btn">
						<a href="#">
							查看更多收藏夹
							<span class="iconfont icon-xiangyou"></span>
						</a>
					</p>
				</div>
				<div class="column">
					<p class="find_title">
						<span class="iconfont icon-edit find_icon"></span>
						<span>专栏</span>
					</p>
					<div>
					
					</div>
					<p class="find_btn">
						<a href="#">
							查看更多专栏
							<span class="iconfont icon-xiangyou"></span>
						</a>
					</p>
				</div>
			</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
	.find{
    padding:20px 30px;
    background: #f6f6f6;
    display: flex;
    flex-direction: row;
		justify-content: center;
  }
	.find_section{
		width:1000px;
	}
	.find_title{
		font-size:25px;
		font-weight:bold;
	}
	.find_icon{
		font-size:25px;
		color:#0084ff;
		margin-right:10px;
	}
	.find_btn{
		text-align:center;
	}
	.find_btn>a{
		color: #8590a6;
		font-weight:bold;
		background:#fff;
		height: 48px;
		border-radius:24px;
		display:inline-block;
		line-height:48px;
		padding:0 20px;
	}
</style>