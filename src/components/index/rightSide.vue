<template>
<div  class="right">
	<div class="card write_card">
		<div class="write_nav">
            <a href="">
                <span class="iconfont icon-huida"></span>
                <span class="write_title">写回答</span>
            </a>
            <a href="">
                <span class="iconfont icon-edit"></span>
                <span class="write_title">写文章</span>
            </a>
            <a href="">
                <span class="iconfont icon-xiang"></span>
                <span class="write_title">写想法</span>
            </a>
        </div>
        <div class="write_bar">
            <p class="bar_item">
                <a href="">
                    <span class="iconfont icon-clock"></span>
                    <span>我的稍后回答</span>
                </a>
            </p>
            <p class="bar_item">
                <a href="">
                    <span class="iconfont icon-caogao"></span>
                    <span>我的草稿</span>
                </a> 
            </p> 
        </div>
    </div>
    <div class="card Creator">
         <a href="">
            <span>
                <span class="iconfont icon-chuangye"></span>
                <span>创作者中心</span>
            </span>
            <span>
                <span class="dredge">去开通</span>
                <span class="iconfont icon-xiangyou"></span>
            </span>
        </a>
    </div>
    <ul class="card categoryList">
        <li>
            <a href="" class="shandian">
                <span class="iconfont icon-shandian"></span>
                <span class="categoryLable">Live</span>
            </a>
        </li>
        <li>
            <a href="" class="shu">
                <span class="iconfont icon-shu"></span>
                <span class="categoryLable">书店</span>
            </a>
        </li>
        <li>
            <a href="" class="hua">
                <span class="iconfont icon-hua"></span>
                <span class="categoryLable">圆桌</span>
            </a>
        </li>
        <li>
            <a href="" class="edit">
                <span class="iconfont icon-edit"></span>
                <span class="categoryLable">专栏</span>
            </a>
        </li>
        <li>
            <a href="" class="fufei">
                <span class="iconfont icon-fufei"></span>
                <span class="categoryLable">付费咨询</span>
            </a>
        </li>
        <li>
            <a href="" class="baike">
                <span class="iconfont icon-baike"></span>
                <span class="categoryLable">百科</span>
            </a>
        </li>
    </ul>
    <ul class="card SideBar">
        <li>
            <a href="">
                <span class="iconfont icon-xingxing"></span>
                <span class="SideBar-txt">我的收藏</span>
                <span class="counts">0</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="iconfont icon-wenhao"></span>
                <span class="SideBar-txt">我关注的问题</span>
                <span class="counts">0</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="iconfont icon-yaoqing"></span>
                <span class="SideBar-txt">我的邀请</span>
                <span class="counts">0</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="iconfont icon-yonghu"></span>
                <span class="SideBar-txt">站务中心</span>
            </a>
        </li>
        <li>
            <a href="">
                <span class="iconfont icon-banquan"></span>
                <span class="SideBar-txt">版权服务中心</span>
            </a>
        </li>
    </ul>
    <div class="ad">
        <a href="">
            <div class="banner">广告</div>
            <span class="iconfont icon-cross quit"></span>
            <img src="../../img/g1.png" alt=""> 
        </a>      
    </div>
    <footer class="footer">
        <p>
            <a href="">刘看山</a>
            <span>.</span>
            <a href="">知乎指南</a>
            <span>.</span>
            <a href="">知乎协议</a>
            <span>.</span>
            <a href="">知乎隐私保护指引</a>      
        </p>
        <p>
            <a href="">应用</a>
            <span>.</span>
            <a href="">工作</a>
            <span>.</span>
            <a href="">申请开通知乎机构号</a>
        </p>
        <p>
            <a href="">侵权举报</a>
            <span>.</span>
            <a href="">网上有害信息举报专区</a>
        </p>
        <p>
            <a href="">京 ICP 证 110745 号</a>
        </p>
        <p>
            <a href="">京公网安备 11010802010035 号</a>
        </p>
        <p>
            违法和不良信息举报：010-82716601
        </p>
        <p>
            <a href="">儿童色情信息举报专区</a>
        </p>
        <p>
            <a href="">证照中心</a>
        </p>
        <p>
            <a href="">联系我们 </a>
            © 2019 知乎
        </p>
    </footer>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
	.right{
		font-size: 14px;
        color: #8590a6;
    }
    .card{
        background:#fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .write_nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:0 20px;
    }
    .write_nav a{
        display: flex;
        flex-direction: column;
        padding:20px 10px;
        text-align: center;
    }
    .write_title{
        font-size: 16px;
        color:#000;
        padding:10px 0;
    }
    .write_nav a:hover>.write_title{
        color:#175199;
    }
    .write_bar{
        margin:0 20px;
    }
    .write_bar>p{
        border-bottom: 1px solid #ddd;
    }
    .bar_item>a:hover{
        background: #f6f6f6;
    }
    .write_bar>p:last-child{
        border: 0;
    }
    .bar_item>a{
        display: block;
        margin: 0 -20px;
        padding: 10px 20px;
    }
    .Creator{
        padding:10px 0;
    }
    .Creator>a{
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        padding:0 20px;
    }
    .dredge{
        color: rgb(0, 132, 255);
    }
    .Creator .icon-xiangyou{
        font-weight: bold;
    }
    .categoryList{
        padding: 10px 20px 0;
    }
    .categoryList>li{
        display: inline-block;
        width:32%;
        margin-bottom: 20px;
    }
    .categoryList>li>a{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .categoryLable{
        margin-top: 10px;
    }
    .icon-shandian,.shandian:hover>.categoryLable{
        color:rgb(255, 207, 0);
    }
    .icon-shu,.shu:hover>.categoryLable{
        color: rgb(67, 212, 128);
    }
    .icon-hua,.hua:hover>.categoryLable{
        color: rgb(0, 132, 255);
    }
    .icon-edit,.edit:hover>.categoryLable{
        color: rgb(15, 136, 235);
    }
    .icon-fufei,.fufei:hover>.categoryLable{
        color: rgb(84, 120, 240);
    }
    .icon-baike,.baike:hover>.categoryLable{
        color: rgb(88, 104, 209);
    }
    .ad>a{
        display: block;
        border-radius: 10px;
        position: relative;
				z-index:100;
    }
		.quit{
			background:#000;
			border-radius:50%;
			color:#fff;
			position:absolute;
			top:10px;
			right:10px;
			z-index:500;
			display:none;
		}
    .ad>a:hover .quit{
			display:block;
		}
    .banner{
        position: absolute;
        bottom: 20px;
        right:20px;
        padding: 5px 10px;
        border: 1px solid #ebebeb;
        color: #ebebeb;
        border-radius: 5px;
        background: #000;
        opacity: .5;
    }
    .ad img{
        width: 100%;
        border-radius: 10px;
    }
    .SideBar{
        padding: 5px 0;
    }
    .SideBar>li>a{
        display: block;
        padding:10px 20px;
    }
    .SideBar>li>a:hover{
        background: #f6f6f6;
    }
    
    .SideBar-txt{
        margin:0 10px;
        display:inline-block;
        width: 70%;
    }
    .counts{
        display: inline-block;
        padding: 6px 10px;
        background: #f6f6f6;
    }
    .SideBar>li>a:hover .counts{
        background:#fff;
    }
		
    .footer{
        font-size: 12px;
    }
	.footer a:hover{
        color: #175199;
    }
    .footer p{
        padding:5px 10px;
    }
</style>