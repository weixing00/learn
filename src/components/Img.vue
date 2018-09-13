<template>
    
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default {
		computed:{
			...mapState({
				imgList:state=>state.img.imgList
			})
		},
		methods:{
			...mapActions({
				getimgID:'img/getimgID'
			})
		},
		mounted(){
			console.log(this.imgList)
			this.getimgID(this.$route.query.id)
		}
	}
</script>

<style>
	
</style>
