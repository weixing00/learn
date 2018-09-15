import {getImgList} from '../../api'

let state = {
	imgList:[],
	id:0
}

let mutations = {
	initState(state,payload){
		payload.forEach((item,index)=>{
			let arr = []
			let obj = {
				Id:item.Id,
				Name:item.Name,
				Count:item.Count,
				list:[]
			}
			item.List.forEach((val,key)=>{
				let resule = val.Url.replace(/\{0\}/g,val.LowSize)
				arr.push(resule)			
			})
			obj.list = arr
			state.imgList.push(obj)
		})
	}
}

let actions = {
	getimgID({commit},payload){
		// console.log(payload)
		getImgList(payload).then(body=>{
			//console.log('...........................',body)
			if(body.code == 1){
				commit('initState',body.data)
			}else{
				alert(body.msg)
			}			
		})
		state.id = payload
	}
}

export default {
	namespaced:true,
	state,
	mutations,
	actions
}