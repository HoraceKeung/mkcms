<template>
	<section>
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
				<div class="form-group">
					<label>Overview</label>
					<text-editor :text.sync="characterModel.info.overview"/>
				</div>
				<div class="form-group">
					<label for="twitter-input">Twitter</label>
					<input id="twitter-input" class="form-control" v-model="characterModel.twitter">
				</div>
				<div class="form-group">
					<label for="tym-input">TYM</label>
					<input id="tym-input" class="form-control" v-model="characterModel.tym">
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
		this.characterModelStringifyBeforeChange = JSON.stringify(this.characterModel)
	},
	methods: {
		saveCharacter () {
			fireDb.ref(`characters/${this.$route.params.i}`).set(this.character, err => {
				alert(err || 'Character saved successfully!')
			})
		},
		saveCharacterModel () {
			fireDb.ref(`characterModel/${this.character.id}`).set(this.characterModel, err => {
				alert(err || 'Character model saved successfully!')
			})
		},
		save () {
			if (JSON.stringify(this.character) !== JSON.stringify(this.$store.state.itemInView)) this.saveCharacter()
			if (JSON.stringify(this.characterModel) !== this.characterModelStringifyBeforeChange) this.saveCharacterModel()
		}
	},
	data: () => ({
		character: null,
		characterModel: null,
		characterModelStringifyBeforeChange: null,
		updateTimestamp: {
			character: false
		}
	})
}
</script>
