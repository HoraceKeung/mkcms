<template>
	<section>
		<div class="row">
			<div v-for="(m,index) in charSnapshot" :key="m.id" class="col">
				<mk-card @click="view(m, index)">
					<p class="font-bold text-lg leading-tight mb-2">{{m.title}}</p>
					<p class="text-xs opacity-50">{{m.description}}</p>
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
		fireDb.ref(`characterModel/${this.character.id}/media`).once('value').then(snapshot => {
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
