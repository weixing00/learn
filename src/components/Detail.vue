<template>
    <div>
        <div class="img">
            <img :src="obj.CoverPhoto" alt="" @click="getImgID(obj.SerialID)">
            <span>{{obj.pic_group_count}}张照片</span>
        </div>
        <div class="info">
            <p>{{obj.dealer_price}} <span></span></p>
            <p>指导价 {{obj.official_refer_price}}</p>
            <div class="action active flex-row">
                <button >询问底价</button>
            </div>
        </div>
        <li class="year">
            <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
        </li>
        <section>
             <ul v-for="(item, index) in list" :key="index">
                <p>{{index}}</p>
                <li v-for="(value, key) in item" :key="key">
                    <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                    <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                    <p>
                        <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                        <span>{{value.market_attribute.official_refer_price}}</span>
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                currentYear: state=>state.detail.currentYear,
                obj:state=>state.detail.obj
            }),
            ...mapGetters({
                years: 'detail/years',
                list: 'detail/list'
            })
        },
        methods: {
            ...mapActions({
                getDetailList: 'detail/getDetailList',
            }),
            ...mapMutations({
                changeYear: 'detail/changeYear'
            }),
            getImgID(id){
                this.$router.push({path:'/img',query:{id}})
            }
        },
        mounted(){
            this.getDetailList(this.$route.query.id);
        },
        updated(){
            console.log('years...', this.years, this.currentYear);
        },
        beforeRouteEnter (to, from, next) {
            next();
            console.log(1);
        },
        beforeRouteLeave (to, from, next) {
            console.log(3);
            next();
        },
        beforeDestroy() {
            console.log(4);
        },
    }
</script>

<style lang="scss" scoped>
    li{
        list-style: none;
        span{
            padding-right: .46rem;
        }
    }
    .year{
        border-top: .15rem solid #f4f4f4;
        padding: 0 .3rem;
        font-size: .32rem;
        height: .77rem;
        line-height: .77rem;
        background: #fff;
    }
    .year .active{
        color: #3aacff;
    }
    ul>p{
        padding: 0 .2rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .26rem;
        color: #999;
        background: #f4f4f4;
    }
    ul>li{
        padding: 0 .2rem;
        border-bottom: .18rem solid #f4f4f4;
        overflow: hidden;
        p:nth-child(1){
            padding: .26rem 0 .18rem;
            font-size: .3rem;
            line-height: 1;
            color: #3d3d3d;
        }
        p:nth-child(2){
            color: #bdbdbd;
            font-size: .26rem;
        }
        p:nth-child(3){
            text-align: right;
            padding-bottom: .1rem;
            font-size: .24rem;
            color: #818181;
            span:nth-child(2){
                font-size: .3rem;
                color: #ff2336;
                margin-left: .1rem
            }
        }
    }
    ul>li:last-child{
       border-bottom: 0;
    }

    .img{
            position: relative;
            height: 3.29rem;
            overflow: hidden;
            img{
                    width: 100%;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    position: absolute;
                    border: none;
            }
            span{
                    position: absolute;
                    bottom: .3rem;
                    right: .3rem;
                    color: #fff;
                    padding: 1px .1rem;
                    border-radius: .2rem;
                    background: rgba(0,0,0,.6);
                    font-size: .24rem;
            }
    }
    .info{
            padding: .36rem .2rem .3rem;
            background: #fff;
            position: relative;
            p{
                max-width: 3.4rem;
                overflow: hidden;
                text-overflow: ellipsis;
                &:nth-child(1){
                       font-size: .36rem;
                        color: red;
                        font-weight: 500; 
                        span{
                                font-size: .32rem;
                                font-weight: 400;
                        }
                }
                &:nth-child(2){
                        font-size: .26rem;
                        color: silver;
                }

            }
    }
    .info .action {
        padding-top: .2rem;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 50%;
        position: absolute;
        right: .1rem;
        top: .22rem;
}
.flex-column, .flex-row {
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
}
.flex-row {
    -webkit-box-orient: horizontal;
    flex-direction: row;
}

.info .action button {
    border-radius: .1rem;
    font-size: .32rem;
    height: .7rem;
    width: 3.45rem;
    border: none;
    box-sizing: border-box;
    background: #00afff;
    color: #fff;
}
</style>

