<template>
	<section>
		<div class="mb-6 flex">
			<n-link v-for="x in ['media','combo']" :key="x" :to="`${$route.path}/${x}`" class="mr-2">
				<mk-button :text="x" icon="arrow"/>
			</n-link>
		</div>
		<form v-if="character&&characterModel">
			<div class="form-group">
				<label for="name-input">Name</label>
				<input id="name-input" class="form-control" v-model="character.name">
			</div>
			<div class="form-group">
				<label for="header-input">Header</label>
				<input id="header-input" class="form-control" v-model="character.header">
			</div>
			<div class="form-group">
				<label for="thumb-input">Thumbnail</label>
				<input id="thumb-input" class="form-control" v-model="character.thumb">
			</div>
			<div class="border-t pt-4">
				<div class="form-group">
					<label for="bio-input">Bio</label>
					<textarea id="bio-input" rows="4" class="form-control" v-model="characterModel.info.bio"/>
				</div>
				<div class="mb-6">
					<input type="checkbox" id="updateBioTimestamp-checkbox" v-model="updateTimestamp.bio">
					<label for="updateBioTimestamp-checkbox">Update Bio Timestamp</label>
				</div>
				<div class="form-group">
					<label>Overview</label>
					<text-editor :text.sync="characterModel.info.overview"/>
				</div>
				<div class="mb-6">
					<input type="checkbox" id="updateOverviewTimestamp-checkbox" v-model="updateTimestamp.overview">
					<label for="updateOverviewTimestamp-checkbox">Update Overview Timestamp</label>
				</div>
				<div class="form-group">
					<label for="twitter-input">Twitter</label>
					<input id="twitter-input" class="form-control" v-model="characterModel.twitter">
				</div>
				<div class="form-group">
					<label for="tym-input">TYM</label>
					<input id="tym-input" class="form-control" v-model="characterModel.tym">
				</div>
				<div class="mb-3 flex">
					<p class="my-auto mr-2">Variations</p>
					<div class="mk-box h-10 w-10 flex cursor-pointer" @click="addVariation">
						<p class="m-auto text-2xl">+</p>
					</div>
				</div>
				<div v-for="(v,index) in characterModel.variations" :key="`variation${index}`" class="flex justify-between">
					<div class="w-1/5 mr-2">
						<div class="form-group">
							<label :for="`variation${index}Id-input`">ID</label>
							<input :id="`variation${index}Id-input`" class="form-control" v-model="characterModel.variations[index].id">
						</div>
					</div>
					<div class="flex-1 mr-2">
						<div class="form-group">
							<label :for="`variation${index}name-input`">Name</label>
							<input :id="`variation${index}name-input`" class="form-control" v-model="characterModel.variations[index].name">
						</div>
					</div>
					<div class="mk-box w-10 h-10 mb-6 mt-auto flex cursor-pointer" @click="removeVariation(index)"><p class="m-auto text-xl">X</p></div>
				</div>
				<div class="mb-6">
					<input type="checkbox" id="updateVariationsTimestamp-checkbox" v-model="updateTimestamp.variations">
					<label for="updateVariationsTimestamp-checkbox">Update Variations Timestamp</label>
				</div>
			</div>
			<button class="btn btn-gold" type="submit" @click.prevent="save">Save</button>
		</form>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import TextEditor from '~/components/TextEditor'
export default {
	layout: 'form',
	components: {TextEditor},
	async created () {
		this.character = JSON.parse(JSON.stringify(this.$store.state.itemInView))
		this.characterModel = await fireDb.ref(`characterModel/${this.character.id}`).once('value').then(r => r.val())
	},
	computed: {
		updateCharacterTimestamp () {
			return Object.values(this.updateTimestamp).includes(true)
		}
	},
	methods: {
		addVariation () {
			this.characterModel.variations.push({id: null, name: null})
		},
		removeVariation (index) {
			this.characterModel.variations.splice(index, 1)
		},
		saveCharacter () {
			if (this.updateCharacterTimestamp) this.character.lastUpdated = new Date().toISOString()
			fireDb.ref(`characters/${this.$route.params.i}`).set(this.character, err => {
				alert(err || 'Character saved successfully!')
			})
		},
		saveCharacterModel () {
			if (this.updateTimestamp.bio) this.characterModel.info.bioLastUpdated = new Date().toISOString()
			if (this.updateTimestamp.overview) this.characterModel.info.overviewLastUpdated = new Date().toISOString()
			if (this.updateTimestamp.variations) this.characterModel.variationsLastUpdated = new Date().toISOString()
			fireDb.ref(`characterModel/${this.character.id}`).set(this.characterModel, err => {
				alert(err || 'Character model saved successfully!')
			})
		},
		save () {
			this.saveCharacter()
			this.saveCharacterModel()
		}
	},
	data: () => ({
		character: null,
		characterModel: null,
		updateTimestamp: {
			bio: false,
			overview: false,
			variations: false
		}
	})
}
</script>
