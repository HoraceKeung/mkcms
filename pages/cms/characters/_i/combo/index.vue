<template>
	<section>
		<div class="row">
			<div v-for="(c,index) in charSnapshot" :key="c.title" class="col">
				<mk-card @click="view(c, index)">
					<p class="font-bold text-lg leading-tight mb-2">{{c.title}}</p>
					<p class="text-xs opacity-50">{{c.description}}</p>
				</mk-card>
			</div>
			<div class="col">
				<div class="mk-box w-full h-full min-h-40 flex cursor-pointer" @click="add">
					<p class="text-6xl m-auto">+</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
export default {
	layout: 'form',
	async created () {
		this.$store.commit('setCharSnapshot', null)
		this.$store.commit('setCharItemInView', null)
		this.character = JSON.parse(JSON.stringify(this.$store.state.itemInView))
		fireDb.ref(`combos/${this.character.id}`).once('value').then(snapshot => {
			this.$store.commit('setCharSnapshot', snapshot.val())
		})
	},
	computed: {
		charSnapshot () { return this.$store.state.charSnapshot }
	},
	methods: {
		view (item, index) {
			this.$store.commit('setCharItemInView', item)
			this.$router.push(`${this.$route.path}/${index}`)
		},
		add () {
			this.$store.commit('setCharItemInView', null)
			this.$router.push(`${this.$route.path}/new`)
		}
	},
	data: () => ({
		character: null
	})
}
</script>
