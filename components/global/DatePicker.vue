<template>
	<div class="flex flex-col">
		<flat-pickr
			class="form-control"
			v-model="date"
			:config="flatpickrConfig"
			placeholder="Select date"
		/>
		<button v-show="date" type="button" class="ml-auto text-gold" @click="date=null">Remove date</button>
	</div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
export default {
	props: ['value'],
	components: {flatPickr},
	computed: {
		date: {
			get () { return this.value },
			set (val) { this.$emit('input', val) }
		}
	},
	data: () => ({
		flatpickrConfig: {
			dateFormat: 'Z',
			enableTime: true,
			altFormat: 'M j, Y - H:i',
			altInput: true,
			time_24hr: true
		}
	})
}
</script>
