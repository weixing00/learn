<template>
    <div class="car-img">
    	<div class="tit flex-row">
    		<p @click="jumpColor(id)"><span>颜色</span></p>
    		<p @click="jumpType"><span><em>车款</em></span></p>
    	</div>
    	<ul class="img-default">
    		<li v-for="(item,index) in imgList" :key="index">
    			<span v-for="(val,key) in item.list" :key="key">
    				<img :src="val" alt="">
	    			<div v-if="key==0">
	    				<p>{{item.Name}}</p>
	    				<p>{{item.Count}}张</p>
	    			</div>
    			</span>
    		</li>
    	</ul>
    </div>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default {
		computed:{
			...mapState({
				imgList:state=>state.img.imgList,
				id:state=>state.img.id
			})
		},
		methods:{
			...mapActions({
				getimgID:'img/getimgID'
			}),
			jumpColor(){
				this.$router.push('/color')
			},
			jumpType(){
				this.$router.push('/type')
			}
		},
		mounted(){
			this.getimgID(this.$route.query.id)
		},
		updated(){
			console.log('****************',this.imgList)
			console.log(this.id)
		}
	}
</script>

<style scoped lang="scss">
	.car-img{
		width: 100%;
		height: 100%;
		background: #f4f4f4;
	}
	.tit{
		position: fixed;
	    background: #fff;
	    top: 0;
	    width: 100%;
	    height: .8rem;
	    -webkit-box-align: center;
	    align-items: center;
	    box-sizing: border-box;
	    z-index: 99;
	    p{
    		-webkit-box-flex: 1;
		    flex: 1;
		    text-align: center;
		    box-sizing: border-box;
		    color: #454545;
		    display: inline-block;
		    &:nth-child(2){
		        border-left: 1px solid #ececec;
		    }
		    span{
		    	max-width: 2.6rem;
			    display: inline-block;
			    vertical-align: middle;
			    line-height: 1.25;
			    font-size: .28rem;
			    em{
			    	text-overflow: ellipsis;
				    -webkit-line-clamp: 2;
				    display: -webkit-box;
				    overflow: hidden;
				    -webkit-box-orient: vertical;
			    }
		    }
    	}
	}
	.tit p:after{
		    content: "";
		    display: inline-block;
		    padding-top: .16rem;
		    padding-right: .16rem;
		    border-top: 2px solid #ccc;
		    border-right: 2px solid #ccc;
		    -webkit-transform: rotate(135deg);
		    transform: rotate(135deg);
		    margin-left: .2rem;
		    vertical-align: 5%;
	}
	.flex-row{
		display: -webkit-box;
	    display: flex;
	    -webkit-box-direction: normal;
	    -webkit-box-orient: horizontal;
    	flex-direction: row;
	}
	.img-default{
		overflow: hidden;
	    position: absolute;
	    background: #fff;
	    top: .98rem;
	    bottom: 0;
	    overflow-y: scroll;
	    -webkit-overflow-scrolling: touch;
	    border-bottom: .4rem solid #f4f4f4;
	    li{
	    	width: 100%;
	    	span{
	    		position: relative;
			    float: left;
			    margin-right: .06rem;
			    margin-bottom: .06rem;
			    width: 2.44rem;
			    height: 2.44rem;
			    padding: 0;
			    img{
			    	width: 100%;
				    height: 100%;
				    background-size: cover;
			    }
			    div{
			    	position: absolute;
				    top: 0;
				    width: 100%;
				    height: 100%;
				    text-align: center;
				    background: rgba(56,90,130,.5);
				    p{
				    	color: #fff;
    					display: block;
    					&:nth-child(1){
    						font-size: .28rem;
    						margin-top: .8rem;
    					}
    					&:nth-child(2){
    						font-size: .26rem;
    					}
				    }
			    }
	    	}
	    }

	}
</style>
