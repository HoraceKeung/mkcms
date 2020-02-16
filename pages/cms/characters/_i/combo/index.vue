<template>
	<section>
		<div class="form-group">
			<label for="search-input">Search</label>
			<input id="search-input" class="form-control" v-model.trim="searchWord">
		</div>
		<div class="mk-box flex cursor-pointer mb-4" @click="add">
			<p class="text-3xl m-auto">+</p>
		</div>
		<div v-for="v in comboByVariation" :key="v.variationId">
			<p class="mb-1">{{formatName(v.variationId)}}</p>
			<div class="row">
				<div v-for="c in v.combos" :key="c.title" class="col">
					<mk-card @click="view(c, c.index)">
						<p class="font-bold text-lg leading-tight mb-2">{{c.title}}</p>
						<p class="text-xs opacity-50 mb-2">{{c.description}}</p>
						<p v-if="c.input" class="text-xs text-gold">{{c.input.replace(/\|/g, '')}}</p>
					</mk-card>
				</div>
			</div>
		</div>
		<div class="mk-box flex cursor-pointer mb-4" @click="add">
			<p class="text-3xl m-auto">+</p>
		</div>
		<button class="btn btn-gold" type="button" @click="copyAllRawInput">Copy all raw input</button>
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
		this.characterModel = await fireDb.ref(`characterModel/${this.character.id}`).once('value').then(r => r.val())
		fireDb.ref(`combos/${this.character.id}`).once('value').then(snapshot => {
			this.$store.commit('setCharSnapshot', snapshot.val())
		})
	},
	computed: {
		charSnapshot () { return this.$store.state.charSnapshot || [] },
		comboByVariation () {
			return this.charSnapshot.map((x, index) => {
				return {...x, index: index.toString()}
			}).reduce((arr, x) => {
				if (!this.searchWord || Object.values(x).flat().some(v => v.toLowerCase().includes(this.searchWord.toLowerCase()))) {
					const found = arr.find(a => a.variationId === x.variationId)
					if (found) {
						found.combos.push(x)
					} else {
						arr.push({
							variationId: x.variationId,
							combos: [x]
						})
					}
				}
				return arr
			}, []).sort((a, b) => {
				return a.variationId < b.variationId ? -1 : (a.variationId > b.variationId ? 1 : 0)
			})
		}
	},
	methods: {
		formatName (variationId) {
			if (variationId) {
				if (this.characterModel) {
					const foundVariation = this.characterModel.variations.find(v => v.id === variationId)
					return foundVariation && foundVariation.name ? foundVariation.name + ` (${variationId})` : variationId
				} else { return variationId }
			} else { return 'Universal' }
		},
		view (item, index) {
			let clone = JSON.parse(JSON.stringify(item))
			delete clone.index
			this.$store.commit('setCharItemInView', clone)
			this.$router.push(`${this.$route.path}/${index}`)
		},
		add () {
			this.$store.commit('setCharItemInView', null)
			this.$router.push(`${this.$route.path}/new`)
		},
		copyAllRawInput () {
			this.copyToClipboard(this.charSnapshot.map(x => {
				return x.input.replace(/\|/g, '')
			}).join('\n'))
			alert('Copied to clipboard')
		},
		copyToClipboard (str) {
			let el = document.createElement('textarea')
			el.value = str
			el.setAttribute('readonly', '')
			el.style = {position: 'absolute', left: '-9999px'}
			document.body.appendChild(el)
			if (window.navigator.userAgent.match(/ipad|ipod|iphone/i)) {
				el.contentEditable = true
				let range = document.createRange()
				range.selectNodeContents(el)
				let s = window.getSelection()
				s.removeAllRanges()
				s.addRange(range)
				el.setSelectionRange(0, 999999)
				el.contentEditable = false
			} else { el.select() }
			document.execCommand('copy')
			document.body.removeChild(el)
		}
	},
	data: () => ({
		character: null,
		characterModel: null,
		searchWord: null
	})
}
</script>
