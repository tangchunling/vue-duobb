<template>
  <div class="container">
	  		<div class="category">
	  			<ul v-if="categorydata">
	  				<span>分类：</span>
	  				<li v-for="(item,index) in categorydata" @click="gocategory(index)" v-bind:class="{active:category==index}">{{item}}</li>
	  			</ul>
	  		</div>
	  	</div>
</template>

<script>
import {api} from '../assets/js/common'
export default {
  data () {
    return {
      categorydata: ''
    }
  },
  methods: {
  		gocategory: function (val) {
  			this.$router.push('/category?category='+val)
			this.$router.go()
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
    this.getcategory()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
