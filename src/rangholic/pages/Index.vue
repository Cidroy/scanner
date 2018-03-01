<template>
	<div>
		Hello world
		<v-btn color="primary" @click="scan" v-text="'scan bitches'"></v-btn>
		<router-link :to="{name:'Hello'}">Link</router-link>
	</div>
</template>

<script>
	export default {
		name: 'index',
		route: {
			name: 'Index',
			path: '/',
		},
		data: () => ({}),
		methods: {
			scan(){
				this.$app.barcodeScanner()
					.then(data => alert(JSON.stringify(data)))
					.catch(e => alert(e))
			}
		}
	}
</script>