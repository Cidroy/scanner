<template>
  <div style="width:100vh;">
    <div class="page-bg"> <img src="static/images/13.jpg" alt=""> </div>
	<div v-if="$store.getters.ninjaLoggedin">
		<v-card class="pa-4">
			<v-card-text>Please wait ...</v-card-text>
		</v-card>
	</div>
    <div v-else style="display:flex; flex-flow:column;height: 100vh;justify-content: center;">
        <v-card class="elevation-15 rounded-border main">
          <div v-if="!logging">
            <v-tabs grow v-model="active" :centered="true">
              <v-tabs-bar class="indigo darken-2" dark>
                <v-tabs-item v-for="tab in tabs" :key="tab" :href="'#' + tab" ripple>
                  {{tab}}
                </v-tabs-item>
                <v-tabs-slider color="yellow"></v-tabs-slider>
              </v-tabs-bar>
              <v-tabs-items>
                <v-tabs-content v-for="tab in tabs" :key="tab" :id="tab">
                  <v-card flat v-if="tab=='Register'">
                    <v-card-text>
                      <v-flex xs12>
							<v-form v-model="f_register" ref="register">
								<v-text-field name="username" :rules="rules.username" label="username" v-model="username" single-line prepend-icon="account_circle"></v-text-field>
								<v-text-field name="email" :rules="rules.email" label="Email" v-model="email" single-line prepend-icon="email"></v-text-field>
							</v-form>
                      </v-flex>
                      <v-btn @click="register" block color="indigo" class="white--text">Register</v-btn>
                    </v-card-text>
                  </v-card>
				  <v-card flat v-else-if="tab=='Login'">
                    <v-card-text>
                      <v-flex xs12>
						<v-form v-model="f_login" ref="login">
							<v-text-field name="email" :rules="rules.email" label="Email" v-model="email" single-line prepend-icon="email"></v-text-field>
						</v-form>
					  </v-flex>
                      <v-btn @click="login" block color="indigo" class="white--text">Login</v-btn>
                    </v-card-text>
                  </v-card>
                </v-tabs-content>
              </v-tabs-items>
            </v-tabs>
          </div>
		  <v-layout align-center justify-center class="pa-4" v-else row wrap>
			  	<v-flex xs12>
					<v-progress-circular style="display:block; margin:auto;" indeterminate color="primary" :size="70"></v-progress-circular>
				</v-flex>
			  	<v-flex xs12 class="text-xs-center pt-3">
					  {{logging_message}}
				</v-flex>
		  </v-layout>
        </v-card>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'index',
		route: {
			name: 'Index',
			path: '/',
		},
		data: () => ({
			tabs: ['Login','Register'],
			active: null,
			username: '',
			email: '',
			f_login: false,
			f_register: false,
			logging: false,
			logging_message: 'Please Wait',
			rules: {
				name: [
					v => !!v || 'Name is required',
					v => (v && v.length <= 30) || 'Name must be less than 30 characters'
				],
				email: [
					v => !!v || 'E-mail is required',
					v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
				],
			}
		}),
		methods: {
			gotoScan(){ this.$router.push({name:'Scan'}) },
			login(){
				if(!this.$refs.login[0].validate()) return
				this.logging = true
				this.$store.dispatch('ninjaLogin',this.email)
					.then(data => this.gotoScan())
					.catch(error => {
						this.logging = false
						alert(error.message || "Something Went wrong!")
					})
			},
			register(){
				if(!this.$refs.register[0].validate()) return
				this.logging = true
				this.$store.dispatch('ninjaRegister',{
					name: this.username,
					email: this.email,
				})
					.then(data => this.gotoScan())
					.catch(error => {
						this.logging = false
						alert(error.message || "Something Went wrong!")
					})

			},
		},
		created () {
			if(this.$store.getters.ninjaLoggedin) this.gotoScan()
		}
	}
</script>