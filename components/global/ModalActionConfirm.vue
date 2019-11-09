<template>
	<modal name="action-confirm" height="auto" :width="400" adaptive classes="modal">
		<p class="text-2xl mt-auto mb-4 text-center">{{msg}}</p>
		<slot/>
		<div class="flex mb-auto">
			<button type="button" class="btn btn-white ml-auto mr-4" @click="$modal.hide('action-confirm')">cancel</button>
			<button type="button" class="btn btn-gold mr-auto" @click="$emit('confirm')">{{yesText}}</button>
		</div>
	</modal>
</template>

<script>
export default {
	props: {
		msg: {type: String, required: true},
		yesText: {type: String, default: 'Confirm'}
	}
}
</script>
