import request from '../scripts/maple/request'

export default {
	state: {
		user: {},
		scans: {},
		loggedin: false,
		ninjaId	: false,
	},
	mutations: {
		doLogin: (state: any,payload: any): any	=>	{
			state.loggedin = true
			state.user = payload
			state.ninjaId = payload.id
		},
		doLogout: (state: any): any => {
			state.loggedin = false
			state.user = {}
			state.ninjaId = false
		},
		setScans: (state: any,payload: any): any => { state.scans = payload },
		clearScans: (state: any, payload: any): any => { state.scans = {} }
	},
	getters: {
		ninjaLoggedin: state => state.loggedin,
		ninjaScans	 : state =>	state.scans,
		ninjaUser	 : state =>	state.user,
		ninjaId		 : state =>	state.ninjaId,
	},
	actions: {
		ninjaRefresh: ({commit,state}): Promise<any> => new Promise((resolve,reject)=>{
			if(state.loggedin){
				request.post("eventninjaz/rangholic", "login", { email: state.user.email })
					.then(data => {
						data = data.response
						if(data.type==="success"){
							var user: Object = {}
							user = { id		: data.id, name	: data.name, email	: data.email, }
							var scans: Array<Object> = data.scans|| []
							commit('doLogin',user)
							commit('setScans',scans)
							resolve(data)
						} else resolve(data)
					})
					.catch(error => { resolve(true) })
			} else resolve(true)
		}),
		ninjaScan: ({commit,state},ticket: string): Promise<any> => new Promise((resolve,reject)=>{
			request.post("eventninjaz/rangholic","verify",{ticket,scanner: state.ninjaId})
				.then(data => {
					data = data.response
					if(data.type==="success") resolve(data)
					else reject(data)
				})
				.catch(error => reject({
					type: "error",
					message: "something went wrong",
				}))
		}),
		ninjaRegister: ({commit,state},credentials: Object): Promise<any> => new Promise((resolve,reject)=>{
			request.post("eventninjaz/rangholic", "register", { email: credentials.email, name: credentials.name })
				.then(data => {
					data = data.response
					if(data.type==="success"){
						var user: Object = {}
						user = {
							id		: data.id,
							name	: credentials.name,
							email	: data.email,
						}
						var scans: Array<Object> = data.scans || []
						commit('doLogin',user)
						commit('setScans',scans)
						resolve(data)
					} else reject(data)
				})
				.catch(error => reject({
					type: "error",
					message: "something went wrong",
				}))			
		}) ,
		ninjaLogin: ({commit,state},email): Promise<any> => new Promise( (resolve,reject) => {
			request.post("eventninjaz/rangholic", "login", { email })
				.then(data => {
					data = data.response
					if(data.type==="success"){
						var user: Object = {}
						user = {
							id		: data.id,
							name	: data.name,
							email	: data.email,
						}
						var scans: Array<Object> = data.scans|| []
						commit('doLogin',user)
						commit('setScans',scans)
						resolve(data)
					} else reject(data)
				})
				.catch(error => reject({
					type: "error",
					message: "something went wrong",
				}))
		}),
		ninjaLogout: ({commit}): Promise<any> => new Promise((resolve,reject) => {
			commit('doLogout')
			commit('clearScans')
			resolve(true)
		})
	}
}