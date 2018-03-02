<template>
	<div style="width:100vh;">
		<div class="page-bg"> <img src="static/images/13.jpg" alt=""> </div>
		<div v-if="!$store.getters.ninjaLoggedin">
			<v-card class="pa-4">
				<v-card-text>Please wait ...</v-card-text>
			</v-card>
		</div>
		<div v-else>
			<v-btn @click="scan" large block style="margin-top:10vh" color="orange" class="white--text"> <v-icon>gradient</v-icon> Scan</v-btn>
			<v-btn @click="logout" large block style="margin-top:10vh" color="indigo" class="white--text"> <v-icon>exit_to_app</v-icon> Logout</v-btn>
			<v-card>
				<v-list subheader style="margin-top:140px;">
					<v-subheader>Scanned ({{ $store.getters.ninjaScans.length }}) :</v-subheader>
					<v-list-tile avatar v-for="item in $store.getters.ninjaScans" :key="item.ticket">
						<v-list-tile-avatar> <img src="/static/images/ninja.png"> </v-list-tile-avatar>
						<v-list-tile-content> <v-list-tile-title v-html="item.client"></v-list-tile-title></v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-card>
		</div>

		<v-bottom-sheet v-model="scanl.processing">
			<v-card>
				<v-card-title align-center class="headline indigo white--text"> 
					<v-spacer></v-spacer> Processing...<v-spacer></v-spacer>
				</v-card-title>
				<v-layout align-center justify-center class="pt-4">
					<v-progress-circular indeterminate :size="70" :width="3" color="indigo"></v-progress-circular>
				</v-layout>
			</v-card>
		</v-bottom-sheet>

		<v-bottom-sheet v-model="scanl.success" persistent >
		<v-card>
			<v-card-title class="headline green white--text">
				<v-spacer></v-spacer> <v-spacer></v-spacer> VERIFIED<v-spacer></v-spacer> <v-icon x-large color="white">check</v-icon>
			</v-card-title>
			<v-card-text>
				<div class="info--text">Ticket ID: </div>
				<div style="font-family:San serif;font-weight:bold">Name: {{ response.user?response.user.name:'' }}</div>
				<div style="font-family: ;font-weight:bold">Email: {{ response.user?response.user.email:'' }}</div>
			</v-card-text>
			<v-card-actions class="pt-5">
				<v-btn style="margin-left:0; width:100%;"  color="info" @click.native="done">Done</v-btn>
			</v-card-actions>
		</v-card>
		</v-bottom-sheet> 


		<v-bottom-sheet v-model="scanl.error" persistent >
			<v-card>
				<v-card-title class="headline red white--text">
					<v-spacer></v-spacer> <v-spacer></v-spacer> DENIED<v-spacer></v-spacer> <v-icon x-large color="white">error</v-icon>
				</v-card-title>
				<v-card-title class="grey darken-2 white--text text-xs-center pa-1">The Ticket has been used</v-card-title> <v-card-text>
					<div class="info--text">Ticket ID: </div>
					<div style="font-family:San serif;font-weight:bold">Name: {{ response.user?response.user.name:'' }}</div>
					<div style="font-family: ;font-weight:bold">Email: {{ response.user?response.user.email:'' }}</div>
					<div style="font-family: ;font-weight:bold">Time: <timeago :since="response.verifier?response.verifier.time.date:false"></timeago> </div>
					<div style="font-family: ;font-weight:bold">By: {{ response.verifier?response.verifier.name:'' }} </div>
				</v-card-text>
				<v-card-actions class="pt-5">
					<v-btn style="margin-left:0; width:100%;"  color="info" @click.native="done">Done</v-btn>
				</v-card-actions>
			</v-card>

		</v-bottom-sheet>


	</div>
</template>

<script>
	export default {
		route: {
			name: 'Scan',
			path: '/scan'
		},
		data(){
			return {
				scanl: { 
					processing: false,
					error:false,
					success:false,
				},
				response: {}
			}
		},
		methods: {
			gotoIndex(){ this.$router.push({name:'Index'}) },
			async scan(){
				try {
					var ticket	 = await this.$app.barcodeScanner()
					console.log(ticket)
					ticket = ticket.text
					this.scanl.processing = true
					var response = await this.$store.dispatch('ninjaScan',ticket)
					this.scanl.processing = false
					response.verifier.time.date = Date.parse(response.verifier.time.date)
					this.response = response
					if(response['scan-type']==="denied") this.scanl.error = true
					else if(response['scan-type']==="verified") this.scanl.success = true
				} catch (error) {
					this.scanl.processing = false
					alert(error.message)
				}
			},
			async logout(){
				await this.$store.dispatch('ninjaLogout')
				this.gotoIndex()
			},
			done(){
				this.scanl.processing = false
				this.scanl.error = false,
				this.scanl.success = false,
				this.response = {}
				this.$store.dispatch('ninjaRefresh')
			},
		},
		created () {
			if(!this.$store.getters.ninjaLoggedin) this.gotoIndex()
		}
	}
</script>

<style>
  .page-bg {
    position: absolute;
    top: 0px;
    left: 0px;
    max-height: 100vh;
    max-width: 100vw;
    min-height: 100vh;
    min-width: 100vw;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .page-bg>img {
    height: 100vh;
    display: block;
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
  }

</style>
