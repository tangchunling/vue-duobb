<template>
  <div>
    <div class="detcontainer" v-if="detaildata">
    		<div class="serchresult">
    			<img src="../assets/img/left.png" alt="" style="float: left;"/><span>搜索结果</span><img src="../assets/img/right.png" alt="" style="float: right;"/>
    		</div>
    		<div style="width: 1000px;margin: auto;">
    			<div class="detleft">
	    			<img v-bind:src="detaildata.pictUrl" alt="" />
	    		</div>
	    		<div class="detright">
	    			<p class="title" v-html="detaildata.title"></p>
	    			<div class="detdec">
	    				<div class="list">
	    					<label>原价</label><span class="yprice">¥{{detaildata.reservePrice}}</span>
	    				</div>
	    				<div class="list">
	    					<label>促销价</label><span class="cxprice">¥<strong>{{detaildata.zkPrice}}</strong></span>
	    				</div>
	    				<!--<div class="list">
	    					<label>销量</label><span>{{detaildata.taobaoToken.biz30day}}</span>
	    				</div>-->
	    			</div>
	    			<div class="yf">
	    				<label>运费</label><span>免邮费</span>
	    			</div>
	    			<div class="detbtn">
	    				<a v-if="detaildata.list.length" v-bind:href="detaildata.list[0].url" target="_blank">领券购买</a>
	    				<a v-else v-bind:href="url" target="_blank">领券购买</a>
	    				
	    			</div>
	    		</div>
    		</div>
    </div>
    <div class="yhq" v-if="detaildata">
    		<div class="serchresult">
    			<img src="../assets/img/left.png" alt="" style="float: left;"/>
    			<span v-if="detaildata.list.length">为你找到{{detaildata.list.length}}张优惠券</span>
    			<span v-else>暂无隐藏优惠券</span>
    			<img src="../assets/img/right.png" alt="" style="float: right;"/>
    		</div>
    		<ul v-if="detaildata.list.length">
    			<li v-for="item in detaildata.list">
    				<div class="yhqcontainer">
    					<div class="yhqleft">
    						<span class="yhqmoney">¥<strong>{{item.ticketName.split('元')[0]}}</strong></span>
    						<span class="yhqman"><strong>优惠券</strong><label>{{item.titckExplain}}</label></span>
    						<div class="yhqdate">{{item.titckDate}}</div>
    					</div>
    					<div class="yhqright">
    						<a v-bind:href="item.url" target="_blank">领券<br>购买</a>
    					</div>
    				</div>
    			</li>
    		</ul>
    </div>
  </div>
</template>

<script>
import {api,geturl} from '../assets/js/common'

export default {
  data () {
    return {
      url: '',
      detaildata: ''
    }
  },
  methods: {
  		getdata: function () {
  			var _data = 'q='+escape(this.url)
  			var self = this
  			this.$http.get('http://weixinticket.duobb.cn/index.php?r=api/getbyurl&'+_data).then((response) => {
  				var data = response.body
  				if(data.state == 1000){
  					self.detaildata = data.data.list ? data.data : ''
  				}
  			}, (response) => {
  				
  			})
  		}
  },
  created: function () {
  		this.url = geturl('url')
  		this.getdata()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serchresult{margin:20px 0;text-align: center;}
.serchresult span{margin: 0 14px;color: #666;}
.detleft{width: 400px;float: left;text-align: center;}
.detleft img{width: 90%;}
.detcontainer{overflow: hidden;}
.detdec{background: url(../assets/img/back.png) no-repeat;background-size: 100% 100%;}
.detright{width: 600px;float: left;}
.detright .title{margin:10px 0;color: #444;}
.detright .detdec{padding:10px;margin: 20px 0;}
.detdec .list,.yf{margin: 10px 0;color: #444;}
.yf{padding:0 10px}
.detdec .list label,.yf label{display: inline-block;width: 100px;}
.yf span{display: inline-block;padding: 4px 6px;border: 1px solid rgb(240,46,71);color: rgb(240,46,71);border-radius: 4px;}
.detdec .list .cxprice{font-size: 18px;color: #F40;}
.detdec .list .cxprice strong{font-size: 24px;font-weight: 600;}
.detdec .list .yprice{text-decoration: line-through;color:#666}
.detbtn a{display: inline-block;background: rgb(240,46,71);color:#fff;width: 200px;padding:10px 0;text-align: center;border-radius: 4px;margin-top: 80px;
    margin-left: 80px;}
.yhq{margin-top: 60px;}
.yhq ul li{width: 400px;float: left;color:#fff;margin:20px}
.yhq ul{overflow: hidden;width: 900px;margin: auto;}
.yhqcontainer .yhqleft{width:280px;float: left;height:100%;background: rgb(240,120,116);padding: 20px 0;padding-left: 30px;position: relative;}
.yhqcontainer .yhqleft:after{position: absolute;content: "";width: 30px;height: 30px;background: #fff;border-radius: 100%;left:-15px;top:30px}
.yhqcontainer .yhqright{width:80px;float: left;height:100%;background: url(../assets/img/yhq.jpg);background-size: 100% 100%;text-align: center;font-size: 18px;
    line-height: 22px;
    padding: 26px 0;
    padding-top: 27px;
}
.yhqcontainer{overflow: hidden;}
.yhqcontainer .yhqleft .yhqman{display: inline-block;margin-left: 6px;}
.yhqcontainer .yhqleft .yhqman strong{font-size: 18px;}
.yhqcontainer .yhqleft .yhqman label{display: block;font-size: 14px;margin-top: 4px;}
.yhqcontainer .yhqleft .yhqmoney strong{font-size: 34px;}
.yhqleft .yhqdate{font-size: 12px;color:#eee;margin-top: 6px;}
</style>
