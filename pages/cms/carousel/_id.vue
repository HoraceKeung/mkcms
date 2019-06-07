<template>
	<section>
		<form v-if="body">
			<div class="form-group">
				<label for="background-input">Background</label>
				<input id="background-input" class="form-control" v-model="body.background">
			</div>
			<div class="form-group">
				<label for="title-input">Title</label>
				<input id="title-input" class="form-control" v-model="body.title">
			</div>
			<div class="form-group">
				<label for="type-input">Type</label>
				<select id="name-input" class="form-control" v-model="body.type">
					<option v-for="t in ['content', 'youtube', 'web']" :key="t" :value="t">{{t}}</option>
				</select>
			</div>
			<div v-if="body.type==='content'" class="form-group">
				<label for="content-input">Content</label>
				<textarea id="content-input" rows="4" class="form-control" v-model="body.content"/>
			</div>
			<div v-else-if="body.type==='youtube'" class="form-group">
				<label for="videoId-input">Video ID</label>
				<input id="videoId-input" class="form-control" v-model="body.videoId">
			</div>
			<div v-else-if="body.type==='web'" class="form-group">
				<label for="link-input">Link</label>
				<input id="link-input" class="form-control" v-model="body.link">
			</div>
			<button class="btn btn-gold" type="submit" @click.prevent="save">Save</button>
		</form>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
export default {
	layout: 'form',
	created () {
		this.body = this.$store.state.itemInView ? JSON.parse(JSON.stringify(this.$store.state.itemInView)) : {
			background: null,
			title: null,
			type: 'content',
			content: null,
			videoId: null,
			link: null
		}
	},
	methods: {
		save () {
			if (this.body.type !== 'content') delete this.body.content
			if (this.body.type !== 'youtube') delete this.body.videoId
			if (this.body.type !== 'web') delete this.body.link
			let ref = this.$route.params.id
			if (this.$route.params.id === 'new') {
				ref = fireDb.ref().child('carousel').push().key
				this.body.id = ref
			}
			fireDb.ref(`carousel/${ref}`).set(this.body, err => {
				alert(err || 'Data saved successfully!')
			})
		},
		del () {
			fireDb.ref(`carousel/${this.$route.params.id}`).remove().then(() => {
				this.$router.push('/cms/carousel')
				alert('Data deleted successfully!')
			}).catch(error => {
				console.log("Remove failed: " + error.message)
			})
		}
	},
	data: () => ({
		body: null
	})
}
</script>
