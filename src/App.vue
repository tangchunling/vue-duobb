<template>
  <div id="app">
  	<div style="border-bottom: 2px solid #ff3e4e;">
	  	<div class="container" >
	  		<div class="top">
	  			<span onclick="SetHome(this,window.location)">设为首页</span>|<span onclick="AddFavorite(window.location,document.title)">收藏本页</span>
	  		</div>
	  		<div class="dbheader">
	    		<div class="dblogo">
	    			<img src="http://oe3slowqt.bkt.clouddn.com/yhq/logo.png" alt="" />
	    		</div>
	    		<div class="dbsearch">
	    			<div class="dbsearchcontent">
	    				<input type="text" class="form-control" placeholder="输入商品或链接领取优惠券" v-model="name" v-on:keyup.enter="search"/>
	    				<i class="reset" v-if='name' @click="reset"></i>
	    				<span @click = "search">搜索</span>
	    			</div>
	    		</div>
	    		<div class="dbicon">
	    			<img src="http://oe3slowqt.bkt.clouddn.com/yhq/yhqright.jpg" alt="" />
	    		</div>
	    </div>
	    <div class="dbtab">
	    		<ul>
	    			<li>
			  			<router-link to="/help">查找帮助</router-link>
			  		</li>
	    			<!--<li>
			  			<router-link to="/type/top">TOP100</router-link>
			  		</li>-->
			  		<li>
			  			<router-link to="/type/chaozhi">优惠券直播</router-link>
			  		</li>
			  		<!--<li>
			  			<router-link to="/type/huasuan">聚划算</router-link>
			  		</li>-->
	    			<!--<li>
	    				<a href="javascript:void(0)">分类</a>
	    			</li>-->
	    		</ul>
	    </div>
	    
	  	</div>
	  	</div>
	  	<!--<div class="container">
	  		<div class="category">
	  			<ul v-if="categorydata">
	  				<span>分类：</span>
	  				<li v-for="(item,index) in categorydata" @click="gocategory(index)" v-bind:class="{active:category==index}">{{item}}</li>
	  			</ul>
	  		</div>
	  	</div>-->
    <div class="container">
    			<router-view></router-view>
    </div>
		<Foot></Foot>
  </div>
</template>

<script>
require('./assets/css/common.css')
import Goods from './views/Goods'
import Foot from './views/Foot'
import {api,geturl} from './assets/js/common'

export default {
  name: 'app',
  components: {
    Goods, Foot
  },
  data: function () {
    return {
//    tab: ['查找帮助', 'TOP100', '超值优惠', '热门精选', '聚划算'],
//    activename: '查找帮助',
      name: '',
      categorydata: '',
      category: ''
    }
  },
  methods: {
  		reset: function () {
  			this.name = ''
  		},
  		gocategory: function (val) {
  			this.$router.push('/category?category='+val)
			this.$router.go()
  		},
    select: function (val) {
      this.activename = val
    },
    search: function () {
    		if(this.name.indexOf('http') >= 0){
    			this.$router.push('/searchdetail?url='+escape(this.name))
    			this.$router.go()
    		}
    		else{
    			this.$router.push('/search?q='+this.name)
    			this.$router.go()
    		}
    		
    },
    getcategory: function () {
    		var self = this
    		this.$http.get(api + '/index.php?r=userdata/headtype').then((response) => {
    			var data = response.body
    			if(data.state == 1000){
    				self.categorydata = data.data
    			}
    		}, (response) => {
    			
    		})
    }
  },
  created: function () {
  		this.name = geturl('q') ? geturl('q') : ''
  		this.name = geturl('url') ? geturl('url') : ''
  		this.getcategory()
  		this.category = geturl('category')
  }
}
</script>

<style>
	.top{text-align: right;padding:14px 0;color:#666;}
	.top span{font-size: 14px;margin:0 24px;cursor: pointer;}
	.container{width:1136px;margin:auto}
	.dbheader{display: flex;display: -webkit-flex;padding:20px 0;align-items:flex-end;}
	.dblogo{width: 206px;}
	.dbsearch{flex: 1;-webkit-flex: 1;}
	.dbicon{width: 274px;}
	.dbsearchcontent{display: flex;display: -webkit-flex;border:1px solid rgb(242,70,91);width:538px;margin: auto;position: relative;}
	.dbsearchcontent .form-control{width: 458px;}
	.dbsearchcontent span{width:80px;text-align: center;background: rgb(242,70,91);color:#fff;line-height: 34px;cursor: pointer;}
	.dbtab{text-align: left;}
	.dbtab ul{display: inline-block;}
	.dbtab ul li{display: inline-block;}
	.dbtab ul li a{display: inline-block;width:144px;text-align:center;padding:14px 0;font-weight: bold;color:#666;font-size: 18px;}
	.dbtab ul li a.router-link-active{color:#ff3e4e;border-bottom: 6px solid #ff3e4e;}
	.dbicon{text-align: right;}
	.dbicon img{width:100%}
	.category{padding:20px}
	.category ul li{display: inline-block;padding:10px;cursor: pointer;}
	.category ul li.active{color:#FF4400}
	.reset{width: 32px;height: 32px;background: url(assets/img/close.png) no-repeat;background-size: cover;position: absolute;right: 78px;}	
</style>
