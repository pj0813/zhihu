<template>
  <div>
			<p @click='changMsg'>{{msg}}</p>
		  <!--<p v-on:click="clickNum">{{msg}}</p>-->
			<!--<p>{{name}}{{isStu}}{{age}}</p>-->
  </div>
</template>

<script>
  export default {
		data(){
			return{
				num:0
			}
			
		},
		props:['msg']
    //props:['msg','name','isStu','age']
		/*props:{
			msg:{
				type:Number,
				default:100,
				validator:function(v){
					return v>0
				}
			},
	
		}*/,
		methods:{
			/*clickNum:function(){
				this.num+=1;
				//this.$emit('sunNum',this.num)
				this.$emit('sunNum')
			},*/
			changMsg:function(){
				this.$emit('update:msg',this.num++)
			}
		},
		
  }
</script>

<style lang="css" scoped>
 
</style>