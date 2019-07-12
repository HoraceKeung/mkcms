<template>
	<section>
		<form>
			<text-editor class="mb-6" :text.sync="body"/>
			<button class="btn btn-gold" type="submit" @click.prevent="save" :disabled="!body">Save</button>
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
		dataModel: null
	})
}
</script>
