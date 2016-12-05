<template>
  <div>
  		<Goods message = "搜索"></Goods>
  </div>
</template>

<script>
import Goods from './Goods'
import {geturl} from '../assets/js/common'

export default {
	data: function () {
		return {
			q: ''
		}
	},
 	components: {
 		Goods
 	},
 	created: function () {
 		this.q = this.name
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
