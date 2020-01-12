<template>
	<section>
		<div class="form-group">
			<label for="search-input">Search</label>
			<input id="search-input" class="form-control" v-model.trim="searchWord">
		</div>
		<div class="mk-box flex cursor-pointer mb-4" @click="add">
			<p class="text-3xl m-auto">+</p>
		</div>
		<div v-for="(v, name) in charSnapshot" :key="name">
			<p class="mb-1">{{name}}</p>
			<div class="row">
				<div v-for="c in v" :key="c.title" class="col">
					<mk-card @click="view(c, c.index)">
						<p class="font-bold text-lg leading-tight mb-2">{{c.title}}</p>
						<p class="text-xs opacity-50 mb-2">{{c.description}}</p>
						<p v-if="c.input" class="text-xs text-gold">{{c.input.replace(/\|/g, '')}}</p>
					</mk-card>
				</div>
			</div>
		</div>
		<div class="mk-box flex cursor-pointer" @click="add">
			<p class="text-3xl m-auto">+</p>
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
		charSnapshot () {
			return this.$store.state.charSnapshot ? this.$store.state.charSnapshot.map((x, index) => {
				return {...x, index: index.toString()}
			}).reduce((obj, x) => {
				if (!this.searchWord || Object.values(x).flat().some(v => v.toLowerCase().includes(this.searchWord.toLowerCase()))) {
					if (obj[x.variationId]) {
						obj[x.variationId].push(x)
					} else {
						obj[x.variationId] = [x]
					}
				}
				return obj
			}, {}) : []
		}
	},
	methods: {
		view (item, index) {
			let clone = JSON.parse(JSON.stringify(item))
			delete clone.index
			this.$store.commit('setCharItemInView', clone)
			this.$router.push(`${this.$route.path}/${index}`)
		},
		add () {
			this.$store.commit('setCharItemInView', null)
			this.$router.push(`${this.$route.path}/new`)
		}
	},
	data: () => ({
		character: null,
		searchWord: null
	})
}
</script>
