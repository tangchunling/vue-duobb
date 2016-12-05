<template>
	<div>
	  <div class="goodscontainer" v-if="goodsdata.length">
	  		<ul>
	  			<li v-for="item in goodsdata">
	  				<a class="goodscontent" v-bind:href="'/detail/'+item.taobaoToken.auctionId">
	  					<div class="goodsimg">
	  						<img v-lazy="item.taobaoToken.picUrl+'_200x200.jpg'" alt="" />
	  					</div>
	  					<p class="title" v-html="item.taobaoToken.title"></p>
	  					<p class="yhq" v-if="item.taobaoToken.couponInfo != '无'">{{item.taobaoToken.couponInfo}}</p>
	  					<p class="yhq" v-if="item.taobaoToken.couponInfo == '无'&item.hideToken.length">{{item.hideToken[0].ticketName}}</p>
	  					<div class="price">
	  						<span class="xprice">¥{{item.taobaoToken.zkPrice}}</span>
	  						<span class="yprice">¥{{item.taobaoToken.reservePrice}}</span>
	  					</div>
	  				</a>
	  			</li>
	  		</ul>
	  		<div class="page">
				<button class="next" @click="getbefore" v-bind:disabled="page == 1">上一页</button><span>共{{totalpage}}页</span><button class="next" @click="getnext" v-bind:disabled="page == totalpage">下一页</button><span>第</span><input type="tel" v-model="page"/>页<span class="submit" @click="submitdata">确定</span>
			</div>	
	  </div>
	  <div v-else style="text-align: center;">暂无此类别商品</div>
	  <loading v-if="isloading"></loading>
  </div>
</template>

<script>
import {api,geturl} from '../assets/js/common'
import loading from '../components/loading' 
export default {
  data () {
    return {
      id: 'top',
      page: 1,
      goodsdata: [],
      totalpage: '',
      apiurl: '',
      isloading: false,
      q: '',
      category: ''
    }
  },
  components: {
  		loading
  },
  props: ['message'],
  methods: {
  		getbefore: function () {
  			this.page--
  			var _data = "page="+this.page+"&pageSize=40"
  	  		this.getrequest(_data)
  	  		window.setTimeout(function(){
	    		window.scrollTo(0, 0);
	    }, 500);
  		},
  		submitdata: function () {
  			var _data = "page="+this.page+"&pageSize=40"
  	  		this.getrequest(_data)
  	  		window.setTimeout(function(){
	    		window.scrollTo(0, 0);
	    }, 500);
  		},
  	  getnext: function () {
  	  		this.page++
  	  		var _data = "page="+this.page+"&pageSize=40"
  	  		this.getrequest(_data)
  	  		window.setTimeout(function(){
	    		window.scrollTo(0, 0);
	    }, 500);
  	  },
    getrequest: function (val) {
    		if(this.q){
    			val += "&q=" + this.q
    		}
    		val = this.category ? val+'&type='+this.category : val
    		this.isloading = true
      var self = this
      this.$http.post(api + self.apiurl, val).then( (response) => {
      		this.isloading = false
      		var data = response.body
      		if(data.state == 1000){
	  				self.goodsdata = data.data.data
	  				self.totalpage = data.data.totalPage
      		}
      }, (response) => {
      		this.isloading = false
      })
    },
    getselect: function () {
    		var url
    		switch(this.message)
			{
			case 'TOP100':
			  url = '/index.php?r=userdata/top'
			  break;
			case '超值优惠':
			  url = '/index.php?r=userdata/czyh'
			  break;
		  case '热门精选':
			  url = '/index.php?r=userdata/rmjx'
			  break;
		  case '聚划算':
			  url = '/index.php?r=userdata/jhs'
			  break;
		  case '搜索':
			  url = '/index.php?r=userdata/search'
			  break;
		  case '分类':
			  url = '/index.php?r=userdata/type'
			  break;
			default:
			  url = '/index.php?r=userdata/top'
			}
			this.page = 1
			this.apiurl = url
			var _data = "page="+this.page+"&pageSize=40"
			this.getrequest(_data)
    }
  },
  watch: {
  		message: function (val) {
  			this.getselect()
  		}
  },
  created: function () {
  		this.q = geturl('q')? geturl('q') : ''
  		this.category = geturl('category')? geturl('category') : ''
    this.getselect()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodscontainer ul{overflow: hidden;}
.goodscontainer ul li{width:220px;float: left;margin-left: 38px;margin-top: 38px;border:1px solid #eee;padding-bottom: 10px;min-height: 322px;}
.goodscontent .goodsimg img{width: 100%;height: 220px;}
.goodscontent .title{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 14px;color:#666;padding:10px 6px;}
.goodscontent .price .yprice{font-size: 12px;text-decoration: line-through;color:#666}
.goodscontent .price .xprice{color:#f50;font-size: 20px;}
.goodscontent .price{padding:10px 6px}
.goodscontent .yhq{padding:0 6px;font-size: 14px;color:rgb(242,70,91)}
.page{text-align: center;padding: 30px 0;}
.page .next,.page .submit{border:none;display: inline-block;background: #f1f2f4;padding:6px 10px;margin: 0 10px;font-size: 14px;color:#666;cursor: pointer;}
.page input{outline: none;padding:6px;width: 40px;margin: 0 4px;}
</style>
