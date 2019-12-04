<template>
  <div class="header">
    <a href="#" class="table">知乎</a>
    <ul class="nav">
      <li class="item">
        <router-link to="/" exact>
          首页
        </router-link>
      </li>
      <li class="item">
        <router-link to="/find">
          发现
        </router-link>
      </li>
      <li class="item">
        <router-link to="/answer">
          等你来答
        </router-link>
      </li>
    </ul>
    <div class="input_ques">
      <div class="ques_search">
        <input type="text" class="ques">
        <p class="search_btn">
          <span class="iconfont icon-sousuo"></span>
        </p>
      </div>
      <button class="ques_btn">提问</button>
    </div>
    <div class="myCenter">
      <div @click="tabChange('msg')">
        <span class="iconfont icon-lingsheng"></span>
      </div>
      <div @click="tabChange('priv')">
        <span class="iconfont icon-comments"></span>
      </div>
      <div @click="tabChange('center')">
        <img src="../img/da8e974dc_im.jpg" class="head_pic">  
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
			tabChange(tabItem) {
       this.$emit('changeItem',tabItem);
     }
		}
  }
</script>

<style lang="css">
  .header{
		min-width: 1032px;
    height: 50px;
    border-bottom:1px solid #ddd;
    display: flex;
    flex-direction: row;
    padding: 0 60px;
    justify-content: space-between;
  }
  .table{
    font-size: 30px;
    line-height: 50px;
		color:#0084ff;
  }
  .nav{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .nav .item{
    padding:0 25px;
  }
  .nav a{
    border-bottom: 4px solid transparent;
  }
  .nav a.active{
    border-bottom: 4px solid #0084ff;
  }
  .nav .item>a{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:100%;
  }
  .input_ques{
    padding:10px 0;
    display: flex;
    flex-direction: row;
  }
  .ques_search{
    position: relative;
    margin-right: 10px;
  }
  .ques{
    border: 1px solid #ddd;
    height:30px;
    width: 300px;
    border-radius: 5px;
    vertical-align: top;
    background: #ddd;
    padding:0 30px 0 10px;
  }
  .ques_btn{
    height: 30px;
    width:60px;
    background-color: #0084ff;
    color: #fff;
    border-radius: 5px;
    vertical-align: top;
  }
  .ques_btn:hover{
    background-color: #0077e6;
  }
  .myCenter .iconfont{
    color:#76839b;
    font-size:25px;
  }
  .search_btn{
    position: absolute;
    height: 100%;
    width:25px;
    top:0;
    right:0;
    cursor: pointer;
  }
  .icon-sousuo{
    font-size:20px;
    line-height:30px; 
  }
  .myCenter{
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width:150px;
    margin-left: 40px; 
  }
  .myCenter>div{
    cursor: pointer;
  }
  .head_pic{
    height:100%;
  }
</style>