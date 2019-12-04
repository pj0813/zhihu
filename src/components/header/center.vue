<template>
    <div class="msg msg_three">
				<span class="upIcon"></span>
        <ul class="center_list">
					<li>
								<span class="iconfont icon-moban"></span>
								我的主页
							</li>
							<li>
								<span class="iconfont icon-shezhi"></span>
								设置
							</li>
							<li>
								<span class="iconfont icon-tuichu"></span>
								退出
							</li>
				</ul>
    </div>
</template>
<script>
  export default{
    
  }
</script>

<style lang="css">
    @import '../../css/over.css';
		.msg_three{
			width:118px;
			right:15px;
		}
		.center_list{
			padding:5px 0;
			
		}
		.center_list li{
			padding:10px;
			cursor:pointer;
			color:#76839b
		}
		.center_list li:hover{
			background:#f6f6f6;
		}
		.center_list>.iconfont{
			font-size:18px;
			vertical-align:middle;
		}
</style>