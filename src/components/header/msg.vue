<template>
    <div class="msg msg_one">
        <span class="upIcon"></span>
        <div>
					<div class="comm_title">我的私信</div>
					<div>
						<ul class="msg_list">
							<li :class="{'active':isActive==0}" @click="clickIcon(0)">
								<span class="iconfont icon-caidan"></span>
							</li>
							<li :class="{'active':isActive==1}" @click="clickIcon(1)"> 
								<span class="iconfont icon-moban"></span>
							</li>
							<li :class="{'active':isActive==2}" @click="clickIcon(2)">
								<span class="iconfont icon-xinxing"></span>
							</li>
						</ul>
					</div>
					<div class="msg_content">
						
					</div>
					<div class="comm_footer">
						<div>
							<span class="iconfont icon-shezhi"></span>
							<span>设置</span>
						</div>
						<div>
							<span>查看全部通知</span>
						</div>
					</div>
				</div>
    </div>
</template>
<script>
  export default{
    data:function(){
			return {
				isActive:0
			}
		},
		methods:{
			clickIcon:function(index){
				this.isActive=index;
			}
		}
  }
</script>

<style lang="css">

    @import '../../css/over.css';
		.msg_one{
			right:55px;
		}
		.msg_list .iconfont{
			font-size:20px;
			color:#8590a6;
		}
		.active .iconfont{
			color:#0084ff;
		}
		.msg_list{
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			padding:10px 0;
		}
		.msg_list>li{
			padding:0 10px;
			width:30%;
			text-align:center;
			font-size:18px;
			cursor:pointer;
			border-right:1px solid #ddd;
		}
		.msg_list>li:last-child{
			border:none;
		}
</style>