<template>
  <div class="goodscontainer">
  		{{id}}
  </div>
</template>

<script>
import {api} from '../assets/js/common'
export default {
  data () {
    return {
      id: "top"
    }
  },
  methods: {
  		
  },
  watch: {
  		
  },
  created: function () {
    console.log(this.$route.params.id)
    this.id = this.$route.params.id
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
