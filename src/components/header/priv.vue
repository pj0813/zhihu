<template>
    <div class="msg msg_two">
				<span class="upIcon"></span>
        <div>
					<div class="comm_title">我的私信</div>
					<div class="priv_list">
						<div class="priv_item">
							<img src='../../img/v1.jpg'>
							<div>
								<p>
									知乎大学小管家
									<span class="iconfont icon-renzheng"></span>
								</p>
								<p class="alert_txt">
									亲爱的 danica：

如何零基础入门机器学习？算法太难，自学挑战太高怎么破？学习过程中，得不到及时解答很苦恼？

知乎联合贪心科技，推出
「从零基础到实战应用：机器学习训练营」 ，
——16 大经典算法精讲，20 个实操案例，9 大项目作业，带你立即开启机器学习的大门～

云端编程，社群答疑，代码一对一批改，
点击立即参与 

爱你的知乎大学小管家
								</p>
							</div>
						</div>
						<div class="priv_item">
							<img src='../../img/v2.jpg'>
							<div>
								<p>
									知乎小管家
									<span class="iconfont icon-renzheng"></span>
								</p>
								<p class="alert_txt">
									亲爱的 danica 你好：

欢迎你来到知乎，一个认真、专业、友善的知识分享社区。

在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验、见解，也可以通过举报、反对、公共编辑、众裁 等参与社区的建设。

关于「知乎怎么玩」也许你有很多好奇，点击蓝色链接「知乎官方指南」 查看解答，开启你的知乎之旅吧。

爱你的知乎小管家
								</p>
							</div>
						</div>		
					</div>
					<div class="comm_footer">
						<div>
							<span class="iconfont icon-write"></span>
							<span>写新私信</span>
						</div>
						<div>
							<span>查看全部私信</span>
						</div>
					</div>
				</div>
    </div>
</template>
<script>
  export default{
    
  }
</script>

<style lang="css">
    @import '../../css/over.css';
		.msg_two{
			right:2px;
		}
		.priv_list{
			min-height:300px;
		}
		.priv_list>.priv_item{
			padding:15px;
			cursor:pointer;
			display: flex;
      flex-direction: row;
		}
		.priv_list>.priv_item:hover{
			background:#f6f6f6;
		}
		.priv_item>img{
			width:40px;
			height:40px;
			margin-right:15px;
		}
		.alert_txt{
			width:190px;
			overflow:hidden;
			white-space:nowrap;
			text-overflow: ellipsis;
			-o-text-overflow: ellipsis;
			color:#8590a6;
		}
		.icon-renzheng{
			color:rgb(15, 136, 235);
		}
</style>