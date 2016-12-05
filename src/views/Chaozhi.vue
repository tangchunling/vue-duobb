<template>
  <div>
  		<Catelist></Catelist>
  		<Goods message = "超值优惠"></Goods>
  </div>
</template>

<script>
import Goods from './Goods'
import Catelist from './Catelist'

export default {
 	components: {
 		Goods, Catelist
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
