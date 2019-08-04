<template>
	<section>
		<form v-if="body">
			<div class="form-group">
				<label for="title-input">Title</label>
				<input id="title-input" class="form-control" v-model="body.title">
			</div>
			<div class="form-group">
				<label for="description-input">Description</label>
				<input id="description-input" class="form-control" v-model="body.description">
			</div>
			<div class="form-group">
				<label for="damage-input">Damage</label>
				<input id="damage-input" class="form-control" v-model="body.damage">
			</div>
			<div class="form-group">
				<label for="input-input">Input</label>
				<input id="input-input" class="form-control mb-2" v-model="body.input">
				<div class="flex flex-wrap -mx-1">
					<div v-for="b in comboBtns" :key="b" class="px-1 mb-2">
						<div class="p-1 border-2 border-coal-900 h-14 min-w-14 flex cursor-pointer" @click="addInputFromComboBtn(b)">
							<div class="m-auto"><img class="h-10" :src="`/img/combo/${b}.png`"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label for="variationId-input">Variation ID</label>
				<select id="variationId-input" class="form-control" v-model="body.variationId">
					<option :value="null">Universal</option>
					<option v-for="v in charVariations" :key="v.id" :value="v.id">{{v.id}} ({{v.name}})</option>
				</select>
			</div>
			<div class="form-group">
				<label for="tags-input">Tags</label>
				<vue-tags-input id="tags-input" class="form-control" v-model="tag" :tags="body.tags.map(text=>({text}))" @tags-changed="newTags => body.tags = newTags.map(t=>t.text)"/>
			</div>
			<div class="mb-6">
				<input type="checkbox" id="updateTimestamp-checkbox" v-model="updateTimestamp">
				<label for="updateTimestamp-checkbox">Update Timestamp</label>
			</div>
			<button class="btn btn-gold" type="submit" @click.prevent="save">Save</button>
		</form>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import uuid from 'uuid/v4'
import VueTagsInput from '@johmun/vue-tags-input'
export default {
	layout: 'form',
	components: {VueTagsInput},
	async created () {
		this.body = JSON.parse(JSON.stringify(this.$store.state.charItemInView || this.dataModel))
		this.charVariations = await fireDb.ref(`characterModel/${this.charId}/variations`).once('value').then(r => r.val())
	},
	computed: {
		charId () { return this.$store.state.itemInView.id },
		charSnapshot () { return this.$store.state.charSnapshot },
		charComboPath () { return `combos/${this.charId}` }
	},
	methods: {
		addInputFromComboBtn (btn) {
			const key = (() => {
				switch (btn) {
				case 'plus': return '+'
				case 'comma': return ','
				default: return btn
				}
			})()
			if (this.body.input) {
				this.body.input += `|${key}`
			} else {
				this.body.input = key
			}
		},
		save () {
			let clone = JSON.parse(JSON.stringify(this.charSnapshot))
			let index = this.$route.params.comboIndex
			if (this.updateTimestamp) {
				this.body.lastUpdated = new Date().toISOString()
				this.updateCharTimestamp(this.body.lastUpdated)
			}
			if (index === 'new') {
				this.body.id = uuid()
				this.body.characterId = this.charId
				if (clone) {
					clone.unshift(this.body)
				} else {
					clone = [this.body]
				}
			} else {
				clone[index] = this.body
			}
			fireDb.ref(this.charComboPath).set(clone, err => {
				if (index === 'new' && !err) this.$router.go('-1')
				alert(err || 'Data saved successfully!')
			})
		},
		del () {
			let clone = JSON.parse(JSON.stringify(this.charSnapshot))
			clone.splice(this.$route.params.comboIndex, 1)
			fireDb.ref(this.charComboPath).set(clone).then(() => {
				this.$router.go('-1')
				alert('Data deleted successfully!')
			}).catch(error => {
				console.log("Remove failed: " + error.message)
			})
		},
		updateCharTimestamp (time) {
			let char = JSON.parse(JSON.stringify(this.$store.state.itemInView))
			char.lastUpdated = time
			fireDb.ref(`characters/${this.$route.params.i}`).set(char, err => {
				if (err) alert(err)
			})
		}
	},
	data: () => ({
		dataModel: {
			title: null,
			description: null,
			characterId: null,
			damage: null,
			input: null,
			variationId: null,
			tags: []
		},
		body: null,
		updateTimestamp: false,
		charVariations: [],
		tag: '',
		comboBtns: [
			'b',
			'u',
			'd',
			'f',
			'1',
			'2',
			'3',
			'4',
			'rt',
			'rb',
			'lt',
			'lb',
			'jip',
			'jik',
			'njp',
			'njk',
			'dc',
			'amp',
			'hold',
			'kb',
			'fb',
			'plus',
			'comma',
			'xx'
		]
	})
}
</script>