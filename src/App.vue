<template>
  <div class="container">
    <myheader @changeItem="getItem" :is_show="isShow"></myheader>
    <div class="over">
      <div :is="currentView">
			
			</div>
    </div>
		<div ref="content" class="section">
			<router-view></router-view>
		</div>
  </div>      
</template>
<script>
  import myheader from '@/components/MyHeader.vue'//引入组件
  import msg from '@/components/header/msg.vue'
	import priv from '@/components/header/priv.vue'
	import center from '@/components/header/center.vue'
	import throttle from './js/throttle'
  export default{
		data(){
			return {
				currentView:'',
				isShow:true
			}
		},
		mounted() {
			var _this=this;
			window.addEventListener('scroll',_this.listenAction)
		},
		methods:{
			getItem:function(e){
				this.currentView=e
			},
			listenAction:function(){
				const offsetTop = this.$refs.content.getBoundingClientRect().top;
				if(offsetTop<1){
					this.isShow=false
				}else{
					this.isShow=true
				}
		 }
		},
    components:{//注册组件
      myheader,
      msg,
			priv,
			center
    }
  }
</script>
<style lang="css">
	.container{
		min-width: 1032px;
		background: #f6f6f6;
	}
	.over{
		position:relative;
		width:100%;
	}
	.section{
		position:relative;
		top:60px;
		z-index:100;
	}
</style>