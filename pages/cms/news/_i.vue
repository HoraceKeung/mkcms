<template>
	<section>
		<form v-if="body">
			<div class="form-group">
				<label for="header-input">Header</label>
				<input id="header-input" class="form-control" v-model="body.header">
			</div>
			<div class="form-group">
				<label for="title-input">Title</label>
				<input id="title-input" class="form-control" v-model="body.title">
			</div>
			<div class="form-group">
				<label for="description-input">Description</label>
				<input id="description-input" class="form-control" v-model="body.description">
			</div>
			<div class="form-group">
				<label>Content</label>
				<text-editor :text.sync="body.content"/>
			</div>
			<div class="form-group">
				<label>Publish date</label>
				<date-picker v-model="body.publishDate"/>
			</div>
			<div class="mb-6">
				<input type="checkbox" id="archived-checkbox" v-model="body.archived">
				<label for="archived-checkbox">Archived</label>
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
import TextEditor from '~/components/TextEditor'
import formMixin from '~/assets/js/formMixin'
export default {
	mixins: [formMixin],
	components: {TextEditor},
	data: () => ({
		dataModel: {
			content: null,
			description: null,
			header: null,
			title: null,
			publishDate: null,
			archived: false
		}
	})
}
</script>
