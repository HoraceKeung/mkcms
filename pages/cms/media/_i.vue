<template>
	<section>
		<media-form v-if="body" :media="body" @save="onSave"/>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import Vue from 'vue'
import formMixin from '~/assets/js/formMixin'
import mediaMixin from '~/assets/js/mediaMixin'
export default {
	mixins: [formMixin, mediaMixin],
	methods: {
		onSave ({body, updateTimestamp}) {
			this.body = body
			this.updateTimestamp = updateTimestamp
			this.save()
		}
	}
}
</script>
