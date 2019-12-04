<template>
	<section>
		<div class="form-group">
			<label for="search-input">Search</label>
			<input id="search-input" class="form-control" v-model.trim="searchWord">
		</div>
		<div v-for="(c,index) in charSnapshot" :key="c.title" v-show="c.isShow" class="mb-4">
			<mk-card @click="view(c, index)">
				<p class="font-bold text-lg leading-tight mb-2">{{c.title}}</p>
				<p class="text-xs opacity-50 mb-2">{{c.description}}</p>
				<p class="text-xs text-gold">{{c.input.replace(/\|/g, '')}}</p>
			</mk-card>
		</div>
		<div class="mk-box w-full h-full min-h-40 flex cursor-pointer mb-4" @click="add">
			<p class="text-6xl m-auto">+</p>
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
			return this.$store.state.charSnapshot ? this.$store.state.charSnapshot.map(x => {
				return {...x,
					isShow: !this.searchWord || Object.values(x).flat().some(v => v.toLowerCase().includes(this.searchWord.toLowerCase()))
				}
			}): []
		}
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
		character: null,
		searchWord: null
	})
}
</script>
