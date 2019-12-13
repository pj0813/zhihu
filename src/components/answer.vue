<template>
    <div class="answer">
        <div class="left_side">
            <div class="ans_index">
								<a href="#" class="ans_active">
									<span class="iconfont icon-renqi"></span>
									人气问题
								</a>
								<a href="#">
									<span class="iconfont icon-shumiao"></span>
									潜力好问
								</a>
								<a href="#">
									<span class="iconfont icon-new"></span>
									新问题
								</a>
								<a href="#">
									<span class="iconfont icon-wode"></span>
									人人答
								</a>
            </div>
						<div class="ans_content">
							<div class="ans_floor">
								<div class="ans_title">
									<a href="#">有哪些景色非常优美的电影？</a>
								</div>
								<div class="ans_intro">
									<span class="ans_txt">
									最近看了《白日梦想家》冰岛的景色真的是太令人难忘了，(甚至还查了去冰岛旅游需要准备的东西)。希望大家能够分享一些景色优美的电影给我鸭 [图片]…
									</span>
									<span class="showAll">
										显示全部
										<span class="iconfont icon-down"></span>
									</span>	
								</div>
								<div class="ans_btn">
									<div class="ans_tool">
										<a href="#" class="edit_ans">
											<span class="iconfont icon-write"></span>
											写回答
										</a>
										<a href="#" class="ans_btn_plain">
											<span class="iconfont icon-jia"></span>
											关注问题
										</a>
										<a href="#" class="ans_btn_plain">
											<span class="iconfont icon-clock"></span>
											稍后答
										</a>
									</div>
									<div class="ans_subTool">
										<span>5个回答</span>
										<span class="iconfont icon-dian"></span>
										<span>116个浏览</span>
									</div>
								</div>
							</div>
						</div>
        </div>
        <div class="right_side">
						<rightSide></rightSide>
        </div>
    </div>
</template>
<script>
import rightSide from '@/components/index/rightSide'
export default {
    components:{//注册组件
      rightSide
    }
}
</script>
<style lang="css">
	.answer{
    padding:20px 30px;
    background: #f6f6f6;
    display: flex;
    flex-direction: row;
		justify-content: center;
  }
	.left_side{
        width:700px;
        min-height: 100px;
        background:#fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        border-radius: 5px;
				margin-right:20px;
    }
    .right_side{
        min-height: 100px;
        width:296px;
    }
		.ans_index{
			padding:20px;
			border:1px solid #ddd;
		}
		.ans_index>a{
	    background: rgba(133,144,166,.12);
			color:#444;
			border-radius: 16px;
			height:32px;
			line-height:32px;
			-webkit-box-shadow: 0 6px 10px 0 rgba(133,144,166,.06);
    box-shadow: 0 6px 10px 0 rgba(133,144,166,.06);
		padding:0 20px;
		margin-right:20px;
		display:inline-block;
}
.ans_index>a.ans_active{
	background: rgba(0,132,255,.08);
    -webkit-box-shadow: 0 6px 10px 0 rgba(0,132,255,.06);
    box-shadow: 0 6px 10px 0 rgba(0,132,255,.06);
    color: #0084ff;
}
.ans_index>a:hover{
	background: rgba(0,132,255,.08);
    -webkit-box-shadow: 0 6px 10px 0 rgba(0,132,255,.06);
    box-shadow: 0 6px 10px 0 rgba(0,132,255,.06);
}
.ans_content{
	padding:0 20px;
}
.ans_floor{
	border-bottom:1px solid #ddd;
	padding:10px 0;
}
.ans_title{
		padding:10px 0;
		font-size:18px;
		font-weight:600;
	}
	.ans_title>a{
		cursor:pointer;
	}
	.ans_title>a:hover{
		color:#175199;
	}
	.ans_intro{
		cursor:pointer;
		font-size:16px;
	}
	.ans_txt:hover{
		color: #646464;
	}
	.showAll{
		color: #8590a6;
	}
	.showAll:hover{
		color: grey;
	}
	.ans_btn{
		padding:10px 0;
		display: flex;
    flex-direction: row;
		justify-content: space-between;
		font-size:14px;
		color:#8590a6;
	}
	.ans_tool>a{
		margin-right:20px;
	}
	.edit_ans{
		color: #0084ff;
    border: 1px solid #0084ff;
		width: 94px;
		border-radius:5px;
		display:inline-block;
		text-align:center;
		padding:5px 0;
	}
	.edit_ans:hover{
		background-color: rgba(0,132,255,.06);
	}
	.ans_btn_plain:hover{
		color: #76839b;
	}
	.ans_subTool{
		line-height:31px;
	}
</style>