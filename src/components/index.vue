<template>
    <div class="index">
        <div class="left_side">
            <div class="nav_index">
								<router-link to="/" exact>
									推荐
								</router-link>
								<router-link to="/follow">
									关注
								</router-link>
								<router-link to="/hot">
									热榜
								</router-link>
            </div>
						<router-view></router-view>
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
	.index{
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
    .nav_index{
        border-bottom: 1px solid #ddd;
        height:50px;
    }
    .nav_index>a{
			display:inline-block;
			height:100%;
			line-height:50px;
			margin:0 20px;
		}
		.nav_index .active{
				color:#0084ff;	
		}
</style>