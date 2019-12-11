<template>
    <div>
				<div class="follow_list">
					<div class="floor">
						<div class="follow_title">
							<a class="" href="#">
								Foxiii
								<span class="iconfont icon-renzheng"></span>
							</a>
							<span>回答了问题</span>
							<span class="iconfont icon-dian"></span>
							<span>20 小时前</span>
						</div>
					</div>
				</div>
        <div class="empty">
					<span class="iconfont icon-liebiao01"></span>
					<p class="empty_txt">还没有关注的人，为你推荐以下用户</p>
				</div>
				<div>
					<div class="floor">
						<div class="author">
							<div class="author_info">
								<img src="@/img/intro/h1.jpg" class="author_pic"/>
								<div>
									<p>
										<a class="author_name" href="#">
											Foxiii
											<span class="iconfont icon-renzheng"></span>
										</a>
										<span>, 红蓝军</span>
									</p>
									<p class="author_extra">
										<span>76 回答 </span>
										<span class="iconfont icon-dian"></span>
										<span>93,534 关注者</span>
									</p>
								</div>
							</div>
							<button class="author_btn">
								<span class="iconfont icon-jia"></span>
								关注他
							</button>
						</div>	
						<div class="intro_title">
							<a>你见过哪些神级Ｐ图？</a>
						</div>
						<div class="intro_content">
							<a href="">
								<div class="intro_left">
									<img src="@/img/intro/1.jpg">
									<div class="play">
										<span class="iconfont icon-play"></span>
									</div>
								</div>
								<div class="intro_right">
									<span class="brief">李弱可： 小丑摁引爆器不是「导演没喊 cut」。 大家别再以讹传讹了。 动动脑子就能明白这必然是设计出来的。如果身后的爆炸真的是因为爆破组工作人员的工作不到位，演员绝对不会表达「怎么没全炸」的意思，因为他绝…</span>
									<span class="readAll">
										阅读全文
										<span class="iconfont icon-down"></span>
									</span>
								</div>
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
	.follow_title{
		color:#8590a6;
	}
	.empty{
		text-align:center;
		color: grey;
		padding:20px 0;
	}
	.empty>span{
		font-size:80px;	
		color:#EBEEF5;
	}
	.empty_txt{
		text-align:center;
		margin-top:20px;
	}
	.floor{
		padding:10px 20px;
		border-bottom:1px solid #ddd;
	}
	.author{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		padding:10px 0;
	}
	.author_info{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.author_name{
		font-weight:bold;
	}
	.author_extra{
		color:#999;
	}
	.author_btn{
		color: #fff;
    background-color: #0084ff;
		width: 100px;
    height: 34px;
	}
	.author_pic{
		 border-radius: 3px;
		 width:40px;
		 height:40px;
		 margin-right:10px;
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
		font-size:14px;
	}
	.intro_left{
		width:190px;
		margin-right:10px;
		position:relative;
	}
	.play{
		width:50px;
		height:50px;
		position:absolute;
		top:50%;
		left:50%;
		margin-top:-25px;
		margin-left:-25px;
		background:rgb(255, 255, 255,0.95);
		border-radius:50%;
		text-align:center;
		line-height:50px;
	}
	.play>span{
		color:rgb(68, 68, 68);
	}
	.intro_right{
		flex:1;
	}
	
	.intro_left>img{
		width:100%;
	}
	.brief{
		color:#1a1a1a;
	}
	.brief:hover{
		color:#646464;
	}
	.readAll{
		color: #175199;
	}
	.readAll:hover{
		color:#646464;
	}
</style>