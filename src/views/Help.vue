<template>
  <div class="imgcontainer">
  		<div class="num">
  			 <img src="http://oe3slowqt.bkt.clouddn.com/yhq1.png" alt="" />
  		</div>
    <img src="http://oe3slowqt.bkt.clouddn.com/yhq1.jpg" alt="" class="numcontent"/>
    <div class="num">
    		<img src="http://oe3slowqt.bkt.clouddn.com/yhq2.png" alt=""/>
    </div>
    <img src="http://oe3slowqt.bkt.clouddn.com/yhq2.jpg" alt="" class="numcontent"/>
    <div class="num">
    		<img src="http://oe3slowqt.bkt.clouddn.com/yhq3.png" alt=""/>
    </div>  
    <img src="http://oe3slowqt.bkt.clouddn.com/yhq3.jpg" alt="" class="numcontent"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgcontainer{text-align: center;box-shadow: 0 8px 10px rgba(0,0,0,.14);padding:56px 0}
img.numcontent{width: 754px;}
.num{margin-left: 142px;text-align: left;}
</style>
