<template>
  <div class="container">
    <myheader @changeItem="getItem"></myheader>
    <div class="over">
      <div :is="currentView">
			
			</div>
    </div>
    <router-view></router-view>
  </div>      
</template>
<script>
  import myheader from '@/components/MyHeader.vue'//引入组件
  import msg from '@/components/header/msg.vue'
	import priv from '@/components/header/priv.vue'
	import center from '@/components/header/center.vue'
  export default{
		data(){
			return {
				currentView:''
			}
		},
		methods:{
			getItem:function(e){
				this.currentView=e
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
	}
	.over{
		position:relative;
		width:100%;
	}
</style>