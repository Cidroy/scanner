<template>
	<v-app dark>
		<transition name="slide-y-transition">
			<!--div class="z-1 elevation-3">
				<v-toolbar>
					<v-spacer></v-spacer>
					<label style="font-size:x-large;padding:5px;">App</label>
					<v-spacer></v-spacer>
				</v-toolbar>
			</div-->
		</transition>
		<main >
			<transition name="slide-x-transition">
				<v-dialog v-if="false" :value="$root.router_loading" fullscreen transition="fadeIn" :overlay="false" >
						<v-card>
							<v-container fill-height>
								<v-layout> 
								Loading ...
								</v-layout>
							</v-container>
						</v-card>
				</v-dialog>
			</transition>
			<transition name="slide-x-transition">
				<router-view></router-view>
			</transition>
		</main>
	</v-app>
</template>

<script>
	export default {
		data: () => ({}),
		created () {
			this.$store.dispatch('ninjaRefresh')
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
