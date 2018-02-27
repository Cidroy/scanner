<template>
	<div>
		Hello world
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
		data: () => ({})
	}
</script>