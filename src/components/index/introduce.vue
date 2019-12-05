<template>
	<div class="introduce">
    <div>
			<div class="intro_title">
				<a>有哪些电影镜头导演没喊卡却成了经典？</a>
			</div>
			<div class="intro_content">
				<a href="">
					<div class="intro_left">
						<img src="@/img/intro/1.jpg">
					</div>
					<div class="intro_right">
						<span>李弱可： 小丑摁引爆器不是「导演没喊 cut」。 大家别再以讹传讹了。 动动脑子就能明白这必然是设计出来的。如果身后的爆炸真的是因为爆破组工作人员的工作不到位，演员绝对不会表达「怎么没全炸」的意思，因为他绝…</span>
						<span>
							阅读全文
							<span class="iconfont icon-down"></span>
						</span>
					</div>
				</a>
			</div>
			<div class="intro_btn">
				<button>
					<span class="iconfont icon-shang"></span>
					赞同10K
				</button>
				<button>
					<span class="iconfont icon-xia"></span>
				</button>
				<a href="">
					<span class="iconfont icon-pinglun"></span>
					<span>261条评论</span>
				</a>
				<a href="">
					<span class="iconfont icon-fenxiang"></span>
					<span>分享</span>
				</a>
				<a href="">
					<span class="iconfont icon-xingxing"></span>
					<span>收藏</span>
				</a>
				<a href="">
					<span class="iconfont icon-xinxing"></span>
					<span>感谢</span>
				</a>
				<span class="iconfont icon-lve"></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
	.introduce{
		padding:10px 20px;
	}
	.intro_title{
		padding:10px 0;
		font-size:18px;
		font-weight:600;
	}
	.intro_title>a{
		cursor:pointer;
	}
	.intro_title>a:hover{
		color:#175199;
	}
	.intro_content>a{
		display:flex;
		flex-direction: row;
	}
	.intro_left{
		width:190px;
		margin-right:10px;
	}
	.intro_right{
		flex:1;
	}
	.intro_left>img{
		width:100%;
	}
	.intro_btn{
		padding:10px 0;
		color: #8590a6;
	}
</style>