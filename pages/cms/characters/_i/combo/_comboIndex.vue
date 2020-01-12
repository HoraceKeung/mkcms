<template>
	<section>
		<div class="flex mb-6">
			<button v-if="$route.params.comboIndex>0" type="button" class="btn-sm btn-white mr-4" @click="navCombo(-1)">Prev combo</button>
			<button v-if="$route.params.comboIndex<charSnapshot.length-1" type="button" class="btn-sm btn-white" @click="navCombo(1)">Next combo</button>
		</div>
		<p class="mb-4">ID: {{body.id}}</p>
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
				<label for="gif-input">Gif</label>
				<input id="gif-input" class="form-control" v-model="body.gif">
			</div>
			<div class="form-group">
				<label for="damage-input">Damage</label>
				<input id="damage-input" class="form-control" v-model="body.damage">
			</div>
			<div class="form-group">
				<div class="flex">
					<label for="input-input">Input</label>
					<div class="ml-4">
						<input type="checkbox" id="viewRawComboInput-checkbox" v-model="viewRawComboInput">
						<label for="viewRawComboInput-checkbox">View raw</label>
					</div>
				</div>
				<input v-show="viewRawComboInput" id="input-input" class="form-control mb-2" v-model="body.input">
				<div v-show="!viewRawComboInput" class="flex flex-wrap -mx-1 form-control mb-2">
					<div v-for="(c,index) in comboInputArr" :key="index" class="px-1 mb-1">
						<div v-if="c" class="m-auto"><img class="h-10" :src="`/img/combo/${c}.png`"></div>
					</div>
				</div>
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
				<label for="category-input">Category</label>
				<select id="category-input" class="form-control" v-model="body.category">
					<option :value="null"></option>
					<option v-for="c in availableCategories" :key="c" :value="c">{{c}}</option>
				</select>
			</div>
			<div class="form-group">
				<label>Tags</label>
				<tag-select :options="availableTags" v-model="body.tags"/>
			</div>
			<div class="form-group">
				<label>Publish date</label>
				<date-picker v-model="body.publishDate"/>
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
import TagSelect from '~/components/TagSelect'
export default {
	layout: 'form',
	components: {TagSelect},
	async created () {
		this.body = JSON.parse(JSON.stringify(this.$store.state.charItemInView || this.dataModel))
		this.charVariations = await fireDb.ref(`characterModel/${this.charId}/variations`).once('value').then(r => r.val())
	},
	computed: {
		charId () { return this.$store.state.itemInView.id },
		charSnapshot () { return this.$store.state.charSnapshot || [] },
		charComboPath () { return `combos/${this.charId}` },
		comboInputArr () {
			return this.body.input ? this.body.input.split('|').map(x => {
				switch (x) {
				case '+': return 'plus'
				case ',': return 'comma'
				default: return x
				}
			}) : []
		}
	},
	methods: {
		navCombo (num) {
			const targetIndex = parseInt(this.$route.params.comboIndex) + num
			this.$store.commit('setCharItemInView', this.charSnapshot[targetIndex])
			let segments = this.$route.path.split('/')
			segments.pop()
			this.$router.push(`${segments.join('/')}/${targetIndex}`)
		},
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
				clone.unshift(this.body)
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
			category: null,
			tags: [],
			gif: null,
			publishDate: null
		},
		body: null,
		updateTimestamp: false,
		charVariations: [],
		viewRawComboInput: true,
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
		],
		availableCategories: [
			'Midscreen',
			'Corner'
		],
		availableTags: [
			'Beginner',
			'Advanced',
			'Krushing Blow',
			'Fatal Blow',
			'D2',
			'Anti Air',
			'U2',
			'JIK',
			'JIP',
			'Side Switch',
			'Buff',
			'Max',
			'Setup',
			'Restand',
			'Meterless',
			'1 Bar',
			'2 Bars'
		]
	})
}
</script>
