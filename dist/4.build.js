webpackJsonp([4],{118:function(e,t,r){"use strict";function i(e){r(141)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(128),a=r(143),n=r(8),d=i,f=n(o.a,a.a,!1,d,"data-v-40545d8f",null);t.default=f.exports},128:function(e,t,r){"use strict";var i=r(10),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e};t.a={computed:o({},Object(i.e)({currentYear:function(e){return e.detail.currentYear},obj:function(e){return e.detail.obj}}),Object(i.c)({years:"detail/years",list:"detail/list"})),methods:o({},Object(i.b)({getDetailList:"detail/getDetailList"}),Object(i.d)({changeYear:"detail/changeYear"}),{getImgID:function(e){this.$router.push({path:"/img",query:{id:e}})}}),mounted:function(){this.getDetailList(this.$route.query.id)},updated:function(){console.log("years...",this.years,this.currentYear)},beforeRouteEnter:function(e,t,r){r(),console.log(1)},beforeRouteLeave:function(e,t,r){console.log(3),r()},beforeDestroy:function(){console.log(4)}}},141:function(e,t,r){var i=r(142);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(9)("1a19ef9e",i,!0,{})},142:function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,"li[data-v-40545d8f]{list-style:none}li span[data-v-40545d8f]{padding-right:.46rem}.year[data-v-40545d8f]{border-top:.15rem solid #f4f4f4;padding:0 .3rem;font-size:.32rem;height:.77rem;line-height:.77rem;background:#fff}.year .active[data-v-40545d8f]{color:#3aacff}ul>p[data-v-40545d8f]{padding:0 .2rem;height:.5rem;line-height:.5rem;font-size:.26rem;color:#999;background:#f4f4f4}ul>li[data-v-40545d8f]{padding:0 .2rem;border-bottom:.18rem solid #f4f4f4;overflow:hidden}ul>li p[data-v-40545d8f]:first-child{padding:.26rem 0 .18rem;font-size:.3rem;line-height:1;color:#3d3d3d}ul>li p[data-v-40545d8f]:nth-child(2){color:#bdbdbd;font-size:.26rem}ul>li p[data-v-40545d8f]:nth-child(3){text-align:right;padding-bottom:.1rem;font-size:.24rem;color:#818181}ul>li p:nth-child(3) span[data-v-40545d8f]:nth-child(2){font-size:.3rem;color:#ff2336;margin-left:.1rem}ul>li[data-v-40545d8f]:last-child{border-bottom:0}.img[data-v-40545d8f]{position:relative;height:3.29rem;overflow:hidden}.img img[data-v-40545d8f]{width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);position:absolute;border:none}.img span[data-v-40545d8f]{position:absolute;bottom:.3rem;right:.3rem;color:#fff;padding:1px .1rem;border-radius:.2rem;background:rgba(0,0,0,.6);font-size:.24rem}.info[data-v-40545d8f]{padding:.36rem .2rem .3rem;background:#fff;position:relative}.info p[data-v-40545d8f]{max-width:3.4rem;overflow:hidden;text-overflow:ellipsis}.info p[data-v-40545d8f]:first-child{font-size:.36rem;color:red;font-weight:500}.info p:first-child span[data-v-40545d8f]{font-size:.32rem;font-weight:400}.info p[data-v-40545d8f]:nth-child(2){font-size:.26rem;color:silver}.info .action[data-v-40545d8f]{padding-top:.2rem;-webkit-box-pack:justify;justify-content:space-between;width:50%;position:absolute;right:.1rem;top:.22rem}.flex-column[data-v-40545d8f],.flex-row[data-v-40545d8f]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.flex-row[data-v-40545d8f]{-webkit-box-orient:horizontal;flex-direction:row}.info .action button[data-v-40545d8f]{border-radius:.1rem;font-size:.32rem;height:.7rem;width:3.45rem;border:none;box-sizing:border-box;background:#00afff;color:#fff}",""])},143:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.obj.CoverPhoto,alt:""},on:{click:function(t){e.getImgID(e.obj.SerialID)}}}),e._v(" "),r("span",[e._v(e._s(e.obj.pic_group_count)+"张照片")])]),e._v(" "),r("div",{staticClass:"info"},[r("p",[e._v(e._s(e.obj.dealer_price)+" "),r("span")]),e._v(" "),r("p",[e._v("指导价 "+e._s(e.obj.official_refer_price))]),e._v(" "),e._m(0)]),e._v(" "),r("li",{staticClass:"year"},e._l(e.years,function(t,i){return r("span",{key:i,class:e.currentYear==t?"active":"",on:{click:function(r){e.changeYear(t)}}},[e._v(e._s(t))])})),e._v(" "),r("section",e._l(e.list,function(t,i){return r("ul",{key:i},[r("p",[e._v(e._s(i))]),e._v(" "),e._l(t,function(t,i){return r("li",{key:i},[r("p",[e._v(e._s(t.market_attribute.year+"款 "+t.car_name))]),e._v(" "),r("p",[e._v(e._s(t.max_power+"马力"+t.gear_num+"档"+t.trans_type))]),e._v(" "),r("p",[r("span",[e._v(e._s("指导价"+t.market_attribute.dealer_price_min))]),e._v(" "),r("span",[e._v(e._s(t.market_attribute.official_refer_price))])])])})],2)}))])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"action active flex-row"},[r("button",[e._v("询问底价")])])}],a={render:i,staticRenderFns:o};t.a=a}});
//# sourceMappingURL=4.build.js.map