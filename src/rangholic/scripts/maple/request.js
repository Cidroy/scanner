import request from "es6-request";
import details from "./details"

const server: Object = details.server
let credentials: Object = {}

export default {
	get: async (name: string, action: string, data: Object = {}): Promise<any> => new Promise((resolve,reject) => {
		request.get(server.ajax).query({
			"maple-ajax": name,
			"maple-ajax-action": action,
			ajax: true,
			...credentials,
			...data,
		}).then(([body,res]) => {
			res["body"] = body;
			res["response"] = JSON.parse(body);
			resolve(res)
		}).catch(([err])=>{ reject(err) })
	}),
	post: async (name: string, action: string, data: Object = {}): Promise<any> => new Promise((resolve,reject) => {
		request.post(server.ajax).sendForm({
			"maple-ajax": name,
			"maple-ajax-action": action,
			ajax: true,
			...credentials,
			...data,
		}).then(([body,res]) => {
			res["body"] = body;
			res["response"] = JSON.parse(body);
			resolve(res)
		}).catch(([err])=>{ reject(err) })
	}),
	setCredentials: (data: Object): Object => credentials = data
}