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
				<label>Content</label>
				<text-editor :text.sync="body.content"/>
			</div>
			<div v-else-if="body.type==='youtube'" class="form-group">
				<label for="videoId-input">Video ID</label>
				<input id="videoId-input" class="form-control" v-model="body.videoId">
			</div>
			<div v-else-if="body.type==='web'" class="form-group">
				<label for="link-input">Link</label>
				<input id="link-input" class="form-control" v-model="body.link">
			</div>
			<div class="mb-6">
				<input type="checkbox" id="ios-checkbox" v-model="body.ios">
				<label for="ios-checkbox">iOS</label>
			</div>
			<div class="mb-6">
				<input type="checkbox" id="android-checkbox" v-model="body.android">
				<label for="android-checkbox">Android</label>
			</div>
			<div class="mb-6">
				<input type="checkbox" id="updateTimestamp-checkbox" v-model="updateTimestamp">
				<label for="updateTimestamp-checkbox">Update Timestamp</label>
			</div>
			<button class="btn btn-gold" type="submit" @click.prevent="beforeSave">Save</button>
		</form>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import TextEditor from '~/components/TextEditor'
import formMixin from '~/assets/js/formMixin'
export default {
	mixins: [formMixin],
	components: {TextEditor},
	methods: {
		beforeSave () {
			if (this.body.type !== 'content') delete this.body.content
			if (this.body.type !== 'youtube') delete this.body.videoId
			if (this.body.type !== 'web') delete this.body.link
			this.save()
		}
	},
	data: () => ({
		dataModel: {
			background: null,
			title: null,
			type: 'content',
			content: null,
			videoId: null,
			link: null,
			ios: true,
			android: true
		}
	})
}
</script>
