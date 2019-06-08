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
				<label for="content-input">Content</label>
				<textarea id="content-input" rows="4" class="form-control" v-model="body.content"/>
			</div>
			<button class="btn btn-gold" type="submit" @click.prevent="save">Save</button>
		</form>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import formMixin from '~/assets/js/formMixin'
export default {
	mixins: [formMixin],
	data: () => ({
		dataModel: {
			content: null,
			description: null,
			header: null,
			title: null
		}
	})
}
</script>
